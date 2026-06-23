# Branded Output Template Guidance

Use this when turning a stable Markdown architecture artifact into a branded Word document or PowerPoint deck.

## Principle

Company templates are visual and brand templates unless the user explicitly says otherwise. Use them for typography, colors, cover treatment, headers/footers, slide masters, layouts, logo treatment, and branded component styling. Do not treat sample placeholder text as architecture content.

Keep Markdown as the editable source of truth. Generate branded Word or PowerPoint only after the architecture narrative, assumptions, diagram, risks, and next steps are stable.

## Local HCLTech Template Inventory

On this machine, HCLTech brand templates are stored under:

`/Users/jose.paulino/Documents/HCLTech-brand-templates`

### Word

Use Word templates under:

`/Users/jose.paulino/Documents/HCLTech-brand-templates/RFP and Word Templates/Word Document Template`

Recommended selection:

- Default full architecture document: `Word template (with table of contents)#3-Aptos.dotx`
- Alternative full architecture document with stronger gradient cover: `Word template (with table of contents)#2-Aptos.dotx`
- Alternative full architecture document with full-height soft gradient cover: `Word template (with table of contents)#1-Aptos.dotx`
- Short brief or memo: `Word template (for short content)-Aptos.dotx`

Use RFP templates only when the requested artifact is explicitly an RFP response, proposal response, or similar sales-response document.

### PowerPoint

Use PowerPoint templates under:

`/Users/jose.paulino/Documents/HCLTech-brand-templates/HCLTech PowerPoint template Version 5.0`

Recommended selection:

- Default architecture or executive deck: `Essential Version 5.0.potx`
- Rich layout library or advanced deck production: `Expanded Version 5.0.potx`

`Expanded Version 5.0.potx` is much larger and contains many pre-designed layouts. Use it when slide variety, case-study layouts, complex diagrams, or richer visual treatments matter. Use Essential for simpler, faster, cleaner decks.

## Generation Rules

- Use the **docx** skill for `.docx` creation/editing, template/style-pack application, table/list geometry, header/footer handling, watermark/background audit/removal, accessibility checks, and render-to-PNG QA.
- Use the **pptx** skill for deck planning, template/reference audit, design-system lock, editable slide construction, contact sheets, layout checks, rendered QA, and comeback scoring.
- Preserve company branding; do not recreate the brand manually unless the template cannot be used.
- Replace placeholder content with the architecture content.
- Preserve or adapt branded heading styles, table styles, title pages, section dividers, headers, footers, confidentiality markings, and logo placement.
- Keep proprietary templates out of public or personal repos unless the user explicitly approves including them.

## Recommended Orchestration Pattern

1. Generate and stabilize the Markdown architecture source.
2. Decide the audience and artifact type: full architecture document, short brief, business deck, technical deck, or hybrid deck.
3. For Word:
   - Build a clean `.docx` from the Markdown source using the **docx** skill.
   - Prefer a white report body with restrained HCLTech styling: branded cover, quiet header/footer, Aptos typography, HCLTech colors in headings, callouts, tables, captions, and diagram accents.
   - Avoid carrying heavy template backgrounds or watermark-like page art through the full report unless the user explicitly wants that treatment.
4. For PowerPoint:
   - Convert Markdown into a slide claim spine rather than copying document sections directly.
   - Use the **pptx** skill with an HCLTech template.
   - Include real proof objects: architecture maps, workflow diagrams, native charts or editable chart primitives, scorecards, timelines, decision matrices, and POC metric views.
   - If source detail supports L2 or L3 architecture, include it as clearly labeled technical slides or hidden backup slides rather than overcrowding the executive flow.
   - Include speaker notes for every slide.

## PowerPoint From Markdown

Use the Markdown architecture artifact as the source of truth. Do not rebuild the architecture from scratch for the deck. Convert the Markdown into a presentation story with slide-level claims, proof objects, and presenter notes.

Choose the deck mode based on audience and request:

- **Business readout:** executive problem, value, operating model, risks, decisions, and next steps.
- **Technical readout:** architecture, integration boundaries, context/tool access, governance, observability, and POC plan.
- **Hybrid readout:** business narrative first, with technical depth available as backup. This is the preferred default for L1 architecture presentations unless the user specifies otherwise.

PowerPoint quality gates:

- A deck that PowerPoint must repair is a failed output.
- Include real proof objects — a deck made only of text cards is not acceptable for architecture presentation work.
- Verify the `.pptx` package before treating it as presentable.
