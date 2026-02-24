# How to Run a Workflow

Guide to executing workflows and handling results in AgenticFlow.

> **Important**: Workflow execution is a **2-step process**:
> 1. Start execution with `agenticflow workflow run`
> 2. Poll status with `agenticflow workflow run-status`

```bash
# 1) Start execution
agenticflow workflow run \
  --workflow-id <workflow_id> \
  --input @workflow-input.json \
  --json

# 2) Poll run status
agenticflow workflow run-status --workflow-run-id <workflow_run_id> --json
```

---

## Step 1: Execute Workflow

Start workflow execution:

```bash
agenticflow workflow run \
  --workflow-id workflow-uuid \
  --input @workflow-input.json \
  --json
```

Example `workflow-input.json`:

```json
{
  "topic": "AI automation",
  "image_to_url": "https://example.com/image.png"
}
```

---

## Execution Response

A successful run returns a workflow run object:

```json
{
  "id": "workflow-run-uuid",
  "workflow_id": "workflow-uuid",
  "status": "running",
  "input": {
    "topic": "AI automation"
  },
  "output": {
    "content": "Generated text...",
    "image_url": "https://..."
  },
  "state": {
    "nodes_state": [
      {
        "node_name": "generate_content",
        "status": "success",
        "input": { "prompt": "Write about AI automation" },
        "output": { "result": "..." },
        "execution_time": 1200
      }
    ],
    "execution_time": 2500,
    "error": null
  },
  "started_at": "2026-01-16T06:28:46.949Z",
  "completed_at": "2026-01-16T06:28:50.449Z"
}
```

### Key Response Fields

| Field | Description |
|-------|-------------|
| `id` | Workflow run ID (use for status polling) |
| `status` | `created`, `queued`, `running`, `success`, `failed`, `cancelled` |
| `output` | Final workflow output (based on `output_mapping`) |
| `state.nodes_state` | Each node's input, output, status, and timing |
| `state.error` | Error details if run fails |

---

## Step 2: Get Execution Status

Always poll for status after starting execution:

```bash
agenticflow workflow run-status --workflow-run-id workflow-run-id --json
```

Continue polling until status is a terminal value (`success`, `failed`, or `cancelled`).

---

## Handle Errors

Common error scenarios:

| Error | Cause | Solution |
|-------|-------|----------|
| `missing_input` | Required input not provided | Check `input_schema.required` |
| `invalid_input` | Input doesn't match schema | Validate input types |
| `connection_failed` | API connection issue | Verify credentials |
| `node_error` | Node execution failed | Check node configuration |

### Error Response Example

```json
{
  "status": "failed",
  "error": {
    "node": "generate_image_1",
    "message": "API rate limit exceeded",
    "code": "rate_limit"
  }
}
```

---

## Tips

- Test with minimal inputs first.
- Check node outputs in `state.nodes_state` for debugging.
- Monitor usage/cost fields when available.

---

## View Run in Web UI

View workflow run details at:

```text
https://agenticflow.ai/app/workspaces/{workspace_id}/workflows/{workflow_id}/logs/{workflow_run_id}
```

---

## Related

- [How to Build](./how-to-build.md) - Create workflows
- [CLI Mode](./cli-mode.md) - MCP-to-CLI command mapping
- [Workflow Overview](./overview.md) - Core concepts
- [Node Types Reference](./node-types.md) - Node type configurations
- [Connections](./connections.md) - Available connection providers
- [Definition of Done](../quality/acceptance-criteria.md) - Semantic acceptance gates
