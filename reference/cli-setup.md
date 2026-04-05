# CLI Setup

One-time setup to use the AgenticFlow CLI.

## Install

```bash
# Run directly (no install)
npx @pixelml/agenticflow-cli doctor

# Or install globally
npm install -g @pixelml/agenticflow-cli
```

For zero-context onboarding, run:

```bash
agenticflow playbook first-touch
agenticflow discover --json
agenticflow templates sync --json
agenticflow templates index --json
```

## Authentication

Three methods, in priority order:

| Method | How | Best for |
|--------|-----|----------|
| **Interactive login** | `agenticflow login` | First-time setup |
| **CLI flag** | `--api-key <key>` | One-off scripts |
| **Env var** | `export AGENTICFLOW_API_KEY=<key>` | CI/CD, automated agents |
| **Import .env** | `agenticflow auth import-env --file .env` | Batch import |

### Interactive Login (recommended)

```bash
agenticflow login
# Prompts for: API Key, Workspace ID, Project ID
# Saves to ~/.agenticflow/auth.json

# Verify
agenticflow whoami --json

# Remove credentials
agenticflow logout
```

### Import from .env

```bash
agenticflow auth import-env --file /path/to/.env
```

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `AGENTICFLOW_API_KEY` | API key |
| `AGENTICFLOW_WORKSPACE_ID` | Default workspace ID |
| `AGENTICFLOW_PROJECT_ID` | Default project ID |

> `AGENTICFLOW_PUBLIC_API_KEY` is accepted as a legacy fallback if `AGENTICFLOW_API_KEY` is not set.

> **For AI agents (Ishi, Claude):** Prefer `AGENTICFLOW_API_KEY` env var over interactive `af login`. Check auth status with `af whoami --json` first. If unauthenticated, guide the user to run `af login` in their terminal or set the env var.

## Preflight Check

Always run `doctor` first to validate your setup:

```bash
# Human-friendly check
agenticflow doctor --json

# CI-safe check (non-zero exit on required failures)
agenticflow doctor --json --strict
```

Expected output includes:

```json
{
  "schema": "agenticflow.doctor.v1",
  "config": true,
  "token": true,
  "tokenSource": "config",
  "workspaceId": "dc874879-...",
  "projectId": "01K7DZE...",
  "health": true,
  "operationsLoaded": 73
}
```

## Bootstrap Output Shape

`af bootstrap --json` returns the full workspace context -- use this as the entry point for all operations:

```json
{
  "schema": "agenticflow.bootstrap.v1",
  "auth": {
    "authenticated": true,
    "health": true,
    "workspace_id": "<uuid>",
    "project_id": "<uuid>"
  },
  "agents": [{ "id": "...", "name": "...", "model": "..." }],
  "schemas": ["agent", "workflow", "..."],
  "commands": {
    "run_agent": "af agent run --agent-id <id> --message <msg> --json",
    "create_agent": "af agent create --body <json> --dry-run --json",
    "deploy_to_paperclip": "af paperclip init --blueprint <id> --json"
  },
  "models": ["agenticflow/gemma-4-31b-it", "agenticflow/gemini-2.0-flash"],
  "blueprints": [{ "id": "...", "name": "...", "agents": 5 }],
  "playbooks": ["first-touch"],
  "whats_new": { "version": "1.3.1", "highlights": ["..."] },
  "_links": {
    "workspace": "https://agenticflow.ai/workspace/<id>",
    "connections": "https://agenticflow.ai/workspace/<id>/settings/connections",
    "mcp": "https://agenticflow.ai/workspace/<id>/settings/mcp",
    "settings": "https://agenticflow.ai/workspace/<id>/settings",
    "datasets": "https://agenticflow.ai/workspace/<id>/datasets"
  }
}
```

**Key fields:**
- `auth.authenticated` -- check this first; if false, run `af login` or set `AGENTICFLOW_API_KEY`
- `agents[]` -- existing agents in workspace; use their IDs for `af agent run`
- `commands` -- copy-paste ready commands for common operations
- `_links` -- web UI URLs to present to the user after each operation
- `blueprints[]` -- available company blueprints for `af paperclip init --blueprint <id>`

---

## First-Run Troubleshooting

Common issues when running AgenticFlow CLI for the first time:

### npx install fails

```bash
# Error: npm ERR! code E404 or network timeout
# Fix: Install globally instead
npm install -g @pixelml/agenticflow-cli
af bootstrap --json
```

### authenticated: false

```bash
# The API key is not set. Two options:

# Option A: Interactive login (requires terminal access)
af login

# Option B: Environment variable (preferred for AI agents)
export AGENTICFLOW_API_KEY=<key>
af bootstrap --json

# Get your API key at: https://agenticflow.ai/settings
```

### health: false

The AgenticFlow API is temporarily unavailable. Wait 1-2 minutes and retry `af bootstrap --json`.

### No agents in workspace

```bash
# Bootstrap shows agents: [] -- workspace is empty
# Install a pack to create agents:
af pack install PixelML/agent-skills/packs/tutor-pack --json
af paperclip init --blueprint tutor --json
```

---

## Template Bootstrap (Cold-Start)

Use local template cache to reduce trial-and-error for workflows/agents:

```bash
# Fetch samples from API and serialize locally
agenticflow templates sync --dir .agenticflow/templates --json
agenticflow templates index --dir .agenticflow/templates --json

# Duplicate from template ids (cache-first when --cache-dir is set)
agenticflow templates duplicate workflow --template-id <workflow_template_id> --cache-dir .agenticflow/templates --json
agenticflow templates duplicate agent --template-id <agent_template_id> --cache-dir .agenticflow/templates --json

# Cache-only dry-run from local template files
agenticflow templates duplicate agent --template-file .agenticflow/templates/agent/<file>.json --cache-dir .agenticflow/templates --dry-run --json
```

When `--cache-dir` is provided, duplicate commands resolve workflow templates from local cache first, then fall back to API.

## Global Options

Every command accepts:

| Flag | Purpose |
|------|---------|
| `--api-key <key>` | Override API key |
| `--workspace-id <id>` | Override workspace |
| `--project-id <id>` | Override project |
| `--spec-file <path>` | Custom OpenAPI spec |
| `--no-color` | Disable ANSI color output |
| `--json` | Force JSON output |

`--dry-run` is available on `agenticflow call` only.
