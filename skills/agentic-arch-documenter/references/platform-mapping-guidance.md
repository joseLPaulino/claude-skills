# Platform Mapping Guidance

Use this when mapping a logical architecture to a platform. Do not force a platform mapping if the user asked for a platform-neutral design.

## Platform-Neutral First

Describe capabilities before vendor services:

- user channel
- API layer
- workflow/orchestration
- model inference
- agent tools
- knowledge retrieval
- vector search
- data processing
- system integration
- identity and access
- secrets
- observability
- audit
- human approval

## If A Platform Is Specified

Prefer the target platform's native services where sensible, but keep mandated services and existing enterprise systems.

Document:

- chosen service
- reason for selection
- alternatives
- portability impact
- operational owner

## If No Platform Is Specified

State that the architecture is platform-neutral. Optionally include a concise mapping table:

| Capability | Platform-neutral | AWS candidate | Azure candidate | Google Cloud candidate |
|---|---|---|---|---|
| Model inference | LLM runtime | Bedrock | Azure OpenAI / Foundry | Vertex AI |
| Workflow | Orchestrator | Step Functions / Bedrock Agents | Logic Apps / Durable Functions | Workflows |
| Knowledge retrieval | RAG / vector store | Knowledge Bases / OpenSearch | AI Search | Vertex AI Search / Vector Search |
| API | Managed API gateway | API Gateway | API Management | API Gateway |
| Observability | Logs, traces, metrics | CloudWatch / X-Ray | Monitor / App Insights | Cloud Logging / Trace |

Use only rows relevant to the use case.

## Hybrid and SaaS

If the customer uses SaaS platforms or on-prem systems, show them as first-class systems of record. Do not imply they must be replaced by cloud-native components.
