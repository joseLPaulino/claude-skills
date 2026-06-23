---
name: hcltech-slide-artist-openai
description: >
  Use this skill when the user needs HCLTech-branded slide images generated as raster
  visuals (PNG/JPEG). Triggers include: "generate a slide image", "HCLTech slide visual",
  "visual polish deck", "raster slide", "executive slide image", "slide from this brief",
  "OpenAI image slide", or any request for polished PNG/JPEG slide visuals using OpenAI
  image generation. Also invoked by hcltech-rom-package-builder when building the visual
  polish deck layer. Does NOT produce editable .pptx files or SVG output — use the pptx
  skill for those.
---

# HCLTech Slide Artist — OpenAI

Transforms visual briefs into HCLTech-branded presentation slide images using the OpenAI
Images API via a bundled Node.js generator script.

---

## Instructions

When the user provides a visual brief, slide content, deck notes, a PPTX outline, or a
corporate presentation prompt:

- If the user asks **only for a prompt**, produce the prompt and do not run image generation.
- If the user asks for a **finished slide visual or image**, generate and review the image.

Use this skill for single-slide raster visuals or concept mockups. Use the **pptx** skill
when the user needs editable `.pptx` output. Use SVG or HTML rendering when exact text
fidelity matters more than generative visual style.

---

## Step 1: Analyze the Input

Extract:

- **Slide Title** — the exact headline to appear at the top left
- **Core Concept** — the central visual idea (e.g., "54 Countries", "Revenue Growth")
- **Key Data/Elements** — numbers or items to visualize

---

## Step 2: Synthesize the Image Prompt

Transform the input into a prompt that generates a complete, finished presentation slide
image adhering to HCLTech-style corporate identity.

Apply visual identity constraints from `references/brand-guide.md`:
16:9 landscape, pure white background, top-left black title, HCLTech blue-to-purple
gradients, modern sans-serif typography, clean digital UI styling, no logos.

Choose a reusable layout from `references/layout-patterns.md` when the brief matches a
common pattern (operating model, maturity curve, capability map, KPI dashboard, roadmap
timeline, or ecosystem diagram).

Never include phrases such as "Corporate Digital Sketchnote," "Presentation Slide," or
other meta-descriptors of the medium as visible text in the generated image.

Keep visible body copy short. Use exact spelling for the title and main labels, avoid
paragraphs or microtext, and let iconography and layout carry secondary meaning.

**Structure the prompt exactly like this:**

```
[Format]: A full 16:9 presentation slide design, high-fidelity corporate UI mockup.

[Layout - Fixed Elements]: Top-Left: The text "<SLIDE TITLE>" in bold modern sans-serif (Black). Background: Pure white (#FFFFFF).

[Center Visual]: <describe the central visual based on the brief>

[Style Modifiers]: HCLTech brand identity, minimalist UI, corporate memphis, vector art, 8k resolution, flat design, clean lines.

[Color Palette]: Pure white background, Cyan-to-Purple gradients, Dark Grey text.

[Visible Text]: Render only these exact text strings: "<TITLE>", "<LABEL 1>", "<LABEL 2>", ...

[Vibe]: Professional, consistent, "Supercharging Progress."
```

Replace the title, center visual description, and visible text strings with content from
the user's brief. Keep all other sections exactly as shown.

---

## Step 3: Generate the Image

Run the bundled Node.js generator. Save output in the caller's current working directory
by default. Do not place final slide images inside the skill directory.

```bash
node <skill-path>/scripts/generate-slide.js "[DETAILED_PROMPT]" "$PWD/[SANITIZED_TITLE].png"
```

Where `<skill-path>` is the installed path of this skill
(e.g., `~/Development/skills/ailab-jpaulino-claude-skills/skills/hcltech-slide-artist-openai`).

Use filename format `[Title_From_Brief].png`, sanitized for the filesystem.

Defaults: `OPENAI_IMAGE_MODEL=gpt-image-2`, `OPENAI_IMAGE_SIZE=1536x864`,
`OPENAI_IMAGE_QUALITY=medium`. If the model or account does not support the default size,
retry with `--size 1536x1024`.

See `references/setup.md` for prerequisites and configuration.

---

## Step 4: Review the Generated Slide

Inspect the generated image before reporting success:

| Problem | What to look for |
|---------|-----------------|
| File validation | File exists, non-empty, extension matches image type, dimensions are landscape close to 16:9 |
| Brand drift | Non-white background, missing cyan-to-purple gradient, wrong visual style, hand-drawn/sketch aesthetics |
| Logo violation | Any HCLTech logo or third-party company logo appears |
| Text problems | Title or body text is illegible, malformed, duplicated, too small, or overflowing |
| Layout problems | Title not top-left, central visual crowded, cards misaligned, poor 16:9 composition |
| Missing content | Key numbers, concepts, or required elements from the brief are absent |

If problems are found, add corrective instructions to the end of the prompt and regenerate
once using exactly the same filename. Maximum one correction attempt; if still failing,
stop and report the remaining issues to the user.

---

## Step 5: Confirm Success or Handle Errors

After successful generation, report:

```text
Review:
- Brand: pass
- Logo check: pass
- Text readability: pass
- Layout: pass
- Required content: pass
- File validation: [format], [width]x[height], landscape close to 16:9
```

Report the exact output path: "I have successfully generated the HCLTech slide: [path]"

**Error handling:**

| Error | Resolution |
|-------|-----------|
| Script not found | Check that `scripts/generate-slide.js` exists in the installed skill directory |
| Missing API key | Set `OPENAI_API_KEY` environment variable |
| Module not found | Run `npm install` in `skills/hcltech-slide-artist-openai/scripts` |
| Format mismatch | Use the final `.jpg` path reported by the generator, or rerun with `--format png` only if PNG is mandatory |
| API/network/quota error | Report error output and retry once only if transient |
| Empty output / no file | Retry once with a shorter prompt; if it fails again, report the error |

---

## Prerequisites

- OpenAI API key set as `OPENAI_API_KEY` environment variable
- Node.js 18 or higher
- npm dependencies installed in `scripts/` directory
- See `references/setup.md` for full setup instructions
