# ROM Package Workflow

## 1. Engagement Setup

Create or confirm an engagement workspace. Keep source inputs and generated outputs outside the skill directory.

Recommended workspace:

```text
rom-package-<slug>/
  inputs/
  source/
  editable-deck/
  visual-deck/slide-images/
  qa/
```

If the user provides a local HCLTech template path, use it only for that engagement. Do not copy proprietary templates into this skill repository.

## 2. Intake Normalization

Build a working intake table with these fields:

| Field | Guidance |
| --- | --- |
| Source | Meeting note, screenshot, file, manager comment, draft deck, email, transcript, or user statement. |
| Extracted point | The concise claim or requirement. |
| Certainty | Confirmed, Assumption, Open Question, Recommendation, or Validation Needed. |
| Impact | Scope, estimate, architecture, commercial, delivery, risk, or deck wording. |
| Follow-up | Question, validation action, or decision owner. |

## 3. Source Artifact Order

Produce source artifacts before decks:

1. `open-questions-validation-needs.md`
2. `assumptions-constraints-dependencies-risks.md`
3. `l1-architecture.md`
4. `rom-estimate.md`
5. `implementation-scaffold.md`
6. `deck-outline.md`

This order keeps uncertainty visible while the estimate and deck are being shaped.

## 4. Deck Production Order

1. Build the editable HCLTech deck from the approved source artifacts.
2. Add speaker notes to the editable working version.
3. Create the clean editable sharing version.
4. Convert selected slides into visual briefs for OpenAI polish.
5. Generate and review the visual slides.
6. Package visual deck variants.

## 5. Final Handoff

The handoff should name:

- What is confirmed.
- What is assumed.
- What must be validated before commercial commitment.
- Which artifact is the editable source of truth.
- Which artifact is the executive polish layer.
