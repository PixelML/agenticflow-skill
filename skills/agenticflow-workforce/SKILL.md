---
name: agenticflow-workforce
description: "Deploy and operate a multi-agent AgenticFlow workforce — a DAG of agents that hand off to each other (trigger → coordinator → worker agents → output). Use when the user asks for a team, pipeline, or multi-agent system: research-then-write, triage-then-specialist, dev shop, marketing agency, sales team, content studio, support center, Amazon seller team. Choose this skill over agenticflow-agent when the ask mentions 'team', 'workforce', 'pipeline', 'multiple agents', 'delegation', 'handoff', or names a built-in blueprint. Provides the `af workforce *` command surface, blueprint decisions, graph wiring, MCP attach recipes, and public URL publishing."
compatibility: Claude Code, Claude Desktop, Codex, Cursor, Gemini CLI
metadata:
  author: PixelML
  version: "3.0.0"
  license: MIT
triggers:
  - "workforce"
  - "multi-agent"
  - "agent team"
  - "deploy a team"
  - "agent pipeline"
  - "research-then-write"
  - "triage-then-specialist"
  - "dev shop"
  - "marketing agency"
  - "sales team"
  - "content studio"
  - "support center"
  - "amazon seller"
  - "blueprint"
---

# AgenticFlow Workforce

A workforce is an AgenticFlow-native **DAG of agents** — typically `trigger → coordinator agent → worker agents → output` — that hand off structured results to each other. Use this when orchestration between roles matters.

## ⚠️ When NOT to use this skill

If the user wants a **single chat endpoint, a customer-facing bot, one assistant, or routing-by-prompt inside one agent**, use `agenticflow-agent` instead. A single-agent solution with rules in the system prompt is simpler, cheaper, and easier to iterate on. Workforces are for genuine multi-role orchestration.

## Orient first

```bash
af bootstrap --json
```

Returns `auth`, `agents`, `workforces`, `blueprints`, `commands`, `playbooks`, `whats_new`, `_links`. Extract:

- `auth.project_id` — required for agent creation
- `blueprints[]` — the 6 built-in team templates, each with required/optional slot counts
- `workforces[]` — any existing workforces in the workspace (empty initially is normal; check `data_fresh` if false means the backend was unreachable, not the workspace empty)

If `data_fresh: false` in the bootstrap response, the backend is degraded — **do not mutate**. Run `af doctor --json --strict` and fix auth/network before proceeding.

## The 6 built-in blueprints

| Blueprint | Required slots | Optional |
| --- | --- | --- |
| `dev-shop` | ceo, engineer | designer, qa |
| `marketing-agency` | ceo, cmo, designer | researcher |
| `sales-team` | ceo, researcher, general | — |
| `content-studio` | ceo, cmo, engineer | designer |
| `support-center` | ceo, general | researcher |
| `amazon-seller` | ceo, cmo, engineer, researcher | general |

## One-command deploy (v1.6+)

Always preview with `--dry-run` first:

```bash
af workforce init --blueprint <slug> --name "<name>" --dry-run --json
af workforce init --blueprint <slug> --name "<name>" --json
```

`init` creates the workforce + one real agent per required slot + the wired graph — in a single atomic call. On failure, every resource is rolled back automatically; inspect `details.rolled_back_agents` and `details.rolled_back_workforce` in the error.

Use `--include-optional-slots` to fill every slot, not just required ones. Use `--model <id>` (e.g. `agenticflow/gemini-2.0-flash`) to override the default model for all auto-created agents.

## Custom workforce (no blueprint fits)

If the user's ask is a precise custom pipeline that no blueprint matches (e.g. a 2-step researcher → writer flow that doesn't fit the 3–5-agent blueprints), skip blueprints:

1. Inspect the expected graph shape:
   ```bash
   af schema workforce --field schema --json
   ```
2. Create metadata only:
   ```bash
   af workforce create --body '{"name":"Raul Content Pipeline","description":"..."}' --json
   ```
3. Create each agent separately via `af agent create` (see `agenticflow-agent` skill).
4. Build a graph JSON with `trigger → researcher (agent node, agent_id from step 3) → writer (agent node) → output`.
5. Deploy the graph atomically:
   ```bash
   af workforce deploy --workforce-id <id> --body @graph.json --json
   ```
6. Validate:
   ```bash
   af workforce validate --workforce-id <id> --json
   ```

Edge `connection_type` is one of `next_step`, `condition`, `ai_condition`. Agent nodes **require** a real `agent_id` in `input`.

## Run + publish

```bash
af workforce run --workforce-id <id> --trigger-data '{"message":"..."}'
# Streams SSE events — each line is one JSON event. The CLI auto-wraps your
# payload in {trigger_data: ...} — don't wrap it yourself.

af workforce publish --workforce-id <id> --json
# Mints a public_key + public_url — hand this to teammates so they can run the
# workforce without platform auth.

af workforce versions publish --workforce-id <id> --version-id <v> --json
# Snapshot + publish a specific version (draft/published/restore workflow).
```

## Attach MCP tools per agent (not per workforce)

MCP clients attach to individual agents, not to the workforce graph. After `init`, use:

```bash
af mcp-clients list --name-contains "google sheets" --fields id,name --json
af mcp-clients inspect --id <mcp_id> --json       # Check pattern before attach
af agent update --agent-id <agent_id> --patch --body '{"mcp_clients":[{"mcp_client_id":"<id>","run_behavior":"auto_run","tools":{}}]}' --json
```

See the `agenticflow-mcp` skill for the Pipedream vs Composio write-safety distinction.

## Cleanup

Workforces + agents are billed while they exist. Delete test deploys:

```bash
af workforce delete --workforce-id <id> --json
# For each auto-created agent id captured from init:
af agent delete --agent-id <id> --json
```

Both return `{"schema":"agenticflow.delete.v1","deleted":true,"id":"...","resource":"..."}` on success.

## On errors

All API errors return `{schema: "agenticflow.error.v1", code, message, hint, details}`. Read `hint` first — it points at the recovery command (e.g. `af <resource> list` on a 404). For 422s, inspect `details.payload.detail` for field-level errors.

`workforce run` occasionally returns a backend `Failed to retrieve user info for user_id: api_key:...` 400 — this is a known server-side issue with API-key auth, not a CLI bug.

## Reference

- [cli-setup.md](https://github.com/PixelML/agenticflow-skill/blob/main/reference/cli-setup.md) — install + auth
- [packs.md](https://github.com/PixelML/agenticflow-skill/blob/main/reference/packs.md) — blueprint details
- [troubleshooting.md](https://github.com/PixelML/agenticflow-skill/blob/main/reference/troubleshooting.md)
- [glossary.md](https://github.com/PixelML/agenticflow-skill/blob/main/reference/glossary.md)
