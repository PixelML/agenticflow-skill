---
name: agenticflow-skills
description: "ALWAYS use this skill when the user mentions AgenticFlow, AF CLI, AI agents, agent workflows, business packs, workforce orchestration, or wants to create/deploy/run AI agents. Also use when the user wants to set up, build, or automate a business with agents — including tutoring, freelance, Amazon seller, marketing, sales, support, content, coaching, consulting, legal, real-estate, or any domain-specific agent team. Provides CLI commands, pack recommendations, and deployment guides."
version: "4.3.0"
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

<!-- Version: 4.3.0 — If you see an older version, update your skill copy. -->
<!-- v4.3.0 change: composition ladder (workflow/agent/workforce as rungs 0-6); 4 new workflow blueprints (llm-hello, llm-chain, summarize-url, api-summary); `af workflow init` command. -->
<!-- Ishi users: if skill content looks outdated, check ~/.config/ishi/skill/ and ~/.ishi/skill/ for stale copies. Remove the stale copy and re-symlink to the latest. -->

# AgenticFlow Skills

AgenticFlow is a platform for building AI-powered automation workflows, intelligent agents, and workforce systems.

**This skill is loaded by AI agents operating AgenticFlow on a user's behalf** — Ishi (AgenticFlow's first-party desktop agent), Claude Code, OpenAI Codex, Cursor, Gemini CLI, or any compatible host. The AgenticFlow CLI (`af`) is the shared contract every host uses. See the [Ecosystem overview](https://docs.agenticflow.ai/developers/ecosystem) for how the layers fit together.

## First-Time Setup (for AI agents)

**Invocation priority — try these in order, use the first that works.** The CLI installs as TWO binaries: `agenticflow` (canonical, 11 chars, collision-safe) and `af` (2-letter shortcut, sometimes claimed by unrelated tools like Python packages, homebrew formulas, shell aliases).

```bash
# 1. Preferred: full canonical binary. Rare to collide.
command -v agenticflow >/dev/null 2>&1 && agenticflow --version

# 2. Fallback: npx with the full package name. Works even with nothing installed.
npx --yes @pixelml/agenticflow-cli --version

# 3. Only use `af` if you've confirmed it's ours (prints a semver, not a Python traceback):
command -v af >/dev/null 2>&1 && af --version
```

**Critical — never use `npx af`.** `af` is a generic 2-letter name and npm has an unrelated package named `af`. `npx af` fetches the wrong package. Always use the full spec: `npx --yes @pixelml/agenticflow-cli <subcommand>`.

Once you've picked an invocation (call it `AF`), use it consistently for every command:

```bash
AF bootstrap --json     # orient — returns auth, agents, workforces, blueprints, etc.
```

Always use `--json` on all commands for structured output you can parse. After bootstrap, extract `_links` from the JSON output and present web UI URLs to the user.

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

## The composition ladder

AgenticFlow's three primitives — **workflow**, **agent**, **workforce** — are rungs on a complexity ladder. **Start at the lowest rung that solves the user's problem.** Each rung composes from the rungs below.

| Rung | Kind | Description | Deploy |
| --- | --- | --- | --- |
| 0 | workflow | trigger → llm → output (hello world) | `af workflow init --blueprint llm-hello` |
| 1 | workflow | llm_plan → llm_execute (chained reasoning) | `af workflow init --blueprint llm-chain` |
| 2 | workflow | web_retrieval → llm (enriched deterministic) | `af workflow init --blueprint summarize-url` |
| 3 | agent | single agent + node plugins (flexible) | `af agent init --blueprint research-assistant` |
| 4 | agent | agent + workflow-as-tool (roadmap) | — |
| 5 | agent | agent + sub-agents (lite MAS, roadmap) | — |
| 6 | workforce | multi-agent DAG with coordination | `af workforce init --blueprint parallel-research` |

Routing rule for AI operators: **if the user's need is deterministic and stepwise, pick workflow. If it needs tool-picking flexibility, pick agent. If it needs explicit multi-agent coordination, pick workforce.**

`af blueprints list [--kind <k>] [--complexity <n>] --json` returns every shipped blueprint with its rung. `af bootstrap --json > blueprints[]` surfaces the same data inline.

## Blueprints

A **blueprint** is a pre-made starter pattern. As of CLI v1.10.0 (2026-04-14) blueprints span the full ladder (rungs 0-3, 6):

**To see blueprint details, load:** [reference/blueprints.md](./reference/blueprints.md)

> 🕰️ **Heads-up on the "pack" concept:** AgenticFlow used to ship a separate `af pack *` surface for pre-built business kits. As of CLI v1.7.0 (2026-04-14), the three original packs are all available as blueprints, and `af pack *` is deprecated with a 2026-10-14 sunset. If you see a user reach for `af pack install`, redirect them to `af workforce init --blueprint <id>` (or `af agent init --blueprint <id>` for Tier 1) — same content, one verb, one catalog.

### Available Blueprints (20 — across rungs 0-3 and 6)

**Rungs 0-2: Workflow blueprints — deterministic chains. Need one LLM-provider connection (auto-discovered):**

| Blueprint | Rung | Nodes | Best for |
| --- | --- | --- | --- |
| `llm-hello` | 0 | llm | The simplest possible workflow — one LLM call |
| `llm-chain` | 1 | llm_plan → llm_execute | Plan-then-execute reasoning |
| `summarize-url` | 2 | web_retrieval → llm | Digesting an article URL |
| `api-summary` | 2 | api_call → llm | Explaining an unfamiliar JSON API response |

Deploy: `af workflow init --blueprint <id>`.

**Rung 3: Agent blueprints — single agent with built-in plugins (work in any workspace):**

| Blueprint | Best for | Plugins attached |
| --- | --- | --- |
| `research-assistant` | Research questions with cited sources | web_search, web_retrieval, api_call, string_to_json |
| `content-creator` | Blog posts + social drafts with hero images | web_search, web_retrieval, agenticflow_generate_image |
| `api-helper` | Arbitrary HTTP API calls + JSON parsing | api_call, string_to_json, web_search |

Deploy: `af agent init --blueprint <id>`.

**Rung 6: Workforce blueprints — multi-agent DAGs.**

Batteries-included (plugins pre-attached — work end-to-end with zero setup):

| Blueprint | Agents | Pattern |
| --- | --- | --- |
| `research-pair` | 2 | Planner → Researcher (web_search + web_retrieval) |
| `content-duo` | 2 | Writer (web_search) → Illustrator (generate_image) |
| `api-pipeline` | 2 | Fetcher (api_call) → Analyst |
| `fact-check-loop` | 2 | Writer → Fact Checker |
| `parallel-research` | 4 | Coordinator → 2 Researchers (parallel) → Synthesizer |

Deploy: `af workforce init --blueprint <id>`.

**Rung 6: Vertical workforce blueprints — generic agents, attach your own MCP tools after deploy:**

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

### Quick Start — Rung 0 (simplest workflow)

```bash
# Dry-run — see the workflow create payload
af workflow init --blueprint llm-hello --dry-run --json

# Deploy
af workflow init --blueprint llm-hello --json
# → returns { workflow_id }

# Run (pass the trigger's named input)
af workflow run --workflow-id <id> --input '{"question":"What is a unicorn?"}' --json
# → returns { id: run_id }
af workflow run-status --workflow-run-id <run_id> --json
# → poll until status=success; `.output.content` is the LLM's answer
```

### Quick Start — Rung 3 (agent + plugins, zero setup)

```bash
# Dry-run — prints the agent + plugin config
af agent init --blueprint research-assistant --dry-run --json

# Deploy — creates ONE agent with all plugins attached (~4 plugins for research-assistant)
af agent init --blueprint research-assistant --json
# → returns { agent_id, plugins: [...], _links.agent }

# Smoke-test — runs the agent with a real query that exercises web_search
af agent run --agent-id <id> --message "Latest news about X?" --json
```

### Quick Start — Rung 6 (multi-agent workforce)

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

### Blueprint vs Marketplace

Blueprints are offline, versioned, CLI-shipped. The marketplace (`af marketplace *`, new in v1.8.0) is the live user/admin-curated catalog — three template kinds (`agent_template`, `workflow_template`, `mas_template`) unified under one endpoint. Browse: `af marketplace list --limit 50 --json`. Clone: `af marketplace try --id <item> --dry-run --json`. Full comparison: `af playbook marketplace-vs-blueprint` or load [reference/marketplace.md](./reference/marketplace.md).

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
