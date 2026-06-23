# Package Quality Checklist

Use this before final handoff.

## Source Artifacts

- ROM estimate Markdown exists and includes scope basis, commercial anchor, team shape, phasing, assumptions, risks, and confidence.
- L1 architecture Markdown exists and includes a Mermaid diagram.
- Assumptions, constraints, dependencies, and risks are explicit.
- Open questions and validation needs are separated from confirmed facts.
- Implementation scaffold or starting structure exists when the user is likely to build next.
- Stakeholder or manager comments are incorporated or logged with rationale.

## Estimate Quality

- Open L1 questions are mapped to ROM duration, phase classification, pod/specialist impact, and proposal/SOW validation needs.
- POC, MVP, and production boundaries are clear where relevant.
- Build-vs-wrap decisions or assumptions are visible.
- Cost drivers are named.
- Exclusions are named.
- Estimate confidence is stated.
- Validation items that could move the ROM are highlighted.

## Architecture Quality

- L1 stays logical and executive-readable.
- Security, governance, audit, observability, and operations are visible where relevant.
- Platform-specific services are used only when specified or clearly assumed.
- Unknown integration and data conditions are not hidden.

## Deck Quality

- Editable HCLTech PowerPoint exists as the modifiable source of truth.
- Editable deck is visually compelling enough for internal stakeholder review.
- Editable deck uses native text/shapes/tables/diagrams wherever practical.
- No line, rail, connector, or inherited template artifact crosses through text or visually reads as strikethrough/cancellation.
- Programmatically generated PPTX files pass package checks before handoff.
- Editable with-notes and clean variants are produced when requested.
- Visual polish deck is clearly treated as a polish layer.
- Visual polish deck is generated from approved slide briefs, not from unreviewed assumptions.

## Repository Hygiene

- No local secrets are committed.
- No proprietary HCLTech templates are committed.
- No generated client outputs are committed by default.
- Local absolute paths appear only in engagement outputs or user-provided runtime instructions, not reusable references.

## Client-Facing Branding

- Every DOCX, PPTX, PDF, and executive visual uses an approved HCLTech template or HCLTech visual rules.
- Editable HCLTech PowerPoint uses the approved PowerPoint template and remains the source of truth.
- Visual polish deck uses `hcltech-slide-artist-openai` brand constraints and is marked as a polish layer.
- If a template is missing, output is paused until the user provides the approved path.
