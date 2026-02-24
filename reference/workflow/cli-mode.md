# AgenticFlow Workflow CLI Mode

CLI-first guide for building, running, and managing workflows without MCP transport.

> **First-time setup?** See [CLI Setup](../cli-setup.md) for install and auth.
> **Cold start?** Run `agenticflow playbook first-touch` and `agenticflow discover --json` before executing workflow commands.

---

## Complete Command Reference

### Workflow CRUD

```bash
# List workflows
agenticflow workflow list --limit 10 --json

# Get a workflow
agenticflow workflow get --workflow-id <id> --json

# Create a workflow
agenticflow workflow create --body @workflow.json

# Update a workflow
agenticflow workflow update --workflow-id <id> --body @workflow-update.json

# Delete a workflow
agenticflow workflow delete --workflow-id <id>
```

### Workflow Execution

```bash
# Run a workflow (with smart connection resolution)
agenticflow workflow run --workflow-id <id> --input @input.json --json

# Check run status (poll until success/failed/cancelled)
agenticflow workflow run-status --workflow-run-id <run_id> --json

# List past runs
agenticflow workflow list-runs --workflow-id <id> --limit 10 --json

# Run history
agenticflow workflow run-history --workflow-id <id> --limit 10 --json
```

### Workflow Validation & Metadata

```bash
# Validate before save (local schema only, no API call)
agenticflow workflow validate --body @workflow.json --local-only

# Validate against API endpoint
agenticflow workflow validate --body @workflow.json

# Like status
agenticflow workflow like-status --workflow-id <id> --json

# Reference impact analysis
agenticflow workflow reference-impact --workflow-id <id> --json
```

### Template Duplication

```bash
# Duplicate a workflow template into a new workflow
agenticflow templates duplicate workflow --template-id <workflow_template_id> --json

# Prefer cache-first resolution in cold/sandbox environments
agenticflow templates duplicate workflow --template-id <workflow_template_id> --cache-dir .agenticflow/templates --json

# Build payload only (no create)
agenticflow templates duplicate workflow --template-id <workflow_template_id> --cache-dir .agenticflow/templates --dry-run --json
```

---

## Smart Connection Resolution

When `workflow run` encounters a missing connection, the CLI automatically:

1. Identifies which nodes use the missing connection
2. Looks up the required `connection_category` from the node type
3. Lists all available connections matching that category
4. Prompts you to select a replacement
5. Updates the workflow and retries

No manual intervention needed - just answer the prompt.

> If no matching connections exist, create one in the web UI first.

---

## Node Type Discovery

```bash
# Get a specific node type (fast, always works)
agenticflow node-types get --name google_search --json

# Search by keyword
agenticflow node-types search --query "gmail" --json

# List all (use --limit, large response)
agenticflow node-types list --limit 50 --json
```

> **Tip**: Prefer `get --name` or `search --query` over `list`. The full list is very large.

---

## Connection Discovery

```bash
# List all connections (default limit is 10, always use --limit)
agenticflow connections list --limit 200 --json

# Create a connection
agenticflow connections create --body @connection.json

# Update a connection
agenticflow connections update --connection-id <id> --body @update.json

# Delete
agenticflow connections delete --connection-id <id>
```

### Find What Connection a Node Needs

```bash
agenticflow node-types get --name google_search --json
# Look at: connection.connection_category -> "pixelml"
# Then find connections with that category:
agenticflow connections list --limit 200 --json | grep pixelml
```

---

## MCP -> CLI Mapping

| MCP Tool | CLI Equivalent |
|----------|---------------|
| `agenticflow_list_node_types()` | `agenticflow node-types list --limit 50` |
| `agenticflow_search_node_types(query=...)` | `agenticflow node-types search --query ...` |
| `agenticflow_get_node_type_details(name=...)` | `agenticflow node-types get --name ...` |
| `agenticflow_get_dynamic_options(...)` | `agenticflow node-types dynamic-options --name ... --field-name ...` |
| `agenticflow_list_app_connections(...)` | `agenticflow connections list --limit 200` |
| `agenticflow_create_workflow(...)` | `agenticflow workflow create --body @workflow.json` |
| `agenticflow_update_workflow(...)` | `agenticflow workflow update --workflow-id ... --body @update.json` |
| `agenticflow_execute_workflow(...)` | `agenticflow workflow run --workflow-id ... --input @input.json` |
| `agenticflow_get_workflow_run(...)` | `agenticflow workflow run-status --workflow-run-id ...` |

---

## Generic Fallback

For any endpoint not wrapped by a subcommand:

```bash
agenticflow call \
  --method GET \
  --path /v1/workflows/<id> \
  --json

# Preview any request without executing (call command only)
agenticflow call --operation-id get_all_v1_agents__get --dry-run --json
```

---

## Recommended Build Flow

```bash
# 1. Preflight
agenticflow doctor --json --strict

# 2. Seed template samples (recommended)
agenticflow templates sync --dir .agenticflow/templates --json
agenticflow templates index --dir .agenticflow/templates --json

# 3. Discover node types
agenticflow node-types search --query "gmail" --json

# 4. Inspect selected node type
agenticflow node-types get --name mcp_run_action --json

# 5. Check available connections
agenticflow connections list --limit 200 --json

# 6. Validate workflow payload
agenticflow workflow validate --body @workflow.json --local-only
agenticflow workflow validate --body @workflow.json

# 7. Create workflow
agenticflow workflow create --body @workflow.json

# 8. Execute (with smart connection resolution)
agenticflow workflow run --workflow-id <id> --input @input.json --json

# 9. Poll run status until success/failed/cancelled
agenticflow workflow run-status --workflow-run-id <run_id> --json
```

---

## Done Criteria (Do Not Skip)

A workflow is done only when:

1. `workflow validate` passes.
2. `workflow create` (or `update`) passes.
3. `workflow run` returns a run id.
4. `workflow run-status` reaches a terminal state (`success`, `failed`, or `cancelled`).
5. Output matches intended behavior, not only generic LLM fallback.

For full acceptance gates, see:
[../quality/acceptance-criteria.md](../quality/acceptance-criteria.md)
