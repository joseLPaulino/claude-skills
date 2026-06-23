# HCLTech Slide Artist OpenAI — Setup

## Prerequisites

1. Node.js 18 or higher
2. OpenAI API key with image generation access
3. npm for installing the OpenAI SDK

## Install Dependencies

From the installed skill's scripts directory:

```bash
cd ~/Development/skills/ailab-jpaulino-claude-skills/skills/hcltech-slide-artist-openai/scripts
npm install
```

## Configure API Key

Set the standard OpenAI API key environment variable:

```bash
export OPENAI_API_KEY="your-api-key-here"
```

Verify without printing the secret:

```bash
test -n "$OPENAI_API_KEY" && echo "OPENAI_API_KEY is set"
```

Or put the key in the skill's local `.env` file:

```bash
~/Development/skills/ailab-jpaulino-claude-skills/skills/hcltech-slide-artist-openai/scripts/.env
```

Use this format:

```text
OPENAI_API_KEY=your-api-key-here
```

The generator automatically loads `.env` from its own `scripts` directory before checking `OPENAI_API_KEY`.

## Defaults

```text
OPENAI_IMAGE_MODEL=gpt-image-2
OPENAI_IMAGE_SIZE=1536x864
OPENAI_IMAGE_QUALITY=medium
```

Override as environment variables or flags:

```bash
node ~/Development/skills/ailab-jpaulino-claude-skills/skills/hcltech-slide-artist-openai/scripts/generate-slide.js \
  "A full 16:9 HCLTech-style slide with title Smoke Test, pure white background, cyan-to-purple gradient cards, no logos, and only the visible text Smoke Test." \
  "$PWD/smoke-test.png" \
  --size 1536x864 \
  --quality medium
```

If the account or model rejects `1536x864`, retry with `--size 1536x1024`.

## Troubleshooting

- Missing key: set `OPENAI_API_KEY`.
- Module not found: run `npm install` in the skill's `scripts` directory.
- Model unavailable: set `OPENAI_IMAGE_MODEL` to another image-capable model available to the account.
- Size unsupported: try `--size 1536x1024` or another model-supported landscape size.
- Output extension mismatch: the script saves the actual returned image type and adjusts `.png` / `.jpg` if needed.

## Output Behavior

Relative output paths are resolved against the caller's current working directory. Use an absolute output path when calling from another folder.
