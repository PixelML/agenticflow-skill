# Connections

Connections store API keys and credentials for external services used by workflow nodes.

---

## How to Know Which Connection a Node Needs

Check the `connection` field in the node_type schema:

```json
{
  "name": "OpenAI Connection",
  "description": "The OpenAI connection to use for the assistant.",
  "required": true,
  "connection_category": "openai"
}
```

| Field | Description |
|-------|-------------|
| `connection_category` | The provider category (e.g., `openai`, `claude`) |
| `required` | Whether a connection is mandatory |

Use the CLI to inspect node type connection requirements:

```bash
agenticflow node-types get --name google_search --json
```

Look at the `connection` field in the response:

---

## Usage in Nodes

```json
"connection": "{{__app_connections__['connection-uuid']}}"
```

Or set to `null`:

```json
"connection": null
```

> **Note**: When **creating** a workflow, `connection` can be `null` even if `required: true`. However, to **execute** the workflow, nodes with required connections must have valid connection values.

---

## Connection Providers

### AI Model Providers

| Category | Provider | Description |
|----------|----------|-------------|
| `openai` | OpenAI | GPT models, DALL-E, Whisper |
| `claude` | Anthropic | Claude 3.5 Sonnet, Claude 3 Opus |
| `google_gen_ai` | Google Gemini | Gemini Pro, Gemini Flash |
| `deepseek` | DeepSeek | DeepSeek models |
| `groq` | Groq | Fast inference for open models |
| `perplexity` | Perplexity | AI-powered search |

### AI Infrastructure

| Category | Provider | Description |
|----------|----------|-------------|
| `replicate` | Replicate | Open-source models (FLUX, Stable Diffusion) |
| `fal` | FAL.ai | Fast generative AI inference |
| `straico` | Straico | Multi-model unified API |
| `pixelml` | PixelML | Enterprise AI platform |

### Specialized Tools

| Category | Provider | Description |
|----------|----------|-------------|
| `firecrawl` | Firecrawl | Web scraping for AI/LLMs |
| `tavily` | Tavily | Search API for AI agents |
| `telegram` | Telegram | Bot API for messaging |

### MCP Connections

| Category | Description |
|----------|-------------|
| `mcp` | Model Context Protocol - Connect to any MCP server |

---

## Managing Connections

Use the CLI to manage connections:

```bash
# List all connections (default limit is 10, always specify higher)
agenticflow connections list --limit 200 --json

# Create a connection
agenticflow connections create --body @connection.json

# Update a connection
agenticflow connections update --connection-id <id> --body @update.json

# Delete a connection
agenticflow connections delete --connection-id <id>
```

### Finding the Right Connection

```bash
# 1. Check what category a node needs
agenticflow node-types get --name google_search --json
# → connection.connection_category = "pixelml"

# 2. Find connections with that category
agenticflow connections list --limit 200 --json
# → look for category: "pixelml"
```

> **Smart Resolution**: When `workflow run` encounters a missing connection, the CLI automatically lists matching connections and prompts you to select one.

---

## Troubleshooting

See [Troubleshooting Guide](../troubleshooting.md) for common connection errors.

---

## Full Documentation

For complete provider details and setup instructions:
[Connection Providers Documentation](https://docs.agenticflow.ai/integrations/connection-providers)

---

## Action Workflows (LLM -> mcp_run_action)

Action workflows chain an LLM node (for content generation) with an `mcp_run_action` node (for posting/sending to external services). This is the pattern used by pack workflows like `post-review-to-gbp`.

### Two-Node Pattern

```json
{
  "nodes": [
    {
      "name": "draft-response",
      "node_type_name": "llm",
      "input_config": {
        "model": "agenticflow/gemma-4-31b-it",
        "system_message": "You are a professional response writer.",
        "human_message": "{{input}}"
      }
    },
    {
      "name": "post-action",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "<service>-<action>",
        "input_params": {
          "content": "${draft-response.generated_text}"
        }
      }
    }
  ]
}
```

### Variable Interpolation

| Pattern | Meaning |
|---------|---------|
| `{{variable}}` | User input at workflow invocation time |
| `${node-name.field}` | Output from a previous node (e.g., `${draft-response.generated_text}`) |

The `mcp_run_action` node requires an active MCP connection for the target service. Use `af connections list --limit 200 --json` to verify connections before running.

---

## Connection Pre-Flight Check

Before running any action workflow, verify that required connections are available:

```bash
af connections list --limit 200 --json
```

If a required MCP connection is missing, present the `_links.mcp` URL from `af bootstrap --json` output:

```
"mcp": "https://agenticflow.ai/workspace/<id>/settings/mcp"
```

Tell user: "Add the required MCP connection at this URL, then retry."

---

## Missing Connection Recovery

When an action workflow fails due to a missing connection:

1. The CLI outputs an error mentioning the missing MCP service
2. Extract the `_links.mcp` URL from the last `af bootstrap --json` output
3. Present to user: "This workflow needs [service] MCP connection. Add it at: [_links.mcp URL]"
4. Offer alternative: "I can still run the LLM-only part of this workflow to generate the content. You can copy-paste it manually. Want me to do that?"
5. After user adds the connection, verify: `af connections list --limit 200 --json | grep [service]`

**Important:** Never skip connection check silently. Always inform the user which connections are needed and provide the setup URL.
