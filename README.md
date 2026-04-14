# AgenticFlow AI Toolkit

> Connect your AI tools to the AgenticFlow platform.

The toolkit gives your agent (Claude Code, OpenAI Codex, Cursor, Gemini CLI, …) access to AgenticFlow: build AI agents, deploy multi-agent workforces, inspect and attach MCP tool providers, and automate operations via the `af` CLI.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

## Install

- **Claude Code** — run these in a chat:

  ```
  /plugin marketplace add PixelML/agenticflow-skill
  /plugin install agenticflow-plugin@agenticflow-ai-toolkit
  ```

- **Cursor** — install from the Cursor Marketplace (search "AgenticFlow").

- **Gemini CLI** — run:

  ```bash
  gemini extensions install https://github.com/PixelML/agenticflow-skill
  ```

- **OpenAI Codex CLI** — in Codex, run `/plugins`, search **AgenticFlow**, and select **Add to Codex**.

- **VS Code / other** — open the Command Palette and run **Chat: Install Plugin From Source**, then paste:

  ```
  https://github.com/PixelML/agenticflow-skill
  ```

## Prerequisites

The skills assume the `af` CLI is installed:

```bash
# Quick try (no install)
npx @pixelml/agenticflow-cli bootstrap --json

# Global install (recommended for daily use)
npm install -g @pixelml/agenticflow-cli
```

Requires Node.js 18+.

### Get authenticated

1. **Get an API key.** Sign in at [app.agenticflow.ai](https://app.agenticflow.ai) → **Settings → API Keys** → **Create key**. Copy the `a9w_...` token.
2. **Link the CLI.** Either run `af login` (interactive — prompts for API key, workspace ID, and project ID; saves to `~/.agenticflow/auth.json`) OR export env vars in your shell:
   ```bash
   export AGENTICFLOW_API_KEY=a9w_xxxxx
   export AGENTICFLOW_WORKSPACE_ID=<your-workspace-uuid>
   export AGENTICFLOW_PROJECT_ID=<your-project-ulid>
   ```
   Use env vars for CI/CD; `af login` for a dev machine.
3. **Verify.** Run `af doctor --json --strict` — should exit 0 with `health: true`. If it fails, the `hint` in the error envelope will tell you exactly what to fix.
4. **Orient.** Run `af bootstrap --json` — this is always the first command of every session. It returns auth, agents, workforces, blueprints, playbooks, and a commands cheat-sheet in one call.

## What you get

Three flagship skills auto-route based on your prompt:

| Skill | When it fires | What it covers |
| --- | --- | --- |
| **agenticflow-workforce** | "team", "multi-agent", "pipeline", blueprint names (`dev-shop`, `marketing-agency`, `amazon-seller`, …) | `af workforce *`, blueprint decisions, graph wiring, publish + public URL |
| **agenticflow-agent** | "create/build an agent", "support bot", "customer assistant", "system prompt" | `af agent *`, `--patch` iteration pattern, schema drilldown |
| **agenticflow-mcp** | "mcp", "attach tools", provider names (google sheets/docs, notion, slack, gmail, etc.) | `af mcp-clients inspect/list/get`, Pipedream vs Composio write-safety, attach shape |

Long-form reference material stays in [`reference/`](./reference/) — CLI setup, business packs, troubleshooting, glossary.

## Auto-updates

Plugins update automatically as new capabilities land in the CLI. Major surface changes (e.g. the workforce deploy in v1.6) propagate to the skills once the plugin is refreshed.

## Other install methods

If your platform doesn't support plugins, install the skills directly from this repo or use the `af` CLI standalone:

- [Skills (monolithic legacy copy)](./SKILL.md) — single file, still works
- [CLI Reference Library](./reference/) — markdown pages usable by any LLM

The **standalone MCP server** (`agenticflow-mcp` repo) significantly lags the CLI and is **not recommended**. Use the `af` CLI (via `npm install -g @pixelml/agenticflow-cli`) instead.

## Contributing

We don't accept external pull requests. Any pull requests will be automatically closed.

PixelML employees: open pull requests against the upstream source repository rather than this mirror.

## License

MIT
