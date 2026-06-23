# ailab-jpaulino-claude-skills

HCLTech AI Lab — Jose Paulino's Claude/Cowork skill library.

**Toolchain:** Anthropic Claude (Cowork + Claude Code)
**Parallel repo:** `../ailab-jpaulino-codex-skills` — same skills ported for OpenAI Codex
**GitHub:** `github-company:I190144-CloudNative-220007A152/ailab-jpaulino-claude-skills.git`

---

## Structure

```
ailab-jpaulino-claude-skills/
├── skills/                  # One folder per skill, each containing SKILL.md
│   └── <skill-name>/
│       ├── SKILL.md         # Skill definition (Claude SKILL.md format)
│       ├── references/      # Reference docs read at runtime by the skill
│       ├── scripts/         # Supporting scripts (Python, Node.js, etc.)
│       └── agents/          # Sub-agent definitions (when applicable)
├── tests/                   # Test prompts and expected outputs per skill
│   └── <skill-name>/
│       ├── test-prompt.md
│       └── outputs/
└── README.md
```

---

## Skills

| Skill | Description | Codex counterpart | Status |
|-------|-------------|-------------------|--------|
| `agentic-arch-documenter` | Creates L1/L2/L3 agentic architecture docs from any customer input | `agentic-architecture-documenter` | ✅ Active |
| `architecture-diagram-designer` | Designs Mermaid architecture diagrams; produces visual design briefs | `architecture-diagram-designer` | ✅ Active |
| `hcltech-rom-package-builder` | Builds complete HCLTech ROM packages (source MD → editable PPTX → visual deck) | `hcltech-rom-package-builder` | ✅ Active |
| `hcltech-slide-artist-openai` | Generates HCLTech-branded raster slide images via OpenAI Images API | `hcltech-slide-artist-openai` | ✅ Active |
| `hcltech-slide-artist` | Generates HCLTech-branded raster slide images via Gemini image generation | `hcltech-slide-artist` | ⏳ Pending — not yet in Codex repo; port when source is available |

---

## Skill Pipeline

These skills build on each other in a defined order:

```
Customer brief / sales input
        │
        ▼
agentic-arch-documenter          ← L1/L2/L3 architecture Markdown
        │
        ├──► architecture-diagram-designer   ← Mermaid diagrams
        │
        ▼
hcltech-rom-package-builder      ← ROM estimate + editable HCLTech PPTX
        │
        ▼
hcltech-slide-artist-openai      ← Visual polish raster deck (PNG/JPEG slides)
```

---

## Conventions

- **Naming:** kebab-case skill folder names. Claude names may differ slightly from Codex counterparts for clarity.
- **Skill references:** Claude skills reference `docx` and `pptx` skills (not `documents`/`presentations` as in Codex).
- **Reference files:** Stored in `skills/<name>/references/`. Populated from Codex originals where available.
- **Scripts:** `scripts/` folder contains supporting Node.js and Python scripts copied or adapted from the Codex counterpart.
- **Template paths:** HCLTech brand templates are at `/Users/jose.paulino/Documents/HCLTech-brand-templates` on this machine.
- **Tests:** Mirror the Codex `tests/` structure — one subfolder per skill with a test prompt and `outputs/` folder.

---

## Installing Skills into Cowork

Package a skill with:

```bash
cd skills/
zip -r <skill-name>.skill <skill-name>/
```

Then open the `.skill` file in Cowork and click **Save skill**.

---

## Relationship to Codex Skills

Skills are ported from `ailab-jpaulino-codex-skills` and adapted for Claude's SKILL.md format:

- Codex skill references to `documents` → Claude `docx` skill
- Codex skill references to `presentations` → Claude `pptx` skill
- `~/.codex/skills/` paths → updated to Claude skills location
- Reference files are shared in content; minor wording differences where Claude's instruction style differs

When a Codex skill is updated, review and update the Claude version to match.

---

## Adding a New Skill

1. Create `skills/<skill-name>/SKILL.md` using Claude's frontmatter format (`name`, `description`).
2. Add `references/` with any files the skill reads at runtime.
3. Add `scripts/` for any supporting executable code.
4. Add a test case in `tests/<skill-name>/test-prompt.md`.
5. Update the Skills table above.
6. Package: `zip -r <skill-name>.skill <skill-name>/`
7. Commit and push to `github-company:I190144-CloudNative-220007A152/ailab-jpaulino-claude-skills.git`

---

## Git Remote Setup

```bash
# From the repo root
git remote add origin github-company:I190144-CloudNative-220007A152/ailab-jpaulino-claude-skills.git
git push -u origin main
```

SSH host alias `github-company` must be defined in `~/.ssh/config` (same config as the Codex skills repo).
