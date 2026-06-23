# HCLTech ROM Package Builder

A Claude skill that builds a complete HCLTech Rough Order of Magnitude (ROM) package from messy client inputs — notes, screenshots, meeting recordings, architecture comments, or draft artifacts. Orchestrates four specialist skills to produce a full sales/delivery estimation package.

---

## What It Does

Produces a complete ROM engagement package including:

- **L1 Architecture document** (Markdown + branded Word/PPT)
- **ROM estimate** with POC / MVP / Production breakdown
- **Assumptions, constraints, dependencies, and risks**
- **Open questions and validation needs**
- **Editable HCLTech PowerPoint deck** (with and without speaker notes)
- **Visual polish deck** (executive-ready raster slide images)
- **Implementation scaffold**
- **QA checklist and stakeholder comment log**

---

## When to Use

Trigger phrases: "create a ROM", "build a ROM package", "ROM estimate", "L1 architecture for the ROM", "HCLTech deck for this opportunity", "editable deck", "visual polish deck", "ROM from these notes."

---

## Orchestration Map

This skill coordinates four specialist skills — it does not duplicate their logic:

| Task | Skill |
|------|-------|
| L1 architecture, requirements synthesis, assumptions, risks, POC scope | **agentic-arch-documenter** |
| Mermaid diagrams and diagram briefs | **architecture-diagram-designer** |
| Editable `.pptx` with HCLTech templates, speaker notes, QA | **pptx** |
| Executive-polish raster slide visuals (PNG/JPEG) | **hcltech-slide-artist-openai** |

---

## Delivery Package Structure

```
rom-package-<slug>/
  inputs/                          # Raw client materials
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

---

## Recommended Deck Slide Spine

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

---

## Structure

```
hcltech-rom-package-builder/
├── SKILL.md          # Claude skill instructions
├── README.md         # This file
└── references/
    ├── workflow.md
    ├── intake-checklist.md
    ├── rom-estimation-framework.md
    ├── agentic-delivery-model.md
    ├── l1-architecture-framework.md
    ├── hcltech-branded-output-rules.md
    ├── deck-output-rules.md
    ├── package-quality-checklist.md
    └── sample-prompts.md
```

---

## Example Prompts

```
Build a ROM package from these meeting notes: [paste notes]

Create an HCLTech ROM for an agentic document processing opportunity.

Build a ROM package from this screenshot of the architecture whiteboard.

Generate an editable HCLTech deck and visual polish deck for this ROM.
```

---

## Important Rules

- The editable `.pptx` is the source of truth — the visual polish deck is an executive layer only
- All client-facing artifacts must use HCLTech-approved templates or branding
- Separate confirmed facts from assumptions; never fabricate precision in estimates
- Do not embed client files, secrets, or local paths into the skill directory
