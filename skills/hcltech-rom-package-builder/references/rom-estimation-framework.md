# ROM Estimation Framework

## ROM Principles

A ROM is a directional estimate, not a detailed delivery plan. Use ranges, confidence levels, and assumptions when discovery is incomplete. Make the commercial anchor clear enough for sales, delivery, and leadership to discuss without pretending precision.

## Agentic Delivery Model Alignment

When the ROM is for agentic delivery, classify scope using `references/agentic-delivery-model.md` before defending timelines:

- Use PoC language only for sandboxed feasibility work. Gold PoC is capped at five days.
- Use MVP Solution for 1-6 week work in customer production/integration environments, real controlled data, durable code, handover, or production route work.
- Use Pilot Solution for 1-6 month work involving broader rollout, sustained adoption, stronger NFRs, operational ownership, or production evolution.
- Start the active build clock only after gravel-track readiness is sufficient: pod roles, customer roles, access, licenses, backlog, architecture context, and validation path.
- Frame commercial units as whole pod days or pod weeks where the agentic pod model is being used.

Do not defend a 10-16 week effort as a PoC. If the work is that long, it is usually MVP Solution, Pilot Solution, production hardening, or a bundled path across stages.

## Required Sections

1. Estimate Summary
2. Scope Basis
3. Commercial Anchor
4. POC / MVP / Production Boundary
5. Workstreams
6. Team / Pod Shape
7. Timeline and Phasing
8. Build-vs-Wrap Boundary
9. Assumptions
10. Constraints and Dependencies
11. Risks and Mitigations
12. Validation Needs
13. Out of Scope
14. Estimate Confidence

## Commercial Anchor

The commercial anchor should explain:

- What the ROM includes.
- What delivery horizon it represents.
- Whether this is POC, MVP, production rollout, or phased.
- The primary cost drivers.
- Which assumptions would move the number materially.
- Which client decisions are needed before firm pricing.

## Team / Pod Shape

Use roles rather than named people unless the source material names resources:

| Role | Typical responsibility |
| --- | --- |
| Engagement / Delivery Lead | Scope, governance, plan, stakeholder alignment. |
| Solution Architect | L1/L2 architecture, integration boundaries, NFRs. |
| AI / Agent Engineer | Agent design, tool use, orchestration, evaluation harness. |
| Data / Integration Engineer | APIs, data flows, retrieval sources, pipelines. |
| UX / Product Designer | User journey, prototype, workflow fit. |
| QA / Evaluation Lead | Test strategy, acceptance criteria, quality gates. |
| Security / Compliance SME | Access, data handling, audit, risk review. |

Scale the pod to the stated scope. For small POCs, combine roles explicitly as an assumption.

## Build-vs-Wrap Boundary

Classify each major capability:

| Capability | Wrap / Configure | Build / Extend | Notes |
| --- | --- | --- | --- |
| User experience | Existing portal, Teams, CRM, workflow tool | Custom UI, workflow app | State default assumption. |
| Agent orchestration | Existing platform or accelerator | Custom agent service | Tie to complexity and governance. |
| Knowledge / RAG | Existing search, KB, vector platform | New ingestion and retrieval layer | Name data readiness risks. |
| Integrations | Existing APIs/connectors | New API facade or adapters | Identify dependency owners. |
| Governance | Existing IAM, logging, compliance tooling | Custom policy, evaluation, audit controls | Keep audit and approval visible. |

## Open Questions And ROM Duration

When the L1 architecture contains open questions, validation needs, or unresolved platform/deployment decisions, the ROM must translate them into estimate impact.

Add a ROM section that states:

- Which open questions could change the delivery classification, duration, pod count, specialist support, or phase boundary.
- Whether each answer could keep the work as Gold PoC, move it to MVP Solution, or require Pilot Solution / production adoption.
- Which questions must be answered before proposal or SOW commitment.
- A client-ready expectation statement that the ROM will be revised if inputs, access, platform choices, integration paths, or validation requirements differ from current assumptions.

Recommended table columns:

| Open Question | Why It Affects Effort | Likely ROM Impact If Unresolved Or Complex |
| --- | --- | --- |

## Estimate Confidence

Use simple confidence labels:

- High: scope, systems, data, and acceptance criteria are known.
- Medium: core scope is known, but some integrations or data conditions need validation.
- Low: discovery is still required, or the estimate depends on unresolved platform/commercial decisions.
