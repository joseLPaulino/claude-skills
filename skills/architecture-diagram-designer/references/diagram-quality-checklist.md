# Diagram Quality Checklist

Before finalizing a diagram, verify:

- The title or surrounding text says what view the diagram represents.
- Users and channels are easy to find.
- The main orchestration or decision point is obvious.
- Systems of record are not confused with agents or tools.
- Data, knowledge, and context sources are visible.
- Tool access layers, such as APIs, MCP tools, SaaS connectors, or deterministic services, are visible when relevant.
- Agent topology is clear enough to distinguish a single orchestrator from a specialized agent team when that matters.
- Agent-to-agent relationships are shown only as logical relationships, not protocol message formats.
- Human approval is visible when decisions or actions require it.
- Security, guardrails, audit, and monitoring are visible when relevant.
- Platform boundaries are visible when deployment matters.
- Arrows show meaningful flow, not every possible dependency.
- Node labels are concise and readable.
- Subgraphs represent real boundaries, not decoration.
- The diagram can be explained in under two minutes.

Common fixes:

- Split one crowded diagram into logical and deployment views.
- Replace vendor service names with logical names if no platform is confirmed.
- Add a legend only when symbols, colors, or line styles carry meaning.
- Move long explanations into text below the diagram.
