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
