# Agent CLI Mode

Use this guide when operating AgenticFlow agents through CLI directly.

> **First-time setup?** See [CLI Setup](../cli-setup.md) for install and auth.

## Core Commands

```bash
# List agents
agenticflow agent list --limit 10 --json

# Create
agenticflow agent create --body @agent.json

# Read
agenticflow agent get --agent-id <agent_id> --json

# Update
agenticflow agent update --agent-id <agent_id> --body @agent-update.json

# Delete
agenticflow agent delete --agent-id <agent_id>

# Interact (stream)
agenticflow agent stream --agent-id <agent_id> --body @stream-input.json

# Reference impact analysis
agenticflow agent reference-impact --agent-id <agent_id> --json
```

## Template Duplication (Agent + Tool Workflows)

```bash
# Duplicate an agent template and its referenced workflow templates
agenticflow templates duplicate agent --template-id <agent_template_id> --json

# Cache-first resolution for referenced workflow templates
agenticflow templates duplicate agent --template-id <agent_template_id> --cache-dir .agenticflow/templates --json

# Dry-run from local template file
agenticflow templates duplicate agent --template-file .agenticflow/templates/agent/<file>.json --cache-dir .agenticflow/templates --dry-run --json
```

Use `--skip-missing-tools` when an agent template references workflow templates that no longer exist.

## Minimal Agent Payload

```json
{
  "name": "Support Agent",
  "description": "Handles support Q&A",
  "project_id": "<your_project_id>",
  "system_prompt": "You are a reliable support agent."
}
```

## Minimal Stream Payload

```json
{
  "messages": [
    {
      "role": "user",
      "content": "Summarize what this agent can do."
    }
  ]
}
```

## Required Acceptance Checks

Do not mark the task done unless these pass:

1. `agent create` succeeds and returns an id.
2. `agent get` returns the same id.
3. `agent update` succeeds for at least one safe field.
4. `agent stream` returns a usable response.
5. If tools are expected, include at least one prompt that forces tool use and verify the response is tool-backed.

For full done criteria and semantic parity requirements, see:
[../quality/acceptance-criteria.md](../quality/acceptance-criteria.md)
