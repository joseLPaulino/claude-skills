# Agentic Architecture Documenter

A Claude skill for producing rigorous L1/L2/L3 architecture documents from any customer input — briefs, RFPs, PPTs, PDFs, spreadsheets, or plain text.

## What it does

- Ingests any source material (Word, PowerPoint, PDF, email, notes) and extracts requirements, goals, constraints, and stakeholders
- Classifies every point as Confirmed, Assumption, Open Question, or Recommendation
- Produces a full architecture document in Markdown with Mermaid diagrams at L1, L2, and L3 levels
- Orchestrates the `docx` and `pptx` skills for branded HCLTech Word/PowerPoint output
- Defaults to platform-neutral design; adapts to AWS, Azure, GCP, or on-prem when specified

## Trigger phrases

> "create an architecture", "L1 design", "L2 diagram", "agentic solution", "solution architecture", "architecture document", "design this solution", "review this brief and design a solution"

## Output

Markdown architecture document with:
- Executive summary, business problem, goals, scope
- Confirmed inputs, assumptions, open questions
- Functional and non-functional requirements
- L1 logical architecture + Mermaid diagram
- L2/L3 views when source detail supports them
- Agentic/AI design section
- Security, governance, observability
- Architecture decisions, risks, POC candidate scope, next steps

## Reference files

| File | Purpose |
|------|---------|
| `references/architecture-document-template.md` | Full document template |
| `references/requirements-extraction-checklist.md` | Checklist for vague or scattered inputs |
| `references/platform-mapping-guidance.md` | Cloud/on-prem platform guidance |
| `references/poc-handoff.md` | Transitioning from L1 to POC |
| `references/branded-output-template-guidance.md` | HCLTech Word/PowerPoint branding rules |
| `references/sample-prompts.md` | Example invocations |

## No environment variables required
