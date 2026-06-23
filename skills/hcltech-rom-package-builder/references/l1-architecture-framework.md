# L1 Architecture Framework

Use **agentic-arch-documenter** for the architecture document and **architecture-diagram-designer** for diagrams. This reference adds ROM-specific boundaries.

## L1 Content Needed For ROM

The L1 architecture should support estimation, not replace detailed design. Include:

- Actors and channels.
- Major logical components.
- Agent, automation, workflow, or service responsibilities.
- Knowledge, data, tools, and systems of record.
- Integration boundaries.
- Human-in-the-loop approvals.
- Security, governance, audit, observability, and operations.
- Deployment posture if known.
- Build-vs-wrap decisions or assumptions.

## Required ROM Architecture Questions

- Which capabilities can be configured or wrapped from existing platforms?
- Which capabilities require custom build?
- What data sources need access, cleansing, indexing, migration, or governance approval?
- Which integrations require client API teams, credentials, networking, or vendor involvement?
- What approvals, audit trails, and operational controls are required?
- What must be validated before the ROM can become a proposal or SOW estimate?

## Diagram Guidance

For Level 1, prefer one clear logical diagram with these zones:

```text
Users / Channels -> Orchestration / Workflow / Agents -> Tools / APIs / Data / Systems of Record
                         Governance / Security / Audit / Observability as cross-cutting controls
```

Use Mermaid in Markdown. Convert to native PowerPoint shapes for the editable deck when practical.
For the visual polish deck, convert the same approved diagram story into a visual brief.

## POC / MVP / Production Split

| Layer | POC | MVP | Production |
| --- | --- | --- | --- |
| User channel | Lightweight demo or controlled user path | Pilot-ready workflow | Enterprise UX and support model |
| Data | Sample or limited data set | Approved pilot sources | Governed production sources |
| Integrations | Mock, export, or limited API | Key APIs connected | Full operational integrations |
| Governance | Basic review and logging | Pilot controls and approvals | Full audit, monitoring, compliance |
| Operations | Manual support | Pilot runbook | Production runbook and SLOs |
