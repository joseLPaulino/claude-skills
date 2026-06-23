#!/usr/bin/env node

/**
 * HCLTech Slide Generator using the OpenAI Images API.
 *
 * Generates HCLTech-branded slide visuals from detailed prompts using an
 * OpenAI image generation model. The default model is gpt-image-2.
 *
 * Usage:
 *   node generate-slide.js "<prompt>" "<output-filename.png>" \
 *     [--out-dir <dir>] [--format png|jpeg|auto] [--size <WxH>] [--quality low|medium|high|auto]
 */

const OpenAI = require("openai");
const fsSync = require("fs");
const fs = fsSync.promises;
const path = require("path");

function loadDotEnv() {
  const envPath = path.join(__dirname, ".env");
  if (!fsSync.existsSync(envPath)) return;

  const content = fsSync.readFileSync(envPath, "utf8");
  for (const rawLine of content.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const equalsIndex = line.indexOf("=");
    if (equalsIndex <= 0) continue;

    const key = line.slice(0, equalsIndex).trim();
    let value = line.slice(equalsIndex + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadDotEnv();

const API_KEY = process.env.OPENAI_API_KEY;

if (!API_KEY) {
  console.error("Error: OPENAI_API_KEY environment variable not set");
  console.error('Please set it with: export OPENAI_API_KEY="your-api-key"');
  process.exit(1);
}

const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('Usage: node generate-slide.js "<prompt>" "<output-filename.png>" [--out-dir <dir>] [--format png|jpeg|auto] [--size <WxH>] [--quality low|medium|high|auto]');
  console.error('Example: node generate-slide.js "HCLTech slide showing global presence" "global-presence.png"');
  process.exit(1);
}

const prompt = args[0];
const requestedOutput = args[1];
const options = parseOptions(args.slice(2));
const generationTimeoutMs = Number(process.env.GENERATE_SLIDE_TIMEOUT_MS || 180000);

function parseOptions(optionArgs) {
  const parsed = {
    outDir: process.cwd(),
    format: "auto",
    size: process.env.OPENAI_IMAGE_SIZE || "1536x864",
    quality: process.env.OPENAI_IMAGE_QUALITY || "medium",
    model: process.env.OPENAI_IMAGE_MODEL || "gpt-image-2",
    debug: false,
  };

  for (let i = 0; i < optionArgs.length; i++) {
    const arg = optionArgs[i];

    if (arg === "--out-dir") {
      parsed.outDir = optionArgs[++i];
    } else if (arg === "--format") {
      parsed.format = optionArgs[++i];
    } else if (arg === "--size") {
      parsed.size = optionArgs[++i];
    } else if (arg === "--quality") {
      parsed.quality = optionArgs[++i];
    } else if (arg === "--model") {
      parsed.model = optionArgs[++i];
    } else if (arg === "--debug") {
      parsed.debug = true;
    } else {
      console.error(`Error: Unknown option "${arg}"`);
      process.exit(1);
    }
  }

  if (!["png", "jpeg", "auto"].includes(parsed.format)) {
    console.error("Error: --format must be png, jpeg, or auto");
    process.exit(1);
  }

  if (!["low", "medium", "high", "auto"].includes(parsed.quality)) {
    console.error("Error: --quality must be low, medium, high, or auto");
    process.exit(1);
  }

  return parsed;
}

function resolveOutputPath(filename, outDir) {
  const basePath = path.isAbsolute(filename)
    ? filename
    : path.resolve(path.isAbsolute(outDir) ? outDir : path.resolve(process.cwd(), outDir), filename);

  const ext = path.extname(basePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg"].includes(ext)) {
    console.error("Error: Output filename must end with .png, .jpg, or .jpeg");
    process.exit(1);
  }

  return basePath;
}

function extensionForMime(mimeType) {
  if (mimeType === "image/png") return ".png";
  if (mimeType === "image/jpeg" || mimeType === "image/jpg") return ".jpg";
  return null;
}

function mimeFromMagic(buffer) {
  if (buffer.length >= 8 && buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    return "image/png";
  }
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return "image/jpeg";
  }
  return "unknown";
}

function dimensionsFromPng(buffer) {
  if (buffer.length < 24) return null;
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function dimensionsFromJpeg(buffer) {
  let offset = 2;

  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) return null;

    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);

    if (length < 2) return null;

    if ((marker >= 0xc0 && marker <= 0xc3) || (marker >= 0xc5 && marker <= 0xc7) || (marker >= 0xc9 && marker <= 0xcb) || (marker >= 0xcd && marker <= 0xcf)) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    offset += 2 + length;
  }

  return null;
}

function imageDimensions(buffer, mimeType) {
  if (mimeType === "image/png") return dimensionsFromPng(buffer);
  if (mimeType === "image/jpeg") return dimensionsFromJpeg(buffer);
  return null;
}

function withExtension(outputPath, extension) {
  return path.join(path.dirname(outputPath), `${path.basename(outputPath, path.extname(outputPath))}${extension}`);
}

function ensureRequestedFormat(outputPath, returnedMimeType, requestedFormat) {
  const returnedExtension = extensionForMime(returnedMimeType);
  if (!returnedExtension) return outputPath;

  if (requestedFormat !== "auto") {
    const expectedMime = requestedFormat === "png" ? "image/png" : "image/jpeg";
    if (returnedMimeType !== expectedMime) {
      throw new Error(`Model returned ${returnedMimeType}, but --format ${requestedFormat} was requested. Refusing to write a misleading file extension.`);
    }
  }

  const currentExt = path.extname(outputPath).toLowerCase();
  const normalizedCurrentExt = currentExt === ".jpeg" ? ".jpg" : currentExt;

  if (normalizedCurrentExt !== returnedExtension) {
    const adjustedPath = withExtension(outputPath, returnedExtension);
    console.warn(`Warning: requested ${currentExt || "no extension"} output, but model returned ${returnedMimeType}; saving as ${adjustedPath}`);
    return adjustedPath;
  }

  return outputPath;
}

function validateImage(buffer, reportedMimeType) {
  if (!buffer || buffer.length === 0) {
    throw new Error("Generated image is empty");
  }

  const magicMimeType = mimeFromMagic(buffer);
  const normalizedReported = reportedMimeType && reportedMimeType !== "unknown" ? reportedMimeType : null;
  const mimeType = normalizedReported || magicMimeType;

  if (normalizedReported && mimeType !== magicMimeType && magicMimeType !== "unknown") {
    throw new Error(`Model reported ${mimeType}, but image bytes look like ${magicMimeType}`);
  }

  const dimensions = imageDimensions(buffer, magicMimeType);
  if (!dimensions) {
    throw new Error(`Could not read image dimensions for ${magicMimeType}`);
  }

  const ratio = dimensions.width / dimensions.height;
  const isLandscape = dimensions.width > dimensions.height;
  const isCloseTo16x9 = Math.abs(ratio - (16 / 9)) <= 0.16;

  if (!isLandscape || !isCloseTo16x9) {
    throw new Error(`Generated image dimensions are ${dimensions.width}x${dimensions.height}; expected landscape close to 16:9`);
  }

  return {
    mimeType: magicMimeType,
    width: dimensions.width,
    height: dimensions.height,
    ratio,
  };
}

function isTransient(error) {
  const message = String(error && error.message ? error.message : error).toLowerCase();
  return message.includes("timeout") || message.includes("rate") || message.includes("quota") || message.includes("temporar") || message.includes("unavailable") || message.includes("network") || message.includes("fetch") || message.includes("429") || message.includes("500") || message.includes("503");
}

async function withTimeout(promise, timeoutMs) {
  let timeoutId;
  const timeout = new Promise((_, reject) => {
    timeoutId = setTimeout(() => reject(new Error(`Generation timed out after ${timeoutMs}ms`)), timeoutMs);
  });

  try {
    return await Promise.race([promise, timeout]);
  } finally {
    clearTimeout(timeoutId);
  }
}

async function generateImageWithRetry(client, request) {
  try {
    return await withTimeout(client.images.generate(request), generationTimeoutMs);
  } catch (error) {
    if (!isTransient(error)) throw error;

    console.warn(`Transient generation error: ${error.message}`);
    console.warn("Retrying once...");
    return await withTimeout(client.images.generate(request), generationTimeoutMs);
  }
}

async function generateSlide() {
  try {
    console.log("Initializing OpenAI client...");
    const openai = new OpenAI({ apiKey: API_KEY });

    console.log(`Loading image model: ${options.model}...`);
    console.log("Generating HCLTech slide from prompt...");
    console.log("Prompt length:", prompt.length, "characters");
    console.log("Requested size:", options.size);
    console.log("Requested quality:", options.quality);

    const request = {
      model: options.model,
      prompt,
      size: options.size,
      n: 1,
    };

    if (options.quality !== "auto") {
      request.quality = options.quality;
    }

    const result = await generateImageWithRetry(openai, request);
    const item = result && result.data && result.data[0];

    if (!item || !item.b64_json) {
      console.error("Error: No base64 image data found in API response");
      if (options.debug) {
        console.error("Response structure:", JSON.stringify(result, null, 2));
      } else {
        console.error("Run with --debug to print the raw API response.");
      }
      process.exit(1);
    }

    const imageData = Buffer.from(item.b64_json, "base64");
    const metadata = validateImage(imageData, "unknown");
    const requestedPath = resolveOutputPath(requestedOutput, options.outDir);
    const finalOutputPath = ensureRequestedFormat(requestedPath, metadata.mimeType, options.format);

    await fs.mkdir(path.dirname(finalOutputPath), { recursive: true });
    await fs.writeFile(finalOutputPath, imageData);

    console.log(`Model: ${options.model}`);
    console.log(`Saved MIME type: ${metadata.mimeType}`);
    console.log(`Dimensions: ${metadata.width}x${metadata.height}`);
    console.log(`✓ HCLTech slide successfully saved to: ${finalOutputPath}`);
    console.log("Review:");
    console.log("- File validation: pass");
    console.log(`- Format: ${metadata.mimeType}`);
    console.log(`- Dimensions: ${metadata.width}x${metadata.height}, landscape close to 16:9`);
  } catch (error) {
    console.error("Error generating HCLTech slide:", error.message);

    if (error.message.includes("API key") || error.message.includes("401")) {
      console.error("\nPlease check that your OPENAI_API_KEY is valid");
    } else if (error.message.includes("model")) {
      console.error(`\nModel "${options.model}" may not be available to this API key`);
    } else if (error.message.includes("size")) {
      console.error("\nThe requested image size may not be supported. Try --size 1536x1024 or set OPENAI_IMAGE_SIZE=1536x1024.");
    } else if (error.message.includes("quota") || error.message.includes("limit") || error.message.includes("429")) {
      console.error("\nAPI quota or rate limit exceeded");
    }

    console.error("\nFull error:", error);
    process.exit(1);
  }
}

generateSlide();
