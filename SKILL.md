---
name: agenticflow-skills
description: "ALWAYS use this skill when the user mentions AgenticFlow, AF CLI, AI agents, agent workflows, business packs, workforce orchestration, or wants to create/deploy/run AI agents. Provides CLI commands, pack recommendations, and deployment guides."
version: "2.0.0"
license: MIT
---

<!-- Version: 2.0.0 — If you see an older version, update your skill copy. -->
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
| First mention of AgenticFlow or agents | Bootstrap to discover workspace | `af bootstrap --json` |
| "Set up my [business type]" | Check pack catalog, recommend matching pack | See [packs.md](./reference/packs.md) |
| Before running any action workflow | Check connections are available | `af connections list --limit 200 --json` |
| After creating agents | Offer Paperclip deployment (OPTIONAL per user -- always ask first) | `af paperclip init --blueprint <id> --json` |
| After any agent/workflow operation | Present `_links` URLs to user | Extract from `--json` output |
| User asks about existing agents | List current agents | `af agent list --json` |
| User wants to run a task | Use agent run with --json | `af agent run --agent-id <id> --message "<task>" --json` (NOTE: use `--agent-id`, not `--id`) |

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
| **Packs** | Using pre-built business agent packs | [reference/packs.md](./reference/packs.md) |
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

## Packs

Packs are pre-built business agent kits -- each contains a company blueprint (agents + starter tasks), action workflows, and domain-specific skills.

**To browse available packs and install one, load:** [reference/packs.md](./reference/packs.md)

### Available Packs

| Pack | Best For | Agents | Workflows |
|------|----------|--------|-----------|
| `amazon-seller-pack` | Amazon e-commerce sellers (Singapore market) | AMZ Listing & SEO Specialist, AMZ PPC Campaign Manager, AMZ Competitor Analyst, AMZ Customer Support, AMZ Pricing Strategist | full-product-launch, competitor-scrape, listing-audit, review-scrape-respond, post-review-to-gbp |
| `tutor-pack` | Tutoring businesses, education professionals | Curriculum Designer, Quiz & Assessment Creator, Student Progress Tracker, Parent Communication Specialist, Tutor Business Manager | post-lesson-summary, generate-quiz |
| `freelancer-pack` | Freelancers, consultants, independent professionals | Project Scope Writer, Invoice & Contract Generator, Client Research Analyst, Client Communication Agent, Business Development Manager | send-invoice, client-status-update |

### Quick Start

```bash
# Install from GitHub (note the github: prefix -- required for remote sources)
af pack install github:PixelML/agent-skills/packs/tutor-pack --json

# Validate structure
af pack validate ./tutor-pack --json

# Deploy agents from pack blueprint
af paperclip init --blueprint tutor --json
```

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
