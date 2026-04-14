# Changelog

## 4.0.0 — 2026-04-14

Concept consolidation — **"pack" is gone**.

Before this release AgenticFlow had 3 concepts a new user had to learn:

- **Pack** (bundle you install: 3 existed — amazon-seller-pack, tutor-pack, freelancer-pack)
- **Blueprint** (workforce template: 6 existed)
- **Playbook** (guide you read: 14)

With `amazon-seller` existing as BOTH a pack AND a blueprint, and `tutor-pack` / `freelancer-pack` having no blueprint at all, the overlap was confusing — round-5 fresh-subagent tests showed users trying `--blueprint coaching` (which doesn't exist) instead of realizing packs were a shortcut for only 3 verticals.

Now there are **2 concepts**:

- **Blueprint** (8 of them now — includes `tutor` and `freelancer` absorbed from the legacy packs)
- **Playbook** (14)

### Changed
- Root `SKILL.md` "Packs" section removed; replaced with unified "Blueprints" section listing all 8
- `reference/packs.md` renamed → `reference/blueprints.md`; content rewritten with every blueprint's required + optional slots, suggested marketplace templates, deploy command, full response shape, and the fallback rule for custom businesses that don't fit a blueprint
- `skills/agenticflow-workforce/SKILL.md` blueprint table updated 6 → 8
- Root `SKILL.md` Decision Policy + Quick Navigation now reference Blueprints (and blueprints.md), not Packs
- `triggers[]` in root SKILL.md frontmatter: added `blueprint`; removed `paperclip` and `agent pack` / `business pack` (pack concept sunset)
- All 8 plugin manifests bumped 3.0.1 → 4.0.0
- Root `SKILL.md` frontmatter: `version: "3.0.1"` → `"4.0.0"`

### Deprecated
- `af pack install` / `validate` / `run` / `list` / `uninstall` — emits per-subcommand stderr warning, sunset 2026-10-14. Use `af workforce init --blueprint <id>` instead.

### Migration map
| Legacy | v4.0.0 |
| --- | --- |
| `af pack install github:PixelML/agent-skills/packs/amazon-seller-pack` | `af workforce init --blueprint amazon-seller --name "<name>" --json` |
| `af pack install github:.../tutor-pack` | `af workforce init --blueprint tutor --name "<name>" --json` |
| `af pack install github:.../freelancer-pack` | `af workforce init --blueprint freelancer --name "<name>" --json` |

### Companion release
Ships alongside `@pixelml/agenticflow-cli@1.7.0` — the new `tutor` and `freelancer` blueprints live in the CLI; this skill repo teaches AIs how to use them.

## 3.0.1 — 2026-04-14

Friction fixes from round-5 clean-subagent test (minimal user prompt, "build an agent for my FlowUp Coaching business"). All fixes docs-only — no CLI version required.

### Fixed
- **Root `SKILL.md` Decision Policy** now has explicit rows for:
  - "First mention" → extract `auth.project_id` AND `_links.workspace` (surfacing the workspace URL to the user is now a first-class action, not buried in prose)
  - "Set up my [business type] — NO pack fits" → routes to `agenticflow-agent` (for custom businesses like coaching, consulting, legal, real-estate, agency, SaaS — NOT just the 3 packs)
  - "Before constructing any create/update payload" → use `af schema <resource> --field <name> --json` drilldown (previously only mentioned in nested skills)
  - "Iterating an agent's prompt or config" → use `--patch` (preserves attached MCPs/tools)
  - "Creating an agent" → explicit `auth.project_id` reference
- **Packs table** now has a "No pack fits?" row pointing at `skills/agenticflow-agent/SKILL.md` — previously a fresh AI would try `--blueprint coaching` before realizing packs are a shortcut for just 3 verticals
- **Root SKILL.md Quick Start** now leads with `af workforce init --blueprint` (native v1.6+) and demotes `af paperclip init` to a deprecated note
- **Three flagship skill "Orient first" blocks** (workforce / agent / mcp) now explicitly tell the AI to extract and surface `_links.*` URLs to the user — anchors a human-first mental model before mutations
- **Agent skill** no longer hardcodes model list; points at `af bootstrap > models[]` as source of truth

### Version bumps
- All 8 manifests: 3.0.0 → 3.0.1 (`.claude-plugin/`, `.codex-plugin/`, `.cursor-plugin/`, `gemini-extension.json`, root `plugin.json`, `package.json`)
- Root `SKILL.md` frontmatter: `version: "2.0.1"` → `"3.0.1"` (was stale)

### Scope expansion
- Root SKILL.md description expanded: added `coaching`, `consulting`, `legal`, `real-estate` to the trigger list (captures realistic custom-business asks that don't map to the 3 built-in packs)

## 3.0.0 — 2026-04-14

Major restructure: multi-IDE plugin distribution + skill split.

### Added
- **Claude Code plugin**: `.claude-plugin/plugin.json` + `marketplace.json`
- **OpenAI Codex plugin**: `.codex-plugin/plugin.json` with full `interface` block (displayName, brandColor, defaultPrompt, category, capabilities)
- **Cursor plugin**: `.cursor-plugin/plugin.json` + `marketplace.json`
- **Gemini CLI extension**: root `gemini-extension.json`
- **Generic plugin fallback**: root `plugin.json`
- **Three narrow flagship skills** replacing the monolithic SKILL.md:
  - `skills/agenticflow-workforce/SKILL.md` — multi-agent DAG deploy, blueprint decisions, graph wiring, MCP attach recipes, publish
  - `skills/agenticflow-agent/SKILL.md` — single-agent create/run/update/delete with `--patch` iteration
  - `skills/agenticflow-mcp/SKILL.md` — MCP inspect-before-attach, Pipedream vs Composio distinction, write-safety rules
- **Sync script stub**: `scripts/sync-from-cli.mjs` — design doc + forcing function for future CLI-to-skill content sync
- `CHANGELOG.md`

### Changed
- Root `SKILL.md` kept as fallback/index for existing consumers; new users should install via IDE plugin marketplaces and pick up the three narrow skills
- `package.json` repurposed for distribution (`private: true`, new description)
- `README.md` rewritten to lead with plugin install paths (Claude `/plugin install`, Gemini `extensions install`, Cursor marketplace, Codex `/plugins`)
- All plugin manifests declare `version: 3.0.0`

### Removed
- Nothing removed — existing `SKILL.md` and `reference/*.md` remain for backward compatibility

### Notes on `agenticflow-mcp` (separate repo)
The standalone `agenticflow-mcp` server exists but significantly lags the `af` CLI (`@pixelml/agenticflow-cli`). Both the CHANGELOG and the new `agenticflow-mcp` skill recommend the `af` CLI as the canonical integration path. The standalone server is no longer the recommended install.

## 2.0.1 — 2026-04-06
- fix: improve skill triggers and clarify Paperclip deployment for custom packs

## 2.0.0
- feat: update SKILL.md with decision policy, error recovery, packs section
- feat: add reference/cli-setup.md, reference/packs.md, reference/troubleshooting.md, reference/glossary.md
