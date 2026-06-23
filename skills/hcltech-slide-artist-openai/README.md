# HCLTech Slide Artist — OpenAI

Generates HCLTech-branded presentation slide images (PNG/JPEG) using the OpenAI Images API (`gpt-image-2`). Designed to be invoked by Claude via the `hcltech-slide-artist-openai` skill.

---

## What It Does

Given a visual brief or slide description, this skill:
1. Synthesizes a structured image prompt following HCLTech brand guidelines
2. Calls the OpenAI Images API via a Node.js generator script
3. Saves a raster slide image (16:9, 1536×864) to the specified output path
4. Reviews the result for brand compliance, layout, and text readability

> For editable `.pptx` output, use the **pptx** skill instead.

---

## Structure

```
hcltech-slide-artist-openai/
├── SKILL.md                  # Claude skill instructions
├── README.md                 # This file
├── .env.example              # API key template
├── .gitignore                # Ignores .env
├── scripts/
│   ├── generate-slide.js     # Node.js image generator
│   └── package.json          # openai SDK dependency
└── references/
    ├── brand-guide.md        # HCLTech visual identity rules
    ├── layout-patterns.md    # Reusable slide layout patterns
    └── setup.md              # Prerequisites and configuration
```

---

## Setup

### 1. Install dependencies

```bash
cd skills/hcltech-slide-artist-openai/scripts
npm install
```

### 2. Configure your API key

Copy `.env.example` to `.env` and fill in your key:

```bash
cp .env.example .env
```

```text
OPEN_AI_KEY=sk-...
```

Or export it as an environment variable:

```bash
export OPENAI_API_KEY="sk-..."
```

### 3. Requirements

- Node.js 18+
- OpenAI API key with image generation access (`gpt-image-2`)

---

## Usage

### Via Claude (recommended)

Ask Claude in Cowork: *"Generate an HCLTech slide for [your brief]"* — the skill handles everything.

### Direct CLI

```bash
export OPENAI_API_KEY="sk-..."

node scripts/generate-slide.js \
  "Your detailed prompt here" \
  "$PWD/output-slide.png"
```

Optional flags:

| Flag | Default | Description |
|------|---------|-------------|
| `--size` | `1536x864` | Image dimensions |
| `--quality` | `medium` | `low`, `medium`, or `high` |
| `--format` | `png` | `png` or `jpg` |

If `1536x864` is rejected by your account, retry with `--size 1536x1024`.

---

## Defaults

| Setting | Value |
|---------|-------|
| Model | `gpt-image-2` |
| Size | `1536x864` |
| Quality | `medium` |

Override via environment variables: `OPENAI_IMAGE_MODEL`, `OPENAI_IMAGE_SIZE`, `OPENAI_IMAGE_QUALITY`.

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| `Missing API key` | Set `OPENAI_API_KEY` env var or add to `.env` |
| `Module not found` | Run `npm install` in `scripts/` |
| `Size unsupported` | Retry with `--size 1536x1024` |
| `Connection error` | Check network access to `api.openai.com` |
| `Model unavailable` | Set `OPENAI_IMAGE_MODEL` to another image-capable model |
