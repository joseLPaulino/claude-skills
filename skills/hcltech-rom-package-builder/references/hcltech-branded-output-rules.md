# HCLTech Branded Output Rules

Use this reference whenever the ROM package produces client-facing Word, PowerPoint, PDF, image, or other shareable artifacts.

## Non-Negotiable Rule

All client-facing artifacts must be HCLTech-branded using approved templates or approved HCLTech visual rules. Do not produce a client-facing unbranded document, deck, PDF, or visual unless the user explicitly asks for an internal scratch artifact.

Markdown files are working source artifacts and may remain plain Markdown. Any DOCX, PPTX, PDF, or executive visual derived from them must be branded.

## Approved Local Template Inventory

On this machine, HCLTech brand templates are stored under:

`/Users/jose.paulino/Documents/HCLTech-brand-templates`

### Word / DOCX

Use Word templates under:

`/Users/jose.paulino/Documents/HCLTech-brand-templates/RFP and Word Templates/Word Document Template`

Default choices:

- Full ROM or architecture document: `Word template (with table of contents)#3-Aptos.dotx`
- Short memo or brief: `Word template (for short content)-Aptos.dotx`
- Alternative cover treatments: `Word template (with table of contents)#1-Aptos.dotx` or `Word template (with table of contents)#2-Aptos.dotx`

Use RFP templates only when the requested output is explicitly an RFP/proposal response.

### PowerPoint / PPTX

Use PowerPoint templates under:

`/Users/jose.paulino/Documents/HCLTech-brand-templates/HCLTech PowerPoint template Version 5.0`

Default choices:

- Standard ROM, architecture, or executive deck: `Essential Version 5.0.potx`
- Richer deck with more layout variety or complex diagrams: `Expanded Version 5.0.potx`

## Output Rules By Artifact Type

| Artifact | Branding Rule |
| --- | --- |
| Source Markdown | May be plain working source, but should state intended branded output path when relevant. |
| DOCX | Must use approved HCLTech Word template and render/QA before handoff. |
| PPTX | Must use approved HCLTech PowerPoint template and rendered QA before handoff. |
| PDF | Must be exported from a branded DOCX/PPTX or otherwise visually aligned with HCLTech template rules. |
| OpenAI visual slides | Must use `hcltech-slide-artist-openai` and its HCLTech visual constraints. |
| Diagrams | Mermaid is acceptable in Markdown source; diagrams embedded in decks/documents must follow the target HCLTech template style. |

## Brand Gate Before Final Handoff

Before handing off client-facing artifacts, verify:

- Correct HCLTech template or HCLTech visual rules were used.
- No proprietary templates were copied into the skill repository.
- Final output is saved in the engagement workspace, not the skill source directory.
- Editable HCLTech PowerPoint remains the source of truth for deck iteration.
- Visual polish deck is clearly marked as a polish layer, not the editable source artifact.
- Rendered QA was performed for DOCX/PPTX/PDF outputs when tooling is available.

If approved templates are missing or inaccessible, stop and ask the user for the template path rather than producing unbranded client-facing output.
