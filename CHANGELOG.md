# Changelog

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
