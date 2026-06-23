# Agentic Architecture Documenter

A Claude skill that acts as a Senior AI Solution Architect at HCLTech AI Lab. Given any customer input — brief, RFP, PPT, PDF, Word doc, spreadsheet, or plain text — it produces a rigorous, audience-appropriate architecture document with Mermaid diagrams.

---

## What It Does

- Ingests customer inputs in any format and extracts goals, constraints, systems, and requirements
- Produces L1, L2, and L3 architecture views (as detail allows)
- Classifies every point as Confirmed, Assumption, Open Question, or Recommendation
- Generates Mermaid architecture diagrams at the right level of depth
- Orchestrates the **docx** and **pptx** skills for branded Word/PowerPoint output
- Closes with architecture decisions, risks, open questions, and POC scope

---

## When to Use

Trigger phrases: "create an architecture", "L1 design", "L2 diagram", "agentic solution", "solution architecture", "ROM architecture", "architecture document", "design this solution", "review this brief and design a solution."

> For pure diagram requests without architecture analysis, use **architecture-diagram-designer** instead.

---

## Architecture Levels

| Level | Name | Contents |
|-------|------|----------|
| L1 | Executive Logical View | Actors, channels, orchestration, agent roles, tools/APIs, systems of record, governance, monitoring |
| L2 | Detailed Logical Components | Agent responsibilities, RAG/knowledge flow, tool layer, integration boundaries, approval workflow, observability |
| L3 | Deployment / Implementation View | Cloud services, network zones, IAM/RBAC, queues, databases, model endpoints, CI/CD — only when platform details are known |

---

## Output Structure

Default output is Markdown. For branded output, this skill orchestrates:
- **docx** skill → `.docx` Word document
- **pptx** skill → `.pptx` PowerPoint deck

Full document includes: Executive Summary, Business Problem, Goals, Scope, Stakeholders, Requirements, Architecture Diagrams (Mermaid), Agentic Design, Security/Governance, Architecture Decisions, Risks, Open Questions, POC Scope, and Next Steps.

---

## Structure

```
agentic-arch-documenter/
├── SKILL.md          # Claude skill instructions
├── README.md         # This file
└── references/
    ├── architecture-document-template.md
    ├── requirements-extraction-checklist.md
    ├── platform-mapping-guidance.md
    ├── poc-handoff.md
    ├── branded-output-template-guidance.md
    └── sample-prompts.md
```

---

## Example Prompts

```
Review this RFP and create an L1 architecture document.

Design an agentic solution for automated claims processing.

Create a solution architecture for this brief: [paste brief]

Build an L1 + L2 architecture for a customer support AI agent on Azure.
```

---

## Platform Behavior

- **No platform specified** → platform-neutral logical architecture with optional mapping table
- **Platform specified** → uses that platform's native service names
- **Multiple platforms** → logical architecture first, then a provider mapping section
