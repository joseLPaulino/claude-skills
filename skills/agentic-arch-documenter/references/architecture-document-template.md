# Architecture Document Template

Use this as the default Level 1 architecture document structure.

## Title and Version

- Document title
- Customer or project
- Date
- Author / team
- Version

## Executive Summary

Summarize the business problem, proposed solution, and expected value in 2-4 paragraphs.

## Business Problem or Opportunity

Describe the current pain, target opportunity, affected users, business impact, and urgency.

## Goals and Non-Goals

Separate what the architecture is intended to accomplish from what it intentionally excludes.

## Scope

Define in-scope processes, user groups, systems, data domains, channels, geographies, and deployment environments.

## Stakeholders and Users

List users, operators, approvers, business owners, security/compliance stakeholders, and platform teams.

## Confirmed Inputs

Capture explicit customer statements, source artifact facts, and mandated constraints.

## Assumptions

List assumptions required to make the L1 design actionable.

## Functional Requirements

Group requirements by capability, for example intake, triage, retrieval, reasoning, tool execution, approval, notification, audit, reporting, and administration.

## Non-Functional Requirements

Include security, privacy, compliance, latency, availability, scalability, auditability, observability, resilience, cost, maintainability, and portability.

## Platform and Deployment Constraints

Capture target cloud or hyperscaler, required services, prohibited services, network model, data residency, regulated data handling, identity integration, and deployment ownership.

## Level 1 Architecture Overview

Describe the architecture at a logical level:

- actors and channels
- orchestration layer
- agent roles
- deterministic services and workflow components
- tools and APIs
- knowledge and data layer
- systems of record
- human-in-the-loop points
- governance and operations

## Architecture Diagram

Include Mermaid. Use a platform-neutral view unless a platform is specified.

## Agentic / AI Design

For the agentic or AI design, define:

- agent topology, such as single orchestrator, ReAct-style agent, supervisor/worker team, planner/executor, workflow-first automation, or specialized agent team
- responsibility for each agent or AI component
- inputs
- context sources, such as RAG, enterprise knowledge bases, hyperscaler knowledge services, document repositories, operational data stores, customer/business systems, or session context
- tool access model, such as MCP tools, internal APIs, SaaS connectors, workflow actions, deterministic services, or agent-to-agent protocols
- outputs
- guardrails
- failure mode
- human approval criteria

Keep protocol mechanics, tool schemas, prompt chains, vector chunking, model routing, and agent-to-agent message formats out of Level 1 unless they are mandated constraints.

## Data, Tool, and System Integrations

Identify source systems, APIs, data movement, read/write boundaries, system-of-record ownership, and integration risks.

## Security, Governance, and Compliance

Include identity, authorization, secrets, data protection, prompt/input controls, model governance, audit logs, approval gates, and policy enforcement.

## Observability and Operations

Include logging, tracing, metrics, human review queue, incident handling, model quality monitoring, feedback loops, and runbooks.

## Architecture Decisions

Use short ADR-like entries:

- Decision
- Rationale
- Alternatives considered
- Consequences

## Risks and Mitigations

List business, technical, operational, security, compliance, data quality, and adoption risks.

## Open Questions

List questions that must be answered to move to detailed architecture or POC.

## POC Candidate Scope

Define a small, testable scope:

- one or two user journeys
- representative data
- limited integrations
- success criteria
- demo outputs
- what will not be production-ready

## Next Steps

Give pragmatic next actions for discovery, validation, detailed design, POC build, stakeholder review, or platform mapping.
