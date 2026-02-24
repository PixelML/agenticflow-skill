# AgenticFlow Skills

> **Comprehensive guide for building AI workflows, agents, and workforce systems with AgenticFlow.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## Overview

This skill provides reference documentation for designing and building with the AgenticFlow platform:

- **Workflows** — Linear automation pipelines with sequential nodes
- **Agents** — Single intelligent AI entities with tools and personas
- **Workforce** — Multi-agent orchestration systems

## Installation

Install this skill in your AI assistant to get contextual guidance when working with AgenticFlow.

## Documentation Structure

```
reference/
├── workflow/          # Workflow building guides
│   ├── overview.md
│   ├── how-to-build.md
│   ├── how-to-run.md
│   ├── cli-mode.md
│   ├── node-types.md
│   └── connections.md
├── agent/             # Agent configuration
│   ├── overview.md
│   └── cli-mode.md
├── workforce/         # Multi-agent orchestration
│   └── overview.md
├── quality/           # Definition of done and acceptance gates
│   └── acceptance-criteria.md
└── glossary.md        # Terminology reference
```

## Quick Start

| Building... | Start Here |
|-------------|------------|
| Cold-start template bootstrap | [reference/cli-setup.md](./reference/cli-setup.md#template-bootstrap-cold-start) |
| Automation workflow | [workflow/overview.md](./reference/workflow/overview.md) |
| CLI-first workflow automation (no MCP) | [workflow/cli-mode.md](./reference/workflow/cli-mode.md) |
| Single AI agent | [agent/overview.md](./reference/agent/overview.md) |
| CLI-first agent operations | [agent/cli-mode.md](./reference/agent/cli-mode.md) |
| Multi-agent system | [workforce/overview.md](./reference/workforce/overview.md) |
| Production done criteria | [quality/acceptance-criteria.md](./reference/quality/acceptance-criteria.md) |

## Key Concepts

### Workflows

Sequential node-based automations. Supports 300+ integrations including:

- **AI/LLM**: Claude, OpenAI, Gemini
- **Image Gen**: DALL-E, Stable Diffusion
- **Integrations**: Slack, Gmail, Notion, and more

### Agents

Configurable AI entities with:

- Custom system prompts
- Tool/MCP access
- Knowledge bases

### Workforce Patterns

- **Supervisor** — Delegation to specialists
- **Swarm** — Self-organizing agents
- **Pipeline** — Sequential handoffs
- **Debate** — Consensus through discussion

## License

MIT
