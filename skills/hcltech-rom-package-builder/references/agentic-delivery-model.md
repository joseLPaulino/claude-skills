# Agentic Delivery Model Reference

Use this reference when classifying agentic delivery work, defending ROM timelines, shaping team/pod structure, or explaining why a multi-week integration effort should not be called a PoC.

This is a distilled skill reference derived from the internal AI Labs agentic delivery model. Do not copy the source PDF into the skill repository unless explicitly approved.

## Core Delivery Unit

Use **agentic pod** as the delivery unit for Labs-led agentic delivery. Avoid generic terms such as team, resources, or staffing when the agentic pod model is intended.

An agentic pod has three stable responsibility anchors:

| Responsibility | Primary Concern | Core Question |
| --- | --- | --- |
| Context Architect | Outcome, context, standards, constraints, solution shape | What must shape the work? |
| Value Engineer | Orchestration, implementation, agent direction, useful increments | What is worth building next, and how should agents execute it? |
| Quality Engineer | Verification, safety, release confidence, production readiness | Can we prove this is correct, safe, and ready? |

These are responsibilities, not mandatory job titles. Every engagement must cover all three.

Name one **pilot in command** for each engagement. This person owns delivery coherence, model integrity, scope trade-offs, escalation, and the thread from intent to verified outcome.

## Delivery Ladder

| Level | Typical Duration | Environment | Data | Output |
| --- | ---: | --- | --- | --- |
| Immediate Engagement | 1 hour | Local tooling | Synthetic/in-session | Demo artifact, feasibility note, next-step recommendation |
| Bronze PoC | 1 day | Secure local sandbox | Synthetic/demo | Example output demo, learnings, next-step recommendation |
| Silver PoC | 3 days | Secure sandbox/local/isolated cloud | Representative synthetic/demo by default | Executive-ready demo, recording, MVP approval pack |
| Gold PoC | 5 days | Secure isolated cloud sandbox | Prepared representative synthetic/demo | Executive-ready demo, MVP specification, build plan, de-risking artifacts |
| MVP Solution | 1-6 weeks | Production or integration environment | Real controlled data | Production-ready codebase/pipelines, operational docs, handover, ROI dashboard |
| Pilot Solution | 1-6 months | Production or integration environment | Real data | Feature-complete application, NFRs, operational handover, optional evolution retainer |

## Classification Rules

- A Gold PoC is capped at five days and runs in a sandbox. Do not stretch PoC language into multi-week production or integration work.
- If the agentic pod must work inside a customer production or integration environment, classify the engagement at least as an MVP Solution.
- If the output is expected to be durable, maintainable, handed over, or part of a production route, classify it at least as an MVP Solution.
- If the work involves broader rollout, multiple variants, stronger NFRs, sustained adoption, or production evolution, classify it as a Pilot Solution.

## Gravel Track Readiness

The gravel track is the minimum viable working environment that lets an agentic pod work safely, repeatedly, and with evidence.

| Readiness Area | Evidence Needed |
| --- | --- |
| Agentic pod confirmed | Named Context Architect, Value Engineer, Quality Engineer, and pilot in command |
| Customer roles confirmed | Product owner, technical owner, governance contact, SMEs |
| Access confirmed | Repositories, tools, environments, documentation, backlog system, communication route |
| License position confirmed | Agent tools, cloud services, development tools, customer systems approved/licensed |
| Backlog ready | Initial roadmap, prioritized backlog, acceptance criteria, or problem statements |
| Architecture context available | Existing architecture, constraints, integration points, standards, known risks |
| Validation path agreed | Test data, quality gates, review process, evidence location, acceptance route |

## Customer Participation

| Customer Role | Expected Contribution |
| --- | --- |
| Customer product owner | Backlog priority, roadmap trade-offs, acceptance decisions, day-to-day clarification |
| Technical owner | Architecture context, environment access, integration constraints, technical review |
| Domain or business SME | Workflows, edge cases, operating rules, terminology, value expectations |
| Security or governance contact | Data boundaries, approvals, policies, access rules, release constraints |
| Operations or support owner | Handover, support model, runbooks, observability, operational readiness |

## Commercial Framing

| Unit | Meaning | Internal Effort Equivalent |
| --- | --- | ---: |
| 1 person-day | One person's effort for one day | 1 person-day |
| 1 pod day | One full delivery day of a three-role agentic pod | 3 person-days |
| 1 pod week | Five pod days for a three-role agentic pod | 15 person-days |

Do not quote fractional pod days or pod weeks externally. Keep individual rates internal.

## ROM Wording Patterns

- "This is a Gold PoC only if it is capped at five days, sandboxed, and produces de-risking evidence rather than durable production work."
- "Because this work touches customer integration paths, real data, controlled updates, or handover, it should be classified as an MVP Solution at minimum."
- "The active build clock starts after gravel-track readiness: access, tools, customer roles, backlog, architecture context, and validation path must be available."
- "The ROM is sized around verified increments, not generated output volume. Quality and evidence set the delivery pace."
