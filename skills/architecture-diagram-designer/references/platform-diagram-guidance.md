# Platform Diagram Guidance

## No Platform Specified

Use logical labels:

- Model Runtime
- Agent Orchestrator
- API Layer
- Workflow Engine
- Knowledge Base
- Vector Store
- Data Lake / Operational Store
- Monitoring
- Audit Log
- Identity Provider

## Platform Specified

Use the specified provider's service names where they clarify the design. Keep existing
enterprise systems as external systems of record.

Do not over-specify every service in a Level 1 diagram. Name major managed services and
leave lower-level implementation detail to later diagrams.

## Multiple Platforms

Avoid mixing services in one diagram unless the architecture is truly multi-cloud or hybrid.

Recommended pattern:

1. Logical architecture diagram
2. Platform mapping table
3. Optional provider-specific deployment diagram

## Presentation-Quality Follow-Up

When the user wants a polished visual:

- First produce Mermaid for review.
- Then create a visual design brief describing layout, icons, grouping, color intent, and labels.
- Pass the brief to **hcltech-slide-artist-openai** for raster image generation, or to the
  **pptx** skill for an editable PowerPoint diagram visual.
