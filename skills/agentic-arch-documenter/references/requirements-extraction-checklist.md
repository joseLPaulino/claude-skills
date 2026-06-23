# Requirements Extraction Checklist

Use this when inputs are vague, incomplete, or distributed across PDFs, PowerPoints, notes, and discussions.

## Extract

- Business problem
- Desired outcomes
- Current process
- Users and personas
- Pain points
- Existing applications
- Systems of record
- Data sources
- Documents and knowledge sources
- Current manual decisions
- Exceptions and escalations
- Approval requirements
- Compliance constraints
- Deployment constraints
- Platform preferences
- Mandated services
- Prohibited technologies
- Integrations
- Success metrics
- Timeline and delivery constraints

## Classify

Use these labels:

- `Confirmed`: explicitly stated or directly supported by artifacts
- `Assumption`: inferred and reasonable, but not confirmed
- `Open Question`: unresolved and material
- `Recommendation`: proposed by the architect

## Clarify Only When Blocking

Ask a question only if a wrong assumption could materially affect security, compliance, cost, feasibility, or architecture shape.

Otherwise, proceed with a labeled assumption and include it in the document.

## Common Hidden Requirements

- Human approval thresholds
- Auditability and trace retention
- Data residency
- PII/PHI/PCI handling
- Identity provider integration
- Network isolation
- Model/provider restrictions
- Prompt and output governance
- Disaster recovery
- Operational ownership
- Cost monitoring
- User feedback and continuous improvement
