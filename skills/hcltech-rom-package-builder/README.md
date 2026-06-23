# HCLTech ROM Package Builder

A Claude skill for building complete HCLTech ROM (Rough Order of Magnitude) packages from messy client inputs — notes, screenshots, meeting transcripts, draft artifacts, or manager feedback.

## What it does

- Ingests and classifies any source material into a structured intake table
- Shapes a commercial ROM: scope, delivery horizon, team/pod shape, cost drivers, build-vs-wrap boundary
- Produces a full set of Markdown source artifacts
- Orchestrates specialist skills for editable PPTX and visual polish deck output
- Validates the complete package against a quality checklist before handoff

## Trigger phrases

> "create a ROM", "build a ROM package", "ROM estimate", "HCLTech deck for this opportunity", "editable deck", "visual polish deck", "ROM from these notes"

## Orchestration map

| Task | Skill |
|------|-------|
| L1 architecture, requirements, assumptions, risks | `agentic-arch-documenter` |
| Mermaid diagrams, diagram cleanup | `architecture-diagram-designer` |
| Editable HCLTech-branded `.pptx` | `pptx` |
| Executive raster slide visuals | `hcltech-slide-artist-openai` |

## Package output structure

```
rom-package-<slug>/
  inputs/
  source/
    rom-estimate.md
    l1-architecture.md
    assumptions-constraints-dependencies-risks.md
    open-questions-validation-needs.md
    implementation-scaffold.md
    deck-outline.md
  editable-deck/
  visual-deck/
  qa/
```

## Reference files

| File | Purpose |
|------|---------|
| `references/workflow.md` | End-to-end ROM package flow |
| `references/intake-checklist.md` | Messy/scattered input handling |
| `references/rom-estimation-framework.md` | Estimate, pod model, POC/MVP boundary |
| `references/agentic-delivery-model.md` | Agentic delivery ladder (Bronze/Silver/Gold PoC, MVP, Pilot) |
| `references/l1-architecture-framework.md` | Architecture shape and build-vs-wrap boundary |
| `references/hcltech-branded-output-rules.md` | Client-facing branding rules |
| `references/deck-output-rules.md` | Editable and visual polish deck rules |
| `references/package-quality-checklist.md` | Pre-delivery validation |
| `references/sample-prompts.md` | Example invocations |

## Scripts

`scripts/create-rom-package-scaffold.py` — scaffolds the engagement workspace directory structure.

```bash
python3 scripts/create-rom-package-scaffold.py --slug <engagement-slug>
```

## No environment variables required
