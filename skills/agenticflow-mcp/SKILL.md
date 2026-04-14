---
name: agenticflow-mcp
description: "Attach external tool providers (Google Docs, Google Sheets, Slack, Notion, GitHub, Apify, etc.) to an AgenticFlow agent via MCP clients. Use when the user wants their agent to read or write external data, call third-party APIs, save outputs to a doc/sheet, or use any tool beyond the model's built-in knowledge. Covers `af mcp-clients list --name-contains`, `af mcp-clients inspect --id` (classify pattern before attach), and the Pipedream vs Composio write-capability distinction — critical for parametric writes. Route traffic through the `af` CLI; the standalone `agenticflow-mcp` server repo lags the CLI and is not recommended."
compatibility: Claude Code, Claude Desktop, Codex, Cursor, Gemini CLI
metadata:
  author: PixelML
  version: "3.0.0"
  license: MIT
triggers:
  - "mcp"
  - "mcp client"
  - "attach tools"
  - "give my agent tools"
  - "google docs"
  - "google sheets"
  - "notion"
  - "slack"
  - "github"
  - "apify"
  - "external tool"
  - "tool integration"
  - "pipedream"
  - "composio"
---

# AgenticFlow MCP

> 🚫 **Do NOT install the legacy `agenticflow-mcp` standalone server repo.** It is stale (last release lags the current platform by many versions) and is **not the recommended integration path**. Everything below uses the `af` CLI (install via `npm install -g @pixelml/agenticflow-cli`), which covers MCP operations comprehensively and stays in lockstep with platform changes.

MCP (Model Context Protocol) clients are the tool-provider layer that lets an agent read or write external systems — Google Docs, Google Sheets, Slack, Notion, GitHub, Apify, Gmail, Pinterest, YouTube, and many more. A workspace usually has many MCP clients already configured; your job is to **pick the right one and verify it's safe before attaching** to an agent.

## Orient first

Before touching MCP clients, run:

```bash
af bootstrap --json
```

Extract `auth.workspace_id` + `_links.mcp` (the web UI URL for MCP management). **Surface `_links.mcp` to the user**: *"Your MCP connections live at `<_links.mcp>` — you can add or re-authenticate providers there if any inspections fail."* If `data_fresh: false`, the backend is degraded — don't mutate.

## The one pattern that matters: inspect before attach

Not all MCP clients are equal. There are two major families, and one of them breaks on writes.

```bash
af mcp-clients list --name-contains "google sheets" --fields id,name,is_authenticated --json
af mcp-clients inspect --id <mcp_client_id> --json
```

`inspect` classifies the tool set and returns a `pattern` field:

| pattern | Meaning | Safe to attach? |
| --- | --- | --- |
| `composio` | Structured schemas with multiple named fields (e.g. `spreadsheetId`, `range`, `values`) | ✅ Yes — writes work reliably |
| `pipedream` | Every tool has a single `{instruction: string}` input | ⚠️ Read-only tools fine. Parametric writes (`add-row`, `update-cell`, `append`) may get stuck in a `configure_props_<tool>_props` loop — the tool configures but never executes |
| `mixed` | Some structured, some instruction-only | Restrict allowlist to the structured (Composio-style) tools only |
| `unknown` | Tool list couldn't be enumerated | **Do not attach.** Check `classification_reason` + `fetch_error` in the response. Re-auth via the web UI if needed |

`inspect` also returns `known_quirks[]` — read it. If it contains a warning about `configure_props_<tool>_props`, you've been warned; do not attach that client for writes.

## Attach shape (use `--patch`, not full-body update)

```bash
af agent update --agent-id <agent_id> --patch --body '{
  "mcp_clients": [
    {
      "mcp_client_id": "<id-from-inspect>",
      "run_behavior": "auto_run",
      "description": "Google Sheets for logging outputs",
      "timeout": 150,
      "tools": {
        "GOOGLESHEETS_SPREADSHEETS_VALUES_APPEND": {"allowed": true},
        "GOOGLESHEETS_VALUES_UPDATE": {"allowed": true},
        "GOOGLESHEETS_DELETE_SHEET": {"allowed": false}
      }
    }
  ]
}' --json
```

`tools` is a per-tool allow/block map. Block destructive ops (`DELETE_*`, `CLEAR_*`) unless the use case explicitly needs them. The CLI's `--patch` merges this over the current agent — existing MCP clients and other config are preserved.

## Verify auth state (list vs. get can disagree)

`af mcp-clients list` returns a cached `is_authenticated` that can be stale. If something is off, reconcile:

```bash
af mcp-clients list --verify-auth --json
# For each row, also calls `get` and adds verified_is_authenticated + verified_auth_mismatch.
# N+1 call — use when debugging, not on every run.
```

If `classification_reason` in `inspect` is `fetch_failed` or `unauthenticated`, re-auth the client in the web UI at `/workspaces/<ws>/mcp/<client_id>` before attaching.

## Smoke test after attach

```bash
af agent run --agent-id <agent_id> --message "Try writing 'hello' to row 1" --json
# Expect status: "completed" + a response that actually shows the write happened.
# If the model claims success without a real write, you're probably on a broken MCP — re-inspect.
```

## On failures

- `pattern: "pipedream"` + write attempt → `TOOL_CONFIGURATION_COMPLETED` or `configure_props_<tool>_props` in the response. Switch to a Composio-backed client (many workspaces have both).
- `mcp-clients inspect` returns `classification_reason: "fetch_failed"` → the MCP provider's backend is down or the OAuth session expired. Open the web UI, re-auth, retry.
- Silent success (model says "done" but no actual write) → 99% of the time it's a Pipedream write quirk. Re-inspect, switch provider.

## Reference

- [cli-setup.md](https://github.com/PixelML/agenticflow-skill/blob/main/reference/cli-setup.md) — install + auth
- [packs.md](https://github.com/PixelML/agenticflow-skill/blob/main/reference/packs.md)
- [troubleshooting.md](https://github.com/PixelML/agenticflow-skill/blob/main/reference/troubleshooting.md)
- [glossary.md](https://github.com/PixelML/agenticflow-skill/blob/main/reference/glossary.md)
