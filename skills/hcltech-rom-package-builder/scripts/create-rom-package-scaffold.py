#!/usr/bin/env python3
"""Create a standard HCLTech ROM package workspace scaffold."""

from __future__ import annotations

import argparse
import re
from pathlib import Path


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", value.strip().lower()).strip("-")
    return slug or "rom-package"


def write_once(path: Path, content: str) -> None:
    if path.exists():
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser(description="Create an HCLTech ROM package scaffold.")
    parser.add_argument("name", help="Client, opportunity, or package name")
    parser.add_argument("--output-dir", default=".", help="Directory where the package folder should be created")
    parser.add_argument("--slug", default=None, help="Optional folder slug override")
    args = parser.parse_args()

    slug = slugify(args.slug or args.name)
    root = Path(args.output_dir).expanduser().resolve() / f"rom-package-{slug}"

    for directory in [
        "inputs",
        "source",
        "editable-deck",
        "visual-deck/slide-images",
        "qa",
    ]:
        (root / directory).mkdir(parents=True, exist_ok=True)

    title = args.name.strip()
    templates = {
        "source/rom-estimate.md": f"""# {title} ROM Estimate

## Estimate Summary

## Scope Basis

## Commercial Anchor

## POC / MVP / Production Boundary

## Workstreams

## Team / Pod Shape

## Timeline and Phasing

## Build-vs-Wrap Boundary

## Assumptions

## Constraints and Dependencies

## Risks and Mitigations

## Validation Needs

## Out of Scope

## Estimate Confidence
""",
        "source/l1-architecture.md": f"""# {title} L1 Architecture

## Executive Summary

## Goals and Non-Goals

## Stakeholders and Users

## Level 1 Logical Architecture

```mermaid
flowchart LR
  User["Users / Business Teams"] --> Channel["Channel / Workflow"]
  Channel --> Orchestration["Orchestration / Services / Agents"]
  Orchestration --> Tools["Tools / APIs"]
  Orchestration --> Data["Knowledge / Data Sources"]
  Tools --> Systems["Systems of Record"]
  Governance["Governance / Security / Audit / Observability"] --> Orchestration
```

## Build-vs-Wrap Boundary

## Security, Governance, and Operations

## Architecture Decisions

## Detailed Architecture Follow-On
""",
        "source/assumptions-constraints-dependencies-risks.md": f"""# {title} Assumptions, Constraints, Dependencies, and Risks

## Assumptions

## Constraints

## Dependencies

## Risks and Mitigations
""",
        "source/open-questions-validation-needs.md": f"""# {title} Open Questions and Validation Needs

## Open Questions

| Question | Owner | Impact | Needed By |
| --- | --- | --- | --- |

## Validation Needs

| Validation Item | Method | Impact on ROM |
| --- | --- | --- |
""",
        "source/implementation-scaffold.md": f"""# {title} Implementation Scaffold

## Candidate Repository / Project Structure

## Workstreams

## Environments

## Delivery Backlog Starter

## Quality Gates
""",
        "source/deck-outline.md": f"""# {title} Deck Outline

## Editable HCLTech Deck

1. Executive ROM Summary
2. Client Context and Business Problem
3. Proposed Solution Overview
4. L1 Logical Architecture
5. Build-vs-Wrap Boundary
6. POC / MVP / Production Path
7. Workstreams and Delivery Plan
8. Team / Pod Shape
9. ROM Estimate and Commercial Anchor
10. Key Assumptions and Dependencies
11. Risks and Mitigations
12. Open Questions and Validation Needs
13. Immediate Next Steps

## OpenAI Visual Polish Briefs
""",
        "qa/package-quality-checklist.md": f"""# {title} Package Quality Checklist

- [ ] ROM estimate Markdown complete
- [ ] L1 architecture Markdown complete
- [ ] Assumptions, constraints, dependencies, and risks captured
- [ ] Open questions and validation needs captured
- [ ] Implementation scaffold captured
- [ ] Editable HCLTech deck with notes created
- [ ] Editable HCLTech clean deck created
- [ ] OpenAI visual polish variant created if requested
- [ ] No secrets, proprietary templates, or generated client outputs committed to source repo
""",
        "qa/stakeholder-comment-log.md": f"""# {title} Stakeholder Comment Log

| Source | Comment | Disposition | Artifact Impact | Notes |
| --- | --- | --- | --- | --- |
""",
    }

    for relative_path, content in templates.items():
        write_once(root / relative_path, content)

    print(root)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
