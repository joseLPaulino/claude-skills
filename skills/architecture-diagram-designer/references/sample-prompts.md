# Sample Prompts

Use these prompts as copy/paste starting points when invoking `architecture-diagram-designer`.

## L1 Architecture Diagram

```text
Use the architecture-diagram-designer skill. Create a clean L1 Mermaid architecture diagram
from the solution description below. Show actors/channels, orchestration, agent or service
roles, context/knowledge sources, tools/APIs, systems of record, human approval, governance,
audit, and monitoring. Keep implementation details out of the L1 view.

Solution description:
<paste notes>
```

## L1 Plus L2 Diagrams

```text
Use the architecture-diagram-designer skill. Create two diagrams: an L1 logical architecture
diagram for executives and an L2 detailed logical component diagram for technical review.
Use the same solution description, label assumptions, and avoid unsupported platform-specific
deployment details.

Solution description:
<paste notes>
```

## Agentic Workflow Diagram

```text
Use the architecture-diagram-designer skill. Create an agentic workflow diagram showing
intake, planning/orchestration, retrieval, tool use, decisioning, human approval, action
execution, audit, monitoring, and fallback paths.
```

## Platform Deployment Diagram

```text
Use the architecture-diagram-designer skill. Create an L3 deployment diagram for the
specified platform. Include runtime boundaries, managed services, APIs, data stores, model
endpoints, vector store, IAM/RBAC, observability, and external system integrations. Mark
any missing details as assumptions.

Platform and known services:
<paste cloud/platform constraints>
```

## Presentation-Ready Diagram Brief

```text
Use the architecture-diagram-designer skill. Create a Mermaid logical diagram and a short
visual design brief for a PowerPoint-ready architecture graphic. The brief should describe
grouping, reading order, colors, labels, and which details belong in hidden backup slides.
```
