# CLI Troubleshooting

Common errors and how to fix them.

## Connection Not Found

```
Error: Request failed with status 400: Connection 67ebf4cc-... not found
```

**Cause**: The workflow references a connection ID that doesn't exist in this workspace.

**Fix**: The CLI has **smart connection resolution** built in. Re-run the workflow and the CLI will:
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

**Manual fix**: List connections and update the workflow yourself:

```bash
# Find connections (use --limit to get all, default is 10)
agenticflow connections list --limit 200 --json

# Find what category a node needs
agenticflow node-types get --name google_search --json
# Look at: connection.connection_category → "pixelml"
```

## 401 Error Decoding Token

```
Error: Request failed with status 401: Error decoding token
```

**Cause**: Some endpoints require a user session token (JWT), not an API key. Known endpoints:
- `workflow like` / `unlike` (removed from CLI)
- `connections categories` / `get-default` (removed from CLI)

**Fix**: These commands have been removed. Use the web UI for these operations.

## 422 Validation Errors

```
Error: Request failed with status 422: [{"type":"missing","loc":["body","nodes"],...}]
```

**Cause**: The API payload is missing required fields. The error array shows exactly which fields are missing.

**Fix**: Read the `loc` field to identify missing properties. Common required fields for workflow create/update:
- `nodes` (at least 1 node)
- `output_mapping`
- `input_schema`
- `project_id`
- `public_runnable` (boolean, required for updates)

## Network Request Failed (Timeout)

```
Error: Network request failed for https://api.agenticflow.ai/v1/node_types: fetch failed
```

**Cause**: The response payload is too large for the HTTP client to handle. This happens with `node-types list` which returns 100+ node types.

**Fix**: Use targeted commands instead:

```bash
# Instead of listing all node types:
agenticflow node-types get --name <name> --json

# Or search by keyword:
agenticflow node-types search --query "gmail" --json
```

## Connections List Returns Too Few Results

**Cause**: The API defaults to `limit=10`. Your connection may exist but isn't in the first 10.

**Fix**: Always specify a higher limit:

```bash
agenticflow connections list --limit 200 --json
```

## Workflow Update Shape Mismatch

**Cause**: `workflow get` returns `nodes` as `{ nodes: [...] }` (nested), but `workflow update` expects `nodes` as a flat array `[...]`.

**Fix**: When round-tripping a workflow (get → modify → update), unwrap the nodes:

```bash
# Get workflow
agenticflow workflow get --workflow-id <id> --json > wf.json

# Edit: extract nodes from nodes.nodes, add public_runnable
# Then update
agenticflow workflow update --workflow-id <id> --body @wf-update.json
```
