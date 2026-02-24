# CLI Setup

One-time setup to use the AgenticFlow CLI.

## Install

```bash
# Run directly (no install)
npx @pixelml/agenticflow-cli doctor

# Or install globally
npm install -g @pixelml/agenticflow-cli
```

## Authentication

Three methods, in priority order:

| Method | How | Best for |
|--------|-----|----------|
| **CLI flag** | `--api-key <key>` | One-off scripts |
| **Env var** | `export AGENTICFLOW_API_KEY=<key>` | CI/CD, automated agents |
| **Config file** | `agenticflow auth import-env --file .env` | Persistent dev setup |

### Import from .env

```bash
# Import API credentials into ~/.agenticflow/auth.json
agenticflow auth import-env --file /path/to/.env

# Verify
agenticflow whoami --json
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
agenticflow doctor --json
```

Expected output:
```json
{
  "config": true,
  "token": true,
  "tokenSource": "config",
  "workspaceId": "dc874879-...",
  "projectId": "01K7DZE...",
  "health": true,
  "operationsLoaded": 73
}
```

All fields should be `true`. If `token` is `false`, fix your auth first.

## Global Options

Every command accepts:

| Flag | Purpose |
|------|---------|
| `--api-key <key>` | Override API key |
| `--workspace-id <id>` | Override workspace |
| `--project-id <id>` | Override project |
| `--json` | Force JSON output |
| `--spec-file <path>` | Custom OpenAPI spec |
