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
