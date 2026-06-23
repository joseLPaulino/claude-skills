# Deck Output Rules

## Editable HCLTech Deck

The editable PowerPoint is the source of truth for team iteration. Use HCLTech-approved templates for every client-facing deck. Do not deliver an unbranded client-facing deck.

Requirements:

- Approved HCLTech PowerPoint template applied: Essential Version 5.0 by default, Expanded Version 5.0 for richer layout needs.
- Native PowerPoint text for titles and body copy.
- Native shapes, tables, icons, and diagrams wherever practical.
- Editable architecture diagrams, not flattened screenshots, unless the source visual cannot be recreated responsibly.
- The editable deck must be visually compelling enough for internal stakeholder review: use strong hierarchy, clean section rhythm, icon-led cards, architecture lanes, roadmap visuals, and supporting imagery where useful.
- Do not treat the editable deck as a low-polish draft while reserving all polish for the visual deck. The editable HCLTech PPTX is the modifiable source of truth and should still feel presentation-ready.
- Avoid lines, rails, connectors, or boundaries that pass through text or appear to strike out a label.
- Speaker notes in the working variant.
- Clean no-notes version for sharing.
- Rendered QA using the **pptx** skill workflow, plus compatibility checks when a deck is generated programmatically.

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

## Visual Polish Deck

The visual deck is an executive-ready polish layer, not the editable source artifact.

Requirements:

- HCLTech visual brand rules applied through **hcltech-slide-artist-openai**.
- Generate visual slide briefs only after source artifacts and editable deck storyline are stable.
- Keep visible text short and exact.
- Do not include HCLTech logos in generated images.
- Preserve the same claims and estimate boundaries as the editable deck.
- Include with-notes and clean variants when requested.

## Speaker Notes

Speaker notes should include:

- The intended talk track.
- Assumptions to avoid overstating.
- Validation caveats.
- Expected client questions.
- Where manager/stakeholder feedback was incorporated.

Clean variants should remove notes and internal caveats that are not client-shareable, while preserving client-ready assumptions and open questions.

## Branding Gate

Before final deck handoff, confirm the HCLTech template was used, rendered QA passed, and no unbranded client-facing deck was produced. If the HCLTech template is unavailable, stop and ask for the approved template path.
