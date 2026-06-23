# Architecture Diagram Designer

A Claude skill for creating, improving, and expanding architecture diagrams in Mermaid — for Markdown documents, Word, PowerPoint, or visual design tooling.

## What it does

- Produces L1, L2, and L3 architecture diagrams in Mermaid syntax
- Normalizes layout: users/channels left → orchestration center → tools/data/systems right
- Applies platform-neutral labels by default; uses native service names when a cloud is specified
- Validates diagrams against a quality checklist before delivery
- Can be orchestrated by `agentic-arch-documenter` or `hcltech-rom-package-builder`
- Produces visual design briefs for handoff to `hcltech-slide-artist-openai` or `pptx`

## Trigger phrases

> "create a diagram", "draw the architecture", "Mermaid diagram", "L1 diagram", "L2 diagram", "agentic workflow diagram", "data flow diagram", "deployment diagram", "diagram for the deck"

## Diagram types

| Type | Use case |
|------|---------|
| L1 Logical Architecture | Actors, channels, agents, tools, governance, operations |
| L2 Logical Detail | Component roles, RAG flow, tool boundaries, data stores, approval |
| L3 Deployment | Cloud services, network zones, IAM, model endpoints, CI/CD |
| Agentic Workflow | Intake → planning → tool use → retrieval → decision → approval → action |
| Data Flow | Producers, stores, processing, consumers, controls |
| Sequence | Ordered interactions and timing |

## Reference files

| File | Purpose |
|------|---------|
| `references/mermaid-patterns.md` | Reusable diagram starting patterns |
| `references/diagram-quality-checklist.md` | Pre-delivery quality checks |
| `references/platform-diagram-guidance.md` | Cloud/SaaS/on-prem diagram guidance |
| `references/sample-prompts.md` | Example invocations |

## No environment variables required
