---
name: agenticflow-agent
description: "Create, run, and iterate on a single AgenticFlow AI agent — one chat endpoint, one assistant, one persona. Use when the user wants a customer-facing bot, a support assistant, a single task agent, or a prompt experiment. Choose this skill over agenticflow-workforce when there's no orchestration between roles (no handoff, no coordinator → workers). Covers `af agent create/update/run/delete`, the `--patch` partial-update pattern for iteration, `af schema agent --field <name>` for nested payload shapes (including suggested_messages, mcp_clients, response_format), the `model_user_config` / `code_execution_tool_config` settings, and safe iteration loops."
compatibility: Claude Code, Claude Desktop, Codex, Cursor, Gemini CLI
metadata:
  author: PixelML
  version: "3.0.0"
  license: MIT
triggers:
  - "create an agent"
  - "build an agent"
  - "agent configuration"
  - "system prompt"
  - "support bot"
  - "customer-facing bot"
  - "single agent"
  - "agent persona"
  - "agent update"
  - "patch agent"
  - "iterate on agent"
  - "agent run"
  - "agent delete"
---

# AgenticFlow Agent

A single AI agent with a system prompt, model, optional MCP tool attachments, and an optional code-execution sandbox. Use this when one chat surface + one set of rules is enough.

## ⚠️ When NOT to use this skill

If the user needs **multiple agents that hand off to each other** (research → write, triage → specialist, a pre-built team template), use `agenticflow-workforce` instead. Don't over-engineer — a support bot with "if billing/refunds/privacy, escalate to email" is one agent, not three.

## Orient first

```bash
af bootstrap --json
```

From the response, extract:

- `auth.project_id` — **required** on agent create (server does not auto-inject for agents, unlike workforces)
- `auth.workspace_id`
- `_links.workspace` — **surface this URL to the user right away**: *"Your AgenticFlow workspace is at `<_links.workspace>` — open it anytime to see what I'm building."* Anchors a human-first mental model before any mutation
- `models[]` — use as source of truth for model ids (don't hardcode — they change between CLI releases)
- `agents[]` — so you don't duplicate existing work

If `data_fresh: false` in the response, the backend is degraded — don't mutate. Run `af doctor --json --strict` and fix auth/network first.

## Inspect payload shape before writing

```bash
af schema agent --json
af schema agent --field mcp_clients --json          # Nested attach shape
af schema agent --field suggested_messages --json   # {title, label, action} — NOT strings
af schema agent --field response_format --json      # Structured output config
af schema agent --field update --json               # Update + null-rejected fields list
```

The `--field` drilldown returns the documented shape for a single field. Use it instead of guessing.

## Create (always preview first)

```bash
af agent create --body @agent.json --dry-run --json
af agent create --body @agent.json --json
```

Minimum valid payload:

```json
{
  "name": "My Support Assistant",
  "tools": [],
  "project_id": "<from bootstrap auth.project_id>",
  "model": "agenticflow/gemini-2.0-flash",
  "system_prompt": "You are ..."
}
```

**Available models** live in `af bootstrap --json > models[]` — always read from there rather than hardcoding a list in your logic (models ship between CLI releases). The CLI validates your model string at create time: typos fail fast with an actionable hint listing the known set. If you pass a `vendor/model-name`-shaped string not in the known list, it warns-but-proceeds so brand-new models work before the CLI is updated.

## Run (smoke test)

```bash
af agent run --agent-id <id> --message "Test prompt" --json
# Returns {response, thread_id, status}.

af agent run --agent-id <id> --thread-id <tid> --message "continue" --json
# Pass the same thread_id to keep conversation context; omit it to start fresh.
```

Use `af agent stream` for SSE token-level streaming if you need it; `run` is better for scripted tests.

## Iterate with --patch (the cornerstone pattern)

Never round-trip the full agent body to change one field:

```bash
# WRONG — full-body replace loses attached MCPs / tools / code_exec config if omitted
af agent update --agent-id <id> --body @updated.json

# RIGHT — partial update, everything else preserved
af agent update --agent-id <id> --patch --body '{"system_prompt":"new prompt"}' --json
af agent update --agent-id <id> --patch --body '{"model":"agenticflow/gpt-4o-mini"}' --json
af agent update --agent-id <id> --patch --body '{"mcp_clients":[{"mcp_client_id":"<id>","run_behavior":"auto_run","tools":{}}]}' --json
```

The CLI auto-strips null-rejected fields (`knowledge`, `recursion_limit`, `task_management_config`, `suggest_replies_*`, `file_system_tool_config`, `attachment_config`, `response_format`, `skills_config`). Stripped fields are logged to stderr so bots don't think they cleared a field they didn't.

## Attach an MCP tool provider

See the `agenticflow-mcp` skill for the full inspect-before-attach flow. Short version:

```bash
af mcp-clients list --name-contains "google sheets" --fields id,name --json
af mcp-clients inspect --id <mcp_id> --json
# Only proceed if pattern != "pipedream" with write_capable_tools
af agent update --agent-id <agent_id> --patch --body '{"mcp_clients":[{...}]}' --json
```

## Cleanup

```bash
af agent delete --agent-id <id> --json
# Returns {"schema":"agenticflow.delete.v1","deleted":true,"id":"...","resource":"agent"}
```

## On errors

Every API error returns a consistent envelope with an actionable `hint`. Common 4xx and their hints:

- **404** → "Run the matching `list` command to see available IDs" (or double-check the ID)
- **422** → "Check `details.payload` for field-level errors" (pydantic returns the offending field)
- **401** → "Run `af whoami` / `af login`"

When `hint` is non-empty, follow it before retrying.

## Reference

- [cli-setup.md](https://github.com/PixelML/agenticflow-skill/blob/main/reference/cli-setup.md) — install + auth
- [troubleshooting.md](https://github.com/PixelML/agenticflow-skill/blob/main/reference/troubleshooting.md)
- [glossary.md](https://github.com/PixelML/agenticflow-skill/blob/main/reference/glossary.md)
