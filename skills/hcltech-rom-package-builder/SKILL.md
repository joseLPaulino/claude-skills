---
name: hcltech-rom-package-builder
description: >
  Use this skill when the user needs a complete HCLTech ROM package built from client
  notes, screenshots, sample files, architecture comments, manager feedback, or draft
  artifacts. Triggers include: "create a ROM", "build a ROM package", "ROM estimate",
  "L1 architecture for the ROM", "HCLTech deck for this opportunity", "editable deck",
  "visual polish deck", "OpenAI visual deck", "ROM from these notes", or any request
  to produce a structured HCLTech sales or delivery estimation package. Orchestrates
  agentic-arch-documenter, architecture-diagram-designer, pptx, and
  hcltech-slide-artist-openai — does not duplicate their logic.
---

# HCLTech ROM Package Builder

## Operating Principles

Create a complete ROM package, not just a deck. Treat the source Markdown and editable
HCLTech PowerPoint as the modifiable source of truth. The visual polish deck (generated
via hcltech-slide-artist-openai) is an executive polish layer only; it must not replace
the editable deck.

Work from incomplete and messy inputs, but separate confirmed facts from assumptions.
Ask clarifying questions only when an estimate, architecture boundary, commercial position,
or client-facing claim would be irresponsible without the answer.

Do not commit or embed proprietary HCLTech templates, client files, secrets, generated
client outputs, or local absolute paths into reusable skill assets. If a local template
path is provided by the user, use it for that engagement only.

All client-facing artifacts must be HCLTech-branded using approved templates or approved
HCLTech visual rules. Markdown source artifacts may remain plain working files, but DOCX,
PPTX, PDF, and executive visuals must not be delivered unbranded. If approved templates
are missing, ask for the template path before creating client-facing output.

## Orchestration Map

This skill orchestrates specialist skills — do not duplicate their logic:

| Task | Skill to invoke |
|------|----------------|
| L1 architecture source, requirements synthesis, assumptions, constraints, risks, POC scope, architecture narrative | **agentic-arch-documenter** |
| Mermaid diagrams, diagram cleanup, diagram briefs for PowerPoint conversion | **architecture-diagram-designer** |
| Editable `.pptx` from HCLTech-approved templates, native shapes/tables/diagrams, speaker notes, rendered QA | **pptx** |
| High-polish HCLTech-style raster slide visuals (executive polish layer only) | **hcltech-slide-artist-openai** |

---

## Workflow

Read `references/workflow.md` for the full end-to-end flow. Summary:

### 1. Create the Package Scaffold

Create an engagement workspace with this structure (keep inputs and outputs out of the skill directory):

```text
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
    <slug>-hcltech-rom-with-notes.pptx
    <slug>-hcltech-rom-clean.pptx
  visual-deck/
    slide-images/
    <slug>-openai-polish-with-notes.pptx
    <slug>-openai-polish-clean.pptx
  qa/
    package-quality-checklist.md
    stakeholder-comment-log.md
```

If useful, run `scripts/create-rom-package-scaffold.py --slug <engagement-slug>`.

### 2. Ingest and Classify Inputs

Read `references/intake-checklist.md` when inputs are messy, scattered, or screenshot-heavy.

Build a working intake table:

| Source | Extracted point | Certainty | Impact | Follow-up |
|--------|----------------|-----------|--------|-----------|
| (meeting note / file / comment) | (claim) | Confirmed / Assumption / Open Question / Recommendation / Validation Needed | (scope / estimate / architecture / commercial / risk / deck) | (question / action / owner) |

Capture manager/stakeholder comments as explicit change requests with source, disposition, and impact.

### 3. Shape the Commercial ROM

Read `references/rom-estimation-framework.md` and `references/agentic-delivery-model.md`.

- Define the commercial anchor: scope level, delivery horizon, team/pod shape, major cost drivers, build-vs-wrap boundary, dependencies, and what is excluded.
- Split work into POC, MVP, and production rollout when the opportunity supports it.
- Use the agentic delivery ladder: Immediate Engagement, Bronze/Silver/Gold PoC, MVP Solution, Pilot Solution.
- Prefer ranges and confidence levels when inputs are incomplete. Do not fabricate precision.

### 4. Create Source Artifacts

Produce Markdown sources for:
1. `open-questions-validation-needs.md`
2. `assumptions-constraints-dependencies-risks.md`
3. `l1-architecture.md` (orchestrate **agentic-arch-documenter**)
4. `rom-estimate.md`
5. `implementation-scaffold.md`
6. `deck-outline.md`

Read `references/l1-architecture-framework.md` when the architecture shape or build-vs-wrap boundary is central.

### 5. Build the Editable HCLTech PowerPoint

Read `references/deck-output-rules.md` and `references/hcltech-branded-output-rules.md` before building.

Use the **pptx** skill with the user-provided HCLTech-approved template.

Recommended slide spine:
1. Executive ROM Summary
2. Client Context and Business Problem
3. Proposed Solution Overview
4. L1 Logical Architecture
5. Build-vs-Wrap Boundary
6. POC / MVP / Production Path
7. Workstreams and Delivery Plan
8. Team / Pod Shape
9. ROM Estimate and Commercial Anchor
10. Key Assumptions and Dependencies
11. Risks and Mitigations
12. Open Questions and Validation Needs
13. Immediate Next Steps

Requirements:
- Native PowerPoint text for titles and body copy.
- Native shapes, tables, icons, and diagrams wherever practical.
- Speaker notes in the working version; clean no-notes version for sharing.
- Visually compelling for internal stakeholder review — not a low-polish draft.
- Avoid connectors that pass through text or visually read as strikethrough.

### 6. Build the Visual Polish Deck

- Convert approved editable-deck story into visual slide briefs.
- Invoke **hcltech-slide-artist-openai** to generate raster slide visuals.
- Package as an executive-ready visual variant (with and without notes).
- Label this deck as a polish layer, not the source of truth.

### 7. Validate Completeness

Read `references/package-quality-checklist.md` before final handoff.

Confirm: estimates, architecture, assumptions, risks, open questions, validation needs, commercial anchor, team shape, and POC/MVP boundaries are all present.

---

## Reference Files

| File | When to read |
|------|-------------|
| `references/workflow.md` | For the end-to-end ROM package flow |
| `references/intake-checklist.md` | When inputs are vague, scattered, or screenshot-heavy |
| `references/rom-estimation-framework.md` | When building the estimate, commercial anchor, pod model, or POC/MVP boundary |
| `references/agentic-delivery-model.md` | When classifying agentic work (PoC/MVP/Pilot), defending timelines, or using agentic pod language |
| `references/l1-architecture-framework.md` | When architecture shape or build-vs-wrap boundary is central |
| `references/hcltech-branded-output-rules.md` | Before producing any client-facing DOCX, PPTX, PDF, image, or visual package |
| `references/deck-output-rules.md` | When producing editable and visual polish deck variants |
| `references/package-quality-checklist.md` | Before final delivery |
| `references/sample-prompts.md` | When the user asks how to invoke or reuse this skill |
