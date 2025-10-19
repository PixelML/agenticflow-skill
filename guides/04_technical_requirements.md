# Technical Requirements & Common Fixes

Complete technical reference for creating valid AgenticFlow workflows with proper field formats and structures.

## 🔧 Node Structure Requirements

### Complete Node Template

Every node in a workflow must have these fields:

```javascript
{
  "name": "unique_node_name",           // Required: string, unique within workflow
  "title": "Display Title",              // Optional but recommended: string
  "description": "What this node does",  // Optional but recommended: string
  "node_type_name": "exact_node_type",  // Required: exact match from API
  "input_config": {},                    // Required: object (can be empty {})
  "output_mapping": {},                  // Required: object (NEVER null, use {})
  "connection": ""                       // Required: string (NEVER null, use "")
}
```

### Field-by-Field Breakdown

#### 1. `name` (REQUIRED)
- **Type:** string
- **Rules:**
  - Must be unique within workflow
  - Use snake_case: `get_customer_data`, `send_notification`
  - Descriptive and meaningful
  - No spaces or special characters except underscore
- **Examples:**
  ```javascript
  "name": "scrape_competitor_prices"
  "name": "analyze_with_llm"
  "name": "send_slack_alert"
  ```

#### 2. `title` (OPTIONAL but recommended)
- **Type:** string
- **Purpose:** Human-readable display name
- **Examples:**
  ```javascript
  "title": "Scrape Competitor Prices"
  "title": "Analyze with AI"
  "title": "Send Slack Alert"
  ```

#### 3. `description` (OPTIONAL but recommended)
- **Type:** string
- **Purpose:** Explain what this node does
- **Examples:**
  ```javascript
  "description": "Scrapes pricing data from competitor websites"
  "description": "Uses LLM to analyze pricing trends"
  "description": "Notifies team in Slack channel"
  ```

#### 4. `node_type_name` (REQUIRED)
- **Type:** string
- **Rules:**
  - MUST be exact match from `agenticflow_list_node_types()`
  - Case-sensitive
  - Check spelling carefully
- **How to verify:**
  ```javascript
  // Search for the node type
  agenticflow_search_node_types({name: 'llm'})

  // Or list all to find exact name
  agenticflow_list_node_types({limit: 200})
  ```
- **Common node types:**
  ```javascript
  "node_type_name": "llm"
  "node_type_name": "web_scraping"
  "node_type_name": "perplexity_search"
  "node_type_name": "mcp_run_action"
  "node_type_name": "openai_extract_structured_data"
  "node_type_name": "generate_image"
  ```

#### 5. `input_config` (REQUIRED)
- **Type:** object
- **Rules:**
  - NEVER null
  - Can be empty `{}`
  - Must match node type's input schema
  - Check `references/complete_node_types.md` for required fields
- **Examples:**
  ```javascript
  // LLM node
  "input_config": {
    "model": "DeepSeek V3",
    "temperature": 0.3,
    "max_tokens": 4000,
    "human_message": "Analyze this data: {{previous_node.output}}",
    "system_message": "You are an expert analyst"
  }

  // Web scraping node
  "input_config": {
    "web_url": "{{target_url}}",
    "max_tokens": 10000,
    "include_images": false
  }

  // MCP action node
  "input_config": {
    "action": "GMAIL-SEND-EMAIL",
    "input_params": {
      "instruction": "Send email to {{recipient}} with content: {{content}}"
    }
  }
  ```

#### 6. `output_mapping` (REQUIRED)
- **Type:** object
- **Rules:**
  - NEVER null (use `{}` instead)
  - Maps node outputs to custom names
  - Usually empty `{}` unless custom mapping needed
- **Examples:**
  ```javascript
  // Usually empty
  "output_mapping": {}

  // Custom mapping (rare)
  "output_mapping": {
    "custom_name": "{{node_name.field}}"
  }
  ```

#### 7. `connection` (REQUIRED)
- **Type:** string
- **Rules:**
  - NEVER null (use `""` instead)
  - Empty string `""` if no connection needed
  - MCP connection reference: `{{__app_connections__['uuid']}}`
- **Examples:**
  ```javascript
  // No connection needed
  "connection": ""

  // MCP connection
  "connection": "{{__app_connections__['gmail-connection-id']}}"
  ```

---

## ⚠️ Common Errors & Fixes

### Error 1: Null Values

❌ **WRONG:**
```javascript
{
  "output_mapping": null,
  "connection": null
}
```

✅ **CORRECT:**
```javascript
{
  "output_mapping": {},
  "connection": ""
}
```

### Error 2: Missing Required Fields

❌ **WRONG:**
```javascript
{
  "name": "my_node",
  "node_type_name": "llm"
  // Missing input_config, output_mapping, connection
}
```

✅ **CORRECT:**
```javascript
{
  "name": "my_node",
  "node_type_name": "llm",
  "input_config": {
    "model": "DeepSeek V3",
    "human_message": "Process this data"
  },
  "output_mapping": {},
  "connection": ""
}
```

### Error 3: Wrong Node Type Name

❌ **WRONG:**
```javascript
{
  "node_type_name": "LLM"  // Wrong case
}
```

```javascript
{
  "node_type_name": "llm_node"  // Wrong name
}
```

✅ **CORRECT:**
```javascript
{
  "node_type_name": "llm"  // Exact match from API
}
```

### Error 4: Invalid Template Variables

❌ **WRONG:**
```javascript
{
  "human_message": "Process ${previous_node.output}"  // Wrong syntax
}
```

```javascript
{
  "human_message": "Process {{nonexistent_node.data}}"  // Node doesn't exist
}
```

✅ **CORRECT:**
```javascript
{
  "human_message": "Process {{previous_node.output}}"  // Correct syntax and existing node
}
```

### Error 5: Missing Input Config Fields

❌ **WRONG:**
```javascript
{
  "node_type_name": "llm",
  "input_config": {
    "human_message": "Process this"
    // Missing required 'model' field
  }
}
```

✅ **CORRECT:**
```javascript
{
  "node_type_name": "llm",
  "input_config": {
    "model": "DeepSeek V3",
    "human_message": "Process this"
  }
}
```

---

## 🔗 Template Variables

### Syntax Rules

**Correct Format:**
```javascript
{{node_name.field}}
{{input_parameter}}
{{__app_connections__['connection-id']}}
```

**Common Mistakes:**
```javascript
${node_name.field}        // Wrong - not JavaScript template literal
{node_name.field}         // Wrong - single braces
{{ node_name.field }}     // Wrong - spaces inside braces
{{node_name}}            // Incomplete - needs field
```

### Output Field Reference

| Node Type | Primary Output Field |
|-----------|---------------------|
| `llm` | `.content` |
| `claude_ask` | `.answer` |
| `openai_ask_chat_gpt` | `.response` |
| `perplexity_search` | `.response` |
| `google_search` | `.organic_results` |
| `web_scraping` | `.scraped_content` |
| `openai_extract_structured_data` | `.extracted_data` |
| `generate_image` | `.image_url` |
| `describe_image` | `.description` |
| `mcp_run_action` | `.output` |
| `api_call` | `.response` |

### Accessing Nested Fields

```javascript
// Simple field
{{node_name.content}}

// Nested object
{{node_name.response.data.items}}

// Array element
{{node_name.results[0].title}}

// Deep nesting
{{node_name.response.data.items[0].properties.name}}
```

### Input Parameters

```javascript
// Direct input variable
{{company_name}}
{{user_email}}
{{search_query}}

// In input_schema
{
  "input_schema": {
    "properties": {
      "company_name": {
        "type": "string"
      }
    }
  }
}

// Use in node
{
  "input_config": {
    "human_message": "Research company: {{company_name}}"
  }
}
```

---

## 📝 Workflow-Level Requirements

### Complete Workflow Structure

```javascript
{
  "name": "Workflow Name",
  "description": "What this workflow does",
  "nodes": [
    // Array of node objects
    {
      "name": "node1",
      "node_type_name": "llm",
      "input_config": {},
      "output_mapping": {},
      "connection": ""
    },
    {
      "name": "node2",
      "node_type_name": "web_scraping",
      "input_config": {},
      "output_mapping": {},
      "connection": ""
    }
  ],
  "input_schema": {
    "type": "object",
    "title": "User inputs",
    "required": [],
    "properties": {
      // Input field definitions
    }
  },
  "output_mapping": {
    // Final workflow outputs
  }
}
```

### Input Schema Structure

```javascript
{
  "input_schema": {
    "type": "object",
    "title": "User inputs",
    "description": "Inputs for the workflow",
    "required": ["required_field"],
    "properties": {
      "field_name": {
        "type": "string",              // string, number, boolean, array, object
        "title": "Display Label",
        "description": "Help text",
        "ui_metadata": {
          "type": "short_text",        // short_text, long_text, dropdown, multi_select
          "order": 0,
          "placeholder": "Example...",
          "value": "default_value"
        }
      }
    }
  }
}
```

### UI Metadata Field Types

**`short_text`** - Single line text input
```javascript
{
  "type": "string",
  "ui_metadata": {
    "type": "short_text",
    "placeholder": "Enter company name"
  }
}
```

**`long_text`** - Multi-line text area
```javascript
{
  "type": "string",
  "ui_metadata": {
    "type": "long_text",
    "placeholder": "Enter detailed description..."
  }
}
```

**`dropdown`** - Single selection dropdown
```javascript
{
  "type": "string",
  "ui_metadata": {
    "type": "dropdown",
    "options": ["Option 1", "Option 2", "Option 3"],
    "value": "Option 1"
  }
}
```

**`multi_select`** - Multiple selection
```javascript
{
  "type": "array",
  "items": {"type": "string"},
  "ui_metadata": {
    "type": "multi_select",
    "options": ["Tag1", "Tag2", "Tag3"],
    "value": ["Tag1"]
  }
}
```

---

## 🔄 Execution Order & Dependencies

### Sequential Execution

Nodes execute in array order by default:

```javascript
{
  "nodes": [
    {"name": "step1", ...},   // Executes first
    {"name": "step2", ...},   // Executes second
    {"name": "step3", ...}    // Executes third
  ]
}
```

### Parallel Execution with `prevNodeName`

**For workflow building only** (not for `agenticflow_create_workflow`):

```javascript
{
  "nodes": [
    {
      "name": "start",
      "prevNodeName": null  // First node
    },
    {
      "name": "parallel1",
      "prevNodeName": "start"  // Waits for start
    },
    {
      "name": "parallel2",
      "prevNodeName": "start"  // Also waits for start, runs parallel to parallel1
    },
    {
      "name": "final",
      "prevNodeName": "parallel2"  // Waits for both parallel nodes
    }
  ]
}
```

---

## ✅ Pre-Flight Checklist

Before creating a workflow, verify:

**Node Level:**
- [ ] All nodes have unique names
- [ ] `node_type_name` exactly matches API
- [ ] `input_config` has all required fields
- [ ] `output_mapping` is `{}` not `null`
- [ ] `connection` is `""` not `null` (or proper UUID if needed)
- [ ] Template variables reference existing nodes
- [ ] Template variables use correct output fields

**Workflow Level:**
- [ ] `name` is descriptive and clear
- [ ] `description` explains purpose
- [ ] `nodes` array is not empty
- [ ] `input_schema` properly structured
- [ ] `input_schema` has `ui_metadata` for user experience
- [ ] `output_mapping` configured for final results
- [ ] All MCP connections documented

**Data Flow:**
- [ ] Each node has the data it needs from previous nodes
- [ ] No circular dependencies
- [ ] Output fields correctly referenced
- [ ] Input parameters defined in schema

---

## 🚀 Quick Validation

### Minimal Valid Node

```javascript
{
  "name": "test_node",
  "node_type_name": "llm",
  "input_config": {
    "model": "DeepSeek V3",
    "human_message": "Test"
  },
  "output_mapping": {},
  "connection": ""
}
```

### Minimal Valid Workflow

```javascript
{
  "name": "Test Workflow",
  "description": "Simple test",
  "nodes": [
    {
      "name": "test_node",
      "node_type_name": "llm",
      "input_config": {
        "model": "DeepSeek V3",
        "human_message": "{{user_input}}"
      },
      "output_mapping": {},
      "connection": ""
    }
  ],
  "input_schema": {
    "type": "object",
    "properties": {
      "user_input": {
        "type": "string",
        "title": "Your Input"
      }
    }
  },
  "output_mapping": {}
}
```

---

## 📚 Reference Priority

When building workflows, check references in this order:

1. **`guides/02_node_selection_strategy.md`** - Choose right node type
2. **`references/node_types.md`** - Quick field overview
3. **`references/complete_node_types.md`** - Detailed field schemas
4. **`references/examples/workflows/`** - Real examples
5. **This guide** - Technical requirements and fixes

---

**Next Steps:**
- Validate workflows before creation using `agenticflow_validate_workflow()`
- Check examples in `references/examples/workflows/`
- Review node field requirements in `references/complete_node_types.md`
