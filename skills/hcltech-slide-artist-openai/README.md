# HCLTech Slide Artist — OpenAI

A Claude skill for generating HCLTech-branded presentation slide images (PNG/JPEG) using the OpenAI Images API.

## What it does

- Transforms visual briefs into polished 16:9 HCLTech-style raster slide images
- Applies HCLTech brand identity: white background, cyan-to-purple gradients, modern sans-serif
- Validates each generated image for brand compliance, layout, text readability, and required content
- Retries once with corrective instructions if quality checks fail
- Invoked directly by users or orchestrated by `hcltech-rom-package-builder` for the visual polish deck layer

## Trigger phrases

> "generate a slide image", "HCLTech slide visual", "visual polish deck", "raster slide", "executive slide image", "slide from this brief", "OpenAI image slide"

## Prerequisites

- Node.js 18 or higher
- OpenAI API key with image generation access (`gpt-image-2`)
- npm dependencies installed

## Setup

```bash
cd skills/hcltech-slide-artist-openai/scripts
npm install
echo "OPENAI_API_KEY=your-api-key-here" > .env
```

## Usage

```bash
node scripts/generate-slide.js "[PROMPT]" "/path/to/output.png"
```

Defaults: `gpt-image-2`, `1536x864`, `medium` quality. If size is rejected, retry with `--size 1536x1024`.

## Smoke test

```bash
cd scripts
node generate-slide.js \
  "A full 16:9 presentation slide design. Top-Left: the text Smoke Test in bold modern sans-serif. Background: Pure white. Center: HCLTech cyan-to-purple gradient card. Visible text: Smoke Test." \
  /tmp/smoke-test.png
```

## Environment variables

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `OPENAI_API_KEY` | Yes | — | OpenAI API key (set in `scripts/.env` or environment) |
| `OPENAI_IMAGE_MODEL` | No | `gpt-image-2` | Image generation model |
| `OPENAI_IMAGE_SIZE` | No | `1536x864` | Output dimensions |
| `OPENAI_IMAGE_QUALITY` | No | `medium` | Generation quality |

> **Note:** `scripts/.env` is excluded from version control via `.gitignore`. Set your API key manually on each machine.

## Reference files

| File | Purpose |
|------|---------|
| `references/brand-guide.md` | HCLTech visual identity constraints |
| `references/layout-patterns.md` | Reusable slide layout patterns |
| `references/setup.md` | Full setup and troubleshooting guide |
