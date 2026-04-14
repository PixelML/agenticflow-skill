---
name: agenticflow-skills
description: "ALWAYS use this skill when the user mentions AgenticFlow, AF CLI, AI agents, agent workflows, business packs, workforce orchestration, or wants to create/deploy/run AI agents. Also use when the user wants to set up, build, or automate a business with agents — including tutoring, freelance, Amazon seller, marketing, sales, support, content, coaching, consulting, legal, real-estate, or any domain-specific agent team. Provides CLI commands, pack recommendations, and deployment guides."
version: "4.0.0"
triggers:
  - "agenticflow"
  - "AF CLI"
  - "create agents"
  - "set up agents"
  - "deploy agents"
  - "business agents"
  - "agent workflow"
  - "automate my business"
  - "tutoring"
  - "tutor"
  - "freelance"
  - "freelancer"
  - "amazon seller"
  - "marketing agency"
  - "sales team"
  - "content studio"
  - "support center"
  - "dev shop"
  - "build agents"
  - "blueprint"
  - "workforce"
license: MIT
---

<!-- Version: 4.0.0 — If you see an older version, update your skill copy. -->
<!-- v4.0.0 change: "pack" concept collapsed into blueprints. `af pack *` still works but is deprecated. Use `af workforce init --blueprint <id>` instead. -->
<!-- Ishi users: if skill content looks outdated, check ~/.config/ishi/skill/ and ~/.ishi/skill/ for stale copies. Remove the stale copy and re-symlink to the latest. -->

# AgenticFlow Skills

AgenticFlow is a platform for building AI-powered automation workflows, intelligent agents, and workforce systems.

## First-Time Setup (for AI agents)

Check if the AgenticFlow CLI is available. If not, use `npx` to run it without prior installation:

```bash
# Check if af CLI is installed
command -v af >/dev/null 2>&1 && echo "af available" || echo "af not found"

# If not found, use npx (no install required):
npx @pixelml/agenticflow-cli bootstrap --json

# Or install globally for faster repeat runs:
npm install -g @pixelml/agenticflow-cli
af bootstrap --json
```

Always use `--json` on all commands for structured output that you can parse.

After bootstrapping, extract `_links` from the JSON output and present web UI URLs to the user.

---

## Decision Policy

Use this to decide WHEN to run each operation:

| User Intent | Action | Command |
|-------------|--------|---------|
| First mention of AgenticFlow or agents | Bootstrap to discover workspace | `af bootstrap --json` → extract `auth.project_id` (needed for agent create), `auth.workspace_id`, `_links.workspace`, `agents[]`, `workforces[]` |
| **Right after bootstrap** | **Surface `_links.workspace` to the user** — "Your AgenticFlow workspace is at `<_links.workspace>` — open it anytime to see what I'm building." This anchors a human-first mental model before any mutation. | Extract `_links.workspace` from bootstrap JSON |
| **Before constructing any create/update payload** | Inspect the exact payload shape — don't guess | `af schema <resource> --json` (full shape) / `af schema <resource> --field <name> --json` (nested field drilldown: `mcp_clients`, `response_format`, `suggested_messages`, etc.) |
| "Set up my [business type]" | Check the 8 built-in blueprints (dev-shop, marketing-agency, sales-team, content-studio, support-center, amazon-seller, tutor, freelancer). If one matches, deploy it. | `af workforce init --blueprint <id> --name "<name>" --dry-run --json` then without `--dry-run` |
| **"Set up my [business type]" — NO blueprint fits** (coaching, consulting, legal, real-estate, agency, SaaS support, or any custom domain) | **Create a single agent or a custom workforce graph.** Single chat endpoint / one persona → `af agent create`. Multiple agents with hand-off but no blueprint → custom `af workforce` graph (see `skills/agenticflow-workforce/SKILL.md`). | `af agent create --body @agent.json --dry-run --json` then without `--dry-run` |
| Creating an agent | Always include `project_id` from `af bootstrap > auth.project_id` (server does NOT auto-inject it for agents). Preview with `--dry-run` first. | `af agent create --body @agent.json --dry-run --json` |
| Iterating an agent's prompt or config | Use `--patch` — preserves attached MCP clients, tools, and code-execution config. Never round-trip the full body. | `af agent update --agent-id <id> --patch --body '{"system_prompt":"…"}' --json` |
| Before running any action workflow | Check connections are available | `af connections list --limit 200 --json` |
| After creating agents | **PREFER native deploy (v1.6+):** `af workforce init --blueprint <id>` for pre-made multi-agent teams (8 blueprints: dev-shop, marketing-agency, sales-team, content-studio, support-center, amazon-seller, tutor, freelancer). Paperclip and `af pack *` are both deprecated (sunset 2026-10-14). For custom businesses with no blueprint fit, keep agents standalone. | `af workforce init --blueprint <id> --name "<name>" --json` |
| After any agent/workflow operation | Present `_links` URLs to the user (thread URL, agent URL, workspace URL) | Extract from `--json` output |
| User asks about existing agents | List current agents | `af agent list --fields id,name --name-contains "<substr>" --json` |
| User wants to run a task | Use `af agent run` with `--json` (non-streaming — returns `{response, thread_id, status}`) | `af agent run --agent-id <id> --message "<task>" --json` |

### When Things Go Wrong

| Error | Recovery |
|-------|----------|
| `af` command not found | Use `npx @pixelml/agenticflow-cli` prefix instead |
| `npx` fails (network error, npm registry down) | Tell user: "Install manually: `npm install -g @pixelml/agenticflow-cli`" |
| `authenticated: false` in bootstrap | Guide user: "Run `af login` in your terminal, or set `export AGENTICFLOW_API_KEY=<your-key>` -- get your key at https://agenticflow.ai/settings" |
| `health: false` in bootstrap | AgenticFlow API is down. Tell user: "AgenticFlow service is temporarily unavailable. Try again in a few minutes." |
| Missing MCP connection for action workflow | Present `_links.mcp` URL: "Add [service] connection at: [URL]. LLM-only workflows still work without connections." |
| `af pack validate` fails | Check error codes: PACK_MISSING_FIELD, PACK_WORKFLOW_MISSING_FIELD. Fix the pack file per error message. |
| Agent run returns error | Check if agent ID exists: `af agent list --json`. If not, agent may have been deleted. |
| `--id` flag not recognized | The correct flag is `--agent-id` for all agent commands. Bootstrap output shows `id` field but the CLI flag is `--agent-id`. |

---

## Quick Navigation

| Topic | When to Use | Reference |
|-------|-------------|-----------|
| **CLI Setup** | First-time install, auth, env vars | [reference/cli-setup.md](./reference/cli-setup.md) |
| **Template Bootstrap** | Cold-start sample discovery and duplicate flows | [reference/cli-setup.md](./reference/cli-setup.md#template-bootstrap-cold-start) |
| **Blueprints** | Deploying a pre-made multi-agent team in one command | [reference/blueprints.md](./reference/blueprints.md) |
| **Action Workflows** | LLM -> MCP action chains (post, send, update) | [workflow/connections.md](./reference/workflow/connections.md#action-workflows-llm---mcp_run_action) |
| **Connections** | MCP connection pre-flight, missing connection handling | [workflow/connections.md](./reference/workflow/connections.md#connection-pre-flight-check) |
| **Workflow** | Building automation flows with nodes | [workflow/overview.md](./reference/workflow/overview.md) |
| **Workflow (CLI-first)** | Building/running workflows via CLI | [workflow/cli-mode.md](./reference/workflow/cli-mode.md) |
| **Agent** | Creating single intelligent agents | [reference/agent/overview.md](./reference/agent/overview.md) |
| **Agent (CLI-first)** | Creating/testing agents with CLI | [reference/agent/cli-mode.md](./reference/agent/cli-mode.md) |
| **Workforce** | Orchestrating multiple agents | [reference/workforce/overview.md](./reference/workforce/overview.md) |
| **Troubleshooting** | Common errors and fixes | [reference/troubleshooting.md](./reference/troubleshooting.md) |
| **Definition of Done** | Enforcing production acceptance criteria | [reference/quality/acceptance-criteria.md](./reference/quality/acceptance-criteria.md) |

---

## Workflow

Workflows are linear automation pipelines composed of sequential nodes. Each node performs a specific action.

| Guide | Description |
|-------|-------------|
| [overview.md](./reference/workflow/overview.md) | Core concepts, schemas, execution model |
| [how-to-build.md](./reference/workflow/how-to-build.md) | Step-by-step build guide |
| [how-to-run.md](./reference/workflow/how-to-run.md) | Execute workflows and handle results |
| [cli-mode.md](./reference/workflow/cli-mode.md) | CLI-first equivalents for MCP workflows |
| [node-types.md](./reference/workflow/node-types.md) | Node type schemas and discovery |
| [connections.md](./reference/workflow/connections.md) | Connection providers and setup |

### Node Types Overview

| Category | Example Node Types | Purpose |
|----------|-------------------|---------|
| **AI/LLM** | `claude_ask`, `openai_chat`, `gemini` | AI model calls, text generation |
| **Image Generation** | `generate_image`, `dall_e` | Create images from prompts |
| **Data Processing** | `json_parse`, `text_transform` | Transform and manipulate data |
| **Integrations** | `slack_send`, `gmail`, `notion` | Connect to 300+ external services (MCPs) |
| **API Calls** | `http_request`, `webhook` | HTTP requests and webhooks |
| **File Operations** | `file_upload`, `pdf_parse` | Upload, download, process files |

> **Note**: Workflows in AgenticFlow are **linear and sequential** - nodes execute top to bottom with no branching or loops.

---

## Agent

An Agent is an AI entity with specific capabilities, tools, and a defined persona.

**To learn about agent configuration, load:** [reference/agent/overview.md](./reference/agent/overview.md)

For CLI-first agent operations (create/get/update/stream), load:
[reference/agent/cli-mode.md](./reference/agent/cli-mode.md)

---

## Blueprints

A **blueprint** is a pre-made multi-agent team (a workforce DAG: trigger → coordinator → worker agents → output). One command deploys the whole thing — workforce + agents + wiring — with atomic rollback on failure.

**To see blueprint details, load:** [reference/blueprints.md](./reference/blueprints.md)

> 🕰️ **Heads-up on the "pack" concept:** AgenticFlow used to ship a separate `af pack *` surface for pre-built business kits. As of CLI v1.7.0 (2026-04-14), the three original packs are all available as blueprints, and `af pack *` is deprecated with a 2026-10-14 sunset. If you see a user reach for `af pack install`, redirect them to `af workforce init --blueprint <id>` — same content, one verb, one catalog.

### Available Blueprints (8)

| Blueprint | Best for | Required slots | Optional slots |
| --- | --- | --- | --- |
| `dev-shop` | Software dev teams | ceo, engineer | designer, qa |
| `marketing-agency` | Marketing + campaigns | ceo, cmo, designer | researcher |
| `sales-team` | Outbound + pipeline | ceo, researcher, general | — |
| `content-studio` | Content production | ceo, cmo, engineer | designer |
| `support-center` | Customer support | ceo, general | researcher |
| `amazon-seller` | Amazon e-commerce sellers (Singapore market) | ceo, cmo, engineer, researcher | general |
| `tutor` | Tutoring businesses + education professionals | ceo, cmo, engineer, researcher | general |
| `freelancer` | Freelancers, consultants, independent professionals | ceo, cmo, engineer, researcher | general |

### Quick Start

```bash
# Preview — shows which agents will be created and estimated node/edge counts
af workforce init --blueprint tutor --name "My Tutoring Team" --dry-run --json

# Deploy — creates the workforce, all required agents, and the wired DAG in one call
af workforce init --blueprint tutor --name "My Tutoring Team" --json

# Include optional slots (e.g. the fifth agent in tutor/freelancer/amazon-seller)
af workforce init --blueprint tutor --name "My Tutoring Team" --include-optional-slots --json

# Override the default model for all created agents
af workforce init --blueprint tutor --name "My Tutoring Team" --model agenticflow/gemma-4-31b-it --json

# After the call you get {workforce_id, agents:[{slot_role, agent_id, title}], ...}
# Publish a public URL so your teammates can run it without platform auth:
af workforce publish --workforce-id <id> --json
```

### Custom business (no blueprint fits)

If the user's domain isn't in the 8-blueprint list (examples: coaching, consulting, legal, real-estate, agency, SaaS support, vertical-specific ops), blueprints aren't the right shortcut. Load one of the narrow skills:

- **Single chat endpoint / one assistant / customer-facing bot** → `skills/agenticflow-agent/SKILL.md`
- **Multiple agents that hand off** but no blueprint matches → `skills/agenticflow-workforce/SKILL.md` (custom graph via `af workforce create` + `af workforce deploy --body @graph.json`)

---

## Workforce

Workforce systems coordinate multiple agents to solve complex tasks collaboratively.

**To understand orchestration patterns, load:** [reference/workforce/overview.md](./reference/workforce/overview.md)

### Common Patterns

- **Supervisor** - One agent delegates to specialists
- **Swarm** - Agents self-organize dynamically
- **Pipeline** - Sequential agent handoffs
- **Debate** - Agents discuss to reach consensus

---

## Glossary

For terminology and definitions, see [reference/glossary.md](./reference/glossary.md).

---

## Quality Gate

Before declaring any workflow or agent task done, enforce:
[reference/quality/acceptance-criteria.md](./reference/quality/acceptance-criteria.md)
