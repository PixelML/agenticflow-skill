# How to Build a Workflow

Step-by-step guide to creating workflows in AgenticFlow.

---

## Step 1: Define Input Schema

What data does your workflow need from users?

```json
{
  "input_schema": {
    "title": "User Input",
    "type": "object",
    "required": ["topic"],
    "properties": {
      "topic": {
        "type": "string",
        "title": "Topic",
        "ui_metadata": { 
          "order": 1,
          "type": "short_text",
          "value": "",
          "placeholder": "Enter topic"
        }
      }
    }
  }
}
```

**Common input types:**
- `short_text` - Single line text
- `long_text` - Multi-line text  
- `media_url` - Image/video/audio upload
- `number`, `checkbox`, `select`

---

## Step 2: Find Node Types

Use MCP tools to discover available nodes:

```
# Search for what you need
agenticflow_search_node_types(query="image generation")

# Get full details
agenticflow_get_node_type_details(name="generate_image")
```

The response includes `input_schema` showing required fields.

> **Tip**: When two node types have the same functionality, **prefer the one without a required connection**. This simplifies workflow setup and avoids credential management.

---

## Step 3: Add Nodes

Create nodes in execution order (top to bottom):

```json
{
  "nodes": {
    "nodes": [
      {
        "name": "generate_content",
        "title": "Generate Content",
        "node_type_name": "claude_ask",
        "input_config": {
          "model": "claude-3-haiku-20240307",
          "prompt": "Write about {{topic}}"
        },
        "connection": null
      },
      {
        "name": "create_image",
        "title": "Create Image", 
        "node_type_name": "generate_image",
        "input_config": {
          "prompt": "Illustration for: {{topic}}"
        },
        "connection": null
      }
    ]
  }
}
```

---

## Step 4: Wire Data Flow

Use `{{...}}` syntax to pass data between steps:

| Reference | Usage |
|-----------|-------|
| `{{topic}}` | Workflow input |
| `{{generate_content.result}}` | Previous node output |
| `{{node.field.nested}}` | Nested output field |

---

## Step 5: Define Output

What should the workflow return?

```json
{
  "output_mapping": {
    "content": "{{generate_content.result}}",
    "image": "{{create_image.image_url}}"
  }
}
```

> **Recommendation**: Use `{}` (empty object) by default - returns last node's full output. Only define explicit mapping when you need specific fields.

---

## Step 6: Create or Update via MCP Tool

Use AgenticFlow MCP tools to create or update workflows:

### Create New Workflow

```
agenticflow_create_workflow(
  name="My Workflow",
  description="Does something useful",
  input_schema={...},
  nodes={...},
  output_mapping={}
)
```

### Update Existing Workflow

```
agenticflow_update_workflow(
  workflow_id="workflow-uuid",
  name="Updated Name",
  input_schema={...},
  nodes={...},
  output_mapping={}
)
```

---

## Quick Checklist

- [ ] Input schema defined with required fields
- [ ] Node types discovered via MCP tools
- [ ] Nodes ordered correctly (dependencies first)
- [ ] Connections specified for nodes that need them
- [ ] Data references use correct `{{...}}` syntax
- [ ] Output mapping captures desired results

---

## Related

- [Workflow Overview](./overview.md) - Core concepts
- [Node Types Reference](./node-types.md) - Node schemas
