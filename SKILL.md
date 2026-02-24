---
name: agenticflow-skills
description: Comprehensive guide for building AI workflows, agents, and workforce systems with AgenticFlow. Use when designing workflows with various node types, configuring single agents, or orchestrating workforce collaboration patterns.
license: MIT
---

# AgenticFlow Skills

AgenticFlow is a platform for building AI-powered automation workflows, intelligent agents, and workforce systems.

## Quick Navigation

| Topic | When to Use | Reference |
|-------|-------------|-----------|
| **CLI Setup** | First-time install, auth, env vars | [reference/cli-setup.md](./reference/cli-setup.md) |
| **Template Bootstrap** | Cold-start sample discovery and duplicate flows | [reference/cli-setup.md](./reference/cli-setup.md#template-bootstrap-cold-start) |
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
