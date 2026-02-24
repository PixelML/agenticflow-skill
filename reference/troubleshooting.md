# CLI Troubleshooting

Common errors and how to fix them.

## Connection Not Found

```text
Error: Request failed with status 400: Connection 67ebf4cc-... not found
```

**Cause**: The workflow references a connection ID that does not exist in this workspace.

**Fix**: The CLI has smart connection resolution built in. Re-run the workflow and the CLI will:

1. Identify which nodes use the missing connection
2. Look up the required connection category from the node type
3. List available connections matching that category
4. Prompt you to select a replacement
5. Update the workflow and retry

```bash
agenticflow workflow run --workflow-id <id> --input @input.json
# ⚠  Connection 67ebf4cc-... not found.
#    Available connections (category: pixelml):
#      [1] ✓ pixelml_2  (pixelml)  id: 100ab0b7-...
#    Select connection # (or 's' to skip): 1
#    ✓ Workflow updated. Re-running...
```

Manual fix path:

```bash
# Find connections (use --limit to get all, default is 10)
agenticflow connections list --limit 200 --json

# Find what category a node needs
agenticflow node-types get --name google_search --json
# Look at: connection.connection_category -> "pixelml"
```

## operation_not_found

```json
{
  "schema": "agenticflow.error.v1",
  "code": "operation_not_found",
  "message": "Operation not found: getAgentModel",
  "hint": "Try one of: get_all_v1_agents__get, ..."
}
```

**Cause**: Stale or incorrect OpenAPI operation ID.

**Fix**:

```bash
agenticflow ops list --public-only --json
agenticflow ops show <operation_id>
```

Use one of the suggested IDs from the `hint` field.

## invalid_option_value

```json
{
  "schema": "agenticflow.error.v1",
  "code": "invalid_option_value",
  "message": "Invalid value for --limit: banana"
}
```

**Cause**: Non-integer or out-of-range value passed to numeric flags (`--limit`, `--offset`, `--top`).

**Fix**: Use valid integers (`--limit >= 1`, `--offset >= 0`, `--top >= 1`).

## 401 Error Decoding Token

```text
Error: Request failed with status 401: Error decoding token
```

**Cause**: Some endpoints require a user session token (JWT), not an API key. Known examples are UI-only actions.

**Fix**: Use the web UI for those operations.

## 422 Validation Errors

```text
Error: Request failed with status 422: [{"type":"missing","loc":["body","nodes"],...}]
```

**Cause**: The payload is missing required fields.

**Fix**: Read the `loc` field to identify missing properties. Common required fields for workflow create/update:

- `nodes` (at least one node)
- `output_mapping`
- `input_schema`
- `project_id`
- `public_runnable` (boolean, required for updates)

## local_schema_validation_failed

```json
{
  "schema": "agenticflow.error.v1",
  "code": "local_schema_validation_failed",
  "message": "Local schema validation failed for workflow.create payload (2 issues)."
}
```

**Cause**: CLI local validator rejected payload before network call.

**Fix**: Inspect `details.issues` in JSON output and correct fields. For workflows, run:

```bash
agenticflow workflow validate --body @workflow.json --local-only --json
```

## Network Request Failed

```text
Error: Network request failed for https://api.agenticflow.ai/...: fetch failed
```

**Cause**: Network/TLS issues, endpoint reachability problems, or very large responses.

**Fix**:

```bash
# CI-safe health and config check
agenticflow doctor --json --strict

# Prefer targeted node-type commands over full lists
agenticflow node-types get --name <name> --json
agenticflow node-types search --query "gmail" --json
```

If template APIs are unavailable, use local cache mode:

```bash
agenticflow templates duplicate workflow --template-id <id> --cache-dir .agenticflow/templates --dry-run --json
agenticflow templates duplicate agent --template-file .agenticflow/templates/agent/<file>.json --cache-dir .agenticflow/templates --dry-run --json
```

## Connections List Returns Too Few Results

**Cause**: The API defaults to `limit=10`.

**Fix**:

```bash
agenticflow connections list --limit 200 --json
```

## Workflow Update Shape Mismatch

**Cause**: `workflow get` may return `nodes` nested as `{ nodes: [...] }`, while `workflow update` expects a flat array `[...]`.

**Fix**:

```bash
# Get workflow
agenticflow workflow get --workflow-id <id> --json > wf.json

# Edit: extract nodes from nodes.nodes, add public_runnable
# Then update
agenticflow workflow update --workflow-id <id> --body @wf-update.json
```
