# Sample Prompts

Use these prompts as copy/paste starting points when invoking `agentic-arch-documenter`.

## Level 1 Architecture From Rough Notes

```text
Use the agentic-arch-documenter skill. Create a Level 1 architecture document from the
notes below. Separate confirmed facts, assumptions, recommendations, and open questions.
Include a Mermaid architecture diagram, risks, POC candidate scope, and next steps.

Notes:
<paste customer notes, email, transcript, or requirements>
```

## Detailed Architecture When Enough Information Exists

```text
Use the agentic-arch-documenter skill. Create the most detailed architecture document the
available information responsibly supports. Start with an L1 executive logical view, then
include L2 detailed logical component views and L3 deployment/implementation views only
where the source material supports them. Clearly label assumptions and do not invent
missing platform details.

Source material:
<paste requirements or attach/source artifacts>
```

## Platform-Neutral Agentic Proposal

```text
Use the agentic-arch-documenter skill. Draft a platform-neutral architecture proposal for
an agentic AI solution. Include agent topology, context sources such as RAG or enterprise
knowledge, tool/API/MCP access model, human approval, guardrails, auditability,
observability, integration boundaries, risks, and open decisions.
```

## Branded Word Document

```text
Use the agentic-arch-documenter skill. First create the Markdown architecture source, then
generate a clean HCLTech-branded Word document from it using the docx skill. Use company
templates only for branding, typography, colors, cover treatment, header/footer, and styles.
Keep the report body white and professional.
```

## Hybrid Business And Technical PowerPoint

```text
Use the agentic-arch-documenter skill. Convert the Markdown architecture source into an
HCLTech-branded hybrid PowerPoint readout using the pptx skill. Keep the main flow
executive-friendly, include architecture diagrams, process flow, POC metrics, risks, and
next steps, and place deeper L2/L3 technical diagrams in hidden backup slides. Add speaker
notes to every slide.
```
