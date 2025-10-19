# Complete AgenticFlow Node Types - API Reference

This document contains the complete API reference for all AgenticFlow node types, including full input/output schemas. Use this when you need detailed field information for workflow creation.

**Last Updated:** 2025-10-19  
**Total Node Types:** 139  
**Data Source:** Official AgenticFlow API

---

## How to Use This Reference

When building workflows, use this reference to:
1. Identify exact field names and types required for each node
2. Understand input_schema structure and constraints
3. Configure ui_metadata for proper form rendering
4. Determine connection requirements
5. Estimate costs for workflow operations

## Node Type Structure

Each node type contains:
- **id**: Unique identifier
- **name**: Node type name (use in `node_type_name` field)
- **title**: Display title
- **description**: What the node does
- **connection**: Required connection details (if any)
- **cost**: Credit cost per execution
- **input_schema**: Complete JSON schema for inputs
- **output_schema**: Expected output structure
- **categories**: Tags for categorization

---

## 1. api_call

**Title:** API Call

**Description:** Call an API

**ID:** `api_call`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "ApiCallMethod": {
      "description": "Allowed API call methods.",
      "enum": [
        "GET",
        "POST",
        "PUT",
        "PATCH",
        "DELETE"
      ],
      "title": "ApiCallMethod",
      "type": "string"
    },
    "ApiCallResponseType": {
      "description": "Allowed API call response types.",
      "enum": [
        "json",
        "string"
      ],
      "title": "ApiCallResponseType",
      "type": "string"
    }
  },
  "description": "Input for API call node.",
  "properties": {
    "url": {
      "description": "The URL to call.",
      "title": "Url to call",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "url",
        "value": null
      }
    },
    "method": {
      "$ref": "#/$defs/ApiCallMethod",
      "description": "The method to call the API.",
      "title": "Method",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "headers": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The headers to send in the API call in JSON format.",
      "title": "Headers",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "body": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The body to send in the API call.",
      "title": "Body",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "timeout": {
      "default": 30,
      "description": "The timeout in seconds for the API call.",
      "exclusiveMaximum": 600,
      "minimum": 1,
      "title": "Timeout",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "response_type": {
      "$ref": "#/$defs/ApiCallResponseType",
      "default": "json",
      "description": "The response type of the API call.",
      "title": "Response Type",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "url",
    "method"
  ],
  "title": "ApiCallNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Node output for API call node.",
  "properties": {
    "status_code": {
      "description": "The status code of the API call.",
      "title": "Status Code",
      "type": "integer"
    },
    "response_body": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "string"
        }
      ],
      "description": "The response body of the API call.",
      "title": "Response Body"
    }
  },
  "required": [
    "status_code",
    "response_body"
  ],
  "title": "ApiCallNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_api_call",
  "title": "API Call",
  "description": "Call an API...",
  "node_type_name": "api_call",
  "input_config": {
    "url": "example_value",
    "method": "example_value",
    "headers": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 2. blend_v4

**Title:** Generate Blend V4

**Description:** Unleash Artistic QR Codes: Generate stunning AI-powered QR art with Quick Blend V4 (powered by https://quickqr.art)

**ID:** `blend_v4`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Blend V4 node input.",
  "properties": {
    "prompt": {
      "description": "What you wish to see in the output image. A strong, descriptive prompt that clearly defines elements, colors, and subjects will lead to better results.",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "negative_prompt": {
      "default": "",
      "description": "A blurb of text describing what you do not wish to see in the output image",
      "title": "Negative prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "background_url": {
      "description": "The URL of the background image.",
      "title": "Background URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "qr_code_url": {
      "description": "The URL of the QR code image.",
      "title": "QR code URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "qr_strength": {
      "default": 0.5,
      "description": "The strength of the QR code. Higher values will make the QR code more prominent in the image.",
      "title": "QR strength",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "seed": {
      "default": 10000000,
      "description": "The seed of the image.",
      "title": "Seed",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "width": {
      "default": 768,
      "description": "The width of the image.",
      "title": "Width",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 6,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "height": {
      "default": 768,
      "description": "The height of the image.",
      "title": "Height",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 7,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "batch_size": {
      "default": 1,
      "description": "The number of images to generate.",
      "title": "Batch size",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 8,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "caption": {
      "default": "object",
      "description": "What's to keep?",
      "title": "What's to keep?",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 9,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt",
    "background_url",
    "qr_code_url"
  ],
  "title": "BlendV4NodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Blend V4 node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "BlendV4NodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_blend_v4",
  "title": "Generate Blend V4",
  "description": "Unleash Artistic QR Codes: Generate stunning AI-powered QR a...",
  "node_type_name": "blend_v4",
  "input_config": {
    "prompt": "example_value",
    "negative_prompt": "example_value",
    "background_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 3. call_other_workflow

**Title:** Call Other Workflow

**Description:** Call another workflow.

**ID:** `call_other_workflow`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Export Data to File node input.",
  "properties": {
    "workflow_id": {
      "description": "The ID of the workflow to call. (Destination workflow must have public access)",
      "title": "Workflow ID",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "workflow_input": {
      "description": "The input to the workflow in JSON format.",
      "title": "Workflow Input",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "workflow_id",
    "workflow_input"
  ],
  "title": "CallOtherWorkflowNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Call other workflow node output.",
  "properties": {
    "workflow_run_id": {
      "title": "Workflow Run ID",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "workflow_output": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Workflow Output",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "error": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Error",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "workflow_run_id"
  ],
  "title": "CallOtherWorkflowNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_call_other_workflow",
  "title": "Call Other Workflow",
  "description": "Call another workflow....",
  "node_type_name": "call_other_workflow",
  "input_config": {
    "workflow_id": "example_value",
    "workflow_input": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 4. claude_ask

**Title:** Ask Claude

**Description:** Ask Claude anything you want!

**ID:** `claude_ask`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: Claude Connection
- Description: The Claude connection to use for the chat.
- Required: Yes
- Category: claude

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "ClaudeModel": {
      "description": "Claude model options.",
      "enum": [
        "claude-3-haiku-20240307",
        "claude-3-sonnet-20240229",
        "claude-3-opus-20240229",
        "claude-3-5-sonnet-latest",
        "claude-3-5-haiku-latest",
        "claude-3-7-sonnet-latest",
        "claude-opus-4-20250514",
        "claude-sonnet-4-20250514"
      ],
      "title": "ClaudeModel",
      "type": "string"
    }
  },
  "description": "Ask Claude node input.",
  "properties": {
    "model": {
      "$ref": "#/$defs/ClaudeModel",
      "default": "claude-3-haiku-20240307",
      "description": "The model to use for the chat.",
      "title": "Model",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "prompt": {
      "description": "The question to ask the model.",
      "title": "Question",
      "type": "string"
    },
    "images": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The images to use for the chat.",
      "title": "Images",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/jpg",
          "image/png",
          "image/JPEG"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "temperature": {
      "default": 0.5,
      "description": "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.",
      "maximum": 1,
      "minimum": 0,
      "title": "Temperature",
      "type": "number"
    },
    "max_tokens": {
      "default": 1000,
      "description": "The maximum number of tokens to generate. Requests can use up to 2,048 or 4,096 tokens shared between prompt and completion depending on the model.",
      "title": "Maximum Tokens",
      "type": "integer"
    },
    "system_message": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": "You are a helpful assistant.",
      "description": "Instructions for the AI assistant on how to behave and respond.",
      "title": "System Message",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "prompt"
  ],
  "title": "AskClaudeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Ask Claude node output.",
  "properties": {
    "content": {
      "description": "The response from Claude.",
      "title": "Response",
      "type": "string"
    }
  },
  "required": [
    "content"
  ],
  "title": "AskClaudeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_claude_ask",
  "title": "Ask Claude",
  "description": "Ask Claude anything you want!...",
  "node_type_name": "claude_ask",
  "input_config": {
    "model": "example_value",
    "prompt": "example_value",
    "images": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 5. claude_extract_structured_data

**Title:** Extract Structured Data with Claude

**Description:** Extract structured data from text or images using Claude.

**ID:** `claude_extract_structured_data`

**Scope:** public

**Connection Required:**
- Name: Claude Connection
- Description: The Claude connection to use for extracting structured data.
- Required: Yes
- Category: claude

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "ClaudeModel": {
      "description": "Claude model options.",
      "enum": [
        "claude-3-haiku-20240307",
        "claude-3-sonnet-20240229",
        "claude-3-opus-20240229",
        "claude-3-5-sonnet-latest",
        "claude-3-5-haiku-latest",
        "claude-3-7-sonnet-latest"
      ],
      "title": "ClaudeModel",
      "type": "string"
    },
    "SchemaField": {
      "description": "Schema field for simple mode.",
      "properties": {
        "name": {
          "description": "Name of the field to extract.",
          "title": "Name",
          "type": "string"
        },
        "description": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Description of the field to extract.",
          "title": "Description"
        },
        "type": {
          "default": "string",
          "description": "Data type of the field to extract.",
          "title": "Data Type",
          "type": "string"
        },
        "is_required": {
          "default": false,
          "description": "Whether the field is required.",
          "title": "Required",
          "type": "boolean"
        }
      },
      "required": [
        "name"
      ],
      "title": "SchemaField",
      "type": "object"
    },
    "SchemaMode": {
      "description": "Schema mode options.",
      "enum": [
        "simple",
        "advanced"
      ],
      "title": "SchemaMode",
      "type": "string"
    }
  },
  "description": "Extract Structured Data node input.",
  "properties": {
    "model": {
      "$ref": "#/$defs/ClaudeModel",
      "default": "claude-3-haiku-20240307",
      "description": "The model to use for extracting structured data.",
      "title": "Model",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "text": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Text to extract structured data from.",
      "title": "Text",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "images": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Images to extract structured data from.",
      "title": "Images",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/jpg",
          "image/png",
          "image/JPEG"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "prompt": {
      "default": "Extract the following data from the provided content.",
      "description": "Prompt to guide the AI in extracting structured data.",
      "title": "Guide Prompt",
      "type": "string"
    },
    "schema_mode": {
      "$ref": "#/$defs/SchemaMode",
      "default": "simple",
      "description": "Mode for defining the schema.",
      "title": "Schema Mode",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "simple_schema": {
      "anyOf": [
        {
          "items": {
            "$ref": "#/$defs/SchemaField"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Schema definition in simple mode.",
      "title": "Simple Schema",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "advanced_schema": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "JSON Schema for advanced mode.",
      "title": "Advanced Schema",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": "json_str",
        "value": null
      }
    },
    "max_tokens": {
      "default": 2000,
      "description": "The maximum number of tokens to generate.",
      "title": "Maximum Tokens",
      "type": "integer"
    }
  },
  "title": "ExtractStructuredDataInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Extract Structured Data node output.",
  "properties": {
    "data": {
      "additionalProperties": true,
      "description": "The structured data extracted from the input.",
      "title": "Extracted Data",
      "type": "object"
    }
  },
  "required": [
    "data"
  ],
  "title": "ExtractStructuredDataOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_claude_extract_structured_data",
  "title": "Extract Structured Data with Claude",
  "description": "Extract structured data from text or images using Claude....",
  "node_type_name": "claude_extract_structured_data",
  "input_config": {
    "model": "example_value",
    "text": "example_value",
    "images": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 6. comfy_ui

**Title:** Comfy UI

**Description:** Run any ComfyUI workflow.

**ID:** `comfy_ui`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Comfy UI node input.",
  "properties": {
    "workflow_json": {
      "default": "{\"3\":{\"inputs\":{\"seed\":156680208700286,\"steps\":10,\"cfg\":2.5,\"sampler_name\":\"dpmpp_2m_sde\",\"scheduler\":\"karras\",\"denoise\":1,\"model\":[\"4\",0],\"positive\":[\"6\",0],\"negative\":[\"7\",0],\"latent_image\":[\"5\",0]},\"class_type\":\"KSampler\",\"_meta\":{\"title\":\"KSampler\"}},\"4\":{\"inputs\":{\"ckpt_name\":\"SDXL-Flash.safetensors\"},\"class_type\":\"CheckpointLoaderSimple\",\"_meta\":{\"title\":\"Load Checkpoint\"}},\"5\":{\"inputs\":{\"width\":1024,\"height\":1024,\"batch_size\":1},\"class_type\":\"EmptyLatentImage\",\"_meta\":{\"title\":\"Empty Latent Image\"}},\"6\":{\"inputs\":{\"text\":[\"10\",0],\"clip\":[\"4\",1]},\"class_type\":\"CLIPTextEncode\",\"_meta\":{\"title\":\"CLIP Text Encode (Prompt)\"}},\"7\":{\"inputs\":{\"text\":[\"11\",0],\"clip\":[\"4\",1]},\"class_type\":\"CLIPTextEncode\",\"_meta\":{\"title\":\"CLIP Text Encode (Prompt)\"}},\"8\":{\"inputs\":{\"samples\":[\"3\",0],\"vae\":[\"4\",2]},\"class_type\":\"VAEDecode\",\"_meta\":{\"title\":\"VAE Decode\"}},\"9\":{\"inputs\":{\"filename_prefix\":\"ComfyUI\",\"images\":[\"8\",0]},\"class_type\":\"SaveImage\",\"_meta\":{\"title\":\"Save Image\"}},\"10\":{\"inputs\":{\"name\":\"prompt\",\"value\":\"beautiful scenery nature glass bottle landscape, purple galaxy bottle,\"},\"class_type\":\"StringInput_PixelML\",\"_meta\":{\"title\":\"StringInput_PixelML\"}},\"11\":{\"inputs\":{\"name\":\"negative_prompt\",\"value\":\"text, watermark\"},\"class_type\":\"StringInput_PixelML\",\"_meta\":{\"title\":\"StringInput_PixelML\"}}}",
      "description": "Your ComfyUI workflow as JSON. You must use the API version of your workflow. Get it from ComfyUI using 'Save (API format)'",
      "title": "Workflow JSON (API Format)",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "comfyui_json",
        "value": null
      }
    }
  },
  "title": "ComfyUINodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Comfy UI node output.",
  "properties": {
    "outputs": {
      "items": {
        "title": "Output",
        "type": "string",
        "ui_metadata": {
          "allowed_mime_types": null,
          "depends_on": null,
          "max_height": null,
          "max_size": null,
          "max_width": null,
          "media_type": "image",
          "min_height": null,
          "min_size": null,
          "min_width": null,
          "options": null,
          "order": 0,
          "password": false,
          "ref_image": null,
          "type": "media_url",
          "value": null
        }
      },
      "title": "List outputs",
      "type": "array"
    }
  },
  "required": [
    "outputs"
  ],
  "title": "ComfyUINodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_comfy_ui",
  "title": "Comfy UI",
  "description": "Run any ComfyUI workflow....",
  "node_type_name": "comfy_ui",
  "input_config": {
    "workflow_json": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 7. create_agent_task

**Title:** Create Agent Task

**Description:** Create a new agent task

**ID:** `create_agent_task`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "TaskPriority": {
      "description": "The priority of the task.",
      "enum": [
        "low",
        "medium",
        "high"
      ],
      "title": "TaskPriority",
      "type": "string"
    }
  },
  "description": "Create Agent Task node input.",
  "properties": {
    "title": {
      "description": "Title of the task",
      "title": "Task Title",
      "type": "string"
    },
    "description": {
      "description": "Description of the task",
      "title": "Task Description",
      "type": "string"
    },
    "priority": {
      "$ref": "#/$defs/TaskPriority",
      "description": "Priority level of the task",
      "title": "Task Priority"
    },
    "details": {
      "description": "Additional details for the task",
      "title": "Task Details",
      "type": "string"
    },
    "agent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "ID of the agent assigned to the task",
      "title": "Agent ID"
    },
    "thread_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "ID of the thread associated with the task",
      "title": "Thread ID"
    },
    "parent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "ID of the parent task",
      "title": "Parent Task ID"
    }
  },
  "required": [
    "title",
    "description",
    "priority",
    "details"
  ],
  "title": "CreateAgentTaskNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "AgentTask": {
      "description": "DTO for agent task models.",
      "properties": {
        "id": {
          "description": "ULID identifier for the task",
          "title": "Id",
          "type": "string"
        },
        "workspace_id": {
          "format": "uuid",
          "title": "Workspace Id",
          "type": "string"
        },
        "agent_id": {
          "anyOf": [
            {
              "format": "uuid",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Agent Id"
        },
        "thread_id": {
          "anyOf": [
            {
              "format": "uuid",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Thread Id"
        },
        "parent_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Parent Id"
        },
        "title": {
          "title": "Title",
          "type": "string"
        },
        "description": {
          "title": "Description",
          "type": "string"
        },
        "priority": {
          "$ref": "#/$defs/TaskPriority",
          "default": "medium"
        },
        "status": {
          "$ref": "#/$defs/TaskStatus",
          "default": "pending"
        },
        "details": {
          "default": "",
          "title": "Details",
          "type": "string"
        },
        "result": {
          "default": "",
          "title": "Result",
          "type": "string"
        },
        "created_at": {
          "format": "date-time",
          "title": "Created At",
          "type": "string"
        },
        "updated_at": {
          "anyOf": [
            {
              "format": "date-time",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Updated At"
        }
      },
      "required": [
        "id",
        "workspace_id",
        "title",
        "description"
      ],
      "title": "AgentTask",
      "type": "object"
    },
    "TaskPriority": {
      "description": "The priority of the task.",
      "enum": [
        "low",
        "medium",
        "high"
      ],
      "title": "TaskPriority",
      "type": "string"
    },
    "TaskStatus": {
      "description": "The status of the task.",
      "enum": [
        "pending",
        "in_progress",
        "completed",
        "cancelled",
        "blocked",
        "deferred"
      ],
      "title": "TaskStatus",
      "type": "string"
    }
  },
  "description": "Create Agent Task node output.",
  "properties": {
    "task": {
      "$ref": "#/$defs/AgentTask",
      "description": "The created agent task",
      "title": "Created Task"
    }
  },
  "required": [
    "task"
  ],
  "title": "CreateAgentTaskNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_create_agent_task",
  "title": "Create Agent Task",
  "description": "Create a new agent task...",
  "node_type_name": "create_agent_task",
  "input_config": {
    "title": "example_value",
    "description": "example_value",
    "priority": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 8. create_cx_agent

**Title:** Create CX Agent

**Description:** Create a CX agent.

**ID:** `create_cx_agent`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Create agent node runner input.",
  "properties": {
    "access_token": {
      "description": "The access token to use to create the agent.",
      "title": "Access Token",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "workspace_id": {
      "description": "The ID of the workspace to create the agent in.",
      "title": "Workspace ID",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "agent_name": {
      "description": "The name of the agent to create.",
      "title": "Agent Name",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "data": {
      "additionalProperties": true,
      "description": "The data to create the agent with.",
      "title": "Data",
      "type": "object",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "email": {
      "description": "The email address to send notifications when the agent is created.",
      "title": "Email",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "access_token",
    "workspace_id",
    "agent_name",
    "data",
    "email"
  ],
  "title": "CreateAgentNodeRunnerInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Create agent node runner output.",
  "properties": {
    "data": {
      "additionalProperties": true,
      "description": "The data of the agent created.",
      "title": "Data",
      "type": "object"
    }
  },
  "required": [
    "data"
  ],
  "title": "CreateAgentNodeRunnerOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_create_cx_agent",
  "title": "Create CX Agent",
  "description": "Create a CX agent....",
  "node_type_name": "create_cx_agent",
  "input_config": {
    "access_token": "example_value",
    "workspace_id": "example_value",
    "agent_name": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 9. create_multiple_agent_tasks

**Title:** Create Multiple Agent Tasks

**Description:** Create multiple new agent tasks at once using JSON input

**ID:** `create_multiple_agent_tasks`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Create Multiple Agent Tasks node input.",
  "properties": {
    "tasks_json": {
      "description": "JSON string containing list of tasks to create. Each task should have title, description, priority, and details.",
      "items": {
        "additionalProperties": true,
        "type": "object"
      },
      "title": "Tasks JSON",
      "type": "array"
    },
    "thread_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "ID of the thread associated with the tasks",
      "title": "Thread ID"
    },
    "parent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "ID of the parent task",
      "title": "Parent Task ID"
    },
    "agent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "ID of the agent assigned to the task",
      "title": "Agent ID"
    }
  },
  "required": [
    "tasks_json"
  ],
  "title": "CreateMultipleAgentTasksNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Create Multiple Agent Tasks node output.",
  "properties": {
    "tasks": {
      "description": "The list of created agent tasks IDs",
      "items": {
        "type": "string"
      },
      "title": "Created Tasks",
      "type": "array"
    }
  },
  "required": [
    "tasks"
  ],
  "title": "CreateMultipleAgentTasksNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_create_multiple_agent_tasks",
  "title": "Create Multiple Agent Tasks",
  "description": "Create multiple new agent tasks at once using JSON input...",
  "node_type_name": "create_multiple_agent_tasks",
  "input_config": {
    "tasks_json": [],
    "thread_id": "example_value",
    "parent_id": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 10. create_pinpoint_campaign

**Title:** Create PinPoint Campaign

**Description:** Create a campaign in PinPoint.

**ID:** `create_pinpoint_campaign`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Import PinPoint campaign node input.",
  "properties": {
    "application_id": {
      "description": "The ID of the application to import the segment to.",
      "title": "Application ID",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "name": {
      "description": "Campaign Name.",
      "title": "Campaign Name",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "description": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": "",
      "description": "Campaign Description.",
      "title": "Campaign Description",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "segment_id": {
      "description": "Segment ID.",
      "title": "Segment ID",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "email_body": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": "",
      "description": "Email Body.",
      "title": "Email Body",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "email_html_body": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": "",
      "description": "Email HTML Body.",
      "title": "Email HTML Body",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "email_title": {
      "description": "Email Title.",
      "title": "Email Title",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "email_from_address": {
      "description": "Email From Address.",
      "title": "Email From Address",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "application_id",
    "name",
    "segment_id",
    "email_title",
    "email_from_address"
  ],
  "title": "CreatePinPointCampaignNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Create pinpoint campaign node output.",
  "properties": {
    "campaign_id": {
      "description": "The id of the campaign.",
      "title": "Campaign id",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "arn": {
      "description": "The ARN of the campaign.",
      "title": "Campaign ARN",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "campaign_id",
    "arn"
  ],
  "title": "CreatePinPointCampaignNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_create_pinpoint_campaign",
  "title": "Create PinPoint Campaign",
  "description": "Create a campaign in PinPoint....",
  "node_type_name": "create_pinpoint_campaign",
  "input_config": {
    "application_id": "example_value",
    "name": "example_value",
    "description": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 11. create_pinpoint_email_template

**Title:** Create PinPoint Email Template

**Description:** Create a new email template for Amazon Pinpoint.

**ID:** `create_pinpoint_email_template`

**Scope:** exclusive

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Create PinPoint email template node input.",
  "properties": {
    "template_name": {
      "description": "The name of the message template.",
      "title": "Template Name",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "html": {
      "description": "The message body, in HTML format, to use in email messages that are based on the message template.",
      "title": "The message body, in HTML format.",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "text": {
      "description": "The message body, in plain text format, to use in email messages that are based on the message template.",
      "title": "The message body, in plain text format.",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "subject": {
      "description": "Email subject.",
      "title": "Email subject",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "template_description": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "A custom description of the message template.",
      "title": "Template description",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "template_name",
    "html",
    "text",
    "subject"
  ],
  "title": "CreatePinPointEmailTemplateNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Create Pinpoint email template node output.",
  "properties": {
    "arn": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The Amazon Resource Name (ARN) of the message template that was created",
      "title": "The Amazon Resource Name (ARN) of the message template that was created",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "message": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The message that's returned from the API for this request",
      "title": "The message that's returned from the API for this request",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "request_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The unique identifier for the request",
      "title": "The unique identifier for the request",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "title": "CreatePinpointEmailTemplateNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_create_pinpoint_email_template",
  "title": "Create PinPoint Email Template",
  "description": "Create a new email template for Amazon Pinpoint....",
  "node_type_name": "create_pinpoint_email_template",
  "input_config": {
    "template_name": "example_value",
    "html": "example_value",
    "text": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 12. create_video

**Title:** Create video from topic

**Description:** Create video from topic

**ID:** `create_video`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "$defs": {
    "ImageGenPresets": {
      "description": "Image generation presets.",
      "enum": [
        "3d-model",
        "analog film",
        "anime",
        "cinematic",
        "comic book",
        "craft clay",
        "digital art",
        "enhance",
        "fantasy art",
        "isometric",
        "line art",
        "lowpoly",
        "neonpunk",
        "origami",
        "photographic",
        "pixel art",
        "texture",
        "ads-advertising",
        "ads-automotive",
        "ads-corporate",
        "ads-fashion editorial",
        "ads-food photography",
        "ads-luxury",
        "ads-real estate",
        "ads-retail",
        "artstyle-abstract",
        "artstyle-abstract expressionism",
        "artstyle-art deco",
        "artstyle-art nouveau",
        "artstyle-constructivist",
        "artstyle-cubist",
        "artstyle-expressionist",
        "artstyle-graffiti",
        "artstyle-hyperrealism",
        "artstyle-impressionist",
        "artstyle-pointillism",
        "artstyle-pop art",
        "artstyle-psychedelic",
        "artstyle-renaissance",
        "artstyle-steampunk",
        "artstyle-surrealist",
        "artstyle-typography",
        "artstyle-watercolor",
        "futuristic-biomechanical",
        "futuristic-biomechanical cyberpunk",
        "futuristic-cybernetic",
        "futuristic-cybernetic robot",
        "futuristic-cyberpunk cityscape",
        "futuristic-futuristic",
        "futuristic-retro cyberpunk",
        "futuristic-retro futurism",
        "futuristic-sci-fi",
        "futuristic-vaporwave",
        "game-bubble bobble",
        "game-cyberpunk game",
        "game-fighting game",
        "game-gta",
        "game-mario",
        "game-minecraft",
        "game-pokemon",
        "game-retro arcade",
        "game-retro game",
        "game-rpg fantasy game",
        "game-strategy game",
        "game-streetfighter",
        "game-zelda",
        "papercraft-collage",
        "papercraft-flat papercut",
        "papercraft-kirigami",
        "papercraft-paper mache",
        "papercraft-paper quilling",
        "papercraft-papercut collage",
        "papercraft-papercut shadow box",
        "papercraft-stacked papercut",
        "papercraft-thick layered papercut",
        "photo-alien",
        "photo-film noir",
        "photo-hdr",
        "photo-long exposure",
        "photo-neon noir",
        "photo-silhouette",
        "photo-tilt-shift",
        "misc-architectural",
        "misc-disco",
        "misc-dreamscape",
        "misc-dystopian",
        "misc-fairy tale",
        "misc-gothic",
        "misc-grunge",
        "misc-horror",
        "misc-kawaii",
        "misc-lovecraftian",
        "misc-macabre",
        "misc-manga",
        "misc-metropolis",
        "misc-minimalist",
        "misc-monochrome",
        "misc-nautical",
        "misc-space",
        "misc-stained glass",
        "misc-techwear fashion",
        "misc-tribal",
        "misc-zentangle"
      ],
      "title": "ImageGenPresets",
      "type": "string"
    },
    "TextToSpeechVoices": {
      "description": "Text to speech voices.",
      "enum": [
        "Hoai_My_Neural",
        "Nam_Minh_Neural",
        "Ava_Neural",
        "Andrew_Neural",
        "Emma_Neural",
        "Brian_Neural",
        "Alloy",
        "Echo",
        "Fable",
        "Onyx",
        "Nova",
        "Shimmer",
        "en_US_Casual_K",
        "en_US_Journey_D",
        "en_US_Journey_F",
        "en_US_Journey_O",
        "en_US_Neural2_A",
        "en_US_Neural2_C",
        "en_US_Neural2_D",
        "en_US_Neural2_E",
        "en_US_Neural2_F",
        "en_US_Neural2_G",
        "en_US_Neural2_H",
        "en_US_Neural2_I",
        "en_US_Neural2_J",
        "en_US_News_K",
        "en_US_News_L",
        "en_US_News_N",
        "en_US_Polyglot_1",
        "en_US_Standard_A",
        "en_US_Standard_B",
        "en_US_Standard_C",
        "en_US_Standard_D",
        "en_US_Standard_E",
        "en_US_Standard_F",
        "en_US_Standard_G",
        "en_US_Standard_H",
        "en_US_Standard_I",
        "en_US_Standard_J",
        "en_US_Studio_O",
        "en_US_Studio_Q",
        "en_US_Wavenet_A",
        "en_US_Wavenet_B",
        "en_US_Wavenet_C",
        "en_US_Wavenet_D",
        "en_US_Wavenet_E",
        "en_US_Wavenet_F",
        "en_US_Wavenet-G",
        "en_US_Wavenet-H",
        "en_US_Wavenet-I",
        "en_US_Wavenet-J",
        "vi_VN_Neural2_A",
        "vi_VN_Neural2_D",
        "vi_VN_Standard_A",
        "vi_VN_Standard_B",
        "vi_VN_Standard_C",
        "vi_VN_Standard_D",
        "vi_VN_Wavenet_A",
        "vi_VN_Wavenet_B",
        "vi_VN_Wavenet_C",
        "vi_VN_Wavenet_D",
        "Danielle",
        "Gregory",
        "Ivy",
        "Joanna",
        "Kendra",
        "Kimberly",
        "Salli",
        "Joey",
        "Justin",
        "Kevin",
        "Matthew",
        "Ruth",
        "Stephen"
      ],
      "title": "TextToSpeechVoices",
      "type": "string"
    }
  },
  "description": "Create video config node input.",
  "properties": {
    "brief": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Brief description of the video. Required if transcript is not provided.",
      "title": "Brief"
    },
    "images": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "List of image URLs, used to create the video. If not provided, our AI will find the relevant assets to create the video.",
      "title": "Images"
    },
    "transcript": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Transcript of the video. If not provided, our AI will generate the transcript based on the brief.",
      "title": "Transcript"
    },
    "voice_over_language": {
      "anyOf": [
        {
          "$ref": "#/$defs/TextToSpeechVoices"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Voice over id. If not provided, our AI will choose the most suitable voice based on the brief and the transcript.",
      "enum_options": {
        "Alloy": {
          "languages": [],
          "name": "Alloy",
          "provider": "OpenAI",
          "voice_id": "alloy"
        },
        "Andrew_Neural": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Andrew Neural",
          "provider": "Azure",
          "voice_id": "en-US-AndrewNeural"
        },
        "Ava_Neural": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Ava Neural",
          "provider": "Azure",
          "voice_id": "en-US-AvaNeural"
        },
        "Brian_Neural": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Brian Neural",
          "provider": "Azure",
          "voice_id": "en-US-BrianNeural"
        },
        "Danielle": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Danielle",
          "provider": "AWSPolly",
          "voice_id": "Danielle"
        },
        "Echo": {
          "languages": [],
          "name": "Echo",
          "provider": "OpenAI",
          "voice_id": "echo"
        },
        "Emma_Neural": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Emma Neural",
          "provider": "Azure",
          "voice_id": "en-US-EmmaNeural"
        },
        "Fable": {
          "languages": [],
          "name": "Fable",
          "provider": "OpenAI",
          "voice_id": "fable"
        },
        "Gregory": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Gregory",
          "provider": "AWSPolly",
          "voice_id": "Gregory"
        },
        "Hoai_My_Neural": {
          "gender": "female",
          "languages": [
            "vi"
          ],
          "name": "Hoai My Neural",
          "provider": "Azure",
          "voice_id": "vi-VN-HoaiMyNeural"
        },
        "Ivy": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Ivy",
          "provider": "AWSPolly",
          "voice_id": "Ivy"
        },
        "Joanna": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Joanna",
          "provider": "AWSPolly",
          "voice_id": "Joanna"
        },
        "Joey": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Joey",
          "provider": "AWSPolly",
          "voice_id": "Joey"
        },
        "Justin": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Justin",
          "provider": "AWSPolly",
          "voice_id": "Justin"
        },
        "Kendra": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Kendra",
          "provider": "AWSPolly",
          "voice_id": "Kendra"
        },
        "Kevin": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Kevin",
          "provider": "AWSPolly",
          "voice_id": "Kevin"
        },
        "Kimberly": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Kimberly",
          "provider": "AWSPolly",
          "voice_id": "Kimberly"
        },
        "Matthew": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Matthew",
          "provider": "AWSPolly",
          "voice_id": "Matthew"
        },
        "Nam_Minh_Neural": {
          "gender": "male",
          "languages": [
            "vi"
          ],
          "name": "Nam Minh Neural",
          "provider": "Azure",
          "voice_id": "vi-VN-NamMinhNeural"
        },
        "Nova": {
          "languages": [],
          "name": "Nova",
          "provider": "OpenAI",
          "voice_id": "nova"
        },
        "Onyx": {
          "languages": [],
          "name": "Onyx",
          "provider": "OpenAI",
          "voice_id": "onyx"
        },
        "Ruth": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Ruth",
          "provider": "AWSPolly",
          "voice_id": "Ruth"
        },
        "Salli": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Salli",
          "provider": "AWSPolly",
          "voice_id": "Salli"
        },
        "Shimmer": {
          "languages": [],
          "name": "Shimmer",
          "provider": "OpenAI",
          "voice_id": "shimmer"
        },
        "Stephen": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Stephen",
          "provider": "AWSPolly",
          "voice_id": "Stephen"
        },
        "en_US_Casual_K": {
          "languages": [
            "en"
          ],
          "name": "en-US-Casual-K",
          "provider": "Google",
          "voice_id": "en-US-Casual-K"
        },
        "en_US_Journey_D": {
          "languages": [
            "en"
          ],
          "name": "en-US-Journey-D",
          "provider": "Google",
          "voice_id": "en-US-Journey-D"
        },
        "en_US_Journey_F": {
          "languages": [
            "en"
          ],
          "name": "en-US-Journey-F",
          "provider": "Google",
          "voice_id": "en-US-Journey-F"
        },
        "en_US_Journey_O": {
          "languages": [
            "en"
          ],
          "name": "en-US-Journey-O",
          "provider": "Google",
          "voice_id": "en-US-Journey-O"
        },
        "en_US_Neural2_A": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-A",
          "provider": "Google",
          "voice_id": "en-US-Neural2-A"
        },
        "en_US_Neural2_C": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-C",
          "provider": "Google",
          "voice_id": "en-US-Neural2-C"
        },
        "en_US_Neural2_D": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-D",
          "provider": "Google",
          "voice_id": "en-US-Neural2-D"
        },
        "en_US_Neural2_E": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-E",
          "provider": "Google",
          "voice_id": "en-US-Neural2-E"
        },
        "en_US_Neural2_F": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-F",
          "provider": "Google",
          "voice_id": "en-US-Neural2-F"
        },
        "en_US_Neural2_G": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-G",
          "provider": "Google",
          "voice_id": "en-US-Neural2-G"
        },
        "en_US_Neural2_H": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-H",
          "provider": "Google",
          "voice_id": "en-US-Neural2-H"
        },
        "en_US_Neural2_I": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-I",
          "provider": "Google",
          "voice_id": "en-US-Neural2-I"
        },
        "en_US_Neural2_J": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-J",
          "provider": "Google",
          "voice_id": "en-US-Neural2-J"
        },
        "en_US_News_K": {
          "languages": [
            "en"
          ],
          "name": "en-US-News-K",
          "provider": "Google",
          "voice_id": "en-US-News-K"
        },
        "en_US_News_L": {
          "languages": [
            "en"
          ],
          "name": "en-US-News-L",
          "provider": "Google",
          "voice_id": "en-US-News-L"
        },
        "en_US_News_N": {
          "languages": [
            "en"
          ],
          "name": "en-US-News-N",
          "provider": "Google",
          "voice_id": "en-US-News-N"
        },
        "en_US_Polyglot_1": {
          "languages": [
            "en"
          ],
          "name": "en-US-Polyglot-1",
          "provider": "Google",
          "voice_id": "en-US-Polyglot-1"
        },
        "en_US_Standard_A": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-A",
          "provider": "Google",
          "voice_id": "en-US-Standard-A"
        },
        "en_US_Standard_B": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-B",
          "provider": "Google",
          "voice_id": "en-US-Standard-B"
        },
        "en_US_Standard_C": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-C",
          "provider": "Google",
          "voice_id": "en-US-Standard-C"
        },
        "en_US_Standard_D": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-D",
          "provider": "Google",
          "voice_id": "en-US-Standard-D"
        },
        "en_US_Standard_E": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-E",
          "provider": "Google",
          "voice_id": "en-US-Standard-E"
        },
        "en_US_Standard_F": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-F",
          "provider": "Google",
          "voice_id": "en-US-Standard-F"
        },
        "en_US_Standard_G": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-G",
          "provider": "Google",
          "voice_id": "en-US-Standard-G"
        },
        "en_US_Standard_H": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-H",
          "provider": "Google",
          "voice_id": "en-US-Standard-H"
        },
        "en_US_Standard_I": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-I",
          "provider": "Google",
          "voice_id": "en-US-Standard-I"
        },
        "en_US_Standard_J": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-J",
          "provider": "Google",
          "voice_id": "en-US-Standard-J"
        },
        "en_US_Studio_O": {
          "languages": [
            "en"
          ],
          "name": "en-US-Studio-O",
          "provider": "Google",
          "voice_id": "en-US-Studio-O"
        },
        "en_US_Studio_Q": {
          "languages": [
            "en"
          ],
          "name": "en-US-Studio-Q",
          "provider": "Google",
          "voice_id": "en-US-Studio-Q"
        },
        "en_US_Wavenet-G": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-G",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-G"
        },
        "en_US_Wavenet-H": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-H",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-H"
        },
        "en_US_Wavenet-I": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-I",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-I"
        },
        "en_US_Wavenet-J": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-J",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-J"
        },
        "en_US_Wavenet_A": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-A",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-A"
        },
        "en_US_Wavenet_B": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-B",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-B"
        },
        "en_US_Wavenet_C": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-C",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-C"
        },
        "en_US_Wavenet_D": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-D",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-D"
        },
        "en_US_Wavenet_E": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-E",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-E"
        },
        "en_US_Wavenet_F": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-F",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-F"
        },
        "vi_VN_Neural2_A": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Neural2-A",
          "provider": "Google",
          "voice_id": "vi-VN-Neural2-A"
        },
        "vi_VN_Neural2_D": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Neural2-D",
          "provider": "Google",
          "voice_id": "vi-VN-Neural2-D"
        },
        "vi_VN_Standard_A": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Standard-A",
          "provider": "Google",
          "voice_id": "vi-VN-Standard-A"
        },
        "vi_VN_Standard_B": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Standard-B",
          "provider": "Google",
          "voice_id": "vi-VN-Standard-B"
        },
        "vi_VN_Standard_C": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Standard-C",
          "provider": "Google",
          "voice_id": "vi-VN-Standard-C"
        },
        "vi_VN_Standard_D": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Standard-D",
          "provider": "Google",
          "voice_id": "vi-VN-Standard-D"
        },
        "vi_VN_Wavenet_A": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Wavenet-A",
          "provider": "Google",
          "voice_id": "vi-VN-Wavenet-A"
        },
        "vi_VN_Wavenet_B": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Wavenet-B",
          "provider": "Google",
          "voice_id": "vi-VN-Wavenet-B"
        },
        "vi_VN_Wavenet_C": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Wavenet-C",
          "provider": "Google",
          "voice_id": "vi-VN-Wavenet-C"
        },
        "vi_VN_Wavenet_D": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Wavenet-D",
          "provider": "Google",
          "voice_id": "vi-VN-Wavenet-D"
        }
      }
    },
    "background_music": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Background music. If not provided, our AI will choose the most suitable background music based on the brief and the transcript.",
      "title": "Background Music"
    },
    "media_type": {
      "anyOf": [
        {
          "enum": [
            "moving_ai_images",
            "stock_videos"
          ],
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Media type. If not provided, our AI will choose the most suitable media type based on the brief and the transcript.",
      "title": "Media Type"
    },
    "ai_images_generation_preset": {
      "anyOf": [
        {
          "$ref": "#/$defs/ImageGenPresets"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "AI images generation preset. If not provided, our AI will choose the most suitable preset based on the brief and the transcript."
    }
  },
  "title": "CreateVideoConfigNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Create video config node output.",
  "properties": {
    "video_config": {
      "title": "Video Config",
      "type": "string"
    },
    "video_gen_info": {
      "title": "Video Gen Info",
      "type": "string"
    }
  },
  "required": [
    "video_config",
    "video_gen_info"
  ],
  "title": "CreateVideoConfigNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_create_video",
  "title": "Create video from topic",
  "description": "Create video from topic...",
  "node_type_name": "create_video",
  "input_config": {
    "brief": "example_value",
    "images": "example_value",
    "transcript": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 13. customer_segment

**Title:** Customer Segment

**Description:** Generate customer segment from Amazon Personalize.

**ID:** `customer_segment`

**Scope:** exclusive

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Customer segment node input.",
  "properties": {
    "prompt": {
      "description": "The prompt to use for the question answering.",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "car_model": {
      "default": "COROLLA CROSS PREMIUM - 2022",
      "description": "The car model to use for the question answering.",
      "enum": [
        "YARIS CROSS HYBRID - 2021",
        "COROLLA CROSS PREMIUM - 2022",
        "RAV4 HYBRID - 2022",
        "HARRIER HYBRID PREMIUM - 2022",
        "COROLLA ALTIS STANDARD - 2023",
        "COROLLA ALTIS ELEGANCE - 2023",
        "CAMRY HYBRID STANDARD - 2024",
        "CAMRY HYBRID ELEGANCE - 2024",
        "SIENTA HYBRID ELEGANCE - 2021"
      ],
      "title": "Car model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt"
  ],
  "title": "CustomerSegmentInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Customer segment node output.",
  "properties": {
    "data": {
      "items": {},
      "title": "Data",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "data"
  ],
  "title": "CustomerSegmentNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_customer_segment",
  "title": "Customer Segment",
  "description": "Generate customer segment from Amazon Personalize....",
  "node_type_name": "customer_segment",
  "input_config": {
    "prompt": "example_value",
    "car_model": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 14. delete_agent_task

**Title:** Delete Agent Task

**Description:** Delete an agent task

**ID:** `delete_agent_task`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Delete Agent Task node input.",
  "properties": {
    "task_id": {
      "description": "ID of the task to delete",
      "title": "Task ID",
      "type": "string"
    }
  },
  "required": [
    "task_id"
  ],
  "title": "DeleteAgentTaskNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Delete Agent Task node output.",
  "properties": {
    "success": {
      "description": "Whether the deletion was successful",
      "title": "Success",
      "type": "boolean"
    }
  },
  "required": [
    "success"
  ],
  "title": "DeleteAgentTaskNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_delete_agent_task",
  "title": "Delete Agent Task",
  "description": "Delete an agent task...",
  "node_type_name": "delete_agent_task",
  "input_config": {
    "task_id": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 15. describe_image

**Title:** Analyze Image

**Description:** Use AI vision models to analyze and describe image content

**ID:** `describe_image`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Describe image node input.",
  "properties": {
    "image_url": {
      "description": "The URL of the image to analyze and describe",
      "title": "Image URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "model": {
      "default": "Google Gemini 1.5 Flash",
      "description": "The AI vision model to use for image analysis. Gemini Flash offers fast, efficient image understanding.",
      "enum": [
        "Google Gemini 1.5 Flash",
        "Google Gemini 1.5 Pro",
        "OpenAI GPT-4o"
      ],
      "title": "Vision Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "prompt": {
      "default": "Describe the image as an alternative text",
      "description": "Instructions for how the AI should analyze and describe the image",
      "title": "Instructions",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "image_url"
  ],
  "title": "DescribeImageInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Describe image node output.",
  "properties": {
    "content": {
      "title": "Content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "content"
  ],
  "title": "DescribeImageOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_describe_image",
  "title": "Analyze Image",
  "description": "Use AI vision models to analyze and describe image content...",
  "node_type_name": "describe_image",
  "input_config": {
    "image_url": "example_value",
    "model": "example_value",
    "prompt": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 16. drive_create_folder

**Title:** Create Folder

**Description:** Create a new folder in Drive

**ID:** `drive_create_folder`

**Scope:** public

**Categories:** data

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Input for creating a folder in Drive.",
  "properties": {
    "name": {
      "description": "Name of the folder to create",
      "title": "Folder Name",
      "type": "string"
    },
    "parent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "ID of the parent folder (leave empty for root)",
      "title": "Parent Folder ID"
    }
  },
  "required": [
    "name"
  ],
  "title": "DriveCreateFolderInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "BlobContent": {
      "description": "Blob content information.",
      "properties": {
        "id": {
          "description": "Blob ID",
          "title": "Id",
          "type": "string"
        },
        "sha256": {
          "description": "SHA256 hash of content",
          "title": "Sha256",
          "type": "string"
        },
        "length": {
          "description": "Content length in bytes",
          "title": "Length",
          "type": "integer"
        },
        "mime": {
          "description": "Content MIME type",
          "title": "Mime",
          "type": "string"
        }
      },
      "required": [
        "id",
        "sha256",
        "length",
        "mime"
      ],
      "title": "BlobContent",
      "type": "object"
    },
    "ItemStatus": {
      "description": "Enumeration of item status.",
      "enum": [
        "uploading",
        "active"
      ],
      "title": "ItemStatus",
      "type": "string"
    },
    "ItemType": {
      "description": "Enumeration of item types.",
      "enum": [
        "file",
        "folder"
      ],
      "title": "ItemType",
      "type": "string"
    }
  },
  "description": "Output for create folder operation - returns the created folder Item.",
  "properties": {
    "id": {
      "description": "ULID identifier",
      "title": "Id",
      "type": "string"
    },
    "workspace_id": {
      "description": "Workspace UUID",
      "title": "Workspace Id",
      "type": "string"
    },
    "project_id": {
      "description": "Project ULID",
      "title": "Project Id",
      "type": "string"
    },
    "type": {
      "$ref": "#/$defs/ItemType",
      "description": "Item type (file or folder)"
    },
    "status": {
      "$ref": "#/$defs/ItemStatus",
      "default": "active",
      "description": "Item status"
    },
    "parent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Parent item ULID",
      "title": "Parent Id"
    },
    "name": {
      "description": "Item name",
      "title": "Name",
      "type": "string"
    },
    "etag": {
      "description": "Entity tag for versioning",
      "title": "Etag",
      "type": "string"
    },
    "created_at": {
      "description": "Creation timestamp",
      "format": "date-time",
      "title": "Created At",
      "type": "string"
    },
    "updated_at": {
      "description": "Last update timestamp",
      "format": "date-time",
      "title": "Updated At",
      "type": "string"
    },
    "deleted_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Deletion timestamp",
      "title": "Deleted At"
    },
    "blob_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Content blob ULID (for files)",
      "title": "Blob Id"
    },
    "created_by": {
      "description": "Creator user UUID",
      "title": "Created By",
      "type": "string"
    },
    "blob": {
      "anyOf": [
        {
          "$ref": "#/$defs/BlobContent"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Blob content information"
    },
    "path": {
      "description": "ltree path (internal format)",
      "title": "Path",
      "type": "string"
    }
  },
  "required": [
    "id",
    "workspace_id",
    "project_id",
    "type",
    "name",
    "etag",
    "created_at",
    "updated_at",
    "created_by",
    "path"
  ],
  "title": "DriveCreateFolderOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_drive_create_folder",
  "title": "Create Folder",
  "description": "Create a new folder in Drive...",
  "node_type_name": "drive_create_folder",
  "input_config": {
    "name": "example_value",
    "parent_id": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 17. drive_create_upload_session

**Title:** Create Upload Session

**Description:** Create an upload session and get presigned URL for file upload

**ID:** `drive_create_upload_session`

**Scope:** public

**Categories:** data

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Input for creating an upload session.",
  "properties": {
    "name": {
      "description": "Name of the file to upload",
      "title": "File Name",
      "type": "string"
    },
    "content_type": {
      "description": "MIME type of the file",
      "title": "Content Type",
      "type": "string"
    },
    "parent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "ID of the parent folder (None for root)",
      "title": "Parent Folder ID"
    },
    "size": {
      "anyOf": [
        {
          "minimum": 0,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Expected file size in bytes",
      "title": "File Size"
    },
    "sha256": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Expected SHA256 hash of the file",
      "title": "SHA256 Hash"
    },
    "item_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional item ID if updating existing file",
      "title": "Item ID"
    }
  },
  "required": [
    "name",
    "content_type"
  ],
  "title": "DriveCreateUploadSessionInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "UploadSession": {
      "description": "Upload session for tracking direct-to-S3 uploads via presigned URLs.",
      "properties": {
        "id": {
          "description": "ULID identifier",
          "title": "Id",
          "type": "string"
        },
        "workspace_id": {
          "description": "Workspace UUID",
          "title": "Workspace Id",
          "type": "string"
        },
        "project_id": {
          "description": "Project ULID",
          "title": "Project Id",
          "type": "string"
        },
        "item_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Item ID if updating existing file, null for new upload",
          "title": "Item Id"
        },
        "s3_key": {
          "description": "Full S3 key where file will be uploaded",
          "title": "S3 Key",
          "type": "string"
        },
        "upload_metadata": {
          "additionalProperties": true,
          "description": "Upload metadata: filename, content_type, parent_id, etc",
          "title": "Upload Metadata",
          "type": "object"
        },
        "expected_size": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Expected file size in bytes",
          "title": "Expected Size"
        },
        "expected_sha256": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Expected SHA256 hash for validation",
          "title": "Expected Sha256"
        },
        "actual_size": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Actual uploaded file size (set by S3 event)",
          "title": "Actual Size"
        },
        "actual_etag": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "S3 ETag from upload completion",
          "title": "Actual Etag"
        },
        "status": {
          "$ref": "#/$defs/UploadSessionStatus",
          "default": "pending",
          "description": "Upload session status"
        },
        "created_at": {
          "description": "Creation timestamp",
          "format": "date-time",
          "title": "Created At",
          "type": "string"
        },
        "completed_at": {
          "anyOf": [
            {
              "format": "date-time",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "When S3 upload was completed",
          "title": "Completed At"
        },
        "expires_at": {
          "description": "Presigned URL expiration time",
          "format": "date-time",
          "title": "Expires At",
          "type": "string"
        }
      },
      "required": [
        "id",
        "workspace_id",
        "project_id",
        "s3_key",
        "created_at",
        "expires_at"
      ],
      "title": "UploadSession",
      "type": "object"
    },
    "UploadSessionStatus": {
      "description": "Enumeration of upload session statuses.",
      "enum": [
        "pending",
        "completed",
        "failed"
      ],
      "title": "UploadSessionStatus",
      "type": "string"
    }
  },
  "description": "Output for create upload session operation.",
  "properties": {
    "session": {
      "$ref": "#/$defs/UploadSession",
      "description": "Upload session details"
    },
    "upload_url": {
      "description": "Presigned upload URL",
      "title": "Upload Url",
      "type": "string"
    },
    "item_id": {
      "description": "Item ID for the uploaded file",
      "title": "Item Id",
      "type": "string"
    }
  },
  "required": [
    "session",
    "upload_url",
    "item_id"
  ],
  "title": "DriveCreateUploadSessionOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_drive_create_upload_session",
  "title": "Create Upload Session",
  "description": "Create an upload session and get presigned URL for file uplo...",
  "node_type_name": "drive_create_upload_session",
  "input_config": {
    "name": "example_value",
    "content_type": "example_value",
    "parent_id": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 18. drive_delete_item

**Title:** Delete Item

**Description:** Delete a Drive item (soft delete)

**ID:** `drive_delete_item`

**Scope:** public

**Categories:** data

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Input for deleting an item.",
  "properties": {
    "item_id": {
      "description": "ID of the item to delete",
      "title": "Item ID",
      "type": "string"
    }
  },
  "required": [
    "item_id"
  ],
  "title": "DriveDeleteItemInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output for delete item operation.",
  "properties": {
    "deleted": {
      "default": true,
      "description": "Whether the item was successfully deleted",
      "title": "Deleted",
      "type": "boolean"
    }
  },
  "title": "DriveDeleteItemOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_drive_delete_item",
  "title": "Delete Item",
  "description": "Delete a Drive item (soft delete)...",
  "node_type_name": "drive_delete_item",
  "input_config": {
    "item_id": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 19. drive_get_download_url

**Title:** Get Download URL

**Description:** Get presigned download URL for a Drive item

**ID:** `drive_get_download_url`

**Scope:** public

**Categories:** data

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Input for getting download URL for an item.",
  "properties": {
    "item_id": {
      "description": "ID of the item to get download URL for",
      "title": "Item ID",
      "type": "string"
    },
    "ttl": {
      "default": 3600,
      "description": "URL expiration time in seconds (default: 3600)",
      "maximum": 86400,
      "minimum": 60,
      "title": "TTL",
      "type": "integer"
    }
  },
  "required": [
    "item_id"
  ],
  "title": "DriveGetDownloadURLInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output for get download URL operation.",
  "properties": {
    "item_id": {
      "description": "Item ID",
      "title": "Item Id",
      "type": "string"
    },
    "blob_id": {
      "description": "Content blob ID",
      "title": "Blob Id",
      "type": "string"
    },
    "download_url": {
      "description": "Presigned download URL",
      "title": "Download Url",
      "type": "string"
    },
    "size": {
      "description": "File size in bytes",
      "title": "Size",
      "type": "integer"
    },
    "mime_type": {
      "description": "MIME type",
      "title": "Mime Type",
      "type": "string"
    },
    "cache_control": {
      "description": "Cache control header",
      "title": "Cache Control",
      "type": "string"
    }
  },
  "required": [
    "item_id",
    "blob_id",
    "download_url",
    "size",
    "mime_type",
    "cache_control"
  ],
  "title": "DriveGetDownloadURLOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_drive_get_download_url",
  "title": "Get Download URL",
  "description": "Get presigned download URL for a Drive item...",
  "node_type_name": "drive_get_download_url",
  "input_config": {
    "item_id": "example_value",
    "ttl": 0
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 20. drive_get_item

**Title:** Get Item

**Description:** Get a Drive item by ID

**ID:** `drive_get_item`

**Scope:** public

**Categories:** data

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Input for getting an item by ID.",
  "properties": {
    "item_id": {
      "description": "ID of the item to retrieve",
      "title": "Item ID",
      "type": "string"
    }
  },
  "required": [
    "item_id"
  ],
  "title": "DriveGetItemInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "BlobContent": {
      "description": "Blob content information.",
      "properties": {
        "id": {
          "description": "Blob ID",
          "title": "Id",
          "type": "string"
        },
        "sha256": {
          "description": "SHA256 hash of content",
          "title": "Sha256",
          "type": "string"
        },
        "length": {
          "description": "Content length in bytes",
          "title": "Length",
          "type": "integer"
        },
        "mime": {
          "description": "Content MIME type",
          "title": "Mime",
          "type": "string"
        }
      },
      "required": [
        "id",
        "sha256",
        "length",
        "mime"
      ],
      "title": "BlobContent",
      "type": "object"
    },
    "ItemStatus": {
      "description": "Enumeration of item status.",
      "enum": [
        "uploading",
        "active"
      ],
      "title": "ItemStatus",
      "type": "string"
    },
    "ItemType": {
      "description": "Enumeration of item types.",
      "enum": [
        "file",
        "folder"
      ],
      "title": "ItemType",
      "type": "string"
    }
  },
  "description": "Output for get item operation - returns the Item.",
  "properties": {
    "id": {
      "description": "ULID identifier",
      "title": "Id",
      "type": "string"
    },
    "workspace_id": {
      "description": "Workspace UUID",
      "title": "Workspace Id",
      "type": "string"
    },
    "project_id": {
      "description": "Project ULID",
      "title": "Project Id",
      "type": "string"
    },
    "type": {
      "$ref": "#/$defs/ItemType",
      "description": "Item type (file or folder)"
    },
    "status": {
      "$ref": "#/$defs/ItemStatus",
      "default": "active",
      "description": "Item status"
    },
    "parent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Parent item ULID",
      "title": "Parent Id"
    },
    "name": {
      "description": "Item name",
      "title": "Name",
      "type": "string"
    },
    "etag": {
      "description": "Entity tag for versioning",
      "title": "Etag",
      "type": "string"
    },
    "created_at": {
      "description": "Creation timestamp",
      "format": "date-time",
      "title": "Created At",
      "type": "string"
    },
    "updated_at": {
      "description": "Last update timestamp",
      "format": "date-time",
      "title": "Updated At",
      "type": "string"
    },
    "deleted_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Deletion timestamp",
      "title": "Deleted At"
    },
    "blob_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Content blob ULID (for files)",
      "title": "Blob Id"
    },
    "created_by": {
      "description": "Creator user UUID",
      "title": "Created By",
      "type": "string"
    },
    "blob": {
      "anyOf": [
        {
          "$ref": "#/$defs/BlobContent"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Blob content information"
    },
    "path": {
      "description": "ltree path (internal format)",
      "title": "Path",
      "type": "string"
    }
  },
  "required": [
    "id",
    "workspace_id",
    "project_id",
    "type",
    "name",
    "etag",
    "created_at",
    "updated_at",
    "created_by",
    "path"
  ],
  "title": "DriveGetItemOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_drive_get_item",
  "title": "Get Item",
  "description": "Get a Drive item by ID...",
  "node_type_name": "drive_get_item",
  "input_config": {
    "item_id": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 21. drive_get_uri_download_url

**Title:** Get URI Download URL

**Description:** Get presigned download URL for a Drive item by URI

**ID:** `drive_get_uri_download_url`

**Scope:** public

**Categories:** data

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Input for getting download URL by URI.",
  "properties": {
    "uri": {
      "description": "PMLFS URI to resolve (format: pmlfs://<project_id>/<path>)",
      "title": "URI",
      "type": "string"
    },
    "ttl": {
      "default": 3600,
      "description": "URL expiration time in seconds (default: 3600)",
      "maximum": 86400,
      "minimum": 60,
      "title": "TTL",
      "type": "integer"
    }
  },
  "required": [
    "uri"
  ],
  "title": "DriveGetURIDownloadURLInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output for get URI download URL operation.",
  "properties": {
    "download_url": {
      "description": "Presigned download URL",
      "title": "Download Url",
      "type": "string"
    }
  },
  "required": [
    "download_url"
  ],
  "title": "DriveGetURIDownloadURLOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_drive_get_uri_download_url",
  "title": "Get URI Download URL",
  "description": "Get presigned download URL for a Drive item by URI...",
  "node_type_name": "drive_get_uri_download_url",
  "input_config": {
    "uri": "example_value",
    "ttl": 0
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 22. drive_list_items

**Title:** List Items

**Description:** List items in a Drive folder

**ID:** `drive_list_items`

**Scope:** public

**Categories:** data

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Input for listing items in Drive.",
  "properties": {
    "parent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "ID of the parent folder (leave empty for root)",
      "title": "Parent Folder ID"
    },
    "limit": {
      "default": 100,
      "description": "Maximum number of items to return",
      "maximum": 1000,
      "minimum": 1,
      "title": "Limit",
      "type": "integer"
    },
    "offset": {
      "default": 0,
      "description": "Number of items to skip",
      "minimum": 0,
      "title": "Offset",
      "type": "integer"
    }
  },
  "title": "DriveListItemsInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "BlobContent": {
      "description": "Blob content information.",
      "properties": {
        "id": {
          "description": "Blob ID",
          "title": "Id",
          "type": "string"
        },
        "sha256": {
          "description": "SHA256 hash of content",
          "title": "Sha256",
          "type": "string"
        },
        "length": {
          "description": "Content length in bytes",
          "title": "Length",
          "type": "integer"
        },
        "mime": {
          "description": "Content MIME type",
          "title": "Mime",
          "type": "string"
        }
      },
      "required": [
        "id",
        "sha256",
        "length",
        "mime"
      ],
      "title": "BlobContent",
      "type": "object"
    },
    "Item": {
      "description": "Item model representing files and folders.",
      "properties": {
        "id": {
          "description": "ULID identifier",
          "title": "Id",
          "type": "string"
        },
        "workspace_id": {
          "description": "Workspace UUID",
          "title": "Workspace Id",
          "type": "string"
        },
        "project_id": {
          "description": "Project ULID",
          "title": "Project Id",
          "type": "string"
        },
        "type": {
          "$ref": "#/$defs/ItemType",
          "description": "Item type (file or folder)"
        },
        "status": {
          "$ref": "#/$defs/ItemStatus",
          "default": "active",
          "description": "Item status"
        },
        "parent_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Parent item ULID",
          "title": "Parent Id"
        },
        "name": {
          "description": "Item name",
          "title": "Name",
          "type": "string"
        },
        "etag": {
          "description": "Entity tag for versioning",
          "title": "Etag",
          "type": "string"
        },
        "created_at": {
          "description": "Creation timestamp",
          "format": "date-time",
          "title": "Created At",
          "type": "string"
        },
        "updated_at": {
          "description": "Last update timestamp",
          "format": "date-time",
          "title": "Updated At",
          "type": "string"
        },
        "deleted_at": {
          "anyOf": [
            {
              "format": "date-time",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Deletion timestamp",
          "title": "Deleted At"
        },
        "blob_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Content blob ULID (for files)",
          "title": "Blob Id"
        },
        "created_by": {
          "description": "Creator user UUID",
          "title": "Created By",
          "type": "string"
        },
        "blob": {
          "anyOf": [
            {
              "$ref": "#/$defs/BlobContent"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "Blob content information"
        },
        "path": {
          "description": "ltree path (internal format)",
          "title": "Path",
          "type": "string"
        }
      },
      "required": [
        "id",
        "workspace_id",
        "project_id",
        "type",
        "name",
        "etag",
        "created_at",
        "updated_at",
        "created_by",
        "path"
      ],
      "title": "Item",
      "type": "object"
    },
    "ItemStatus": {
      "description": "Enumeration of item status.",
      "enum": [
        "uploading",
        "active"
      ],
      "title": "ItemStatus",
      "type": "string"
    },
    "ItemType": {
      "description": "Enumeration of item types.",
      "enum": [
        "file",
        "folder"
      ],
      "title": "ItemType",
      "type": "string"
    }
  },
  "description": "Output for list items operation.",
  "properties": {
    "items": {
      "description": "List of items in the folder",
      "items": {
        "$ref": "#/$defs/Item"
      },
      "title": "Items",
      "type": "array"
    }
  },
  "required": [
    "items"
  ],
  "title": "DriveListItemsOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_drive_list_items",
  "title": "List Items",
  "description": "List items in a Drive folder...",
  "node_type_name": "drive_list_items",
  "input_config": {
    "parent_id": "example_value",
    "limit": 0,
    "offset": 0
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 23. drive_resolve_uri

**Title:** Resolve URI

**Description:** Resolve a pmlfs:// URI to a Drive item

**ID:** `drive_resolve_uri`

**Scope:** public

**Categories:** data

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Input for resolving a pmlfs:// URI.",
  "properties": {
    "uri": {
      "description": "PMLFS URI to resolve (format: pmlfs://<project_id>/<path>)",
      "title": "URI",
      "type": "string"
    }
  },
  "required": [
    "uri"
  ],
  "title": "DriveResolveURIInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "BlobContent": {
      "description": "Blob content information.",
      "properties": {
        "id": {
          "description": "Blob ID",
          "title": "Id",
          "type": "string"
        },
        "sha256": {
          "description": "SHA256 hash of content",
          "title": "Sha256",
          "type": "string"
        },
        "length": {
          "description": "Content length in bytes",
          "title": "Length",
          "type": "integer"
        },
        "mime": {
          "description": "Content MIME type",
          "title": "Mime",
          "type": "string"
        }
      },
      "required": [
        "id",
        "sha256",
        "length",
        "mime"
      ],
      "title": "BlobContent",
      "type": "object"
    },
    "ItemStatus": {
      "description": "Enumeration of item status.",
      "enum": [
        "uploading",
        "active"
      ],
      "title": "ItemStatus",
      "type": "string"
    },
    "ItemType": {
      "description": "Enumeration of item types.",
      "enum": [
        "file",
        "folder"
      ],
      "title": "ItemType",
      "type": "string"
    }
  },
  "description": "Output for resolve URI operation - returns the resolved Item.",
  "properties": {
    "id": {
      "description": "ULID identifier",
      "title": "Id",
      "type": "string"
    },
    "workspace_id": {
      "description": "Workspace UUID",
      "title": "Workspace Id",
      "type": "string"
    },
    "project_id": {
      "description": "Project ULID",
      "title": "Project Id",
      "type": "string"
    },
    "type": {
      "$ref": "#/$defs/ItemType",
      "description": "Item type (file or folder)"
    },
    "status": {
      "$ref": "#/$defs/ItemStatus",
      "default": "active",
      "description": "Item status"
    },
    "parent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Parent item ULID",
      "title": "Parent Id"
    },
    "name": {
      "description": "Item name",
      "title": "Name",
      "type": "string"
    },
    "etag": {
      "description": "Entity tag for versioning",
      "title": "Etag",
      "type": "string"
    },
    "created_at": {
      "description": "Creation timestamp",
      "format": "date-time",
      "title": "Created At",
      "type": "string"
    },
    "updated_at": {
      "description": "Last update timestamp",
      "format": "date-time",
      "title": "Updated At",
      "type": "string"
    },
    "deleted_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Deletion timestamp",
      "title": "Deleted At"
    },
    "blob_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Content blob ULID (for files)",
      "title": "Blob Id"
    },
    "created_by": {
      "description": "Creator user UUID",
      "title": "Created By",
      "type": "string"
    },
    "blob": {
      "anyOf": [
        {
          "$ref": "#/$defs/BlobContent"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Blob content information"
    },
    "path": {
      "description": "ltree path (internal format)",
      "title": "Path",
      "type": "string"
    }
  },
  "required": [
    "id",
    "workspace_id",
    "project_id",
    "type",
    "name",
    "etag",
    "created_at",
    "updated_at",
    "created_by",
    "path"
  ],
  "title": "DriveResolveURIOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_drive_resolve_uri",
  "title": "Resolve URI",
  "description": "Resolve a pmlfs:// URI to a Drive item...",
  "node_type_name": "drive_resolve_uri",
  "input_config": {
    "uri": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 24. drive_update_item

**Title:** Update Item

**Description:** Update a Drive item (rename/move)

**ID:** `drive_update_item`

**Scope:** public

**Categories:** data

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Input for updating an item (rename/move).",
  "properties": {
    "item_id": {
      "description": "ID of the item to update",
      "title": "Item ID",
      "type": "string"
    },
    "name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "New name for the item (leave empty to keep current name)",
      "title": "New Name"
    },
    "parent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "ID of the new parent folder (leave empty to keep current parent)",
      "title": "New Parent Folder ID"
    },
    "if_match": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "ETag for concurrency control (optional)",
      "title": "If-Match ETag"
    }
  },
  "required": [
    "item_id"
  ],
  "title": "DriveUpdateItemInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "BlobContent": {
      "description": "Blob content information.",
      "properties": {
        "id": {
          "description": "Blob ID",
          "title": "Id",
          "type": "string"
        },
        "sha256": {
          "description": "SHA256 hash of content",
          "title": "Sha256",
          "type": "string"
        },
        "length": {
          "description": "Content length in bytes",
          "title": "Length",
          "type": "integer"
        },
        "mime": {
          "description": "Content MIME type",
          "title": "Mime",
          "type": "string"
        }
      },
      "required": [
        "id",
        "sha256",
        "length",
        "mime"
      ],
      "title": "BlobContent",
      "type": "object"
    },
    "ItemStatus": {
      "description": "Enumeration of item status.",
      "enum": [
        "uploading",
        "active"
      ],
      "title": "ItemStatus",
      "type": "string"
    },
    "ItemType": {
      "description": "Enumeration of item types.",
      "enum": [
        "file",
        "folder"
      ],
      "title": "ItemType",
      "type": "string"
    }
  },
  "description": "Output for update item operation - returns the updated Item.",
  "properties": {
    "id": {
      "description": "ULID identifier",
      "title": "Id",
      "type": "string"
    },
    "workspace_id": {
      "description": "Workspace UUID",
      "title": "Workspace Id",
      "type": "string"
    },
    "project_id": {
      "description": "Project ULID",
      "title": "Project Id",
      "type": "string"
    },
    "type": {
      "$ref": "#/$defs/ItemType",
      "description": "Item type (file or folder)"
    },
    "status": {
      "$ref": "#/$defs/ItemStatus",
      "default": "active",
      "description": "Item status"
    },
    "parent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Parent item ULID",
      "title": "Parent Id"
    },
    "name": {
      "description": "Item name",
      "title": "Name",
      "type": "string"
    },
    "etag": {
      "description": "Entity tag for versioning",
      "title": "Etag",
      "type": "string"
    },
    "created_at": {
      "description": "Creation timestamp",
      "format": "date-time",
      "title": "Created At",
      "type": "string"
    },
    "updated_at": {
      "description": "Last update timestamp",
      "format": "date-time",
      "title": "Updated At",
      "type": "string"
    },
    "deleted_at": {
      "anyOf": [
        {
          "format": "date-time",
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Deletion timestamp",
      "title": "Deleted At"
    },
    "blob_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Content blob ULID (for files)",
      "title": "Blob Id"
    },
    "created_by": {
      "description": "Creator user UUID",
      "title": "Created By",
      "type": "string"
    },
    "blob": {
      "anyOf": [
        {
          "$ref": "#/$defs/BlobContent"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Blob content information"
    },
    "path": {
      "description": "ltree path (internal format)",
      "title": "Path",
      "type": "string"
    }
  },
  "required": [
    "id",
    "workspace_id",
    "project_id",
    "type",
    "name",
    "etag",
    "created_at",
    "updated_at",
    "created_by",
    "path"
  ],
  "title": "DriveUpdateItemOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_drive_update_item",
  "title": "Update Item",
  "description": "Update a Drive item (rename/move)...",
  "node_type_name": "drive_update_item",
  "input_config": {
    "item_id": "example_value",
    "name": "example_value",
    "parent_id": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 25. echo

**Title:** Echo

**Description:** Get back whatever your input is

**ID:** `echo`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Echo node input.",
  "properties": {
    "data": {
      "description": "The data to echo",
      "title": "Data",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "data"
  ],
  "title": "EchoNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Echo node output.",
  "properties": {
    "data": {
      "description": "Data of the echo",
      "title": "Data",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "data"
  ],
  "title": "EchoNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_echo",
  "title": "Echo",
  "description": "Get back whatever your input is...",
  "node_type_name": "echo",
  "input_config": {
    "data": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 26. edit_video

**Title:** Edit video

**Description:** Edit video

**ID:** `edit_video`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "description": "Edit video node input.",
  "properties": {
    "brief": {
      "description": "Brief description of the video.",
      "title": "Brief",
      "type": "string"
    },
    "images": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "List of image URLs, used to create the video. If not provided, our AI will find the relevant assets to create the video.",
      "title": "Images"
    },
    "existing_video_config": {
      "title": "Existing Video Config",
      "type": "string"
    },
    "existing_video_gen_info": {
      "title": "Existing Video Gen Info",
      "type": "string"
    },
    "change_request": {
      "title": "Change Request",
      "type": "string"
    }
  },
  "required": [
    "brief",
    "existing_video_config",
    "existing_video_gen_info",
    "change_request"
  ],
  "title": "EditVideoNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Create video node output.",
  "properties": {
    "video_config": {
      "title": "Video Config",
      "type": "string"
    },
    "video_gen_info": {
      "title": "Video Gen Info",
      "type": "string"
    }
  },
  "required": [
    "video_config",
    "video_gen_info"
  ],
  "title": "EditVideoNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_edit_video",
  "title": "Edit video",
  "description": "Edit video...",
  "node_type_name": "edit_video",
  "input_config": {
    "brief": "example_value",
    "images": "example_value",
    "existing_video_config": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 27. enhance

**Title:** Enhance Image

**Description:** Enhance image node.

**ID:** `enhance`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Enahnce node input.",
  "properties": {
    "image_url": {
      "title": "Image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image_url"
  ],
  "title": "EnhanceNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Enahnce node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "EnhanceNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_enhance",
  "title": "Enhance Image",
  "description": "Enhance image node....",
  "node_type_name": "enhance",
  "input_config": {
    "image_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 28. enhance_image_v2

**Title:** Enhance Image V2

**Description:** Image enhancement version 2.0 utilizes artificial intelligence to improve the quality of your photos. It can increase resolution, sharpen details, and correct colors, all while preserving the original content of your image. This can be especially helpful for restoring old photos or enlarging low-resolution images

**ID:** `enhance_image_v2`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Enahnce node v2 input.",
  "properties": {
    "image_url": {
      "title": "Image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image_url"
  ],
  "title": "EnhanceNodeV2Input",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Enahnce node v2 output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "EnhanceNodeV2Output",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_enhance_image_v2",
  "title": "Enhance Image V2",
  "description": "Image enhancement version 2.0 utilizes artificial intelligen...",
  "node_type_name": "enhance_image_v2",
  "input_config": {
    "image_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 29. export_data_to_file

**Title:** Export Data to File

**Description:** Export data to a file. The file will be stored in S3 and the URL will be returned.

**ID:** `export_data_to_file`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Export Data to File node input.",
  "properties": {
    "data": {
      "title": "Data to export",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "file_extension": {
      "default": "txt",
      "title": "File extension",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "data"
  ],
  "title": "ExportDataToFileNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Export Data to file node output.",
  "properties": {
    "file_url": {
      "title": "File URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "file_url"
  ],
  "title": "ExportDataToFileNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_export_data_to_file",
  "title": "Export Data to File",
  "description": "Export data to a file. The file will be stored in S3 and the...",
  "node_type_name": "export_data_to_file",
  "input_config": {
    "data": "example_value",
    "file_extension": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 30. export_dataset

**Title:** Export Data Set

**Description:** Export a dataset to a file.

**ID:** `export_dataset`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Export Data Set node input.",
  "properties": {
    "dataset_id": {
      "description": "The ID of the dataset to export.",
      "title": "Dataset ID",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "workflow_run_status": {
      "anyOf": [
        {
          "enum": [
            "created",
            "queued",
            "running",
            "success",
            "failed"
          ],
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Filter documents by workflow run status.",
      "title": "Filter documents by workflow run status"
    }
  },
  "required": [
    "dataset_id"
  ],
  "title": "ExportDatasetNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Export Data Set node output.",
  "properties": {
    "exported_file_url": {
      "description": "The URL of the exported file.",
      "title": "Exported file URL",
      "type": "string"
    }
  },
  "required": [
    "exported_file_url"
  ],
  "title": "ExportDatasetNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_export_dataset",
  "title": "Export Data Set",
  "description": "Export a dataset to a file....",
  "node_type_name": "export_dataset",
  "input_config": {
    "dataset_id": "example_value",
    "workflow_run_status": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 31. extract_content

**Title:** Extract Content

**Description:** Extract structured content from text using a specified schema.

**ID:** `extract_content`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "AllowedModels": {
      "description": "Allowed models for the web scraping node.",
      "enum": [
        "gpt-3.5-turbo-0613",
        "gpt-4-32k-0613"
      ],
      "title": "AllowedModels",
      "type": "string"
    }
  },
  "description": "Extract content node input.",
  "properties": {
    "extract_from": {
      "description": "The content to extract from.",
      "title": "Extract From",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "extract_schema": {
      "additionalProperties": true,
      "description": "A json string represent schema for the extracted content.",
      "title": "Extract Schema",
      "type": "object",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "model": {
      "$ref": "#/$defs/AllowedModels",
      "default": "gpt-3.5-turbo-0613",
      "description": "The LLM model to use for extracting content.",
      "title": "Model",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "extract_from",
    "extract_schema"
  ],
  "title": "ExtractContentNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Extract content node output.",
  "properties": {
    "extracted_content": {
      "description": "The extracted content from the web URLs.",
      "items": {
        "additionalProperties": true,
        "type": "object"
      },
      "title": "Extracted Content",
      "type": "array"
    }
  },
  "required": [
    "extracted_content"
  ],
  "title": "ExtractContentNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_extract_content",
  "title": "Extract Content",
  "description": "Extract structured content from text using a specified schem...",
  "node_type_name": "extract_content",
  "input_config": {
    "extract_from": "example_value",
    "extract_schema": {},
    "model": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 32. face_detailer

**Title:** Face Detailer

**Description:** Face Detailer node.

**ID:** `face_detailer`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Face Detailer node input.",
  "properties": {
    "image_url": {
      "title": "Image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image_url"
  ],
  "title": "FaceDetailerNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Face Detailer node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "FaceDetailerNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_face_detailer",
  "title": "Face Detailer",
  "description": "Face Detailer node....",
  "node_type_name": "face_detailer",
  "input_config": {
    "image_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 33. face_swap

**Title:** Face Swap

**Description:** Face Swap node.

**ID:** `face_swap`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "face swap node input.",
  "properties": {
    "source_image_url": {
      "title": "Source image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "input_image_url": {
      "title": "Input image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "frame_image_url": {
      "title": "Frme image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "frame_width": {
      "description": "The width of the frame image.",
      "title": "Frame width",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "frame_height": {
      "description": "The height of the frame image.",
      "title": "Frame height",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "image_width": {
      "description": "The width of the image.",
      "title": "Image width",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "image_height": {
      "description": "The height of the image.",
      "title": "Image height",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 6,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "image_x": {
      "description": "The x coordinate of the image.",
      "title": "Image x",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 7,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "image_y": {
      "description": "The y coordinate of the image.",
      "title": "Image y",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 8,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "source_image_url",
    "input_image_url",
    "frame_image_url",
    "frame_width",
    "frame_height",
    "image_width",
    "image_height",
    "image_x",
    "image_y"
  ],
  "title": "FaceSwapNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "FaceSwap node output.",
  "properties": {
    "images": {
      "items": {
        "title": "Image output",
        "type": "string",
        "ui_metadata": {
          "allowed_mime_types": null,
          "depends_on": null,
          "max_height": null,
          "max_size": null,
          "max_width": null,
          "media_type": "image",
          "min_height": null,
          "min_size": null,
          "min_width": null,
          "options": null,
          "order": 0,
          "password": false,
          "ref_image": null,
          "type": "media_url",
          "value": null
        }
      },
      "title": "Images",
      "type": "array"
    }
  },
  "required": [
    "images"
  ],
  "title": "FaceSwapNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_face_swap",
  "title": "Face Swap",
  "description": "Face Swap node....",
  "node_type_name": "face_swap",
  "input_config": {
    "source_image_url": "example_value",
    "input_image_url": "example_value",
    "frame_image_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 34. fal_run_model

**Title:** Run FAL Model

**Description:** Run any model on FAL.ai with your API key.

**ID:** `fal_run_model`

**Scope:** public

**Connection Required:**
- Name: FAL Connection
- Description: The FAL connection to use for the model.
- Required: Yes
- Category: fal

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Run FAL Model node input.",
  "properties": {
    "model": {
      "description": "The FAL model to run (format: 'owner/model_name'). Example: 'fal-ai/fast-sdxl'",
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "input_params": {
      "additionalProperties": true,
      "description": "The input parameters for the model. These vary depending on the model you're using. Check the model's documentation for details.",
      "title": "Input Parameters",
      "type": "object",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "image_input": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional image input for models that require an image. This will be added to the input parameters with the key 'image'.",
      "title": "Image Input",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "use_streaming": {
      "default": false,
      "description": "Whether to use streaming for models that support it. This allows receiving partial results as they become available.",
      "title": "Use Streaming",
      "type": "boolean",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "model",
    "input_params"
  ],
  "title": "FalRunModelInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a FAL model.",
  "properties": {
    "result": {
      "description": "The output from the FAL model. This can be text, URLs to generated images, or other data depending on the model.",
      "title": "Result"
    }
  },
  "required": [
    "result"
  ],
  "title": "FalModelOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_fal_run_model",
  "title": "Run FAL Model",
  "description": "Run any model on FAL.ai with your API key....",
  "node_type_name": "fal_run_model",
  "input_config": {
    "model": "example_value",
    "input_params": {},
    "image_input": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 35. firecrawl

**Title:** FireCrawl

**Description:** FireCrawl

**ID:** `firecrawl`

**Scope:** exclusive

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "FireCrawl node input.",
  "properties": {
    "url": {
      "description": "URL to crawl.",
      "title": "URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "prompt": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "description": "The prompt to use for the extraction without a schema.",
      "title": "Prompt",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "url",
    "prompt"
  ],
  "title": "FireCrawlNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Web scraping node output.",
  "properties": {
    "data": {
      "description": "The extracted data from the web URL.",
      "title": "Data",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json_str",
        "value": null
      }
    }
  },
  "required": [
    "data"
  ],
  "title": "FireCrawlNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_firecrawl",
  "title": "FireCrawl",
  "description": "FireCrawl...",
  "node_type_name": "firecrawl",
  "input_config": {
    "url": "example_value",
    "prompt": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 36. firecrawl_crawl

**Title:** Firecrawl Crawl

**Description:** Crawls a URL and all its accessible subpages, outputting the content from each page.

**ID:** `firecrawl_crawl`

**Scope:** public

**Connection Required:**
- Name: Firecrawl Connection
- Description: The Firecrawl connection to use for the crawl.
- Required: Yes
- Category: firecrawl

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Run Firecrawl crawl node input.",
  "properties": {
    "url": {
      "description": "The URL to crawl.",
      "title": "URL",
      "type": "string"
    },
    "ignore_sitemap": {
      "default": false,
      "description": "Ignore the website sitemap when crawling.",
      "title": "Ignore Sitemap",
      "type": "boolean"
    },
    "crawl_entire_website": {
      "default": false,
      "description": "Crawl the entire domain. Enables the crawler to navigate from a specific URL to previously linked pages or pages that are not children of the current URL.",
      "title": "Crawl entire website",
      "type": "boolean"
    },
    "limit": {
      "default": 10,
      "description": "Maximum number of pages to crawl. Maximum is 100.",
      "maximum": 100,
      "minimum": 1,
      "title": "Limit",
      "type": "integer"
    },
    "max_depth": {
      "anyOf": [
        {
          "maximum": 100,
          "minimum": 1,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Maximum depth to crawl. Maximum is 100. If not specified, the crawler will crawl the entire website.",
      "title": "Max Depth"
    },
    "exclude_paths": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "URL patterns to exclude. E.g. (blog/.+about/.+)",
      "title": "Exclude Paths"
    },
    "include_paths": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "URL patterns to include. E.g. articles/.+",
      "title": "Include Paths"
    },
    "main_content_only": {
      "default": true,
      "description": "Only return the main content of the page excluding headers, navs, footers, etc.",
      "title": "Main Content Only",
      "type": "boolean"
    }
  },
  "required": [
    "url"
  ],
  "title": "FirecrawlCrawlInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a Firecrawl crawl.",
  "properties": {
    "result": {
      "additionalProperties": true,
      "description": "The output from the Firecrawl extract.",
      "title": "Result",
      "type": "object"
    }
  },
  "required": [
    "result"
  ],
  "title": "FirecrawlCrawlOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_firecrawl_crawl",
  "title": "Firecrawl Crawl",
  "description": "Crawls a URL and all its accessible subpages, outputting the...",
  "node_type_name": "firecrawl_crawl",
  "input_config": {
    "url": "example_value",
    "ignore_sitemap": false,
    "crawl_entire_website": false
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 37. firecrawl_extract

**Title:** Firecrawl Extract

**Description:** Extract data from a website using Firecrawl.

**ID:** `firecrawl_extract`

**Scope:** public

**Connection Required:**
- Name: Firecrawl Connection
- Description: The Firecrawl connection to use for the extract.
- Required: Yes
- Category: firecrawl

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Run Firecrawl extract node input.",
  "properties": {
    "urls": {
      "description": "The URLs to extract from.",
      "items": {
        "format": "uri",
        "maxLength": 2083,
        "minLength": 1,
        "type": "string"
      },
      "title": "URLs",
      "type": "array"
    },
    "prompt": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The prompt to use for the extract.",
      "title": "Prompt"
    },
    "schema": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The schema to use for the extract.",
      "title": "Schema",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "enable_web_search": {
      "default": false,
      "description": "When true, extraction can follow links outside the specified domain.",
      "title": "Enable Web Search",
      "type": "boolean"
    }
  },
  "required": [
    "urls"
  ],
  "title": "FirecrawlExtractInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a Firecrawl extract.",
  "properties": {
    "result": {
      "additionalProperties": true,
      "description": "The output from the Firecrawl extract.",
      "title": "Result",
      "type": "object"
    }
  },
  "required": [
    "result"
  ],
  "title": "FirecrawlExtractOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_firecrawl_extract",
  "title": "Firecrawl Extract",
  "description": "Extract data from a website using Firecrawl....",
  "node_type_name": "firecrawl_extract",
  "input_config": {
    "urls": [],
    "prompt": "example_value",
    "schema": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 38. firecrawl_map

**Title:** Firecrawl Map

**Description:** Attempts to output all website's urls in a few seconds.

**ID:** `firecrawl_map`

**Scope:** public

**Connection Required:**
- Name: Firecrawl Connection
- Description: The Firecrawl connection to use for the map.
- Required: Yes
- Category: firecrawl

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Run Firecrawl map node input.",
  "properties": {
    "url": {
      "description": "The URL to scrape.",
      "format": "uri",
      "maxLength": 2083,
      "minLength": 1,
      "title": "URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "search": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Use the search feature to find URLs relevant to your query. For example, entering 'blog' will retrieve all URLs related to 'blog'.",
      "title": "Search",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "include_subdomains": {
      "default": true,
      "description": "Include subdomains of the url in the result such as docs.*, blog.*, etc.",
      "title": "Include Subdomains",
      "type": "boolean",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "ignore_sitemap": {
      "default": false,
      "description": "Ignore the website sitemap when mapping.",
      "title": "Ignore Sitemap",
      "type": "boolean",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "limit": {
      "default": 1000,
      "description": "The maximum number of URLs to return. Maximum is 5000.",
      "title": "Limit",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "url"
  ],
  "title": "FirecrawlMapInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a Firecrawl map.",
  "properties": {
    "result": {
      "description": "The output from the Firecrawl map.",
      "items": {
        "type": "string"
      },
      "title": "Result",
      "type": "array"
    }
  },
  "required": [
    "result"
  ],
  "title": "FirecrawlMapOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_firecrawl_map",
  "title": "Firecrawl Map",
  "description": "Attempts to output all website's urls in a few seconds....",
  "node_type_name": "firecrawl_map",
  "input_config": {
    "url": "example_value",
    "search": "example_value",
    "include_subdomains": false
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 39. firecrawl_scrape

**Title:** Firecrawl Scrape

**Description:** Scrape a website using Firecrawl.

**ID:** `firecrawl_scrape`

**Scope:** public

**Connection Required:**
- Name: Firecrawl Connection
- Description: The Firecrawl connection to use for the scrape.
- Required: Yes
- Category: firecrawl

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Run Firecrawl scrape node input.",
  "properties": {
    "url": {
      "description": "The URL to scrape.",
      "format": "uri",
      "maxLength": 2083,
      "minLength": 1,
      "title": "URL",
      "type": "string"
    },
    "format": {
      "default": [
        "json"
      ],
      "description": "The format to use for the scrape.",
      "items": {
        "type": "string"
      },
      "title": "Format",
      "type": "array"
    },
    "json_options": {
      "additionalProperties": true,
      "default": {},
      "description": "The options to use for the JSON scrape.",
      "title": "JSON Options",
      "type": "object",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "url"
  ],
  "title": "FirecrawlScrapeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a Firecrawl scrape.",
  "properties": {
    "result": {
      "additionalProperties": true,
      "description": "The output from the Firecrawl scrape.",
      "title": "Result",
      "type": "object"
    }
  },
  "required": [
    "result"
  ],
  "title": "FirecrawlScrapeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_firecrawl_scrape",
  "title": "Firecrawl Scrape",
  "description": "Scrape a website using Firecrawl....",
  "node_type_name": "firecrawl_scrape",
  "input_config": {
    "url": "example_value",
    "format": [],
    "json_options": {}
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 40. generate_email_from_template

**Title:** Generate email from template

**Description:** Quickly create an email content by filling in pre-written content from a template.

**ID:** `generate_email_from_template`

**Scope:** exclusive

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Generate email from template node input.",
  "properties": {
    "email_template": {
      "default": "A new car. You know you want it",
      "description": "The email template to use for generating the email content.",
      "enum": [
        "A new car. You know you want it",
        "Fall in love with driving again \ud83d\ude97"
      ],
      "title": "Email template",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "email_content": {
      "description": "The email content to include in the template.",
      "title": "Email content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "hero_image": {
      "description": "The hero image to include in the email.",
      "title": "Hero image",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/JPEG",
          "image/png",
          "image/svg+xml",
          "image/webp",
          "image/gif"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "cta": {
      "description": "The call to action link to include in the email.",
      "title": "Call to action",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "email_content",
    "hero_image",
    "cta"
  ],
  "title": "GenerateEmailFromTemplateInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Generate email from template node output.",
  "properties": {
    "file_url": {
      "title": "File generated",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "url",
        "value": null
      }
    },
    "email_content": {
      "description": "The content of the email generated from the template",
      "title": "Email content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "file_url",
    "email_content"
  ],
  "title": "GenerateEmailFromTemplateNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_generate_email_from_template",
  "title": "Generate email from template",
  "description": "Quickly create an email content by filling in pre-written co...",
  "node_type_name": "generate_email_from_template",
  "input_config": {
    "email_template": "example_value",
    "email_content": "example_value",
    "hero_image": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 41. generate_email_from_template_fsi

**Title:** Generate email from template

**Description:** Quickly create an email content by filling in pre-written content from a template.

**ID:** `generate_email_from_template_fsi`

**Scope:** exclusive

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Generate email from template node input.",
  "properties": {
    "email_template": {
      "default": "Credit/debit card",
      "description": "The email template to use for generating the email content.",
      "enum": [
        "Credit/debit card",
        "Insurance",
        "Promotion"
      ],
      "title": "Email template",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "email_content": {
      "description": "The email content to include in the template.",
      "title": "Email content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "hero_image": {
      "description": "The hero image to include in the email.",
      "title": "Hero image",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/JPEG",
          "image/png",
          "image/svg+xml",
          "image/webp",
          "image/gif"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "cta": {
      "description": "The call to action link to include in the email.",
      "title": "Call to action",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "email_content",
    "hero_image",
    "cta"
  ],
  "title": "GenerateEmailFromTemplateNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Generate email from template node output.",
  "properties": {
    "file_url": {
      "title": "File generated",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "url",
        "value": null
      }
    },
    "email_content": {
      "description": "The content of the email generated from the template",
      "title": "Email content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "file_url",
    "email_content"
  ],
  "title": "GenerateEmailFromTemplateNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_generate_email_from_template_fsi",
  "title": "Generate email from template",
  "description": "Quickly create an email content by filling in pre-written co...",
  "node_type_name": "generate_email_from_template_fsi",
  "input_config": {
    "email_template": "example_value",
    "email_content": "example_value",
    "hero_image": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 42. generate_email_from_template_gxs

**Title:** Generate email from template

**Description:** Quickly create an email content by filling in pre-written content from a template.

**ID:** `generate_email_from_template_gxs`

**Scope:** exclusive

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Generate email from template node input.",
  "properties": {
    "email_template": {
      "default": "Credit/debit card",
      "description": "The email template to use for generating the email content.",
      "enum": [
        "Shinhan",
        "CardX",
        "Credit/debit card",
        "Promotion",
        "Tech Product"
      ],
      "title": "Email template",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "email_content": {
      "description": "The email content to include in the template.",
      "title": "Email content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "hero_image": {
      "description": "The hero image to include in the email.",
      "title": "Hero image",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/JPEG",
          "image/png",
          "image/svg+xml",
          "image/webp",
          "image/gif"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "cta": {
      "description": "The call to action link to include in the email.",
      "title": "Call to action",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "email_content",
    "hero_image",
    "cta"
  ],
  "title": "GenerateEmailFromTemplateNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Generate email from template node output.",
  "properties": {
    "file_url": {
      "title": "File generated",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "url",
        "value": null
      }
    },
    "email_content": {
      "description": "The content of the email generated from the template",
      "title": "Email content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "file_url",
    "email_content"
  ],
  "title": "GenerateEmailFromTemplateNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_generate_email_from_template_gxs",
  "title": "Generate email from template",
  "description": "Quickly create an email content by filling in pre-written co...",
  "node_type_name": "generate_email_from_template_gxs",
  "input_config": {
    "email_template": "example_value",
    "email_content": "example_value",
    "hero_image": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 43. generate_image

**Title:** Generate Image

**Description:** Use AI to generate images from your imagination. Simply describe what you want to see, and watch the AI bring it to life.

**ID:** `generate_image`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Generate image node input.",
  "properties": {
    "provider": {
      "default": "Runware",
      "description": "The provider to use for the image generation. Default is Runware",
      "enum": [
        "Runware",
        "Gemini",
        "Gemini 2.5 Flash Image"
      ],
      "title": "Provider",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "prompt": {
      "description": "What you wish to see in the output image. A strong, descriptive prompt that clearly defines elements, colors, and subjects will lead to better results.",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "negative_prompt": {
      "description": "A blurb of text describing what you do not wish to see in the output image.",
      "title": "Negative Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "aspect_ratio": {
      "default": "9:16_HD",
      "description": "The aspect ratio of the generated image.",
      "enum": [
        "1:1",
        "3:4",
        "4:3",
        "9:16",
        "16:9",
        "1:1_HD",
        "3:4_HD",
        "4:3_HD",
        "9:16_HD",
        "16:9_HD",
        "1:1_FHD",
        "3:4_FHD",
        "4:3_FHD",
        "9:16_FHD",
        "16:9_FHD"
      ],
      "title": "Aspect ratio",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "model_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The model ID to use for the image generation.",
      "title": "Model ID (Runware only)",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "lora": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The Lora model to use for the image generation.",
      "title": "Lora (Runware only)",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt",
    "negative_prompt"
  ],
  "title": "GenerateImageNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Generate image node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "content": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Raw content returned by the model (e.g., Gemini)",
      "title": "Raw content",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "GenerateImageNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_generate_image",
  "title": "Generate Image",
  "description": "Use AI to generate images from your imagination. Simply desc...",
  "node_type_name": "generate_image",
  "input_config": {
    "provider": "example_value",
    "prompt": "example_value",
    "negative_prompt": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 44. generate_image_v2

**Title:** Generate Image V2

**Description:** Use AI to generate images from your imagination. Simply describe what you want to see, and watch the AI bring it to life.

**ID:** `generate_image_v2`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Generate image node input.",
  "properties": {
    "prompt": {
      "description": "What you wish to see in the output image. A strong, descriptive prompt that clearly defines elements, colors, and subjects will lead to better results.",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "negative_prompt": {
      "description": "A blurb of text describing what you do not wish to see in the output image.",
      "title": "Negative Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "guidance_scale": {
      "default": 8,
      "description": "The guidance scale of the generated image.",
      "exclusiveMinimum": 0,
      "maximum": 15,
      "title": "Guidance scale",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "steps": {
      "default": 20,
      "description": "The number of steps to take in the generated image.",
      "exclusiveMinimum": 0,
      "maximum": 50,
      "title": "Steps",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "batch_size": {
      "default": 1,
      "description": "The number of images to generate in a batch.",
      "exclusiveMinimum": 0,
      "maximum": 8,
      "title": "Batch size",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "seed": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The seed to use for the generated image.",
      "title": "Seed",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 8,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "aspect_ratio": {
      "default": "9:16_HD",
      "description": "The aspect ratio of the generated image.",
      "enum": [
        "1:1",
        "3:4",
        "4:3",
        "9:16",
        "16:9",
        "1:1_HD",
        "3:4_HD",
        "4:3_HD",
        "9:16_HD",
        "16:9_HD",
        "1:1_FHD",
        "3:4_FHD",
        "4:3_FHD",
        "9:16_FHD",
        "16:9_FHD"
      ],
      "title": "Aspect ratio",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt",
    "negative_prompt"
  ],
  "title": "GenerateImageV2NodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Generate image node output.",
  "properties": {
    "images": {
      "items": {
        "type": "string"
      },
      "title": "Image output",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "images"
  ],
  "title": "GenerateImageV2NodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_generate_image_v2",
  "title": "Generate Image V2",
  "description": "Use AI to generate images from your imagination. Simply desc...",
  "node_type_name": "generate_image_v2",
  "input_config": {
    "prompt": "example_value",
    "negative_prompt": "example_value",
    "guidance_scale": 0
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 45. get_agent_task

**Title:** Get Agent Task

**Description:** Get an agent task by ID

**ID:** `get_agent_task`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Get Agent Task node input.",
  "properties": {
    "task_id": {
      "description": "ID of the task to retrieve",
      "title": "Task ID",
      "type": "string"
    },
    "include_subtasks": {
      "default": true,
      "description": "Whether to include subtasks in the response",
      "title": "Include Subtasks",
      "type": "boolean"
    }
  },
  "required": [
    "task_id"
  ],
  "title": "GetAgentTaskNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "AgentTask": {
      "description": "DTO for agent task models.",
      "properties": {
        "id": {
          "description": "ULID identifier for the task",
          "title": "Id",
          "type": "string"
        },
        "workspace_id": {
          "format": "uuid",
          "title": "Workspace Id",
          "type": "string"
        },
        "agent_id": {
          "anyOf": [
            {
              "format": "uuid",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Agent Id"
        },
        "thread_id": {
          "anyOf": [
            {
              "format": "uuid",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Thread Id"
        },
        "parent_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Parent Id"
        },
        "title": {
          "title": "Title",
          "type": "string"
        },
        "description": {
          "title": "Description",
          "type": "string"
        },
        "priority": {
          "$ref": "#/$defs/TaskPriority",
          "default": "medium"
        },
        "status": {
          "$ref": "#/$defs/TaskStatus",
          "default": "pending"
        },
        "details": {
          "default": "",
          "title": "Details",
          "type": "string"
        },
        "result": {
          "default": "",
          "title": "Result",
          "type": "string"
        },
        "created_at": {
          "format": "date-time",
          "title": "Created At",
          "type": "string"
        },
        "updated_at": {
          "anyOf": [
            {
              "format": "date-time",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Updated At"
        }
      },
      "required": [
        "id",
        "workspace_id",
        "title",
        "description"
      ],
      "title": "AgentTask",
      "type": "object"
    },
    "TaskPriority": {
      "description": "The priority of the task.",
      "enum": [
        "low",
        "medium",
        "high"
      ],
      "title": "TaskPriority",
      "type": "string"
    },
    "TaskStatus": {
      "description": "The status of the task.",
      "enum": [
        "pending",
        "in_progress",
        "completed",
        "cancelled",
        "blocked",
        "deferred"
      ],
      "title": "TaskStatus",
      "type": "string"
    }
  },
  "description": "Get Agent Task node output.",
  "properties": {
    "task": {
      "anyOf": [
        {
          "$ref": "#/$defs/AgentTask"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The retrieved agent task",
      "title": "Agent Task"
    }
  },
  "title": "GetAgentTaskNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_get_agent_task",
  "title": "Get Agent Task",
  "description": "Get an agent task by ID...",
  "node_type_name": "get_agent_task",
  "input_config": {
    "task_id": "example_value",
    "include_subtasks": false
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 46. get_value_by_key

**Title:** Get Value by Key

**Description:** Get a value from a data object by key.

**ID:** `get_value_by_key`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Get value by key node input.",
  "properties": {
    "data": {
      "description": "The data object to get the value from.",
      "title": "Data Object",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "key_to_match": {
      "description": "The key field to search for in the data objects.",
      "title": "Key to Match",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "value_to_match": {
      "description": "The value to match in the specified key field.",
      "title": "Value to Match",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "data",
    "key_to_match",
    "value_to_match"
  ],
  "title": "GetValueByKeyNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Get value by key node output.",
  "properties": {
    "value": {
      "additionalProperties": true,
      "description": "The value from the data object.",
      "title": "Value",
      "type": "object"
    }
  },
  "required": [
    "value"
  ],
  "title": "GetValueByKeyNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_get_value_by_key",
  "title": "Get Value by Key",
  "description": "Get a value from a data object by key....",
  "node_type_name": "get_value_by_key",
  "input_config": {
    "data": "example_value",
    "key_to_match": "example_value",
    "value_to_match": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 47. google_gen_ai_ask_gemini

**Title:** Ask Gemini

**Description:** Ask a Gemini anything you want!

**ID:** `google_gen_ai_ask_gemini`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: Google Gen AI Connection
- Description: The Google Gen AI connection to use for the Gemini.
- Required: Yes
- Category: google_gen_ai

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "AskGeminiModel": {
      "enum": [
        "gemini-2.0-flash",
        "gemini-2.0-pro-exp-02-05",
        "gemini-2.0-flash-exp",
        "gemini-2.0-flash-lite",
        "gemini-2.0-flash-thinking-exp-01-21",
        "gemini-1.5-flash",
        "gemini-1.5-pro",
        "gemini-2.0-flash-exp-image-generation",
        "models/gemini-2.5-flash-preview-05-20",
        "gemini-2.5-pro-preview-05-06"
      ],
      "title": "AskGeminiModel",
      "type": "string"
    }
  },
  "description": "Ask Gemini node input.",
  "properties": {
    "model": {
      "$ref": "#/$defs/AskGeminiModel",
      "default": "gemini-2.0-flash",
      "description": "The model to use for the chat.",
      "title": "Model",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "model_response_modalities": {
      "default": [],
      "items": {
        "type": "string"
      },
      "title": "Model Response Modalities",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "dropdown_multi_select",
        "value": null
      }
    },
    "prompt": {
      "description": "The question to ask the model.",
      "title": "Question",
      "type": "string"
    },
    "images": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The images to use for the chat.",
      "title": "Images",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/jpg",
          "image/png"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "temperature": {
      "default": 0.9,
      "description": "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.",
      "maximum": 1,
      "minimum": 0,
      "title": "Temperature",
      "type": "number"
    },
    "max_tokens": {
      "default": 2048,
      "description": "The maximum number of tokens to generate. Requests can use up to 2,048 or 4,096 tokens shared between prompt and completion depending on the model.",
      "title": "Maximum Tokens",
      "type": "integer"
    },
    "top_p": {
      "default": 1,
      "description": "An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.",
      "title": "Top P",
      "type": "number"
    },
    "system_message": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Instructions for the AI assistant on how to behave and respond.",
      "title": "System Message"
    },
    "response_schema": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Controls the format of the response to be returned by the node. Visit https://ai.google.dev/gemini-api/docs/structured-output?lang=python#json-schemas for more information.",
      "title": "Response Schema",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "prompt"
  ],
  "title": "AskGeminiInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Ask Gemini node output.",
  "properties": {
    "content": {
      "title": "Content"
    }
  },
  "required": [
    "content"
  ],
  "title": "AskGeminiOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_google_gen_ai_ask_gemini",
  "title": "Ask Gemini",
  "description": "Ask a Gemini anything you want!...",
  "node_type_name": "google_gen_ai_ask_gemini",
  "input_config": {
    "model": "example_value",
    "model_response_modalities": [],
    "prompt": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 48. google_gen_ai_check_veo_video_status

**Title:** Check Veo Video Status

**Description:** Check the status of a Veo video generation operation and retrieve the result if completed.

**ID:** `google_gen_ai_check_veo_video_status`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to use for checking Veo video status.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Check Veo Video Status node input.",
  "properties": {
    "operation_id": {
      "description": "The operation ID returned from the video generation request.",
      "title": "Operation ID",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "operation_id"
  ],
  "title": "CheckVeoVideoStatusInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Check Veo Video Status node output.",
  "properties": {
    "videos": {
      "description": "URLs of the generated videos. Only available if generation is completed and succeeded.",
      "items": {
        "type": "string"
      },
      "title": "Generated Videos",
      "type": "array"
    },
    "operation_id": {
      "description": "The operation ID that was checked.",
      "title": "Operation ID",
      "type": "string"
    },
    "status": {
      "description": "Status of the video generation: 'completed', 'pending', or 'failed'.",
      "title": "Status",
      "type": "string"
    },
    "message": {
      "description": "Information about the current operation status.",
      "title": "Message",
      "type": "string"
    },
    "progress": {
      "anyOf": [
        {
          "type": "number"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Generation progress as a percentage (0-100), if available.",
      "title": "Progress"
    }
  },
  "required": [
    "operation_id",
    "status",
    "message"
  ],
  "title": "CheckVeoVideoStatusOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_google_gen_ai_check_veo_video_status",
  "title": "Check Veo Video Status",
  "description": "Check the status of a Veo video generation operation and ret...",
  "node_type_name": "google_gen_ai_check_veo_video_status",
  "input_config": {
    "operation_id": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 49. google_gen_ai_generate_veo_video

**Title:** Generate Veo Video

**Description:** Generate videos using Google's Veo video generation models.

**ID:** `google_gen_ai_generate_veo_video`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to use for Veo video generation.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "AspectRatio": {
      "enum": [
        "16:9",
        "9:16"
      ],
      "title": "AspectRatio",
      "type": "string"
    },
    "PersonGeneration": {
      "enum": [
        "allow_adult",
        "dont_allow"
      ],
      "title": "PersonGeneration",
      "type": "string"
    },
    "Resolution": {
      "enum": [
        "1080p",
        "720p"
      ],
      "title": "Resolution",
      "type": "string"
    },
    "VeoModel": {
      "enum": [
        "veo-3.0-generate-001",
        "veo-3.0-fast-generate-001"
      ],
      "title": "VeoModel",
      "type": "string"
    }
  },
  "description": "Generate Veo Video node input.",
  "properties": {
    "model": {
      "$ref": "#/$defs/VeoModel",
      "default": "veo-3.0-generate-001",
      "description": "The Veo model to use for video generation.",
      "title": "Model",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "prompt": {
      "description": "The prompt describing the video to generate.",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "aspect_ratio": {
      "$ref": "#/$defs/AspectRatio",
      "default": "16:9",
      "description": "The aspect ratio for the generated video.",
      "title": "Aspect Ratio"
    },
    "resolution": {
      "$ref": "#/$defs/Resolution",
      "default": "1080p",
      "description": "The resolution for the generated video."
    },
    "person_generation": {
      "$ref": "#/$defs/PersonGeneration",
      "default": "allow_adult",
      "description": "Controls person generation in videos.",
      "title": "Person Generation"
    },
    "number_of_videos": {
      "default": 1,
      "description": "Number of videos to generate (1-4). Note: costs multiply by number of videos.",
      "maximum": 4,
      "minimum": 1,
      "title": "Number of Videos",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 11,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "image": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional URL to an image to use as the starting frame for video generation. If provided, the image will be downloaded and used for image-to-video generation.",
      "title": "Input Image URL",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 12,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "wait_for_completion": {
      "default": true,
      "description": "Whether to wait for video generation to complete before returning results. If False, returns immediately with operation ID for tracking.",
      "title": "Wait for Completion",
      "type": "boolean",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 13,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt"
  ],
  "title": "GenerateVeoVideoInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Generate Veo Video node output.",
  "properties": {
    "videos": {
      "description": "URLs of the generated videos. Only available if wait_for_completion is True and generation succeeded.",
      "items": {
        "type": "string"
      },
      "title": "Generated Videos",
      "type": "array"
    },
    "operation_id": {
      "description": "The operation ID for tracking the video generation.",
      "title": "Operation ID",
      "type": "string"
    },
    "status": {
      "description": "Status of the video generation: 'completed', 'pending', or 'failed'.",
      "title": "Status",
      "type": "string"
    },
    "message": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Additional information about the operation status.",
      "title": "Message"
    }
  },
  "required": [
    "operation_id",
    "status"
  ],
  "title": "GenerateVeoVideoOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_google_gen_ai_generate_veo_video",
  "title": "Generate Veo Video",
  "description": "Generate videos using Google's Veo video generation models....",
  "node_type_name": "google_gen_ai_generate_veo_video",
  "input_config": {
    "model": "example_value",
    "prompt": "example_value",
    "aspect_ratio": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 50. google_search

**Title:** Google Search

**Description:** Search Google for recent results.

**ID:** `google_search`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "GoogleSearch node runner input.",
  "properties": {
    "search_query": {
      "description": "What do you want to search for?",
      "title": "Search Query",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "top_k": {
      "default": 5,
      "description": "Number of top search results to return",
      "maximum": 10,
      "minimum": 1,
      "title": "Top k",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "search_query"
  ],
  "title": "GoogleSearchNodeRunnerInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "GoogleSearchResult": {
      "description": "Google search result.",
      "properties": {
        "title": {
          "title": "Title",
          "type": "string"
        },
        "snippet": {
          "title": "Snippet",
          "type": "string"
        },
        "link": {
          "title": "Link",
          "type": "string"
        }
      },
      "required": [
        "title",
        "snippet",
        "link"
      ],
      "title": "GoogleSearchResult",
      "type": "object"
    }
  },
  "description": "GoogleSearch node runner output.",
  "properties": {
    "search_results": {
      "description": "Top k search results",
      "items": {
        "$ref": "#/$defs/GoogleSearchResult"
      },
      "title": "Search Results",
      "type": "array"
    }
  },
  "required": [
    "search_results"
  ],
  "title": "GoogleSearchNodeRunnerOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_google_search",
  "title": "Google Search",
  "description": "Search Google for recent results....",
  "node_type_name": "google_search",
  "input_config": {
    "search_query": "example_value",
    "top_k": 0
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 51. groq_chat

**Title:** Chat with Groq

**Description:** Chat with high-performance Groq models for fast inference on open-source LLMs.

**ID:** `groq_chat`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: Groq Connection
- Description: The Groq connection to use for the chat.
- Required: Yes
- Category: groq

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "GroqModel": {
      "description": "Available Groq models.",
      "enum": [
        "llama-3.1-8b-instant",
        "gemma2-9b-it",
        "llama-3.3-70b-versatile",
        "deepseek-r1-distill-llama-70b",
        "meta-llama/llama-guard-4-12b",
        "meta-llama/llama-4-maverick-17b-128e-instruct",
        "meta-llama/llama-4-scout-17b-16e-instruct",
        "mistral-saba-24b",
        "moonshotai/kimi-k2-instruct",
        "qwen/qwen3-32b",
        "meta-llama/llama-prompt-guard-2-22m",
        "meta-llama/llama-prompt-guard-2-86m"
      ],
      "title": "GroqModel",
      "type": "string"
    }
  },
  "description": "Chat with Groq node input.",
  "properties": {
    "model": {
      "$ref": "#/$defs/GroqModel",
      "default": "llama-3.1-8b-instant",
      "description": "The Groq model to use for the chat.",
      "title": "Model",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "prompt": {
      "description": "The message to send to the Groq model.",
      "title": "Message",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "system_message": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Instructions for the AI assistant on how to behave and respond.",
      "title": "System Message",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "temperature": {
      "default": 0.7,
      "description": "Controls randomness: Lower values make output more focused and deterministic, higher values make it more creative.",
      "maximum": 2,
      "minimum": 0,
      "title": "Temperature",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "max_tokens": {
      "default": 1024,
      "description": "The maximum number of tokens to generate in the response.",
      "maximum": 131072,
      "minimum": 1,
      "title": "Maximum Tokens",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "response_format": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Schema for structured output. Provide a JSON schema to get structured responses.",
      "title": "Response Format",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 7,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "seed": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "If specified, the system will make a best effort to sample deterministically.",
      "title": "Seed",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 8,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt"
  ],
  "title": "ChatGroqInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Chat with Groq node output.",
  "properties": {
    "content": {
      "description": "The response from the Groq model.",
      "title": "Response",
      "type": "string"
    },
    "usage": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Token usage information for the request.",
      "title": "Usage"
    }
  },
  "required": [
    "content"
  ],
  "title": "ChatGroqOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_groq_chat",
  "title": "Chat with Groq",
  "description": "Chat with high-performance Groq models for fast inference on...",
  "node_type_name": "groq_chat",
  "input_config": {
    "model": "example_value",
    "prompt": "example_value",
    "system_message": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 52. hair_style

**Title:** Hair Style

**Description:** Apply a new hair style to an image.

**ID:** `hair_style`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Hair style node input.",
  "properties": {
    "prompt": {
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "image_url": {
      "title": "Image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "prompt",
    "image_url"
  ],
  "title": "HairStyleNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Hair style node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "HairStyleNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_hair_style",
  "title": "Hair Style",
  "description": "Apply a new hair style to an image....",
  "node_type_name": "hair_style",
  "input_config": {
    "prompt": "example_value",
    "image_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 53. html_to_image

**Title:** HTML to Image

**Description:** Convert HTML content to an image.

**ID:** `html_to_image`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "HtmlToImage node runner input.",
  "properties": {
    "html_content": {
      "description": "The HTML content to convert to an image",
      "title": "HTML Content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "width": {
      "default": 800,
      "description": "Width of the output image in pixels",
      "maximum": 4000,
      "minimum": 100,
      "title": "Width",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "height": {
      "anyOf": [
        {
          "maximum": 4000,
          "minimum": 100,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Height of the output image in pixels (optional - will be calculated from content if not specified)",
      "title": "Height",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "shared_messages": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Shared messages from the node",
      "title": "Shared Messages",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "html_content"
  ],
  "title": "HtmlToImageNodeRunnerInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "HtmlToImage node runner output.",
  "properties": {
    "image_url": {
      "description": "URL of the generated image",
      "title": "Image URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "width": {
      "description": "Width of the generated image in pixels",
      "title": "Width",
      "type": "integer"
    },
    "height": {
      "description": "Height of the generated image in pixels",
      "title": "Height",
      "type": "integer"
    },
    "shared_messages": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Shared messages from the node",
      "title": "Shared Messages"
    }
  },
  "required": [
    "image_url",
    "width",
    "height"
  ],
  "title": "HtmlToImageNodeRunnerOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_html_to_image",
  "title": "HTML to Image",
  "description": "Convert HTML content to an image....",
  "node_type_name": "html_to_image",
  "input_config": {
    "html_content": "example_value",
    "width": 0,
    "height": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 54. image_compare

**Title:** Image Compare

**Description:** Compare two images side by side.

**ID:** `image_compare`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Image compare node input.",
  "properties": {
    "first_image": {
      "title": "First image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "second_image": {
      "title": "Second image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "first_image",
    "second_image"
  ],
  "title": "ImageCompareNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Image compare node output.",
  "properties": {
    "before": {
      "title": "Before",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "after": {
      "title": "After",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "before",
    "after"
  ],
  "title": "ImageCompareNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_image_compare",
  "title": "Image Compare",
  "description": "Compare two images side by side....",
  "node_type_name": "image_compare",
  "input_config": {
    "first_image": "example_value",
    "second_image": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 55. image_to_image

**Title:** Image to Image

**Description:** Use AI to generate images from your imagination. Simply describe what you want to see, and watch the AI bring it to life.

**ID:** `image_to_image`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Image to image node input.",
  "properties": {
    "source_image": {
      "description": "The image to use as the source for the image to image generation.",
      "title": "Source Image",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "prompt": {
      "description": "What you wish to see in the output image. A strong, descriptive prompt that clearly defines elements, colors, and subjects will lead to better results.",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "prompt_2": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "A second prompt to guide the image generation.",
      "title": "Prompt 2",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "negative_prompt": {
      "description": "A blurb of text describing what you do not wish to see in the output image.",
      "title": "Negative Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "guidance_scale": {
      "default": 7.5,
      "description": "The guidance scale of the generated image.",
      "exclusiveMinimum": 0,
      "maximum": 15,
      "title": "Guidance scale",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "image_guidance_scale": {
      "default": 1.5,
      "description": "The guidance scale of the generated image.",
      "exclusiveMinimum": 0,
      "maximum": 15,
      "title": "Image Guidance Scale",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "strength": {
      "default": 0.8,
      "description": "The strength of the source image.",
      "exclusiveMinimum": 0,
      "maximum": 1,
      "title": "Strength",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "steps": {
      "default": 20,
      "description": "The number of steps to take in the generated image.",
      "exclusiveMinimum": 0,
      "maximum": 50,
      "title": "Steps",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "batch_size": {
      "default": 1,
      "description": "The number of images to generate in a batch.",
      "exclusiveMinimum": 0,
      "maximum": 8,
      "title": "Batch size",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "seed": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The seed to use for the generated image.",
      "title": "Seed",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 8,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "width": {
      "default": 0,
      "description": "The width of the generated image.",
      "title": "Width",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 9,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "height": {
      "default": 0,
      "description": "The height of the generated image.",
      "title": "Height",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 10,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "source_image",
    "prompt",
    "negative_prompt"
  ],
  "title": "ImageToImageNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Image to image node output.",
  "properties": {
    "images": {
      "items": {
        "type": "string"
      },
      "title": "Image output",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "images"
  ],
  "title": "ImageToImageNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_image_to_image",
  "title": "Image to Image",
  "description": "Use AI to generate images from your imagination. Simply desc...",
  "node_type_name": "image_to_image",
  "input_config": {
    "source_image": "example_value",
    "prompt": "example_value",
    "prompt_2": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 56. image_to_video

**Title:** Image to video

**Description:** Image to video

**ID:** `image_to_video`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "description": "Image to video node input.",
  "properties": {
    "model": {
      "default": "Pixel M",
      "description": "Model",
      "enum": [
        "Pixel M",
        "Pixel S"
      ],
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "prompt": {
      "description": "Prompt",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "image": {
      "description": "Image",
      "title": "Image",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "negative_prompt": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "description": "Negative prompt",
      "title": "Negative prompt",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "size": {
      "default": "Landscape HD (16:9)",
      "description": "Size (Only for Pixel M)",
      "enum": [
        "Square HD (1:1)",
        "Square FullHD (1:1)",
        "Portrait HD (3:4)",
        "Portrait FullHD (3:4)",
        "Portrait HD (9:16)",
        "Portrait FullHD (9:16)",
        "Landscape HD (4:3)",
        "Landscape FullHD (4:3)",
        "Landscape HD (16:9)",
        "Landscape FullHD (16:9)"
      ],
      "title": "Size (Only for Pixel M)",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "prompt_optimizer": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": true,
      "description": "Prompt optimizer",
      "title": "Prompt optimizer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt",
    "image",
    "negative_prompt"
  ],
  "title": "ImageToVideoNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Image to video node output.",
  "properties": {
    "video": {
      "description": "Rendered video",
      "title": "Rendered video",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video"
  ],
  "title": "ImageToVideoNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_image_to_video",
  "title": "Image to video",
  "description": "Image to video...",
  "node_type_name": "image_to_video",
  "input_config": {
    "model": "example_value",
    "prompt": "example_value",
    "image": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 57. image_to_video_v2

**Title:** Image to video v2

**Description:** Image to video v2

**ID:** `image_to_video_v2`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "description": "Image to video node input.",
  "properties": {
    "prompt": {
      "description": "Prompt",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "image": {
      "description": "Start image of the video.",
      "title": "Start image",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "end_image": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "End image of the video. If provided, the video will be generated by interpolating between the start and end image.",
      "title": "End image",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "negative_prompt": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Negative prompt",
      "title": "Negative prompt",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "width": {
      "default": 512,
      "description": "Width",
      "maximum": 1284,
      "minimum": 256,
      "title": "Width",
      "type": "integer"
    },
    "height": {
      "default": 512,
      "description": "Height",
      "maximum": 1284,
      "minimum": 256,
      "title": "Height",
      "type": "integer"
    },
    "steps": {
      "default": 20,
      "description": "Steps",
      "maximum": 50,
      "minimum": 1,
      "title": "Steps",
      "type": "integer"
    },
    "frame_rate": {
      "default": 15,
      "description": "Frame rate",
      "maximum": 30,
      "minimum": 1,
      "title": "Frame rate",
      "type": "integer"
    },
    "duration": {
      "description": "Duration",
      "maximum": 10,
      "minimum": 1,
      "title": "Duration",
      "type": "integer"
    },
    "guidance_scale": {
      "default": 3,
      "description": "Guidance scale",
      "maximum": 10,
      "minimum": 1,
      "title": "Guidance scale",
      "type": "integer"
    }
  },
  "required": [
    "prompt",
    "image",
    "duration"
  ],
  "title": "ImageToVideoV2NodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Image to video node output.",
  "properties": {
    "video": {
      "description": "Rendered video",
      "title": "Rendered video",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video"
  ],
  "title": "ImageToVideoV2NodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_image_to_video_v2",
  "title": "Image to video v2",
  "description": "Image to video v2...",
  "node_type_name": "image_to_video_v2",
  "input_config": {
    "prompt": "example_value",
    "image": "example_value",
    "end_image": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 58. image_to_video_v3

**Title:** Image to video v3

**Description:** Image to video v3

**ID:** `image_to_video_v3`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "description": "Image to video node input.",
  "properties": {
    "prompt": {
      "description": "Prompt",
      "maxLength": 904,
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "image": {
      "description": "Start image of the video.",
      "title": "Start image",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "negative_prompt": {
      "anyOf": [
        {
          "maxLength": 904,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Negative prompt",
      "title": "Negative prompt",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "steps": {
      "default": 20,
      "description": "Steps",
      "maximum": 50,
      "minimum": 1,
      "title": "Steps",
      "type": "integer"
    },
    "guidance_scale": {
      "default": 3,
      "description": "Guidance scale",
      "maximum": 10,
      "minimum": 1,
      "title": "Guidance scale",
      "type": "integer"
    },
    "frame_rate": {
      "default": 8,
      "description": "Frame rate",
      "maximum": 30,
      "minimum": 1,
      "title": "Frame rate",
      "type": "integer"
    }
  },
  "required": [
    "prompt",
    "image"
  ],
  "title": "ImageToVideoV3NodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Image to video node output.",
  "properties": {
    "video": {
      "description": "Rendered video",
      "title": "Rendered video",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video"
  ],
  "title": "ImageToVideoV3NodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_image_to_video_v3",
  "title": "Image to video v3",
  "description": "Image to video v3...",
  "node_type_name": "image_to_video_v3",
  "input_config": {
    "prompt": "example_value",
    "image": "example_value",
    "negative_prompt": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 59. imagine_v4

**Title:** Imagine V4

**Description:** Imagine V4

**ID:** `imagine_v4`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Comfy UI node input.",
  "properties": {
    "prompt": {
      "title": "Input your prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "prompt"
  ],
  "title": "GenerateArtV4NodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Comfy UI node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "GenerateArtV4NodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_imagine_v4",
  "title": "Imagine V4",
  "description": "Imagine V4...",
  "node_type_name": "imagine_v4",
  "input_config": {
    "prompt": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 60. import_dataset

**Title:** Import Data into Dataset

**Description:** Import a file into a dataset.

**ID:** `import_dataset`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Import Data Set node input.",
  "properties": {
    "file_url": {
      "description": "The URL of the file to import. Supports CSV, XLSX, and JSON lines.",
      "title": "File URL",
      "type": "string"
    },
    "dataset_id": {
      "description": "The ID of the dataset to import into, if applicable.",
      "title": "Dataset ID",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    }
  },
  "required": [
    "file_url",
    "dataset_id"
  ],
  "title": "ImportDatasetNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Import Data Set node output.",
  "properties": {
    "records_imported": {
      "description": "The number of records imported.",
      "title": "Records Imported",
      "type": "integer"
    },
    "records_failed": {
      "description": "The number of records failed to import.",
      "title": "Records Failed",
      "type": "integer"
    }
  },
  "required": [
    "records_imported",
    "records_failed"
  ],
  "title": "ImportDatasetNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_import_dataset",
  "title": "Import Data into Dataset",
  "description": "Import a file into a dataset....",
  "node_type_name": "import_dataset",
  "input_config": {
    "file_url": "example_value",
    "dataset_id": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 61. import_pinpoint_segment

**Title:** Import PinPoint Segment

**Description:** Import PinPoint segment.

**ID:** `import_pinpoint_segment`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Import PinPoint segment node input.",
  "properties": {
    "application_id": {
      "description": "The ID of the application to import the segment to.",
      "title": "Application ID",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "segment_name": {
      "description": "Segment name.",
      "title": "Segment Name",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "format": {
      "description": "The format of the files that contain the endpoint definitions to import.",
      "enum": [
        "CSV",
        "JSON"
      ],
      "title": "Format",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "data": {
      "description": "The data to import.",
      "title": "Data",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "application_id",
    "segment_name",
    "format",
    "data"
  ],
  "title": "ImportPinPointSegmentNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Import pinpoint node output.",
  "properties": {
    "segment_id": {
      "description": "The id of the segment.",
      "title": "Segment id",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "segment_id"
  ],
  "title": "ImportPinpointSegmentNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_import_pinpoint_segment",
  "title": "Import PinPoint Segment",
  "description": "Import PinPoint segment....",
  "node_type_name": "import_pinpoint_segment",
  "input_config": {
    "application_id": "example_value",
    "segment_name": "example_value",
    "format": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 62. inpainting

**Title:** Inpainting

**Description:** Inpainting node for image editing.

**ID:** `inpainting`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Inpainting node input.",
  "properties": {
    "prompt": {
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "image_url": {
      "title": "Image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "mask_url": {
      "title": "Mask url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "mask",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": "image_url",
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "prompt",
    "image_url",
    "mask_url"
  ],
  "title": "InpaintingNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Inpainting node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "InpaintingNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_inpainting",
  "title": "Inpainting",
  "description": "Inpainting node for image editing....",
  "node_type_name": "inpainting",
  "input_config": {
    "prompt": "example_value",
    "image_url": "example_value",
    "mask_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 63. instagram_profile_analyzer

**Title:** Instagram profile analyzer

**Description:** Analyze an Instagram profile.

**ID:** `instagram_profile_analyzer`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Instagram profile analyzer node input.",
  "properties": {
    "instagram_profile": {
      "description": "The Instagram profile to analyze.",
      "title": "Instagram profile",
      "type": "string"
    },
    "profile_pic_url": {
      "description": "The URL of the profile picture.",
      "title": "Profile picture URL",
      "type": "string"
    }
  },
  "required": [
    "instagram_profile",
    "profile_pic_url"
  ],
  "title": "InstagramProfileAnalyzerNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "ProfileStrength": {
      "description": "A strength of the Instagram profile.",
      "properties": {
        "title": {
          "description": "The title of the strength.",
          "title": "Title",
          "type": "string"
        },
        "subtitle": {
          "description": "The subtitle of the strength.",
          "title": "Subtitle",
          "type": "string"
        }
      },
      "required": [
        "title",
        "subtitle"
      ],
      "title": "ProfileStrength",
      "type": "object"
    }
  },
  "description": "Instagram profile analyzer node output.",
  "properties": {
    "strengths": {
      "description": "The strengths of the Instagram profile.",
      "items": {
        "$ref": "#/$defs/ProfileStrength"
      },
      "title": "Strengths",
      "type": "array"
    },
    "weaknesses": {
      "description": "The weaknesses of the Instagram profile.",
      "items": {
        "type": "string"
      },
      "title": "Weaknesses",
      "type": "array"
    },
    "love_life": {
      "description": "The love life of the Instagram profile.",
      "title": "Love life",
      "type": "string"
    },
    "money": {
      "description": "The money of the Instagram profile.",
      "title": "Money",
      "type": "string"
    },
    "health": {
      "description": "The health of the Instagram profile.",
      "title": "Health",
      "type": "string"
    },
    "biggest_goal": {
      "description": "The biggest goal of the Instagram profile.",
      "title": "Biggest goal",
      "type": "string"
    },
    "colleague_perspective": {
      "description": "The colleague perspective of the Instagram profile.",
      "title": "Colleague perspective",
      "type": "string"
    },
    "pickup_lines": {
      "description": "The pickup lines of the Instagram profile.",
      "items": {
        "type": "string"
      },
      "title": "Pickup lines",
      "type": "array"
    },
    "famous_person_comparison": {
      "description": "The famous person comparison of the Instagram profile.",
      "title": "Famous person comparison",
      "type": "string"
    },
    "previous_life": {
      "description": "The previous life of the Instagram profile.",
      "title": "Previous life",
      "type": "string"
    },
    "animal": {
      "description": "The animal of the Instagram profile.",
      "title": "Animal",
      "type": "string"
    },
    "fifty_dollar_thing": {
      "description": "The fifty dollar thing of the Instagram profile.",
      "title": "Fifty dollar thing",
      "type": "string"
    },
    "career": {
      "description": "The career of the Instagram profile.",
      "title": "Career",
      "type": "string"
    },
    "life_suggestion": {
      "description": "The life suggestion of the Instagram profile.",
      "title": "Life suggestion",
      "type": "string"
    }
  },
  "required": [
    "strengths",
    "weaknesses",
    "love_life",
    "money",
    "health",
    "biggest_goal",
    "colleague_perspective",
    "pickup_lines",
    "famous_person_comparison",
    "previous_life",
    "animal",
    "fifty_dollar_thing",
    "career",
    "life_suggestion"
  ],
  "title": "InstagramProfileAnalyzerNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_instagram_profile_analyzer",
  "title": "Instagram profile analyzer",
  "description": "Analyze an Instagram profile....",
  "node_type_name": "instagram_profile_analyzer",
  "input_config": {
    "instagram_profile": "example_value",
    "profile_pic_url": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 64. instagram_scrapper

**Title:** Instagram scrapper

**Description:** Scrape an Instagram user.

**ID:** `instagram_scrapper`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Instagram scrapper node input.",
  "properties": {
    "user_name": {
      "description": "The username of the Instagram user.",
      "title": "Instagram username",
      "type": "string"
    }
  },
  "required": [
    "user_name"
  ],
  "title": "InstagramScrapperNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Instagram scrapper node output.",
  "properties": {
    "id": {
      "description": "The ID of the Instagram user.",
      "title": "ID",
      "type": "string"
    },
    "user_name": {
      "description": "The username of the Instagram user.",
      "title": "Username",
      "type": "string"
    },
    "full_name": {
      "description": "The full name of the Instagram user.",
      "title": "Full name",
      "type": "string"
    },
    "biography": {
      "description": "The biography of the Instagram user.",
      "title": "Biography",
      "type": "string"
    },
    "external_url": {
      "description": "The external URL of the Instagram user.",
      "title": "External URL",
      "type": "string"
    },
    "followers_count": {
      "description": "The number of followers of the Instagram user.",
      "title": "Followers count",
      "type": "integer"
    },
    "follows_count": {
      "description": "The number of follows of the Instagram user.",
      "title": "Follows count",
      "type": "integer"
    },
    "has_channel": {
      "description": "Whether the Instagram user has a channel.",
      "title": "Has channel",
      "type": "boolean"
    },
    "highlight_reel_count": {
      "description": "The number of highlight reels of the Instagram user.",
      "title": "Highlight reel count",
      "type": "integer"
    },
    "is_business_account": {
      "description": "Whether the Instagram user is a business account.",
      "title": "Is business account",
      "type": "boolean"
    },
    "joined_recently": {
      "description": "Whether the Instagram user joined recently.",
      "title": "Joined recently",
      "type": "boolean"
    },
    "business_category_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The business category name of the Instagram user.",
      "title": "Business category name"
    },
    "private": {
      "description": "Whether the Instagram user is private.",
      "title": "Is private",
      "type": "boolean"
    },
    "profile_pic_url": {
      "description": "The URL of the profile picture of the Instagram user.",
      "title": "Profile picture URL",
      "type": "string"
    },
    "profile_pic_url_hd": {
      "description": "The URL of the profile picture of the Instagram user in high definition.",
      "title": "Profile picture URL HD",
      "type": "string"
    },
    "posts_count": {
      "description": "The number of posts of the Instagram user.",
      "title": "Posts count",
      "type": "integer"
    },
    "latest_posts": {
      "description": "The latest posts of the Instagram user.",
      "items": {
        "additionalProperties": true,
        "type": "object"
      },
      "title": "Latest posts",
      "type": "array"
    }
  },
  "required": [
    "id",
    "user_name",
    "full_name",
    "biography",
    "external_url",
    "followers_count",
    "follows_count",
    "has_channel",
    "highlight_reel_count",
    "is_business_account",
    "joined_recently",
    "private",
    "profile_pic_url",
    "profile_pic_url_hd",
    "posts_count",
    "latest_posts"
  ],
  "title": "InstagramScrapperNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_instagram_scrapper",
  "title": "Instagram scrapper",
  "description": "Scrape an Instagram user....",
  "node_type_name": "instagram_scrapper",
  "input_config": {
    "user_name": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 65. instant_background

**Title:** Instant Background

**Description:** Instantly create stunning AI-generated scene backgrounds for your product images with one click, offering commercial-grade quality and a diverse style selection for every need.

**ID:** `instant_background`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "instant background node input.",
  "properties": {
    "image_url": {
      "title": "Image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "object": {
      "title": "Object (What should stay in the image?) ",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "background_prompt": {
      "title": "Describe the new background you want to add to the image.",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "padding_top": {
      "anyOf": [
        {
          "maximum": 512,
          "minimum": 0,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "title": "Padding top",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "padding_bottom": {
      "anyOf": [
        {
          "maximum": 512,
          "minimum": 0,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "title": "Padding bottom",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "padding_left": {
      "anyOf": [
        {
          "maximum": 512,
          "minimum": 0,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "title": "Padding left",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "padding_right": {
      "anyOf": [
        {
          "maximum": 512,
          "minimum": 0,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "title": "Padding right",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 6,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "image_url",
    "object",
    "background_prompt",
    "padding_top",
    "padding_bottom",
    "padding_left",
    "padding_right"
  ],
  "title": "InstantbackgroundNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "instant background node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "InstantbackgroundNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_instant_background",
  "title": "Instant Background",
  "description": "Instantly create stunning AI-generated scene backgrounds for...",
  "node_type_name": "instant_background",
  "input_config": {
    "image_url": "example_value",
    "object": "example_value",
    "background_prompt": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 66. instant_background_v2

**Title:** Instant Background V2

**Description:** Instantly create stunning AI-generated scene backgrounds for your product images with one click, offering commercial-grade quality and a diverse style selection for every need

**ID:** `instant_background_v2`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "instant background v2 node input.",
  "properties": {
    "image_url": {
      "title": "Image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "prompt": {
      "title": "Describe the new background you want to add to the image.",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "negative_prompt": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "title": "Negative prompt",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "padding_top": {
      "anyOf": [
        {
          "maximum": 512,
          "minimum": 0,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "title": "Padding top",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "padding_bottom": {
      "anyOf": [
        {
          "maximum": 512,
          "minimum": 0,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "title": "Padding bottom",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "padding_left": {
      "anyOf": [
        {
          "maximum": 512,
          "minimum": 0,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "title": "Padding left",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "padding_right": {
      "anyOf": [
        {
          "maximum": 512,
          "minimum": 0,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "title": "Padding right",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 6,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "image_url",
    "prompt",
    "negative_prompt",
    "padding_top",
    "padding_bottom",
    "padding_left",
    "padding_right"
  ],
  "title": "InstantbackgroundV2NodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "instant background v2 node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "InstantbackgroundV2NodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_instant_background_v2",
  "title": "Instant Background V2",
  "description": "Instantly create stunning AI-generated scene backgrounds for...",
  "node_type_name": "instant_background_v2",
  "input_config": {
    "image_url": "example_value",
    "prompt": "example_value",
    "negative_prompt": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 67. json_to_google_sheet

**Title:** JSON to Google Sheet

**Description:** Create a Google Sheet from JSON.

**ID:** `json_to_google_sheet`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Create Google Sheet node input.",
  "properties": {
    "title": {
      "description": "Title of the Google Sheet.",
      "title": "Title",
      "type": "string"
    },
    "data": {
      "description": "Data to be inserted into the Google Sheet. Data can be a list of JSON objects or a JSON object.",
      "title": "Data in JSON format",
      "type": "string"
    },
    "share_with": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Emails to share the Google Sheet with. If not provided, the Google Sheet will be shared with anyone.",
      "title": "Share with"
    },
    "role": {
      "const": "reader",
      "default": "reader",
      "description": "Role of the user to be shared with.",
      "title": "Role",
      "type": "string"
    },
    "prem_type": {
      "default": "anyone",
      "description": "The account type to be shared with. Default is anyone.",
      "enum": [
        "user",
        "group",
        "domain",
        "anyone"
      ],
      "title": "The account type",
      "type": "string"
    }
  },
  "required": [
    "title",
    "data"
  ],
  "title": "JsonToGoogleSheetNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Create Google Sheet node output.",
  "properties": {
    "sheet_url": {
      "description": "URL of the Google Sheet.",
      "title": "Sheet URL",
      "type": "string"
    },
    "sheet_id": {
      "description": "ID of the Google Sheet.",
      "title": "Sheet ID",
      "type": "string"
    }
  },
  "required": [
    "sheet_url",
    "sheet_id"
  ],
  "title": "JsonGoogleSheetNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_json_to_google_sheet",
  "title": "JSON to Google Sheet",
  "description": "Create a Google Sheet from JSON....",
  "node_type_name": "json_to_google_sheet",
  "input_config": {
    "title": "example_value",
    "data": "example_value",
    "share_with": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 68. knowledge_retrieval

**Title:** Knowledge Retrieval

**Description:** Retrieve knowledge from a dataset.

**ID:** `knowledge_retrieval`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Knowledge Retrieval node input.",
  "properties": {
    "dataset": {
      "description": "The dataset to retrieve knowledge from.",
      "title": "Dataset",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "query": {
      "description": "The query to retrieve knowledge from the dataset.",
      "maxLength": 1000,
      "minLength": 1,
      "title": "Query",
      "type": "string"
    },
    "top_k": {
      "default": 5,
      "description": "The number of documents to return.",
      "maximum": 100,
      "minimum": 1,
      "title": "Top K",
      "type": "integer"
    }
  },
  "required": [
    "dataset",
    "query"
  ],
  "title": "KnowledgeRetrievalNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Knowledge Retrieval node output.",
  "properties": {
    "documents": {
      "description": "The documents that is relevant to the query.",
      "items": {
        "additionalProperties": true,
        "type": "object"
      },
      "title": "Documents",
      "type": "array"
    }
  },
  "required": [
    "documents"
  ],
  "title": "KnowledgeRetrievalNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_knowledge_retrieval",
  "title": "Knowledge Retrieval",
  "description": "Retrieve knowledge from a dataset....",
  "node_type_name": "knowledge_retrieval",
  "input_config": {
    "dataset": "example_value",
    "query": "example_value",
    "top_k": 0
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 69. linkedin_scrape_company

**Title:** Get a LinkedIn Company

**Description:** Fetch a LinkedIn Company

**ID:** `linkedin_scrape_company`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.02

**Input Schema:**

```json
{
  "description": "Scrape company node input.",
  "properties": {
    "company_url": {
      "description": "The URL of the LinkedIn company to scrape.",
      "title": "Company URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "company_url"
  ],
  "title": "ScrapeCompanyNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Scrape company node output.",
  "properties": {
    "data": {
      "additionalProperties": true,
      "description": "The data of the LinkedIn company.",
      "title": "Company data",
      "type": "object"
    }
  },
  "required": [
    "data"
  ],
  "title": "ScrapeCompanyNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_linkedin_scrape_company",
  "title": "Get a LinkedIn Company",
  "description": "Fetch a LinkedIn Company...",
  "node_type_name": "linkedin_scrape_company",
  "input_config": {
    "company_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 70. linkedin_scrape_profile

**Title:** Get a LinkedIn Profile

**Description:** Fetch a LinkedIn Profile

**ID:** `linkedin_scrape_profile`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.02

**Input Schema:**

```json
{
  "description": "Scrape profile node input.",
  "properties": {
    "profile_url": {
      "description": "The URL of the LinkedIn profile to scrape.",
      "title": "Profile URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "profile_url"
  ],
  "title": "ScrapeProfileNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Scrape profile node output.",
  "properties": {
    "data": {
      "additionalProperties": true,
      "description": "The data of the LinkedIn profile.",
      "title": "Profile data",
      "type": "object"
    }
  },
  "required": [
    "data"
  ],
  "title": "ScrapeProfileNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_linkedin_scrape_profile",
  "title": "Get a LinkedIn Profile",
  "description": "Fetch a LinkedIn Profile...",
  "node_type_name": "linkedin_scrape_profile",
  "input_config": {
    "profile_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 71. lipsync

**Title:** Lipsync

**Description:** Lipsync

**ID:** `lipsync`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "description": "Lipsync node input.",
  "properties": {
    "input_video_url": {
      "description": "Input video URL",
      "title": "Input video URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "audio_url": {
      "description": "Audio URL",
      "title": "Audio URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "file_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "description": "File name",
      "title": "File name",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "input_video_url",
    "audio_url",
    "file_name"
  ],
  "title": "LipsyncNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Lipsync node output.",
  "properties": {
    "video_url": {
      "title": "Video URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video_url"
  ],
  "title": "LipsyncNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_lipsync",
  "title": "Lipsync",
  "description": "Lipsync...",
  "node_type_name": "lipsync",
  "input_config": {
    "input_video_url": "example_value",
    "audio_url": "example_value",
    "file_name": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 72. list_agent_tasks

**Title:** List Agent Tasks

**Description:** List all agent tasks with optional filtering

**ID:** `list_agent_tasks`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "List Agent Tasks node input.",
  "properties": {
    "thread_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Filter tasks by thread ID",
      "title": "Thread ID"
    },
    "parent_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Filter tasks by parent task ID",
      "title": "Parent Task ID"
    }
  },
  "title": "ListAgentTasksNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "AgentTask": {
      "description": "DTO for agent task models.",
      "properties": {
        "id": {
          "description": "ULID identifier for the task",
          "title": "Id",
          "type": "string"
        },
        "workspace_id": {
          "format": "uuid",
          "title": "Workspace Id",
          "type": "string"
        },
        "agent_id": {
          "anyOf": [
            {
              "format": "uuid",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Agent Id"
        },
        "thread_id": {
          "anyOf": [
            {
              "format": "uuid",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Thread Id"
        },
        "parent_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Parent Id"
        },
        "title": {
          "title": "Title",
          "type": "string"
        },
        "description": {
          "title": "Description",
          "type": "string"
        },
        "priority": {
          "$ref": "#/$defs/TaskPriority",
          "default": "medium"
        },
        "status": {
          "$ref": "#/$defs/TaskStatus",
          "default": "pending"
        },
        "details": {
          "default": "",
          "title": "Details",
          "type": "string"
        },
        "result": {
          "default": "",
          "title": "Result",
          "type": "string"
        },
        "created_at": {
          "format": "date-time",
          "title": "Created At",
          "type": "string"
        },
        "updated_at": {
          "anyOf": [
            {
              "format": "date-time",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Updated At"
        }
      },
      "required": [
        "id",
        "workspace_id",
        "title",
        "description"
      ],
      "title": "AgentTask",
      "type": "object"
    },
    "TaskPriority": {
      "description": "The priority of the task.",
      "enum": [
        "low",
        "medium",
        "high"
      ],
      "title": "TaskPriority",
      "type": "string"
    },
    "TaskStatus": {
      "description": "The status of the task.",
      "enum": [
        "pending",
        "in_progress",
        "completed",
        "cancelled",
        "blocked",
        "deferred"
      ],
      "title": "TaskStatus",
      "type": "string"
    }
  },
  "description": "List Agent Tasks node output.",
  "properties": {
    "tasks": {
      "description": "List of agent tasks",
      "items": {
        "$ref": "#/$defs/AgentTask"
      },
      "title": "Agent Tasks",
      "type": "array"
    }
  },
  "required": [
    "tasks"
  ],
  "title": "ListAgentTasksNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_list_agent_tasks",
  "title": "List Agent Tasks",
  "description": "List all agent tasks with optional filtering...",
  "node_type_name": "list_agent_tasks",
  "input_config": {
    "thread_id": "example_value",
    "parent_id": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 73. llama3

**Title:** LLama 3

**Description:** LLama 3 node

**ID:** `llama3`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "LLama 3 node input.",
  "properties": {
    "background": {
      "title": "The background prompt sent to the LLama 3 model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "prompt": {
      "title": "The prompt sent to the LLama 3 model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "background",
    "prompt"
  ],
  "title": "LLama3NodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "LLama 3 node output.",
  "properties": {
    "content": {
      "title": "Content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "content"
  ],
  "title": "LLama3NodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_llama3",
  "title": "LLama 3",
  "description": "LLama 3 node...",
  "node_type_name": "llama3",
  "input_config": {
    "background": "example_value",
    "prompt": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 74. llm

**Title:** LLM

**Description:** Use a large language model such as GPT

**ID:** `llm`

**Scope:** public

**Categories:** popular

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "LLM node input.",
  "properties": {
    "human_message": {
      "description": "The prompt that is fed to the model.",
      "maxLength": 640000,
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "system_message": {
      "anyOf": [
        {
          "maxLength": 640000,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "This represents a system message, which tells the model how to behave.",
      "title": "System Message",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "chat_history_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The chat history id used to retrieve the chat history. If not provided, a new chat history will be created.",
      "title": "Chat History ID",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "model": {
      "default": "OpenAI GPT-5 Nano",
      "description": "The AI model to use to generate the response.",
      "enum": [
        "OpenAI GPT-5 Nano",
        "OpenAI GPT-4o Mini",
        "DeepSeek V3",
        "Google Gemini 2.0 Flash-Lite",
        "Google Gemini 2.0 Flash",
        "Google Gemini 1.5 Flash",
        "Google Gemini 1.5 Pro",
        "Anthropic Claude 3 Haiku"
      ],
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "temperature": {
      "default": 0.5,
      "description": "The temperature to use when generating the response. Higher temperatures will result in more creative responses.",
      "maximum": 1,
      "minimum": 0,
      "title": "Temperature",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "human_message"
  ],
  "title": "LLMQuestionAnsweringInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "LLM node output.",
  "properties": {
    "content": {
      "title": "Content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "chat_history_id": {
      "title": "The chat history id used to retrieve the chat history.",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "content",
    "chat_history_id"
  ],
  "title": "LLMQuestionAnsweringNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_llm",
  "title": "LLM",
  "description": "Use a large language model such as GPT...",
  "node_type_name": "llm",
  "input_config": {
    "human_message": "example_value",
    "system_message": "example_value",
    "chat_history_id": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 75. magic_upscale

**Title:** Magic Upscale

**Description:** Upscale and enhance image quality using AI.

**ID:** `magic_upscale`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Comfy UI node input.",
  "properties": {
    "image_url": {
      "title": "Image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image_url"
  ],
  "title": "MagicUpscaleNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Comfy UI node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "MagicUpscaleNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_magic_upscale",
  "title": "Magic Upscale",
  "description": "Upscale and enhance image quality using AI....",
  "node_type_name": "magic_upscale",
  "input_config": {
    "image_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 76. mcp_run_action

**Title:** Run MCP Action

**Description:** Run any action on MCP.

**ID:** `mcp_run_action`

**Scope:** public

**Connection Required:**
- Name: MCP Connection
- Description: The MCP connection to use for the action.
- Required: Yes
- Category: mcp

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Run MCP run action node input.",
  "properties": {
    "action": {
      "description": "The action to run. This is the name of the action to run.",
      "title": "Action",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "input_params": {
      "additionalProperties": true,
      "description": "The input parameters for the model. These vary depending on the model you're using. Check the model's documentation for details.",
      "title": "Input Parameters",
      "type": "object",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "action",
    "input_params"
  ],
  "title": "MCPRunActionInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a MCP run action.",
  "properties": {
    "error": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The error from the MCP action.",
      "title": "Error"
    },
    "success": {
      "description": "Whether the MCP action was successful.",
      "title": "Success",
      "type": "boolean"
    },
    "result": {
      "description": "The output from the FAL model. This can be text, URLs to generated images, or other data depending on the model.",
      "title": "Result"
    }
  },
  "required": [
    "success",
    "result"
  ],
  "title": "MCPRunActionOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_mcp_run_action",
  "title": "Run MCP Action",
  "description": "Run any action on MCP....",
  "node_type_name": "mcp_run_action",
  "input_config": {
    "action": "example_value",
    "input_params": {}
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 77. mma_art_moments

**Title:** MMA Art Moments

**Description:** MMA Art Moments node

**ID:** `mma_art_moments`

**Scope:** exclusive

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "MMA Art Moments node input.",
  "properties": {
    "code": {
      "title": "Code",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "name": {
      "title": "Name",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "email": {
      "title": "Email",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "company_name": {
      "title": "Company Name",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "job_title": {
      "title": "Job Title",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "code",
    "name",
    "email",
    "company_name",
    "job_title"
  ],
  "title": "MMAArtMomentsInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "MMA Art Moments node output.",
  "properties": {
    "message": {
      "title": "Message",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "image": {
      "title": "Image",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "message",
    "image"
  ],
  "title": "MMAArtMomentsOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_mma_art_moments",
  "title": "MMA Art Moments",
  "description": "MMA Art Moments node...",
  "node_type_name": "mma_art_moments",
  "input_config": {
    "code": "example_value",
    "name": "example_value",
    "email": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 78. mma_brand_confirm

**Title:** MMA Brand Confirm

**Description:** MMA Brand Confirm node

**ID:** `mma_brand_confirm`

**Scope:** exclusive

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "MMA Brand Confirm node input.",
  "properties": {
    "brand": {
      "title": "Brand Name",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "morning_session": {
      "description": "List of morning session topics",
      "items": {
        "type": "string"
      },
      "title": "Morning Session",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "afternoon_session": {
      "description": "List of afternoon session topics",
      "items": {
        "type": "string"
      },
      "title": "Afternoon Session",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "brand",
    "morning_session",
    "afternoon_session"
  ],
  "title": "MMABrandConfirmInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "MMA Brand Confirm node output.",
  "properties": {
    "message": {
      "title": "Message",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "image": {
      "title": "Image",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "message",
    "image"
  ],
  "title": "MMABrandConfirmOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_mma_brand_confirm",
  "title": "MMA Brand Confirm",
  "description": "MMA Brand Confirm node...",
  "node_type_name": "mma_brand_confirm",
  "input_config": {
    "brand": "example_value",
    "morning_session": [],
    "afternoon_session": []
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 79. mma_flashbiz_connect

**Title:** MMA FlashBiz Connect

**Description:** MMA FlashBiz Connect node

**ID:** `mma_flashbiz_connect`

**Scope:** exclusive

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "MMA FlashBiz Connect node input.",
  "properties": {
    "name": {
      "title": "Name",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "company_name": {
      "title": "Company Name",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "email": {
      "title": "Email",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "phone_number": {
      "title": "Phone Number",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "company_pitch_deck": {
      "title": "Company Pitch Deck",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "morning_session": {
      "description": "List of morning session topics",
      "items": {
        "type": "string"
      },
      "title": "Morning Session",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "afternoon_session": {
      "description": "List of afternoon session topics",
      "items": {
        "type": "string"
      },
      "title": "Afternoon Session",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 6,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "name",
    "company_name",
    "email",
    "phone_number",
    "company_pitch_deck",
    "morning_session",
    "afternoon_session"
  ],
  "title": "MMAFlashBizConnectInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "MMA FlashBiz Connect node output.",
  "properties": {
    "message": {
      "title": "Message",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "image": {
      "title": "Image",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "message",
    "image"
  ],
  "title": "MMAFlashBizConnectOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_mma_flashbiz_connect",
  "title": "MMA FlashBiz Connect",
  "description": "MMA FlashBiz Connect node...",
  "node_type_name": "mma_flashbiz_connect",
  "input_config": {
    "name": "example_value",
    "company_name": "example_value",
    "email": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 80. openai_ask_assistant

**Title:** Ask Assistant

**Description:** Ask a GPT assistant anything you want!

**ID:** `openai_ask_assistant`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: OpenAI Connection
- Description: The OpenAI connection to use for the assistant.
- Required: Yes
- Category: openai

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Ask Assistant node input.",
  "properties": {
    "assistant": {
      "description": "The assistant which will generate the completion.",
      "title": "Assistant",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "prompt": {
      "description": "The text prompt to ask the assistant.",
      "title": "Question",
      "type": "string"
    },
    "memory_key": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "A memory key that will keep the chat history shared across runs. Leave empty to leave your assistant without memory of previous messages.",
      "title": "Memory Key"
    }
  },
  "required": [
    "assistant",
    "prompt"
  ],
  "title": "AskAssistantInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "AssistantMessage": {
      "description": "Message from an assistant.",
      "properties": {
        "id": {
          "title": "Id",
          "type": "string"
        },
        "role": {
          "title": "Role",
          "type": "string"
        },
        "content": {
          "items": {
            "additionalProperties": true,
            "type": "object"
          },
          "title": "Content",
          "type": "array"
        },
        "created_at": {
          "title": "Created At",
          "type": "integer"
        }
      },
      "required": [
        "id",
        "role",
        "content",
        "created_at"
      ],
      "title": "AssistantMessage",
      "type": "object"
    }
  },
  "description": "Response from asking an assistant.",
  "properties": {
    "messages": {
      "items": {
        "$ref": "#/$defs/AssistantMessage"
      },
      "title": "Messages",
      "type": "array"
    }
  },
  "required": [
    "messages"
  ],
  "title": "AskAssistantResponse",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_openai_ask_assistant",
  "title": "Ask Assistant",
  "description": "Ask a GPT assistant anything you want!...",
  "node_type_name": "openai_ask_assistant",
  "input_config": {
    "assistant": "example_value",
    "prompt": "example_value",
    "memory_key": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 81. openai_ask_chat_gpt

**Title:** Ask ChatGPT

**Description:** Use AI to ask a question

**ID:** `openai_ask_chat_gpt`

**Scope:** public

**Connection Required:**
- Name: OpenAI Connection
- Description: The OpenAI connection to use for the chat.
- Required: Yes
- Category: openai

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Ask ChatGPT node input.",
  "properties": {
    "model": {
      "default": "gpt-4o-mini",
      "description": "The model to use for the chat.",
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "prompt": {
      "description": "The question to ask the model.",
      "title": "Question",
      "type": "string"
    },
    "temperature": {
      "default": 0.9,
      "description": "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.",
      "maximum": 1,
      "minimum": 0,
      "title": "Temperature",
      "type": "number"
    },
    "max_tokens": {
      "default": 2048,
      "description": "The maximum number of tokens to generate. Requests can use up to 2,048 or 4,096 tokens shared between prompt and completion depending on the model.",
      "title": "Maximum Tokens",
      "type": "integer"
    },
    "top_p": {
      "default": 1,
      "description": "An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.",
      "title": "Top P",
      "type": "number"
    },
    "frequency_penalty": {
      "default": 0,
      "description": "Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.",
      "title": "Frequency penalty",
      "type": "number"
    },
    "presence_penalty": {
      "default": 0.6,
      "description": "Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the mode's likelihood to talk about new topics.",
      "title": "Presence penalty",
      "type": "number"
    },
    "system_message": {
      "default": "You are a helpful assistant.",
      "description": "Instructions for the AI assistant on how to behave and respond.",
      "title": "System Message",
      "type": "string"
    }
  },
  "required": [
    "prompt"
  ],
  "title": "AskChatGPTInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Ask ChatGPT node output.",
  "properties": {
    "content": {
      "title": "Content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "content"
  ],
  "title": "AskChatGPTOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_openai_ask_chat_gpt",
  "title": "Ask ChatGPT",
  "description": "Use AI to ask a question...",
  "node_type_name": "openai_ask_chat_gpt",
  "input_config": {
    "model": "example_value",
    "prompt": "example_value",
    "temperature": 0
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 82. openai_extract_structured_data

**Title:** Extract Structured Data

**Description:** Returns structured data from provided unstructured text.

**ID:** `openai_extract_structured_data`

**Scope:** public

**Connection Required:**
- Name: OpenAI Connection
- Description: The OpenAI connection to use for extracting structured data.
- Required: Yes
- Category: openai

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Extract Structured Data node input.",
  "properties": {
    "model": {
      "default": "gpt-4o-2024-08-06",
      "description": "The model to use for extracting structured data. Use gpt-4o-2024-08-06 or later for best results.",
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "text": {
      "description": "The text from which to extract structured data.",
      "title": "Unstructured Text",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "schema_name": {
      "default": "extracted_data",
      "description": "A name for the schema (required by OpenAI).",
      "title": "Schema Name",
      "type": "string"
    },
    "json_schema": {
      "additionalProperties": true,
      "description": "The JSON Schema that defines the structure of the data to extract. Must be a valid JSON Schema object with type='object', properties defined, and additionalProperties=false. Example: {\"type\": \"object\", \"properties\": {\"name\": {\"type\": \"string\"}, \"age\": {\"type\": \"number\"}}, \"required\": [\"name\", \"age\"], \"additionalProperties\": false}",
      "title": "JSON Schema",
      "type": "object",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "strict": {
      "default": true,
      "description": "Whether to enforce strict schema validation. When true, the model will always generate responses that adhere to the supplied schema.",
      "title": "Strict Mode",
      "type": "boolean"
    },
    "system_prompt": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional system prompt to guide the extraction process.",
      "title": "System Prompt",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "text",
    "json_schema"
  ],
  "title": "ExtractStructuredDataInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Response from extracting structured data.",
  "properties": {
    "data": {
      "additionalProperties": true,
      "title": "Data",
      "type": "object"
    }
  },
  "required": [
    "data"
  ],
  "title": "ExtractStructuredDataResponse",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_openai_extract_structured_data",
  "title": "Extract Structured Data",
  "description": "Returns structured data from provided unstructured text....",
  "node_type_name": "openai_extract_structured_data",
  "input_config": {
    "model": "example_value",
    "text": "example_value",
    "schema_name": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 83. openai_generate_image

**Title:** Generate Image

**Description:** Generate an image using text-to-image models

**ID:** `openai_generate_image`

**Scope:** public

**Connection Required:**
- Name: OpenAI Connection
- Description: The OpenAI connection to use for image generation.
- Required: Yes
- Category: openai

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Generate Image node input.",
  "properties": {
    "model": {
      "default": "dall-e-3",
      "description": "The model which will generate the image.",
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "prompt": {
      "description": "The text prompt to generate an image from.",
      "title": "Prompt",
      "type": "string"
    },
    "resolution": {
      "default": "1024x1024",
      "description": "The resolution to generate the image in.",
      "enum": [
        "1024x1024",
        "1024x1792",
        "1792x1024"
      ],
      "title": "Resolution",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "quality": {
      "default": "standard",
      "description": "Standard is faster, HD has better details.",
      "enum": [
        "standard",
        "hd"
      ],
      "title": "Quality",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt"
  ],
  "title": "GenerateImageInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Generate Image node output.",
  "properties": {
    "created": {
      "title": "Created",
      "type": "integer"
    },
    "data": {
      "items": {},
      "title": "Data",
      "type": "array"
    }
  },
  "required": [
    "created",
    "data"
  ],
  "title": "GenerateImageOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_openai_generate_image",
  "title": "Generate Image",
  "description": "Generate an image using text-to-image models...",
  "node_type_name": "openai_generate_image",
  "input_config": {
    "model": "example_value",
    "prompt": "example_value",
    "resolution": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 84. openai_search

**Title:** OpenAI Web Search

**Description:** Searches the web using OpenAI's capabilities

**ID:** `openai_search`

**Scope:** public

**Connection Required:**
- Name: OpenAI Connection
- Description: The OpenAI connection to use for the search
- Required: Yes
- Category: openai

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "properties": {
    "search_queries": {
      "description": "List of search queries to process using OpenAI's web search capability",
      "items": {
        "type": "string"
      },
      "maxItems": 10,
      "minItems": 1,
      "title": "Search Queries",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "model": {
      "default": "gpt-4o-search-preview-2025-03-11",
      "description": "The OpenAI model to use for search",
      "enum": [
        "gpt-4o-search-preview-2025-03-11",
        "gpt-4o-mini-search-preview-2025-03-11"
      ],
      "title": "Model Name",
      "type": "string"
    }
  },
  "required": [
    "search_queries"
  ],
  "title": "OpenAISearchInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "properties": {
    "search_results": {
      "description": "The search results from OpenAI",
      "title": "Search Results"
    }
  },
  "required": [
    "search_results"
  ],
  "title": "OpenAISearchOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_openai_search",
  "title": "OpenAI Web Search",
  "description": "Searches the web using OpenAI's capabilities...",
  "node_type_name": "openai_search",
  "input_config": {
    "search_queries": [],
    "model": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 85. openai_text_to_speech

**Title:** Text-to-Speech (OpenAI)

**Description:** Generate an audio recording from text using OpenAI's text-to-speech API

**ID:** `openai_text_to_speech`

**Scope:** public

**Connection Required:**
- Name: OpenAI Connection
- Description: The OpenAI connection to use for text-to-speech conversion.
- Required: Yes
- Category: openai

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Text-to-Speech node input.",
  "properties": {
    "model": {
      "default": "tts-1",
      "description": "The model which will generate the audio.",
      "enum": [
        "tts-1",
        "tts-1-hd"
      ],
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "text": {
      "description": "The text you want to convert to speech.",
      "title": "Text",
      "type": "string"
    },
    "voice": {
      "default": "alloy",
      "description": "The voice to generate the audio in.",
      "enum": [
        "alloy",
        "echo",
        "fable",
        "onyx",
        "nova",
        "shimmer"
      ],
      "title": "Voice",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "format": {
      "default": "mp3",
      "description": "The format you want the audio file in.",
      "enum": [
        "mp3",
        "opus",
        "aac",
        "flac"
      ],
      "title": "Output Format",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "speed": {
      "default": 1,
      "description": "The speed of the audio. Minimum is 0.25 and maximum is 4.00.",
      "maximum": 4,
      "minimum": 0.25,
      "title": "Speed",
      "type": "number"
    },
    "file_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": "audio",
      "description": "The name of the output audio file (without extension).",
      "title": "File Name"
    }
  },
  "required": [
    "text"
  ],
  "title": "TextToSpeechInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Response from text-to-speech conversion.",
  "properties": {
    "url": {
      "title": "Url",
      "type": "string"
    },
    "format": {
      "title": "Format",
      "type": "string"
    }
  },
  "required": [
    "url",
    "format"
  ],
  "title": "TextToSpeechResponse",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_openai_text_to_speech",
  "title": "Text-to-Speech (OpenAI)",
  "description": "Generate an audio recording from text using OpenAI's text-to...",
  "node_type_name": "openai_text_to_speech",
  "input_config": {
    "model": "example_value",
    "text": "example_value",
    "voice": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 86. openai_transcriptions

**Title:** Audio Transcription

**Description:** Transcribe audio to text using OpenAI's Whisper model

**ID:** `openai_transcriptions`

**Scope:** public

**Connection Required:**
- Name: OpenAI Connection
- Description: The OpenAI connection to use for transcription.
- Required: Yes
- Category: openai

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Transcription node input.",
  "properties": {
    "model": {
      "const": "whisper-1",
      "default": "whisper-1",
      "description": "The model to use for transcription.",
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "audio_file": {
      "description": "The audio file to transcribe.",
      "title": "Audio File",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "audio/mpeg",
          "video/mp4",
          "video/webm"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "response_format": {
      "default": "text",
      "description": "The format of the transcript output.",
      "enum": [
        "json",
        "text",
        "srt",
        "verbose_json",
        "vtt"
      ],
      "title": "Response Format",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "language": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The language of the input audio. Supplying the input language in ISO-639-1 format will improve accuracy and latency.",
      "title": "Language"
    },
    "prompt": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "An optional text to guide the model's style or continue a previous audio segment.",
      "title": "Prompt"
    },
    "temperature": {
      "default": 0,
      "description": "The sampling temperature, between 0 and 1. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.",
      "maximum": 1,
      "minimum": 0,
      "title": "Temperature",
      "type": "number"
    }
  },
  "required": [
    "audio_file"
  ],
  "title": "TranscriptionInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Response from transcription.",
  "properties": {
    "text": {
      "title": "Text",
      "type": "string"
    }
  },
  "required": [
    "text"
  ],
  "title": "TranscriptionResponse",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_openai_transcriptions",
  "title": "Audio Transcription",
  "description": "Transcribe audio to text using OpenAI's Whisper model...",
  "node_type_name": "openai_transcriptions",
  "input_config": {
    "model": "example_value",
    "audio_file": "example_value",
    "response_format": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 87. optical_character_recognition

**Title:** Optical Character Recognition

**Description:** Extract text and structure from documents and images using OCR

**ID:** `optical_character_recognition`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "DocumentType": {
      "description": "Document type for OCR processing.",
      "enum": [
        "document_url",
        "image_url"
      ],
      "title": "DocumentType",
      "type": "string"
    }
  },
  "description": "Optical Character Recognition node input.",
  "properties": {
    "type": {
      "$ref": "#/$defs/DocumentType",
      "description": "Type of document to process",
      "title": "Document Type",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "url": {
      "description": "URL of the document or image to process",
      "title": "Document URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "url",
        "value": null
      }
    }
  },
  "required": [
    "type",
    "url"
  ],
  "title": "OpticalCharacterRecognitionInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "Page": {
      "description": "OCR page data.",
      "properties": {
        "index": {
          "description": "Page index (0-based)",
          "title": "Index",
          "type": "integer"
        },
        "markdown": {
          "description": "Extracted text in markdown format",
          "title": "Markdown",
          "type": "string"
        },
        "images": {
          "description": "List of image URLs found on the page",
          "items": {
            "additionalProperties": true,
            "type": "object"
          },
          "title": "Images",
          "type": "array"
        },
        "dimensions": {
          "$ref": "#/$defs/PageDimensions",
          "description": "Page dimensions"
        }
      },
      "required": [
        "index",
        "markdown",
        "dimensions"
      ],
      "title": "Page",
      "type": "object"
    },
    "PageDimensions": {
      "description": "Page dimensions.",
      "properties": {
        "width": {
          "description": "Page width",
          "title": "Width",
          "type": "number"
        },
        "height": {
          "description": "Page height",
          "title": "Height",
          "type": "number"
        }
      },
      "required": [
        "width",
        "height"
      ],
      "title": "PageDimensions",
      "type": "object"
    },
    "UsageInfo": {
      "description": "Usage information for OCR processing.",
      "properties": {
        "pages_processed": {
          "description": "Number of pages processed",
          "title": "Pages Processed",
          "type": "integer"
        },
        "doc_size_bytes": {
          "description": "Document size in bytes",
          "title": "Doc Size Bytes",
          "type": "integer"
        }
      },
      "required": [
        "pages_processed",
        "doc_size_bytes"
      ],
      "title": "UsageInfo",
      "type": "object"
    }
  },
  "description": "Optical Character Recognition node output.",
  "properties": {
    "pages": {
      "description": "List of processed pages with extracted content",
      "items": {
        "$ref": "#/$defs/Page"
      },
      "title": "Pages",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "usage_info": {
      "$ref": "#/$defs/UsageInfo",
      "description": "Information about the processing usage",
      "title": "Usage Information",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "pages",
    "usage_info"
  ],
  "title": "OpticalCharacterRecognitionOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_optical_character_recognition",
  "title": "Optical Character Recognition",
  "description": "Extract text and structure from documents and images using O...",
  "node_type_name": "optical_character_recognition",
  "input_config": {
    "type": "example_value",
    "url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 88. outpainting

**Title:** Outpainting

**Description:** Expand an image beyond its original boundaries using AI-generated content.

**ID:** `outpainting`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "Direction": {
      "description": "Enumeration of direction to expand.",
      "enum": [
        "vertical",
        "horizontal"
      ],
      "title": "Direction",
      "type": "string"
    }
  },
  "description": "Outpainting node input.",
  "properties": {
    "image_url": {
      "title": "Image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "direction": {
      "$ref": "#/$defs/Direction",
      "default": "vertical",
      "title": "Direction to expand",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "image_url"
  ],
  "title": "OutpaintingNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Outpainting node output.",
  "properties": {
    "images": {
      "items": {
        "title": "Image output",
        "type": "string",
        "ui_metadata": {
          "allowed_mime_types": null,
          "depends_on": null,
          "max_height": null,
          "max_size": null,
          "max_width": null,
          "media_type": "image",
          "min_height": null,
          "min_size": null,
          "min_width": null,
          "options": null,
          "order": 0,
          "password": false,
          "ref_image": null,
          "type": "media_url",
          "value": null
        }
      },
      "title": "Images",
      "type": "array"
    }
  },
  "required": [
    "images"
  ],
  "title": "OutpaintingNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_outpainting",
  "title": "Outpainting",
  "description": "Expand an image beyond its original boundaries using AI-gene...",
  "node_type_name": "outpainting",
  "input_config": {
    "image_url": "example_value",
    "direction": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 89. perplexity_search

**Title:** Perplexity Search

**Description:** Search with Perplexity AI models.

**ID:** `perplexity_search`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: Perplexity Connection
- Description: The Perplexity connection to use for the search.
- Required: Yes
- Category: perplexity

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Input for Perplexity search.",
  "properties": {
    "prompt": {
      "description": "The prompt to send to Perplexity.",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "model": {
      "default": "sonar",
      "description": "The model to use for chat completion.",
      "enum": [
        "sonar-pro",
        "sonar"
      ],
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "temperature": {
      "default": 0.7,
      "description": "Controls randomness in the response. Higher values make the output more random, lower values make it more deterministic.",
      "maximum": 1,
      "minimum": 0,
      "title": "Temperature",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt"
  ],
  "title": "PerplexitySearchInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from Perplexity search.",
  "properties": {
    "response": {
      "description": "The response from Perplexity.",
      "title": "Response"
    }
  },
  "required": [
    "response"
  ],
  "title": "PerplexitySearchOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_perplexity_search",
  "title": "Perplexity Search",
  "description": "Search with Perplexity AI models....",
  "node_type_name": "perplexity_search",
  "input_config": {
    "prompt": "example_value",
    "model": "example_value",
    "temperature": 0
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 90. pixelml_bytedance

**Title:** ByteDance (Generate Video)

**Description:** Generate video using ByteDance's video generation models.

**ID:** `pixelml_bytedance`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to use for ByteDance video generation.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "AspectRatio": {
      "description": "Aspect ratio for the generated video.",
      "enum": [
        "1:1_480p",
        "21:9_480p",
        "9:21_480p",
        "16:9_480p",
        "9:16_480p",
        "4:3_480p",
        "3:4_480p",
        "1:1_720p",
        "21:9_720p",
        "9:21_720p",
        "16:9_720p",
        "9:16_720p",
        "4:3_720p",
        "3:4_720p",
        "1:1_1080p",
        "21:9_1080p",
        "9:21_1080p",
        "16:9_1080p",
        "9:16_1080p",
        "4:3_1080p",
        "3:4_1080p"
      ],
      "title": "AspectRatio",
      "type": "string"
    },
    "ByteDanceModel": {
      "description": "ByteDance model for the generated video.",
      "enum": [
        "seedance-1.0-pro",
        "seedance-1.0-lite"
      ],
      "title": "ByteDanceModel",
      "type": "string"
    }
  },
  "description": "Generate ByteDance Video node input.",
  "properties": {
    "model": {
      "$ref": "#/$defs/ByteDanceModel",
      "default": "seedance-1.0-pro",
      "description": "The ByteDance model to use for video generation.",
      "title": "Model",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "prompt": {
      "description": "The prompt describing the video to generate.",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "start_frame": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional URL to an image to use as the starting frame for video generation. If provided, the video will start with the given image.",
      "title": "Start Frame",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "end_frame": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional URL to an image to use as the ending frame for video generation. If provided, the video will end with the given image.",
      "title": "End Frame",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "aspect_ratio": {
      "$ref": "#/$defs/AspectRatio",
      "default": "1:1_480p",
      "description": "The aspect ratio for the generated video.",
      "title": "Aspect Ratio",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": [
          "model"
        ],
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "duration": {
      "default": 5,
      "description": "The duration of the generated video.",
      "enum": [
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12
      ],
      "title": "Duration",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt"
  ],
  "title": "GenerateVideoBytedanceInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Generate ByteDance Video node output.",
  "properties": {
    "video": {
      "description": "URL of the generated video.",
      "title": "Generated Video",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video"
  ],
  "title": "GenerateVideoBytedanceOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_pixelml_bytedance",
  "title": "ByteDance (Generate Video)",
  "description": "Generate video using ByteDance's video generation models....",
  "node_type_name": "pixelml_bytedance",
  "input_config": {
    "model": "example_value",
    "prompt": "example_value",
    "start_frame": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 91. pixelml_sora

**Title:** Sora (Generate Video)

**Description:** Generate video using OpenAI's Sora video generation models.

**ID:** `pixelml_sora`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to use for Sora video generation.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "AspectRatio": {
      "description": "Aspect ratio for the generated video.",
      "enum": [
        "16:9",
        "9:16",
        "4:7",
        "7:4"
      ],
      "title": "AspectRatio",
      "type": "string"
    },
    "SoraModel": {
      "description": "Sora model for the generated video.",
      "enum": [
        "sora-2",
        "sora-2-pro"
      ],
      "title": "SoraModel",
      "type": "string"
    }
  },
  "description": "Generate Sora Video node input.",
  "properties": {
    "model": {
      "$ref": "#/$defs/SoraModel",
      "default": "sora-2",
      "description": "The Sora model to use for video generation.",
      "title": "Model",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "prompt": {
      "description": "The prompt describing the video to generate.",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "image": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional URL to an image to use as the starting frame for video generation. If provided, the image will be downloaded and used for image-to-video generation.",
      "title": "Input Image URL",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "aspect_ratio": {
      "$ref": "#/$defs/AspectRatio",
      "description": "The aspect ratio for the generated video.",
      "title": "Aspect Ratio",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": [
          "model"
        ],
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "duration": {
      "default": 4,
      "description": "The duration of the generated video.",
      "enum": [
        4,
        8,
        12
      ],
      "title": "Duration",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt",
    "aspect_ratio"
  ],
  "title": "GenerateSoraVideoInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Generate Sora Video node output.",
  "properties": {
    "video": {
      "description": "URL of the generated video.",
      "title": "Generated Video",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video"
  ],
  "title": "GenerateSoraVideoOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_pixelml_sora",
  "title": "Sora (Generate Video)",
  "description": "Generate video using OpenAI's Sora video generation models....",
  "node_type_name": "pixelml_sora",
  "input_config": {
    "model": "example_value",
    "prompt": "example_value",
    "image": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 92. pml_edit_image

**Title:** Edit Image

**Description:** Edit an image using a prompt.

**ID:** `pml_edit_image`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to use for the edit image.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Edit Image node input.",
  "properties": {
    "model": {
      "default": "Nano Banana",
      "description": "The model to use for the edit image. Default is Nano Banana",
      "enum": [
        "Nano Banana",
        "Qwen Image Edit"
      ],
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "prompt": {
      "description": "The prompt to edit the image.",
      "title": "Prompt",
      "type": "string"
    },
    "images": {
      "description": "The images to use for the chat.",
      "items": {
        "type": "string"
      },
      "title": "Images",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/jpg",
          "image/png"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "aspect_ratio": {
      "default": "1:1",
      "description": "The aspect ratio to use for the edit image.",
      "enum": [
        "1:1",
        "21:9",
        "16:9",
        "4:3",
        "3:2",
        "2:3",
        "3:4",
        "9:16",
        "9:21"
      ],
      "title": "Aspect Ratio",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "temperature": {
      "default": 0.9,
      "description": "Controls randomness: Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive.",
      "maximum": 1,
      "minimum": 0,
      "title": "Temperature",
      "type": "number"
    },
    "max_tokens": {
      "default": 2048,
      "description": "The maximum number of tokens to generate. Requests can use up to 2,048 or 4,096 tokens shared between prompt and completion depending on the model.",
      "title": "Maximum Tokens",
      "type": "integer"
    },
    "top_p": {
      "default": 1,
      "description": "An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass.",
      "title": "Top P",
      "type": "number"
    }
  },
  "required": [
    "prompt",
    "images"
  ],
  "title": "PMLImageEditInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Edit Image node output.",
  "properties": {
    "content": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        }
      ],
      "description": "Image URL or list of image URLs",
      "title": "Generated Images",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "raw_content": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Raw content returned by the model (e.g., Gemini)",
      "title": "Raw content",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 100,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "content"
  ],
  "title": "PMLImageEditOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_pml_edit_image",
  "title": "Edit Image",
  "description": "Edit an image using a prompt....",
  "node_type_name": "pml_edit_image",
  "input_config": {
    "model": "example_value",
    "prompt": "example_value",
    "images": []
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 93. pml_llm

**Title:** Ask LLM advance

**Description:** Use a large language model such as GPT

**ID:** `pml_llm`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to use for the assistant.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "LLM advance node input.",
  "properties": {
    "human_message": {
      "description": "The prompt that is fed to the model.",
      "maxLength": 640000,
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "system_message": {
      "anyOf": [
        {
          "maxLength": 640000,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "This represents a system message, which tells the model how to behave.",
      "title": "System Message",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "chat_history_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The chat history id used to retrieve the chat history. If not provided, a new chat history will be created.",
      "title": "Chat History ID",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "model": {
      "description": "The AI model to use to generate the response.",
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "temperature": {
      "default": 0.5,
      "description": "The temperature to use when generating the response. Higher temperatures will result in more creative responses.",
      "maximum": 1,
      "minimum": 0,
      "title": "Temperature",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "human_message",
    "model"
  ],
  "title": "LLMAdvanceInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "LLM advance node output.",
  "properties": {
    "content": {
      "title": "Content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "chat_history_id": {
      "title": "The chat history id used to retrieve the chat history.",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "content",
    "chat_history_id"
  ],
  "title": "LLMAdvanceNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_pml_llm",
  "title": "Ask LLM advance",
  "description": "Use a large language model such as GPT...",
  "node_type_name": "pml_llm",
  "input_config": {
    "human_message": "example_value",
    "system_message": "example_value",
    "chat_history_id": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 94. qr_art_v5s_plus

**Title:** QR Art V5S Plus

**Description:** Generate artistic QR codes with advanced customization options.

**ID:** `qr_art_v5s_plus`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Comfy UI node input.",
  "properties": {
    "prompt": {
      "title": "Input your prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "qr_content": {
      "title": "Input your QR content (URL, text, etc.)",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "qr_strength": {
      "default": 1.6,
      "maximum": 10,
      "minimum": 0,
      "title": "QR strength",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "seed": {
      "default": 100000000,
      "title": "Seed",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "resolution": {
      "default": "SD",
      "description": "Select the resolution of the image.",
      "enum": [
        "SD",
        "HD",
        "FullHD"
      ],
      "title": "Resolution",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "qr_pattern": {
      "default": "s1",
      "description": "Select the QR pattern.",
      "enum": [
        "s1",
        "s2",
        "s3",
        "rd1",
        "rd2",
        "rd3",
        "d1",
        "d2",
        "d3",
        "r1",
        "r2",
        "r3",
        "c1",
        "c2",
        "c3",
        "sq1",
        "sq2",
        "sq3"
      ],
      "title": "QR pattern",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "aspect_ratio": {
      "default": "1:1",
      "description": "Select the aspect ratio of the image.",
      "enum": [
        "1:1",
        "3:4",
        "4:3",
        "9:16",
        "16:9"
      ],
      "title": "Aspect ratio",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 6,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt",
    "qr_content"
  ],
  "title": "QRArtV5sPlusNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Comfy UI node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "QRArtV5sPlusNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_qr_art_v5s_plus",
  "title": "QR Art V5S Plus",
  "description": "Generate artistic QR codes with advanced customization optio...",
  "node_type_name": "qr_art_v5s_plus",
  "input_config": {
    "prompt": "example_value",
    "qr_content": "example_value",
    "qr_strength": 0
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 95. qr_art_v6

**Title:** Generate QR Art V6

**Description:** Unleash Artistic QR Codes: Generate stunning AI-powered QR art with Quick QR Art V6 (powered by https://quickqr.art)

**ID:** `qr_art_v6`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "QR Art V6 node input.",
  "properties": {
    "prompt": {
      "description": "What you wish to see in the output image. A strong, descriptive prompt that clearly defines elements, colors, and subjects will lead to better results.",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "negative_prompt": {
      "default": "",
      "description": "A blurb of text describing what you do not wish to see in the output image",
      "title": "Negative prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "qr_content": {
      "description": "The content you wish to encode in the QR code.",
      "title": "Input your QR content (URL, text, etc.)",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "qr_strength": {
      "default": 1.6,
      "description": "The strength of the QR code. Higher values will make the QR code more prominent in the image.",
      "title": "QR strength",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "resolution": {
      "default": "SD",
      "description": "Select the resolution of the image.",
      "enum": [
        "SD",
        "HD",
        "FullHD"
      ],
      "title": "Resolution",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "aspect_ratio": {
      "default": "1:1",
      "description": "The aspect ratio of the generated image.",
      "enum": [
        "1:1",
        "3:4",
        "4:3",
        "9:16",
        "16:9"
      ],
      "title": "Aspect ratio",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "qr_position": {
      "default": "center",
      "description": "Select the position of the QR code.",
      "enum": [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "top-right",
        "bottom-left",
        "bottom-right"
      ],
      "title": "QR position",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 6,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "qr_pattern": {
      "default": "s1",
      "description": "Select the QR pattern.",
      "enum": [
        "s1",
        "s2",
        "s3",
        "rd1",
        "rd2",
        "rd3",
        "d1",
        "d2",
        "d3",
        "r1",
        "r2",
        "r3",
        "c1",
        "c2",
        "c3",
        "sq1",
        "sq2",
        "sq3"
      ],
      "title": "QR pattern",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 7,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt",
    "qr_content"
  ],
  "title": "QRArtV6NodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "QR Art V6 node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "QRArtV6NodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_qr_art_v6",
  "title": "Generate QR Art V6",
  "description": "Unleash Artistic QR Codes: Generate stunning AI-powered QR a...",
  "node_type_name": "qr_art_v6",
  "input_config": {
    "prompt": "example_value",
    "negative_prompt": "example_value",
    "qr_content": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 96. remove_background

**Title:** Remove Background

**Description:** Remove the background from an image, leaving only the main subject.

**ID:** `remove_background`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Remove background node input.",
  "properties": {
    "image_url": {
      "title": "Image url",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "image/png",
          "image/JPEG",
          "image/jpg",
          "image/webp"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image_url"
  ],
  "title": "RemovebackgroundNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Remove background node output.",
  "properties": {
    "image": {
      "title": "Image output",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "image"
  ],
  "title": "RemovebackgroundNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_remove_background",
  "title": "Remove Background",
  "description": "Remove the background from an image, leaving only the main s...",
  "node_type_name": "remove_background",
  "input_config": {
    "image_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 97. render_audiogram_video

**Title:** Render audiogram video

**Description:** Render audiogram video

**ID:** `render_audiogram_video`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "description": "Render audiogram video node input.",
  "properties": {
    "cover_img": {
      "description": "Cover image",
      "title": "Cover image",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "title": {
      "description": "Video title",
      "title": "Title",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "title_color": {
      "default": "rgba(186, 186, 186, 0.93)",
      "description": "Title color",
      "title": "Title color",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "subtitle_text_color": {
      "default": "rgba(255, 255, 255, 0.93)",
      "description": "Subtitle text color",
      "title": "Subtitle text color",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "subtitle_line_per_page": {
      "default": 4,
      "description": "Subtitle line per page",
      "title": "Subtitle line per page",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "subtitle_zoom_measurer_size": {
      "default": 10,
      "description": "Subtitle zoom measurer size",
      "title": "Subtitle zoom measurer size",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "subtitle_line_height": {
      "default": 98,
      "description": "Subtitle line height",
      "title": "Subtitle line height",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 6,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "wave_color": {
      "default": "#a3a5ae",
      "description": "Wave color",
      "title": "Wave color",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 7,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "duration_in_seconds": {
      "default": 29.5,
      "description": "Duration in seconds",
      "title": "Duration in seconds",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 8,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "caption_url": {
      "description": "Caption URL to use for rendering",
      "title": "Caption URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "url",
        "value": null
      }
    },
    "voice_url": {
      "description": "Voice URL to use for rendering",
      "title": "Voice URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "audio",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "cover_img",
    "title",
    "caption_url",
    "voice_url"
  ],
  "title": "RenderAudiogramVideoNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Render Video node output.",
  "properties": {
    "video": {
      "description": "Rendered video",
      "title": "Rendered video",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video"
  ],
  "title": "RenderAudiogramVideoNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_render_audiogram_video",
  "title": "Render audiogram video",
  "description": "Render audiogram video...",
  "node_type_name": "render_audiogram_video",
  "input_config": {
    "cover_img": "example_value",
    "title": "example_value",
    "title_color": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 98. render_tiktok_video

**Title:** Render tiktok video

**Description:** Render tiktok video

**ID:** `render_tiktok_video`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "description": "Render Video node input.",
  "properties": {
    "video": {
      "description": "Video to use for rendering",
      "title": "Video",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "voice": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "description": "Voice",
      "title": "Voice",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "audio",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "voice_volume": {
      "anyOf": [
        {
          "type": "number"
        },
        {
          "type": "null"
        }
      ],
      "description": "Voice volume",
      "title": "Voice Volume",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "audio",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "audio": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Audio to use for rendering",
      "title": "Audio",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "audio",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "audio_volume": {
      "anyOf": [
        {
          "type": "number"
        },
        {
          "type": "null"
        }
      ],
      "default": 0.1,
      "description": "Audio volume",
      "title": "Audio Volume",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "audio",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "caption": {
      "description": "Caption to use for rendering",
      "title": "Caption",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "url",
        "value": null
      }
    }
  },
  "required": [
    "video",
    "voice",
    "voice_volume",
    "caption"
  ],
  "title": "RenderTiktokVideoNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Render Video node output.",
  "properties": {
    "video": {
      "description": "Rendered video",
      "title": "Rendered video",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video"
  ],
  "title": "RenderTiktokVideoNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_render_tiktok_video",
  "title": "Render tiktok video",
  "description": "Render tiktok video...",
  "node_type_name": "render_tiktok_video",
  "input_config": {
    "video": "example_value",
    "voice": "example_value",
    "voice_volume": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 99. render_video

**Title:** Render video

**Description:** Render video

**ID:** `render_video`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "description": "Render Video node input.",
  "properties": {
    "video_config": {
      "default": "{\"duration\":20,\"fps\":30,\"layers\":[{\"animation\":\"slide\",\"segments\":[{\"type\":\"VIDEO\",\"duration\":10,\"url\":\"https://photoshot-us.s3.us-east-1.amazonaws.com/next-s3-uploads/2809a214-98c1-4da7-83e6-0704df0c0257/sample-video.mp4\",\"volume\":1},{\"type\":\"IMAGE\",\"duration\":10,\"url\":\"https://cdn.pixabay.com/photo/2022/02/06/14/06/dog-6997211_1280.jpg\"}]},{\"animation\":\"none\",\"segments\":[{\"type\":\"CAPTION\",\"duration\":20,\"url\":\"https://agenticflow-video-templates.vercel.app/public/subtitles.srt\",\"animation\":\"box\",\"captionPosition\":\"bottom\",\"color\":\"#FFFFFF\",\"fontCase\":\"none\",\"fontFamily\":\"Montserrat\",\"fontSize\":48,\"fontStyle\":\"normal\",\"fontWeight\":\"400\",\"highlightedWordColor\":\"#04f827FF\",\"captionBackgroundColor\":\"#00000099\"}]}]}",
      "description": "Video configuration",
      "title": "Video configuration",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json_str",
        "value": null
      }
    },
    "file_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "description": "File name",
      "title": "File name",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "file_name"
  ],
  "title": "RenderVideoNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Render Video node output.",
  "properties": {
    "video": {
      "description": "Rendered video",
      "title": "Rendered video",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video"
  ],
  "title": "RenderVideoNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_render_video",
  "title": "Render video",
  "description": "Render video...",
  "node_type_name": "render_video",
  "input_config": {
    "video_config": "example_value",
    "file_name": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 100. render_video_with_preset

**Title:** Render video with preset

**Description:** Render video preset

**ID:** `render_video_with_preset`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "description": "Render Video with preset node input.",
  "properties": {
    "images": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "string"
        }
      ],
      "description": "List of images to use for rendering",
      "title": "List of images",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "caption": {
      "description": "Url to a srt file containing the caption",
      "title": "Url to caption file",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "url",
        "value": null
      }
    },
    "voice": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "description": "Url to voice file",
      "title": "Voice",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "audio",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "voice_volume": {
      "anyOf": [
        {
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        {
          "type": "null"
        }
      ],
      "default": 0.1,
      "description": "Voice volume",
      "title": "Voice Volume",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "audio",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "audio": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Url to audio file",
      "title": "Audio",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "audio",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "audio_volume": {
      "anyOf": [
        {
          "maximum": 1,
          "minimum": 0,
          "type": "number"
        },
        {
          "type": "null"
        }
      ],
      "default": 0.1,
      "description": "Audio volume",
      "title": "Audio Volume",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "audio",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "duration": {
      "default": 20,
      "description": "Duration",
      "minimum": 0,
      "title": "Duration",
      "type": "number",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "config": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Config",
      "title": "Config",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "json_str",
        "value": null
      }
    }
  },
  "required": [
    "images",
    "caption",
    "voice"
  ],
  "title": "RenderVideoWithPresetNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Render Video node output.",
  "properties": {
    "video": {
      "description": "Rendered video",
      "title": "Rendered video",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video"
  ],
  "title": "RenderVideoWithPresetNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_render_video_with_preset",
  "title": "Render video with preset",
  "description": "Render video preset...",
  "node_type_name": "render_video_with_preset",
  "input_config": {
    "images": "example_value",
    "caption": "example_value",
    "voice": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 101. replicate_run_model

**Title:** Run Replicate Model

**Description:** Run any model on Replicate.com with your API token.

**ID:** `replicate_run_model`

**Scope:** public

**Connection Required:**
- Name: Replicate Connection
- Description: The Replicate connection to use for the model.
- Required: Yes
- Category: replicate

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Run Replicate Model node input.",
  "properties": {
    "model": {
      "description": "The Replicate model to run (format: 'username/model_name:version' or 'username/model_name'). Example: 'stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b'",
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "input_params": {
      "additionalProperties": true,
      "description": "The input parameters for the model. These vary depending on the model you're using. Check the model's documentation for details.",
      "title": "Input Parameters",
      "type": "object",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "image_input": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional image input for models that require an image. This will be added to the input parameters with the key 'image'.",
      "title": "Image Input",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "webhook_url": {
      "anyOf": [
        {
          "format": "uri",
          "maxLength": 2083,
          "minLength": 1,
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Optional webhook URL to receive updates when the prediction is complete.",
      "title": "Webhook URL",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "model",
    "input_params"
  ],
  "title": "ReplicateRunModelInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a Replicate model.",
  "properties": {
    "result": {
      "description": "The output from the Replicate model. This can be text, URLs to generated images, or other data depending on the model.",
      "title": "Result"
    }
  },
  "required": [
    "result"
  ],
  "title": "ReplicateModelOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_replicate_run_model",
  "title": "Run Replicate Model",
  "description": "Run any model on Replicate.com with your API token....",
  "node_type_name": "replicate_run_model",
  "input_config": {
    "model": "example_value",
    "input_params": {},
    "image_input": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 102. research_deep_research

**Title:** Deep Research

**Description:** Research a topic using a deep research agent.

**ID:** `research_deep_research`

**Scope:** public

**Connection Required:**
- Name: OpenAI Connection
- Description: The OpenAI connection to call OpenAI API.
- Required: Yes
- Category: openai

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Deep Research node input.",
  "properties": {
    "topic": {
      "description": "The topic to research.",
      "title": "Topic",
      "type": "string"
    },
    "max_tool_calls": {
      "default": 10,
      "description": "control the total number of tool calls (like to web search or an MCP server) that the model will make before returning a result. This is the primary tool available to you to constrain cost and latency when using these models.",
      "exclusiveMinimum": 0,
      "maximum": 100,
      "title": "Max Tool Calls",
      "type": "integer"
    },
    "tools": {
      "default": [
        {
          "type": "web_search_preview"
        }
      ],
      "description": "The tools to use for research. Read https://platform.openai.com/docs/guides/deep-research#supported-tools for more information.",
      "items": {
        "additionalProperties": true,
        "type": "object"
      },
      "title": "Tools",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "topic"
  ],
  "title": "DeepResearchInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Deep Research node output.",
  "properties": {
    "data": {
      "additionalProperties": true,
      "description": "The research data.",
      "title": "Research Data",
      "type": "object"
    }
  },
  "required": [
    "data"
  ],
  "title": "DeepResearchOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_research_deep_research",
  "title": "Deep Research",
  "description": "Research a topic using a deep research agent....",
  "node_type_name": "research_deep_research",
  "input_config": {
    "topic": "example_value",
    "max_tool_calls": 0,
    "tools": []
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 103. run_javascript

**Title:** Run JavaScript

**Description:** Run JavaScript code.

**ID:** `run_javascript`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "RunJavaScript node input.",
  "properties": {
    "code": {
      "default": "function execute(args) {\n    log(args);\n    return args.input;\n}\n",
      "description": "The Javascript code to execute, returning the value to use in the next node.\n        Your code must define a function named `execute` that takes an object as an argument.\n        The object will have the following properties:\n        - `input`: The input to the node.\n        - `workflow_run_input`: The input to the workflow run.\n        - `workflow_run_state`: The state of the workflow run.\n        You can use the `log` function to print debug information. The output of the `log` function will be available in the `output` field of the node.\n        ",
      "title": "Code",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "code_block",
        "value": null
      }
    },
    "input": {
      "additionalProperties": true,
      "default": {},
      "description": "Input to the JavaScript code. Input will be available in the `args.input` object.",
      "title": "Input",
      "type": "object",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "title": "RunJavaScriptNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "RunJavaScript node output.",
  "properties": {
    "logs": {
      "description": "The log of the JavaScript code",
      "items": {
        "additionalProperties": true,
        "type": "object"
      },
      "title": "Log",
      "type": "array"
    },
    "result": {
      "anyOf": [
        {},
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The result of the JavaScript code",
      "title": "Result"
    },
    "message": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The message of the JavaScript code",
      "title": "Message"
    },
    "error": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The error of the JavaScript code",
      "title": "Error"
    }
  },
  "required": [
    "logs"
  ],
  "title": "RunJavaScriptNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_run_javascript",
  "title": "Run JavaScript",
  "description": "Run JavaScript code....",
  "node_type_name": "run_javascript",
  "input_config": {
    "code": "example_value",
    "input": {}
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 104. search_sound_in_yt_sound_lib

**Title:** Search sound in Youtube sound library

**Description:** Search sound in Youtube sound library.

**ID:** `search_sound_in_yt_sound_lib`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Search sound in youtube sound lib node input.",
  "properties": {
    "query": {
      "description": "The search query. Ocean, Tigers, Pears, etc.",
      "title": "The search query.",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "num_results": {
      "default": 10,
      "description": "Number of results to return",
      "exclusiveMaximum": 21,
      "exclusiveMinimum": 0,
      "title": "Number of results",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "query"
  ],
  "title": "SearchSoundInYoutubeSoundLibNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "SoundResult": {
      "description": "Sound result model.",
      "properties": {
        "id": {
          "title": "Id",
          "type": "string"
        },
        "name": {
          "title": "Name",
          "type": "string"
        },
        "genre": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Genre"
        },
        "duration": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Duration"
        },
        "mood": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Mood"
        },
        "url": {
          "title": "Url",
          "type": "string"
        },
        "artist": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Artist"
        }
      },
      "required": [
        "id",
        "name",
        "url"
      ],
      "title": "SoundResult",
      "type": "object"
    }
  },
  "description": "Search sound in YT sound lib node output.",
  "properties": {
    "sounds": {
      "description": "List of sounds",
      "items": {
        "$ref": "#/$defs/SoundResult"
      },
      "title": "Sounds",
      "type": "array"
    }
  },
  "required": [
    "sounds"
  ],
  "title": "SearchSoundInYoutubeSoundLibNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_search_sound_in_yt_sound_lib",
  "title": "Search sound in Youtube sound library",
  "description": "Search sound in Youtube sound library....",
  "node_type_name": "search_sound_in_yt_sound_lib",
  "input_config": {
    "query": "example_value",
    "num_results": 0
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 105. search_video_in_pexels

**Title:** Search video in Pexels

**Description:** Search video in Pexels.

**ID:** `search_video_in_pexels`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Search video in Pexels node input.",
  "properties": {
    "query": {
      "description": "The search query. Ocean, Tigers, Pears, etc.",
      "title": "The search query.",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "orientation": {
      "anyOf": [
        {
          "enum": [
            "landscape",
            "portrait",
            "square"
          ],
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Desired video orientation. The current supported orientations are: `landscape`, `portrait` or `square`.",
      "title": "Orientation",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "size": {
      "anyOf": [
        {
          "enum": [
            "large",
            "medium",
            "small"
          ],
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Minimum video size. The current supported sizes are: `large`(4K), `medium`(Full HD) or `small`(HD).",
      "title": "Minimum video size",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "page": {
      "anyOf": [
        {
          "exclusiveMinimum": 0,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": 1,
      "description": "The page number you are requesting.",
      "title": "The page number you are requesting.",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "per_page": {
      "anyOf": [
        {
          "exclusiveMinimum": 0,
          "maximum": 80,
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": 15,
      "description": "Number of items per page.",
      "title": "Number of items per page.",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "query"
  ],
  "title": "SearchVideoInPexelsNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "PexelsVideo": {
      "description": "Pexels video model.",
      "properties": {
        "id": {
          "title": "Id",
          "type": "integer"
        },
        "width": {
          "title": "Width",
          "type": "integer"
        },
        "height": {
          "title": "Height",
          "type": "integer"
        },
        "url": {
          "title": "Url",
          "type": "string"
        },
        "image": {
          "title": "Image",
          "type": "string"
        },
        "full_res": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "title": "Full Res"
        },
        "duration": {
          "title": "Duration",
          "type": "integer"
        },
        "video_files": {
          "items": {
            "additionalProperties": true,
            "type": "object"
          },
          "title": "Video Files",
          "type": "array"
        }
      },
      "required": [
        "id",
        "width",
        "height",
        "url",
        "image",
        "full_res",
        "duration",
        "video_files"
      ],
      "title": "PexelsVideo",
      "type": "object"
    }
  },
  "description": "Search video in pexels node output.",
  "properties": {
    "videos": {
      "description": "Videos",
      "items": {
        "$ref": "#/$defs/PexelsVideo"
      },
      "title": "Videos",
      "type": "array"
    },
    "page": {
      "description": "Current page",
      "title": "Current page",
      "type": "integer"
    },
    "per_page": {
      "description": "Items per page",
      "title": "Items per page",
      "type": "integer"
    },
    "total_results": {
      "description": "Total results",
      "title": "Total results",
      "type": "integer"
    },
    "prev_page": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Previous page url",
      "title": "Previous page url"
    },
    "next_page": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Next page url",
      "title": "Next page url"
    }
  },
  "required": [
    "videos",
    "page",
    "per_page",
    "total_results"
  ],
  "title": "SearchVideoInPexelsNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_search_video_in_pexels",
  "title": "Search video in Pexels",
  "description": "Search video in Pexels....",
  "node_type_name": "search_video_in_pexels",
  "input_config": {
    "query": "example_value",
    "orientation": "example_value",
    "size": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 106. segment_user

**Title:** Segment User

**Description:** Segment user.

**ID:** `segment_user`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Segment user",
  "properties": {
    "users": {
      "description": "List of users in JSON format.",
      "title": "List of Users",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "json_str",
        "value": null
      }
    }
  },
  "required": [
    "users"
  ],
  "title": "SegmentUserNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Segment user output",
  "properties": {
    "segments": {
      "description": "User segments.",
      "items": {
        "additionalProperties": true,
        "type": "object"
      },
      "title": "User Segments",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "segments"
  ],
  "title": "SegmentUserNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_segment_user",
  "title": "Segment User",
  "description": "Segment user....",
  "node_type_name": "segment_user",
  "input_config": {
    "users": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 107. segment_user_v2

**Title:** Segment User V2

**Description:** Segment user V2

**ID:** `segment_user_v2`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Segment user",
  "properties": {
    "users": {
      "description": "List of users in JSON format.",
      "title": "List of Users",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "json_str",
        "value": null
      }
    }
  },
  "required": [
    "users"
  ],
  "title": "SegmentUserV2NodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Segment user output",
  "properties": {
    "segments": {
      "description": "User segments.",
      "items": {
        "additionalProperties": true,
        "type": "object"
      },
      "title": "User Segments",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "segments"
  ],
  "title": "SegmentUserV2NodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_segment_user_v2",
  "title": "Segment User V2",
  "description": "Segment user V2...",
  "node_type_name": "segment_user_v2",
  "input_config": {
    "users": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 108. send_email

**Title:** Send Email

**Description:** Send an email to specified recipients.

**ID:** `send_email`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Input of the Send Email node.",
  "properties": {
    "recipient_emails": {
      "description": "List email addresses of the recipients.",
      "items": {
        "type": "string"
      },
      "title": "Recipient Emails",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "cc_emails": {
      "default": [],
      "description": "List email addresses of the CC recipients.",
      "items": {
        "type": "string"
      },
      "title": "CC Emails",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "bcc_emails": {
      "default": [],
      "description": "List email addresses of the BCC recipients.",
      "items": {
        "type": "string"
      },
      "title": "BCC Emails",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "subject": {
      "description": "Subject of the email.",
      "title": "Subject",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "body": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Body of the email. This field is required if body_html is not provided.",
      "title": "Body",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "body_html": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The body of the email in HTML format. This field is required if body is not provided.",
      "title": "Body html",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "recipient_emails",
    "subject"
  ],
  "title": "SendEmailNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output of the Send Email node.",
  "properties": {
    "message": {
      "description": "Status notification message",
      "title": "Message",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "email_id": {
      "description": "The ID of the email sent.",
      "title": "Email ID",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "message",
    "email_id"
  ],
  "title": "SendEmailNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_send_email",
  "title": "Send Email",
  "description": "Send an email to specified recipients....",
  "node_type_name": "send_email",
  "input_config": {
    "recipient_emails": [],
    "cc_emails": [],
    "bcc_emails": []
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 109. social_profile_analyzer

**Title:** Social profile analyzer

**Description:** Analyze a social media profile.

**ID:** `social_profile_analyzer`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Social profile analyzer node input.",
  "properties": {
    "social_data": {
      "description": "The social media data to analyze in JSON string format.",
      "title": "Social data",
      "type": "string"
    },
    "profile_pic_url": {
      "description": "The URL of the profile picture.",
      "title": "Profile picture URL",
      "type": "string"
    }
  },
  "required": [
    "social_data",
    "profile_pic_url"
  ],
  "title": "SocialProfileAnalyzerNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "ProfileStrength": {
      "description": "A strength of the social media profile.",
      "properties": {
        "title": {
          "description": "The title of the strength.",
          "title": "Title",
          "type": "string"
        },
        "subtitle": {
          "description": "The subtitle of the strength.",
          "title": "Subtitle",
          "type": "string"
        }
      },
      "required": [
        "title",
        "subtitle"
      ],
      "title": "ProfileStrength",
      "type": "object"
    }
  },
  "description": "Social profile analyzer node output.",
  "properties": {
    "strengths": {
      "description": "The strengths of the social media profile.",
      "items": {
        "$ref": "#/$defs/ProfileStrength"
      },
      "title": "Strengths",
      "type": "array"
    },
    "weaknesses": {
      "description": "The weaknesses of the social media profile.",
      "items": {
        "type": "string"
      },
      "title": "Weaknesses",
      "type": "array"
    },
    "love_life": {
      "description": "The love life of the social media profile.",
      "title": "Love life",
      "type": "string"
    },
    "money": {
      "description": "The money of the social media profile.",
      "title": "Money",
      "type": "string"
    },
    "health": {
      "description": "The health of the social media profile.",
      "title": "Health",
      "type": "string"
    },
    "biggest_goal": {
      "description": "The biggest goal of the social media profile.",
      "title": "Biggest goal",
      "type": "string"
    },
    "colleague_perspective": {
      "description": "The colleague perspective of the social media profile.",
      "title": "Colleague perspective",
      "type": "string"
    },
    "pickup_lines": {
      "description": "The pickup lines of the social media profile.",
      "items": {
        "type": "string"
      },
      "title": "Pickup lines",
      "type": "array"
    },
    "famous_person_comparison": {
      "description": "The famous person comparison of the social media profile.",
      "title": "Famous person comparison",
      "type": "string"
    },
    "previous_life": {
      "description": "The previous life of the social media profile.",
      "title": "Previous life",
      "type": "string"
    },
    "animal": {
      "description": "The animal of the social media profile.",
      "title": "Animal",
      "type": "string"
    },
    "fifty_dollar_thing": {
      "description": "The fifty dollar thing of the social media profile.",
      "title": "Fifty dollar thing",
      "type": "string"
    },
    "career": {
      "description": "The career of the social media profile.",
      "title": "Career",
      "type": "string"
    },
    "life_suggestion": {
      "description": "The life suggestion of the social media profile.",
      "title": "Life suggestion",
      "type": "string"
    }
  },
  "required": [
    "strengths",
    "weaknesses",
    "love_life",
    "money",
    "health",
    "biggest_goal",
    "colleague_perspective",
    "pickup_lines",
    "famous_person_comparison",
    "previous_life",
    "animal",
    "fifty_dollar_thing",
    "career",
    "life_suggestion"
  ],
  "title": "SocialProfileAnalyzerNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_social_profile_analyzer",
  "title": "Social profile analyzer",
  "description": "Analyze a social media profile....",
  "node_type_name": "social_profile_analyzer",
  "input_config": {
    "social_data": "example_value",
    "profile_pic_url": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 110. speech_to_text

**Title:** Speech to text

**Description:** Speech to text node.

**ID:** `speech_to_text`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "SpeechToTextProvider": {
      "description": "Speech to text provider.",
      "enum": [
        "Groq",
        "Azure",
        "AWS_Transcribe"
      ],
      "title": "SpeechToTextProvider",
      "type": "string"
    },
    "SpeechToTextSupportedLanguage": {
      "description": "Speech to text supported language.",
      "enum": [
        "English (United Kingdom)",
        "English (Canada)",
        "English (United States)",
        "English (South Africa)",
        "French (France)",
        "Italian (Italy)",
        "Japanese (Japan)",
        "Russian (Russia)",
        "Vietnamese (Vietnam)",
        "Chinese (Wu, Simplified)",
        "Chinese (Cantonese, Simplified)",
        "Chinese (Mandarin, Simplified)"
      ],
      "title": "SpeechToTextSupportedLanguage",
      "type": "string"
    }
  },
  "description": "Speech to text node input.",
  "properties": {
    "provider": {
      "$ref": "#/$defs/SpeechToTextProvider",
      "default": "Groq",
      "description": "Which provider to use for speech to text",
      "title": "Provider",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "language": {
      "$ref": "#/$defs/SpeechToTextSupportedLanguage",
      "description": "Which language that the audio is in",
      "title": "Language",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "audio": {
      "description": "Audio file url to convert transcribe",
      "title": "Audio file",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "language",
    "audio"
  ],
  "title": "SpeechToTextNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Speech To Text node output.",
  "properties": {
    "transcript": {
      "title": "Transcribed text",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "transcript_file": {
      "title": "Transcript file",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "url",
        "value": null
      }
    }
  },
  "required": [
    "transcript",
    "transcript_file"
  ],
  "title": "SpeechToTextNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_speech_to_text",
  "title": "Speech to text",
  "description": "Speech to text node....",
  "node_type_name": "speech_to_text",
  "input_config": {
    "provider": "example_value",
    "language": "example_value",
    "audio": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 111. straico_image_generate

**Title:** Run Straico Image Generation

**Description:** Run a image generation using the Straico API.

**ID:** `straico_image_generate`

**Scope:** public

**Connection Required:**
- Name: Straico Connection
- Description: The Straico connection to use for the model.
- Required: Yes
- Category: straico

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Run Straico image generation node input.",
  "properties": {
    "model": {
      "default": "openai/dall-e-3",
      "description": "The AI model to use for image generation",
      "enum": [
        "openai/dall-e-3",
        "flux/1.1",
        "ideogram/V_2A",
        "ideogram/V_2A_TURBO",
        "ideogram/V_2",
        "ideogram/V_2_TURBO",
        "ideogram/V_1",
        "ideogram/V_1_TURBO"
      ],
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "description": {
      "description": "A detailed textual description of the image to be generated",
      "title": "Description",
      "type": "string"
    },
    "size": {
      "default": "square",
      "description": "The desired image dimensions",
      "enum": [
        "square",
        "landscape",
        "portrait"
      ],
      "title": "Size",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "variations": {
      "default": 1,
      "description": "Number of images to generate",
      "maximum": 4,
      "minimum": 1,
      "title": "Variations",
      "type": "integer"
    }
  },
  "required": [
    "description"
  ],
  "title": "StraicoImageGenerateInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "StraicoImageGenerateData": {
      "description": "Output from a Straico image generation.",
      "properties": {
        "zip": {
          "description": "URL to download a ZIP file containing all generated images",
          "title": "ZIP Download",
          "type": "string"
        },
        "images": {
          "description": "Array of URLs, each pointing to an individual generated image",
          "items": {
            "type": "string"
          },
          "title": "Image URLs",
          "type": "array"
        },
        "price": {
          "additionalProperties": true,
          "description": "Detailed pricing information for the request. Includes price_per_image, quantity_images, and total",
          "title": "Price",
          "type": "object"
        }
      },
      "required": [
        "zip",
        "images",
        "price"
      ],
      "title": "StraicoImageGenerateData",
      "type": "object"
    }
  },
  "description": "Output from a Straico image generation.",
  "properties": {
    "data": {
      "anyOf": [
        {
          "$ref": "#/$defs/StraicoImageGenerateData"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The data from the image generation.",
      "title": "Data"
    },
    "success": {
      "description": "Whether the image generation was successful.",
      "title": "Success",
      "type": "boolean"
    },
    "error": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "If the image generation was not successful, this will contain an error message.",
      "title": "Error"
    }
  },
  "required": [
    "success"
  ],
  "title": "StraicoImageGenerateOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_straico_image_generate",
  "title": "Run Straico Image Generation",
  "description": "Run a image generation using the Straico API....",
  "node_type_name": "straico_image_generate",
  "input_config": {
    "model": "example_value",
    "description": "example_value",
    "size": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 112. straico_prompt_completion

**Title:** Run Straico Prompt Completion V1

**Description:** Run a prompt completion using the Straico API.

**ID:** `straico_prompt_completion`

**Scope:** public

**Connection Required:**
- Name: Straico Connection
- Description: The Straico connection to use for the model.
- Required: Yes
- Category: straico

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Run Straico prompt completion node input.",
  "properties": {
    "models": {
      "description": "An array of 1-4 unique model identifiers",
      "items": {
        "type": "string"
      },
      "maxItems": 4,
      "minItems": 1,
      "title": "Models",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "dropdown_multi_select",
        "value": null
      }
    },
    "message": {
      "description": "The prompt text for which completions are requested",
      "title": "Message",
      "type": "string"
    },
    "file_urls": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "maxItems": 4,
          "minItems": 0,
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "An array of up to 4 file URLs, previously uploaded via the File Upload endpoint",
      "title": "File URLs"
    },
    "images": {
      "default": [],
      "description": "An array of image URLs.",
      "items": {
        "type": "string"
      },
      "maxItems": 4,
      "minItems": 0,
      "title": "Images",
      "type": "array"
    },
    "youtube_urls": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "maxItems": 4,
          "minItems": 0,
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "An array of up to 4 YouTube video URLs",
      "title": "YouTube URLs"
    },
    "display_transcripts": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "If true, returns transcripts of the files. Default: false",
      "title": "Display Transcripts"
    },
    "temperature": {
      "default": 0,
      "description": "This setting influences the variety in the model's responses (0-2)",
      "maximum": 2,
      "minimum": 0,
      "title": "Temperature",
      "type": "number"
    },
    "max_tokens": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Set the limit for the number of tokens the model can generate in response",
      "title": "Max Tokens"
    }
  },
  "required": [
    "models",
    "message"
  ],
  "title": "StraicoPromptCompletionInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "StraicoPromptCompletionData": {
      "description": "Output from a Straico prompt completion.",
      "properties": {
        "overall_price": {
          "additionalProperties": true,
          "description": "The overall price of the prompt completion.",
          "title": "Overall Price",
          "type": "object"
        },
        "overall_words": {
          "additionalProperties": true,
          "description": "Overall word count for all models, including input, output and total words.",
          "title": "Overall Words",
          "type": "object"
        },
        "completions": {
          "additionalProperties": true,
          "description": "Detailed results for each requested model.",
          "title": "Completions",
          "type": "object"
        },
        "transcripts": {
          "anyOf": [
            {
              "items": {
                "additionalProperties": {
                  "type": "string"
                },
                "type": "object"
              },
              "type": "array"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "If display_transcripts is true, returns an array of transcripts, each containing a name and text.",
          "title": "Transcripts"
        }
      },
      "required": [
        "overall_price",
        "overall_words",
        "completions"
      ],
      "title": "StraicoPromptCompletionData",
      "type": "object"
    }
  },
  "description": "Output from a Straico prompt completion.",
  "properties": {
    "data": {
      "anyOf": [
        {
          "$ref": "#/$defs/StraicoPromptCompletionData"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The data from the prompt completion.",
      "title": "Data"
    },
    "success": {
      "description": "Whether the prompt completion was successful.",
      "title": "Success",
      "type": "boolean"
    },
    "error": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "If the prompt completion was not successful, this will contain an error message.",
      "title": "Error"
    }
  },
  "required": [
    "success"
  ],
  "title": "StraicoPromptCompletionOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_straico_prompt_completion",
  "title": "Run Straico Prompt Completion V1",
  "description": "Run a prompt completion using the Straico API....",
  "node_type_name": "straico_prompt_completion",
  "input_config": {
    "models": [],
    "message": "example_value",
    "file_urls": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 113. string_to_json

**Title:** Convert String to JSON

**Description:** Convert a string representation to a JSON object.

**ID:** `string_to_json`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Convert string to json node input.",
  "properties": {
    "string_to_convert": {
      "description": "The string to convert to JSON.",
      "title": "String to Convert",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "string_to_convert"
  ],
  "title": "StringToJsonNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Convert string to json node output.",
  "properties": {
    "json_output": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "items": {
            "additionalProperties": true,
            "type": "object"
          },
          "type": "array"
        }
      ],
      "description": "The JSON output from the string.",
      "title": "JSON Output"
    }
  },
  "required": [
    "json_output"
  ],
  "title": "StringToJsonNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_string_to_json",
  "title": "Convert String to JSON",
  "description": "Convert a string representation to a JSON object....",
  "node_type_name": "string_to_json",
  "input_config": {
    "string_to_convert": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 114. submit_artifact

**Title:** Submit Artifact

**Description:** Submit artifact to the platform GPTsDex

**ID:** `submit_artifact`

**Scope:** exclusive

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Submit artifact node input.",
  "properties": {
    "accessToken": {
      "title": "Access Token",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "title": {
      "title": "Title",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "url": {
      "title": "URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "description": {
      "title": "Description",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "thumbnail": {
      "title": "Thumbnail",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "video": {
      "default": null,
      "description": "Video",
      "title": "Video",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "category": {
      "description": "Category",
      "items": {
        "type": "string"
      },
      "title": "Category",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 6,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "author": {
      "title": "Author",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 7,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "accessToken",
    "title",
    "url",
    "description",
    "thumbnail",
    "category",
    "author"
  ],
  "title": "SubmitArtifactInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Submit artifact node output.",
  "properties": {
    "message": {
      "title": "Message",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "output": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "title": "Output",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "message"
  ],
  "title": "SubmitArtifactOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_submit_artifact",
  "title": "Submit Artifact",
  "description": "Submit artifact to the platform GPTsDex...",
  "node_type_name": "submit_artifact",
  "input_config": {
    "accessToken": "example_value",
    "title": "example_value",
    "url": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 115. tavily_search

**Title:** Tavily Search

**Description:** Search the web using Tavily's AI-powered search engine

**ID:** `tavily_search`

**Scope:** public

**Connection Required:**
- Name: Tavily Connection
- Description: The Tavily connection to use for the search
- Required: Yes
- Category: tavily

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "properties": {
    "query": {
      "description": "The search query to execute using Tavily",
      "title": "Search Query",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "max_results": {
      "default": 5,
      "description": "Maximum number of search results to return",
      "maximum": 20,
      "minimum": 1,
      "title": "Max Results",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "topic": {
      "default": "general",
      "description": "Category of the search",
      "enum": [
        "general",
        "news",
        "finance"
      ],
      "title": "Topic",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "include_answer": {
      "default": false,
      "description": "Include a short answer to the original query in results",
      "title": "Include Answer",
      "type": "boolean",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "include_raw_content": {
      "default": false,
      "description": "Include cleaned and parsed HTML of each search result",
      "title": "Include Raw Content",
      "type": "boolean",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "include_images": {
      "default": false,
      "description": "Include a list of query related images in the response",
      "title": "Include Images",
      "type": "boolean",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "search_depth": {
      "default": "basic",
      "description": "Depth of the search",
      "enum": [
        "basic",
        "advanced"
      ],
      "title": "Search Depth",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 6,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "time_range": {
      "anyOf": [
        {
          "enum": [
            "day",
            "week",
            "month",
            "year"
          ],
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Filter results by time range",
      "title": "Time Range",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 7,
        "password": false,
        "ref_image": null,
        "type": "dropdown",
        "value": null
      }
    },
    "include_domains": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "List of domains to specifically include (optional)",
      "title": "Include Domains",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 8,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "exclude_domains": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "List of domains to specifically exclude (optional)",
      "title": "Exclude Domains",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 9,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "query"
  ],
  "title": "TavilySearchInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "properties": {
    "query": {
      "description": "The search query that was executed",
      "title": "Query",
      "type": "string"
    },
    "answer": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Short answer to the query (if requested)",
      "title": "Answer"
    },
    "follow_up_questions": {
      "anyOf": [
        {
          "items": {
            "type": "string"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Suggested follow-up questions",
      "title": "Follow-up Questions"
    },
    "images": {
      "description": "List of related images (if requested)",
      "items": {
        "type": "string"
      },
      "title": "Images",
      "type": "array"
    },
    "results": {
      "description": "The search results from Tavily",
      "items": {},
      "title": "Search Results",
      "type": "array"
    },
    "response_time": {
      "description": "Time taken to execute the search",
      "title": "Response Time",
      "type": "number"
    }
  },
  "required": [
    "query",
    "results",
    "response_time"
  ],
  "title": "TavilySearchOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_tavily_search",
  "title": "Tavily Search",
  "description": "Search the web using Tavily's AI-powered search engine...",
  "node_type_name": "tavily_search",
  "input_config": {
    "query": "example_value",
    "max_results": 0,
    "topic": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 116. telegram_call_bot_api

**Title:** Call Telegram Bot API

**Description:** Call the Telegram bot API.

**ID:** `telegram_call_bot_api`

**Scope:** public

**Connection Required:**
- Name: Telegram Bot Connection
- Description: The Telegram bot connection to use for sending the audio.
- Required: Yes
- Category: telegram

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Call Telegram bot API node input.",
  "properties": {
    "endpoint": {
      "description": "The endpoint to call on the Telegram bot API. For example, 'sendMessage'.",
      "title": "Endpoint",
      "type": "string"
    },
    "data": {
      "additionalProperties": true,
      "description": "The data to send to the Telegram bot API.",
      "title": "Data",
      "type": "object",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "endpoint",
    "data"
  ],
  "title": "CallTelegramBotApiInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a Telegram bot API call.",
  "properties": {
    "response": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The response from the Telegram bot API.",
      "title": "Response",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "success": {
      "description": "Whether the bot API call was successful.",
      "title": "Success",
      "type": "boolean"
    },
    "error": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The error that occurred if the bot API call was not successful.",
      "title": "Error"
    }
  },
  "required": [
    "success"
  ],
  "title": "CallTelegramBotApiOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_telegram_call_bot_api",
  "title": "Call Telegram Bot API",
  "description": "Call the Telegram bot API....",
  "node_type_name": "telegram_call_bot_api",
  "input_config": {
    "endpoint": "example_value",
    "data": {}
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 117. telegram_send_audio

**Title:** Send Telegram Audio

**Description:** Send an audio file to a Telegram chat.

**ID:** `telegram_send_audio`

**Scope:** public

**Connection Required:**
- Name: Telegram Bot Connection
- Description: The Telegram bot connection to use for sending the audio.
- Required: Yes
- Category: telegram

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Telegram send audio node input.",
  "properties": {
    "chat_id": {
      "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
      "title": "Chat ID",
      "type": "string"
    },
    "audio": {
      "description": "Audio file to send. Pass a file_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data.",
      "title": "Audio",
      "type": "string"
    },
    "business_connection_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier of the business connection on behalf of which the message will be sent",
      "title": "Business Connection ID"
    },
    "message_thread_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only",
      "title": "Message Thread ID"
    },
    "caption": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Audio caption, 0-1024 characters after entities parsing",
      "title": "Caption"
    },
    "parse_mode": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Mode for parsing entities in the audio caption. Can be 'Markdown', 'MarkdownV2', or 'HTML'",
      "title": "Parse Mode"
    },
    "caption_entities": {
      "anyOf": [
        {
          "items": {
            "additionalProperties": true,
            "type": "object"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "A JSON-serialized list of special entities that appear in the caption",
      "title": "Caption Entities",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "duration": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Duration of the audio in seconds",
      "title": "Duration"
    },
    "performer": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Performer of the audio",
      "title": "Performer"
    },
    "title": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Track name",
      "title": "Title"
    },
    "thumbnail": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320.",
      "title": "Thumbnail"
    },
    "disable_notification": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Sends the message silently. Users will receive a notification with no sound",
      "title": "Disable Notification"
    },
    "protect_content": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Protects the contents of the sent message from forwarding and saving",
      "title": "Protect Content"
    },
    "allow_paid_broadcast": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee",
      "title": "Allow Paid Broadcast"
    },
    "message_effect_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier of the message effect to be added to the message; for private chats only",
      "title": "Message Effect ID"
    },
    "reply_parameters": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Description of the message to reply to",
      "title": "Reply Parameters",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "reply_markup": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, etc.",
      "title": "Reply Markup",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "chat_id",
    "audio"
  ],
  "title": "TelegramSendAudioInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a Telegram send audio.",
  "properties": {
    "sent_message": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The message that was sent.",
      "title": "Sent Message if successful",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "success": {
      "description": "Whether the audio was sent successfully.",
      "title": "Success",
      "type": "boolean"
    },
    "error": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The error that occurred if the audio was not sent successfully.",
      "title": "Error"
    }
  },
  "required": [
    "success"
  ],
  "title": "TelegramSendAudioOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_telegram_send_audio",
  "title": "Send Telegram Audio",
  "description": "Send an audio file to a Telegram chat....",
  "node_type_name": "telegram_send_audio",
  "input_config": {
    "chat_id": "example_value",
    "audio": "example_value",
    "business_connection_id": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 118. telegram_send_chat_action

**Title:** Send Telegram Chat Action

**Description:** Send a chat action to a Telegram chat to indicate what the bot is doing.

**ID:** `telegram_send_chat_action`

**Scope:** public

**Connection Required:**
- Name: Telegram Bot Connection
- Description: The Telegram bot connection to use for sending the chat action.
- Required: Yes
- Category: telegram

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Telegram send chat action node input.",
  "properties": {
    "chat_id": {
      "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
      "title": "Chat ID",
      "type": "string"
    },
    "action": {
      "description": "Type of action to broadcast. Choose one, depending on what the user is about to receive: typing for text messages, upload_photo for photos, record_video or upload_video for videos, record_voice or upload_voice for voice notes, upload_document for general files, choose_sticker for stickers, find_location for location data, record_video_note or upload_video_note for video notes.",
      "enum": [
        "typing",
        "upload_photo",
        "record_video",
        "upload_video",
        "record_voice",
        "upload_voice",
        "upload_document",
        "choose_sticker",
        "find_location",
        "record_video_note",
        "upload_video_note"
      ],
      "title": "Action",
      "type": "string"
    },
    "business_connection_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier of the business connection on behalf of which the action will be sent",
      "title": "Business Connection ID"
    },
    "message_thread_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier for the target message thread; for supergroups only",
      "title": "Message Thread ID"
    }
  },
  "required": [
    "chat_id",
    "action"
  ],
  "title": "TelegramSendChatActionInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a Telegram send chat action.",
  "properties": {
    "success": {
      "description": "Whether the chat action was sent successfully.",
      "title": "Success",
      "type": "boolean"
    },
    "error": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The error that occurred if the chat action was not sent successfully.",
      "title": "Error"
    }
  },
  "required": [
    "success"
  ],
  "title": "TelegramSendChatActionOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_telegram_send_chat_action",
  "title": "Send Telegram Chat Action",
  "description": "Send a chat action to a Telegram chat to indicate what the b...",
  "node_type_name": "telegram_send_chat_action",
  "input_config": {
    "chat_id": "example_value",
    "action": "example_value",
    "business_connection_id": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 119. telegram_send_document

**Title:** Send Telegram Document

**Description:** Send a document to a Telegram chat.

**ID:** `telegram_send_document`

**Scope:** public

**Connection Required:**
- Name: Telegram Bot Connection
- Description: The Telegram bot connection to use for sending the document.
- Required: Yes
- Category: telegram

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Telegram send document node input.",
  "properties": {
    "chat_id": {
      "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
      "title": "Chat ID",
      "type": "string"
    },
    "document": {
      "description": "File to send. Pass a file_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data.",
      "title": "Document",
      "type": "string"
    },
    "business_connection_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier of the business connection on behalf of which the message will be sent",
      "title": "Business Connection ID"
    },
    "message_thread_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only",
      "title": "Message Thread ID"
    },
    "thumbnail": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320.",
      "title": "Thumbnail"
    },
    "caption": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Document caption (may also be used when resending documents by file_id), 0-1024 characters after entities parsing",
      "title": "Caption"
    },
    "parse_mode": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Mode for parsing entities in the document caption. Can be 'Markdown', 'MarkdownV2', or 'HTML'",
      "title": "Parse Mode"
    },
    "caption_entities": {
      "anyOf": [
        {
          "items": {
            "additionalProperties": true,
            "type": "object"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "A JSON-serialized list of special entities that appear in the caption",
      "title": "Caption Entities",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "disable_content_type_detection": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Disables automatic server-side content type detection for files uploaded using multipart/form-data",
      "title": "Disable Content Type Detection"
    },
    "disable_notification": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Sends the message silently. Users will receive a notification with no sound",
      "title": "Disable Notification"
    },
    "protect_content": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Protects the contents of the sent message from forwarding and saving",
      "title": "Protect Content"
    },
    "allow_paid_broadcast": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee",
      "title": "Allow Paid Broadcast"
    },
    "message_effect_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier of the message effect to be added to the message; for private chats only",
      "title": "Message Effect ID"
    },
    "reply_parameters": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Description of the message to reply to",
      "title": "Reply Parameters",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "reply_markup": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, etc.",
      "title": "Reply Markup",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "chat_id",
    "document"
  ],
  "title": "TelegramSendDocumentInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a Telegram send document.",
  "properties": {
    "sent_message": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The message that was sent.",
      "title": "Sent Message if successful",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "success": {
      "description": "Whether the document was sent successfully.",
      "title": "Success",
      "type": "boolean"
    },
    "error": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The error that occurred if the document was not sent successfully.",
      "title": "Error"
    }
  },
  "required": [
    "success"
  ],
  "title": "TelegramSendDocumentOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_telegram_send_document",
  "title": "Send Telegram Document",
  "description": "Send a document to a Telegram chat....",
  "node_type_name": "telegram_send_document",
  "input_config": {
    "chat_id": "example_value",
    "document": "example_value",
    "business_connection_id": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 120. telegram_send_message

**Title:** Send Telegram Message

**Description:** Send a message to a Telegram chat.

**ID:** `telegram_send_message`

**Scope:** public

**Connection Required:**
- Name: Telegram Bot Connection
- Description: The Telegram bot connection to use for the message.
- Required: Yes
- Category: telegram

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Telegram send message node input.",
  "properties": {
    "chat_id": {
      "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
      "title": "Chat ID",
      "type": "string"
    },
    "text": {
      "description": "Text of the message to be sent, 1-4096 characters after entities parsing",
      "title": "Message Text",
      "type": "string"
    },
    "business_connection_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier of the business connection on behalf of which the message will be sent",
      "title": "Business Connection ID"
    },
    "message_thread_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only",
      "title": "Message Thread ID"
    },
    "parse_mode": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Mode for parsing entities in the message text. Can be 'Markdown', 'MarkdownV2', or 'HTML'",
      "title": "Parse Mode"
    },
    "entities": {
      "anyOf": [
        {
          "items": {
            "additionalProperties": true,
            "type": "object"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "A JSON-serialized list of special entities that appear in message text",
      "title": "Entities",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "link_preview_options": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Link preview generation options for the message",
      "title": "Link Preview Options",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "disable_notification": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Sends the message silently. Users will receive a notification with no sound",
      "title": "Disable Notification"
    },
    "protect_content": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Protects the contents of the sent message from forwarding and saving",
      "title": "Protect Content"
    },
    "allow_paid_broadcast": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee",
      "title": "Allow Paid Broadcast"
    },
    "message_effect_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier of the message effect to be added to the message; for private chats only",
      "title": "Message Effect ID"
    },
    "reply_parameters": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Description of the message to reply to",
      "title": "Reply Parameters",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "reply_markup": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, etc.",
      "title": "Reply Markup",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "chat_id",
    "text"
  ],
  "title": "TelegramSendMessageInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a Telegram send message.",
  "properties": {
    "sent_message": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The message that was sent.",
      "title": "Sent Message if successful",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "success": {
      "description": "Whether the message was sent successfully.",
      "title": "Success",
      "type": "boolean"
    },
    "error": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The error that occurred if the message was not sent successfully.",
      "title": "Error"
    }
  },
  "required": [
    "success"
  ],
  "title": "TelegramSendMessageOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_telegram_send_message",
  "title": "Send Telegram Message",
  "description": "Send a message to a Telegram chat....",
  "node_type_name": "telegram_send_message",
  "input_config": {
    "chat_id": "example_value",
    "text": "example_value",
    "business_connection_id": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 121. telegram_send_photo

**Title:** Send Telegram Photo

**Description:** Send a photo to a Telegram chat.

**ID:** `telegram_send_photo`

**Scope:** public

**Connection Required:**
- Name: Telegram Bot Connection
- Description: The Telegram bot connection to use for sending the photo.
- Required: Yes
- Category: telegram

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Telegram send photo node input.",
  "properties": {
    "chat_id": {
      "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
      "title": "Chat ID",
      "type": "string"
    },
    "photo": {
      "description": "Photo to send. Pass a file_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data.",
      "title": "Photo",
      "type": "string"
    },
    "business_connection_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier of the business connection on behalf of which the message will be sent",
      "title": "Business Connection ID"
    },
    "message_thread_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only",
      "title": "Message Thread ID"
    },
    "caption": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Photo caption (may also be used when resending photos by file_id), 0-1024 characters after entities parsing",
      "title": "Caption"
    },
    "parse_mode": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Mode for parsing entities in the photo caption. Can be 'Markdown', 'MarkdownV2', or 'HTML'",
      "title": "Parse Mode"
    },
    "caption_entities": {
      "anyOf": [
        {
          "items": {
            "additionalProperties": true,
            "type": "object"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "A JSON-serialized list of special entities that appear in the caption",
      "title": "Caption Entities",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "show_caption_above_media": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pass True, if the caption must be shown above the message media",
      "title": "Show Caption Above Media"
    },
    "has_spoiler": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pass True if the photo needs to be covered with a spoiler animation",
      "title": "Has Spoiler"
    },
    "disable_notification": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Sends the message silently. Users will receive a notification with no sound",
      "title": "Disable Notification"
    },
    "protect_content": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Protects the contents of the sent message from forwarding and saving",
      "title": "Protect Content"
    },
    "allow_paid_broadcast": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee",
      "title": "Allow Paid Broadcast"
    },
    "message_effect_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier of the message effect to be added to the message; for private chats only",
      "title": "Message Effect ID"
    },
    "reply_parameters": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Description of the message to reply to",
      "title": "Reply Parameters",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "reply_markup": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, etc.",
      "title": "Reply Markup",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "chat_id",
    "photo"
  ],
  "title": "TelegramSendPhotoInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a Telegram send photo.",
  "properties": {
    "sent_message": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The message that was sent.",
      "title": "Sent Message if successful",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "success": {
      "description": "Whether the photo was sent successfully.",
      "title": "Success",
      "type": "boolean"
    },
    "error": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The error that occurred if the photo was not sent successfully.",
      "title": "Error"
    }
  },
  "required": [
    "success"
  ],
  "title": "TelegramSendPhotoOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_telegram_send_photo",
  "title": "Send Telegram Photo",
  "description": "Send a photo to a Telegram chat....",
  "node_type_name": "telegram_send_photo",
  "input_config": {
    "chat_id": "example_value",
    "photo": "example_value",
    "business_connection_id": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 122. telegram_send_video

**Title:** Send Telegram Video

**Description:** Send a video to a Telegram chat.

**ID:** `telegram_send_video`

**Scope:** public

**Connection Required:**
- Name: Telegram Bot Connection
- Description: The Telegram bot connection to use for sending the video.
- Required: Yes
- Category: telegram

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Telegram send video node input.",
  "properties": {
    "chat_id": {
      "description": "Unique identifier for the target chat or username of the target channel (in the format @channelusername)",
      "title": "Chat ID",
      "type": "string"
    },
    "video": {
      "description": "Video to send. Pass a file_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data.",
      "title": "Video",
      "type": "string"
    },
    "business_connection_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier of the business connection on behalf of which the message will be sent",
      "title": "Business Connection ID"
    },
    "message_thread_id": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier for the target message thread (topic) of the forum; for forum supergroups only",
      "title": "Message Thread ID"
    },
    "duration": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Duration of sent video in seconds",
      "title": "Duration"
    },
    "width": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Video width",
      "title": "Width"
    },
    "height": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Video height",
      "title": "Height"
    },
    "thumbnail": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Thumbnail of the file sent; can be ignored if thumbnail generation for the file is supported server-side. The thumbnail should be in JPEG format and less than 200 kB in size. A thumbnail's width and height should not exceed 320.",
      "title": "Thumbnail"
    },
    "cover": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Cover for the video in the message. Pass a file_id to send a file that exists on the Telegram servers (recommended), pass an HTTP URL for Telegram to get a file from the Internet, or pass 'attach://<file_attach_name>' to upload a new one using multipart/form-data under <file_attach_name> name.",
      "title": "Cover"
    },
    "start_timestamp": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Start timestamp for the video in the message",
      "title": "Start Timestamp"
    },
    "caption": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Video caption (may also be used when resending videos by file_id), 0-1024 characters after entities parsing",
      "title": "Caption"
    },
    "parse_mode": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Mode for parsing entities in the video caption. Can be 'Markdown', 'MarkdownV2', or 'HTML'",
      "title": "Parse Mode"
    },
    "caption_entities": {
      "anyOf": [
        {
          "items": {
            "additionalProperties": true,
            "type": "object"
          },
          "type": "array"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "A JSON-serialized list of special entities that appear in the caption",
      "title": "Caption Entities",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "show_caption_above_media": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pass True, if the caption must be shown above the message media",
      "title": "Show Caption Above Media"
    },
    "has_spoiler": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pass True if the video needs to be covered with a spoiler animation",
      "title": "Has Spoiler"
    },
    "supports_streaming": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pass True if the uploaded video is suitable for streaming",
      "title": "Supports Streaming"
    },
    "disable_notification": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Sends the message silently. Users will receive a notification with no sound",
      "title": "Disable Notification"
    },
    "protect_content": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Protects the contents of the sent message from forwarding and saving",
      "title": "Protect Content"
    },
    "allow_paid_broadcast": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Pass True to allow up to 1000 messages per second, ignoring broadcasting limits for a fee",
      "title": "Allow Paid Broadcast"
    },
    "message_effect_id": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Unique identifier of the message effect to be added to the message; for private chats only",
      "title": "Message Effect ID"
    },
    "reply_parameters": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Description of the message to reply to",
      "title": "Reply Parameters",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "reply_markup": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Additional interface options. A JSON-serialized object for an inline keyboard, custom reply keyboard, etc.",
      "title": "Reply Markup",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "chat_id",
    "video"
  ],
  "title": "TelegramSendVideoInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Output from a Telegram send video.",
  "properties": {
    "sent_message": {
      "anyOf": [
        {
          "additionalProperties": true,
          "type": "object"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The message that was sent.",
      "title": "Sent Message if successful",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    },
    "success": {
      "description": "Whether the video was sent successfully.",
      "title": "Success",
      "type": "boolean"
    },
    "error": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The error that occurred if the video was not sent successfully.",
      "title": "Error"
    }
  },
  "required": [
    "success"
  ],
  "title": "TelegramSendVideoOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_telegram_send_video",
  "title": "Send Telegram Video",
  "description": "Send a video to a Telegram chat....",
  "node_type_name": "telegram_send_video",
  "input_config": {
    "chat_id": "example_value",
    "video": "example_value",
    "business_connection_id": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 123. text_extract

**Title:** Text Extract

**Description:** Extract text from various file formats including PDFs and images.

**ID:** `text_extract`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Text extract node input.",
  "properties": {
    "file": {
      "description": "File to extract text from",
      "title": "File",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "url",
        "value": null
      }
    }
  },
  "required": [
    "file"
  ],
  "title": "TextExtractNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Text extract node output.",
  "properties": {
    "text": {
      "description": "Extracted text from the file",
      "title": "Extracted text",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "text"
  ],
  "title": "TextExtractNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_text_extract",
  "title": "Text Extract",
  "description": "Extract text from various file formats including PDFs and im...",
  "node_type_name": "text_extract",
  "input_config": {
    "file": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 124. text_to_music

**Title:** Text to music

**Description:** Text to music node.

**ID:** `text_to_music`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Text To Music node input.",
  "properties": {
    "prompt": {
      "description": "Prompt for the music generation.",
      "title": "prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "instrumental": {
      "anyOf": [
        {
          "type": "boolean"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Create a song without lyrics.",
      "title": "Create a song without lyrics.",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "style": {
      "default": "pop",
      "description": "Music style. For example: pop, rock, jazz, etc.",
      "title": "Style",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "title": {
      "description": "Title of the song.",
      "title": "Title",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt",
    "title"
  ],
  "title": "TextToMusicNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Text to music node output.",
  "properties": {
    "audio_1": {
      "title": "First audio.",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "audio/mpeg"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "audio",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "lyric_1": {
      "title": "First audio lyrics.",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "audio_2": {
      "title": "Second audio.",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": [
          "audio/mpeg"
        ],
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "audio",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "lyric_2": {
      "title": "Second audio lyrics.",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "audio_1",
    "lyric_1",
    "audio_2",
    "lyric_2"
  ],
  "title": "TextToMusicNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_text_to_music",
  "title": "Text to music",
  "description": "Text to music node....",
  "node_type_name": "text_to_music",
  "input_config": {
    "prompt": "example_value",
    "instrumental": "example_value",
    "style": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 125. text_to_speech

**Title:** Text to speech

**Description:** Text to speech node.

**ID:** `text_to_speech`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "TextToSpeechVoices": {
      "description": "Text to speech voices.",
      "enum": [
        "Hoai_My_Neural",
        "Nam_Minh_Neural",
        "Ava_Neural",
        "Andrew_Neural",
        "Emma_Neural",
        "Brian_Neural",
        "Alloy",
        "Echo",
        "Fable",
        "Onyx",
        "Nova",
        "Shimmer",
        "en_US_Casual_K",
        "en_US_Journey_D",
        "en_US_Journey_F",
        "en_US_Journey_O",
        "en_US_Neural2_A",
        "en_US_Neural2_C",
        "en_US_Neural2_D",
        "en_US_Neural2_E",
        "en_US_Neural2_F",
        "en_US_Neural2_G",
        "en_US_Neural2_H",
        "en_US_Neural2_I",
        "en_US_Neural2_J",
        "en_US_News_K",
        "en_US_News_L",
        "en_US_News_N",
        "en_US_Polyglot_1",
        "en_US_Standard_A",
        "en_US_Standard_B",
        "en_US_Standard_C",
        "en_US_Standard_D",
        "en_US_Standard_E",
        "en_US_Standard_F",
        "en_US_Standard_G",
        "en_US_Standard_H",
        "en_US_Standard_I",
        "en_US_Standard_J",
        "en_US_Studio_O",
        "en_US_Studio_Q",
        "en_US_Wavenet_A",
        "en_US_Wavenet_B",
        "en_US_Wavenet_C",
        "en_US_Wavenet_D",
        "en_US_Wavenet_E",
        "en_US_Wavenet_F",
        "en_US_Wavenet-G",
        "en_US_Wavenet-H",
        "en_US_Wavenet-I",
        "en_US_Wavenet-J",
        "vi_VN_Neural2_A",
        "vi_VN_Neural2_D",
        "vi_VN_Standard_A",
        "vi_VN_Standard_B",
        "vi_VN_Standard_C",
        "vi_VN_Standard_D",
        "vi_VN_Wavenet_A",
        "vi_VN_Wavenet_B",
        "vi_VN_Wavenet_C",
        "vi_VN_Wavenet_D",
        "Danielle",
        "Gregory",
        "Ivy",
        "Joanna",
        "Kendra",
        "Kimberly",
        "Salli",
        "Joey",
        "Justin",
        "Kevin",
        "Matthew",
        "Ruth",
        "Stephen"
      ],
      "title": "TextToSpeechVoices",
      "type": "string"
    }
  },
  "description": "Text To speech node input.",
  "properties": {
    "voice": {
      "$ref": "#/$defs/TextToSpeechVoices",
      "description": "Voice to use for text to speech",
      "enum_options": {
        "Alloy": {
          "name": "Alloy",
          "provider": "OpenAI",
          "voice_id": "alloy"
        },
        "Andrew_Neural": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Andrew Neural",
          "provider": "Azure",
          "voice_id": "en-US-AndrewNeural"
        },
        "Ava_Neural": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Ava Neural",
          "provider": "Azure",
          "voice_id": "en-US-AvaNeural"
        },
        "Brian_Neural": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Brian Neural",
          "provider": "Azure",
          "voice_id": "en-US-BrianNeural"
        },
        "Danielle": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Danielle",
          "provider": "AWSPolly",
          "voice_id": "Danielle"
        },
        "Echo": {
          "name": "Echo",
          "provider": "OpenAI",
          "voice_id": "echo"
        },
        "Emma_Neural": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Emma Neural",
          "provider": "Azure",
          "voice_id": "en-US-EmmaNeural"
        },
        "Fable": {
          "name": "Fable",
          "provider": "OpenAI",
          "voice_id": "fable"
        },
        "Gregory": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Gregory",
          "provider": "AWSPolly",
          "voice_id": "Gregory"
        },
        "Hoai_My_Neural": {
          "gender": "female",
          "languages": [
            "vi"
          ],
          "name": "Hoai My Neural",
          "provider": "Azure",
          "voice_id": "vi-VN-HoaiMyNeural"
        },
        "Ivy": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Ivy",
          "provider": "AWSPolly",
          "voice_id": "Ivy"
        },
        "Joanna": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Joanna",
          "provider": "AWSPolly",
          "voice_id": "Joanna"
        },
        "Joey": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Joey",
          "provider": "AWSPolly",
          "voice_id": "Joey"
        },
        "Justin": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Justin",
          "provider": "AWSPolly",
          "voice_id": "Justin"
        },
        "Kendra": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Kendra",
          "provider": "AWSPolly",
          "voice_id": "Kendra"
        },
        "Kevin": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Kevin",
          "provider": "AWSPolly",
          "voice_id": "Kevin"
        },
        "Kimberly": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Kimberly",
          "provider": "AWSPolly",
          "voice_id": "Kimberly"
        },
        "Matthew": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Matthew",
          "provider": "AWSPolly",
          "voice_id": "Matthew"
        },
        "Nam_Minh_Neural": {
          "gender": "male",
          "languages": [
            "vi"
          ],
          "name": "Nam Minh Neural",
          "provider": "Azure",
          "voice_id": "vi-VN-NamMinhNeural"
        },
        "Nova": {
          "name": "Nova",
          "provider": "OpenAI",
          "voice_id": "nova"
        },
        "Onyx": {
          "name": "Onyx",
          "provider": "OpenAI",
          "voice_id": "onyx"
        },
        "Ruth": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Ruth",
          "provider": "AWSPolly",
          "voice_id": "Ruth"
        },
        "Salli": {
          "gender": "female",
          "languages": [
            "en"
          ],
          "name": "Salli",
          "provider": "AWSPolly",
          "voice_id": "Salli"
        },
        "Shimmer": {
          "name": "Shimmer",
          "provider": "OpenAI",
          "voice_id": "shimmer"
        },
        "Stephen": {
          "gender": "male",
          "languages": [
            "en"
          ],
          "name": "Stephen",
          "provider": "AWSPolly",
          "voice_id": "Stephen"
        },
        "en_US_Casual_K": {
          "languages": [
            "en"
          ],
          "name": "en-US-Casual-K",
          "provider": "Google",
          "voice_id": "en-US-Casual-K"
        },
        "en_US_Journey_D": {
          "languages": [
            "en"
          ],
          "name": "en-US-Journey-D",
          "provider": "Google",
          "voice_id": "en-US-Journey-D"
        },
        "en_US_Journey_F": {
          "languages": [
            "en"
          ],
          "name": "en-US-Journey-F",
          "provider": "Google",
          "voice_id": "en-US-Journey-F"
        },
        "en_US_Journey_O": {
          "languages": [
            "en"
          ],
          "name": "en-US-Journey-O",
          "provider": "Google",
          "voice_id": "en-US-Journey-O"
        },
        "en_US_Neural2_A": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-A",
          "provider": "Google",
          "voice_id": "en-US-Neural2-A"
        },
        "en_US_Neural2_C": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-C",
          "provider": "Google",
          "voice_id": "en-US-Neural2-C"
        },
        "en_US_Neural2_D": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-D",
          "provider": "Google",
          "voice_id": "en-US-Neural2-D"
        },
        "en_US_Neural2_E": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-E",
          "provider": "Google",
          "voice_id": "en-US-Neural2-E"
        },
        "en_US_Neural2_F": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-F",
          "provider": "Google",
          "voice_id": "en-US-Neural2-F"
        },
        "en_US_Neural2_G": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-G",
          "provider": "Google",
          "voice_id": "en-US-Neural2-G"
        },
        "en_US_Neural2_H": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-H",
          "provider": "Google",
          "voice_id": "en-US-Neural2-H"
        },
        "en_US_Neural2_I": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-I",
          "provider": "Google",
          "voice_id": "en-US-Neural2-I"
        },
        "en_US_Neural2_J": {
          "languages": [
            "en"
          ],
          "name": "en-US-Neural2-J",
          "provider": "Google",
          "voice_id": "en-US-Neural2-J"
        },
        "en_US_News_K": {
          "languages": [
            "en"
          ],
          "name": "en-US-News-K",
          "provider": "Google",
          "voice_id": "en-US-News-K"
        },
        "en_US_News_L": {
          "languages": [
            "en"
          ],
          "name": "en-US-News-L",
          "provider": "Google",
          "voice_id": "en-US-News-L"
        },
        "en_US_News_N": {
          "languages": [
            "en"
          ],
          "name": "en-US-News-N",
          "provider": "Google",
          "voice_id": "en-US-News-N"
        },
        "en_US_Polyglot_1": {
          "languages": [
            "en"
          ],
          "name": "en-US-Polyglot-1",
          "provider": "Google",
          "voice_id": "en-US-Polyglot-1"
        },
        "en_US_Standard_A": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-A",
          "provider": "Google",
          "voice_id": "en-US-Standard-A"
        },
        "en_US_Standard_B": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-B",
          "provider": "Google",
          "voice_id": "en-US-Standard-B"
        },
        "en_US_Standard_C": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-C",
          "provider": "Google",
          "voice_id": "en-US-Standard-C"
        },
        "en_US_Standard_D": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-D",
          "provider": "Google",
          "voice_id": "en-US-Standard-D"
        },
        "en_US_Standard_E": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-E",
          "provider": "Google",
          "voice_id": "en-US-Standard-E"
        },
        "en_US_Standard_F": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-F",
          "provider": "Google",
          "voice_id": "en-US-Standard-F"
        },
        "en_US_Standard_G": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-G",
          "provider": "Google",
          "voice_id": "en-US-Standard-G"
        },
        "en_US_Standard_H": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-H",
          "provider": "Google",
          "voice_id": "en-US-Standard-H"
        },
        "en_US_Standard_I": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-I",
          "provider": "Google",
          "voice_id": "en-US-Standard-I"
        },
        "en_US_Standard_J": {
          "languages": [
            "en"
          ],
          "name": "en-US-Standard-J",
          "provider": "Google",
          "voice_id": "en-US-Standard-J"
        },
        "en_US_Studio_O": {
          "languages": [
            "en"
          ],
          "name": "en-US-Studio-O",
          "provider": "Google",
          "voice_id": "en-US-Studio-O"
        },
        "en_US_Studio_Q": {
          "languages": [
            "en"
          ],
          "name": "en-US-Studio-Q",
          "provider": "Google",
          "voice_id": "en-US-Studio-Q"
        },
        "en_US_Wavenet-G": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-G",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-G"
        },
        "en_US_Wavenet-H": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-H",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-H"
        },
        "en_US_Wavenet-I": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-I",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-I"
        },
        "en_US_Wavenet-J": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-J",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-J"
        },
        "en_US_Wavenet_A": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-A",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-A"
        },
        "en_US_Wavenet_B": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-B",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-B"
        },
        "en_US_Wavenet_C": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-C",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-C"
        },
        "en_US_Wavenet_D": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-D",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-D"
        },
        "en_US_Wavenet_E": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-E",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-E"
        },
        "en_US_Wavenet_F": {
          "languages": [
            "en"
          ],
          "name": "en-US-Wavenet-F",
          "provider": "Google",
          "voice_id": "en-US-Wavenet-F"
        },
        "vi_VN_Neural2_A": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Neural2-A",
          "provider": "Google",
          "voice_id": "vi-VN-Neural2-A"
        },
        "vi_VN_Neural2_D": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Neural2-D",
          "provider": "Google",
          "voice_id": "vi-VN-Neural2-D"
        },
        "vi_VN_Standard_A": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Standard-A",
          "provider": "Google",
          "voice_id": "vi-VN-Standard-A"
        },
        "vi_VN_Standard_B": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Standard-B",
          "provider": "Google",
          "voice_id": "vi-VN-Standard-B"
        },
        "vi_VN_Standard_C": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Standard-C",
          "provider": "Google",
          "voice_id": "vi-VN-Standard-C"
        },
        "vi_VN_Standard_D": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Standard-D",
          "provider": "Google",
          "voice_id": "vi-VN-Standard-D"
        },
        "vi_VN_Wavenet_A": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Wavenet-A",
          "provider": "Google",
          "voice_id": "vi-VN-Wavenet-A"
        },
        "vi_VN_Wavenet_B": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Wavenet-B",
          "provider": "Google",
          "voice_id": "vi-VN-Wavenet-B"
        },
        "vi_VN_Wavenet_C": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Wavenet-C",
          "provider": "Google",
          "voice_id": "vi-VN-Wavenet-C"
        },
        "vi_VN_Wavenet_D": {
          "languages": [
            "vi"
          ],
          "name": "vi-VN-Wavenet-D",
          "provider": "Google",
          "voice_id": "vi-VN-Wavenet-D"
        }
      },
      "title": "Voice",
      "ui_metadata": {}
    },
    "text": {
      "description": "Text to convert to speech",
      "title": "Text",
      "type": "string",
      "ui_metadata": {
        "order": 1,
        "type": "long_text"
      }
    }
  },
  "required": [
    "voice",
    "text"
  ],
  "title": "TextToSpeechNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Call other workflow node output.",
  "properties": {
    "voice_url": {
      "title": "Audio URL",
      "type": "string",
      "ui_metadata": {
        "type": "media_url"
      }
    },
    "caption_url": {
      "title": "Caption URL",
      "type": "string",
      "ui_metadata": {
        "order": 1,
        "type": "url"
      }
    },
    "duration": {
      "title": "Duration",
      "type": "number",
      "ui_metadata": {
        "order": 2
      }
    }
  },
  "required": [
    "voice_url",
    "caption_url",
    "duration"
  ],
  "title": "TextToSpeechNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_text_to_speech",
  "title": "Text to speech",
  "description": "Text to speech node....",
  "node_type_name": "text_to_speech",
  "input_config": {
    "voice": "example_value",
    "text": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 126. text_to_speech_custom

**Title:** Text to speech custom

**Description:** Text to speech custom node.

**ID:** `text_to_speech_custom`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Text To speech node input.",
  "properties": {
    "provider": {
      "default": "replicate",
      "description": "Provider",
      "enum": [
        "replicate",
        "baseten"
      ],
      "title": "Provider",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "text": {
      "description": "Text to convert to speech",
      "title": "Text",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "description": {
      "default": "A male speaker with a low-pitched voice delivering his words at a fast pace in a small, confined space with a very clear audio and an animated tone.",
      "description": "Provide description of the output audio",
      "title": "Provide description of the output audio",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "text"
  ],
  "title": "TextToSpeechCustomNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Call other workflow node output.",
  "properties": {
    "voice_url": {
      "title": "Audio URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "voice_url"
  ],
  "title": "TextToSpeechCustomNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_text_to_speech_custom",
  "title": "Text to speech custom",
  "description": "Text to speech custom node....",
  "node_type_name": "text_to_speech_custom",
  "input_config": {
    "provider": "example_value",
    "text": "example_value",
    "description": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 127. text_to_speech_voice_clone

**Title:** Text to speech with voice clone

**Description:** Convert text to speech with voice cloning across 32 languages.

**ID:** `text_to_speech_voice_clone`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "description": "Text To speech with voice clone node input.",
  "properties": {
    "voice_id": {
      "description": "Voice ID",
      "title": "Voice ID",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "text": {
      "description": "Text",
      "title": "Text",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "file_name": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "description": "File name",
      "title": "File name",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    }
  },
  "required": [
    "voice_id",
    "text",
    "file_name"
  ],
  "title": "TextToSpeechVoiceCloneNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Text to speech voice clone node output.",
  "properties": {
    "voice_url": {
      "title": "Audio URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "voice_url"
  ],
  "title": "TextToSpeechVoiceCloneNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_text_to_speech_voice_clone",
  "title": "Text to speech with voice clone",
  "description": "Convert text to speech with voice cloning across 32 language...",
  "node_type_name": "text_to_speech_voice_clone",
  "input_config": {
    "voice_id": "example_value",
    "text": "example_value",
    "file_name": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 128. text_to_video

**Title:** Text to video

**Description:** Text to video

**ID:** `text_to_video`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "description": "Text to video node input.",
  "properties": {
    "model": {
      "default": "Pixel S",
      "description": "Model",
      "enum": [
        "Pixel S",
        "Pixel M",
        "Pixel L"
      ],
      "title": "Model",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "prompt": {
      "description": "Prompt",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "negative_prompt": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "Negative prompt",
      "title": "Negative prompt",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "steps": {
      "default": 30,
      "description": "Steps",
      "maximum": 50,
      "minimum": 1,
      "title": "Steps",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "guidance_scale": {
      "default": 7,
      "description": "Guidance scale",
      "maximum": 10,
      "minimum": 2,
      "title": "Guidance scale",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 4,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "size": {
      "default": "Landscape HD (16:9)",
      "description": "Size (Only for Pixel M)",
      "enum": [
        "Square HD (1:1)",
        "Square FullHD (1:1)",
        "Portrait HD (3:4)",
        "Portrait FullHD (3:4)",
        "Portrait HD (9:16)",
        "Portrait FullHD (9:16)",
        "Landscape HD (4:3)",
        "Landscape FullHD (4:3)",
        "Landscape HD (16:9)",
        "Landscape FullHD (16:9)"
      ],
      "title": "Size (Only for Pixel M)",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 5,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "fps": {
      "default": 30,
      "description": "FPS (Only for Pixel M)",
      "title": "FPS (Only for Pixel M)",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 6,
        "password": false,
        "ref_image": null,
        "type": "short_text",
        "value": null
      }
    },
    "duration": {
      "default": 2,
      "description": "Duration in seconds (Only for Pixel L)",
      "title": "Duration in seconds (Only for Pixel L)",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 7,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt"
  ],
  "title": "TextToVideoNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Text to video node output.",
  "properties": {
    "video_url": {
      "description": "Video URL",
      "title": "Video URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video_url"
  ],
  "title": "TextToVideoNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_text_to_video",
  "title": "Text to video",
  "description": "Text to video...",
  "node_type_name": "text_to_video",
  "input_config": {
    "model": "example_value",
    "prompt": "example_value",
    "negative_prompt": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 129. tiktok_upload_video

**Title:** Upload Video to TikTok

**Description:** Upload a video to TikTok

**ID:** `tiktok_upload_video`

**Scope:** public

**Connection Required:**
- Name: TikTok Connection
- Description: The TikTok connection to use to call the TikTok API.
- Required: Yes
- Category: tiktok

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Input for Tiktok Upload Video node.",
  "properties": {
    "video_url": {
      "description": "The URL to the video to upload.",
      "title": "Video URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "url",
        "value": null
      }
    }
  },
  "required": [
    "video_url"
  ],
  "title": "TiktokUploadVideoNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Node output for Tiktok Upload Video node.",
  "properties": {
    "publish_id": {
      "description": "The publish ID of the Tiktok video.",
      "title": "Publish ID",
      "type": "string"
    }
  },
  "required": [
    "publish_id"
  ],
  "title": "TiktokUploadVideoNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_tiktok_upload_video",
  "title": "Upload Video to TikTok",
  "description": "Upload a video to TikTok...",
  "node_type_name": "tiktok_upload_video",
  "input_config": {
    "video_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 130. tiktok_user_posts_scrapper

**Title:** TikTok user posts scrapper

**Description:** Scrape TikTok posts for a user.

**ID:** `tiktok_user_posts_scrapper`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "TikTok user posts scrapper node input.",
  "properties": {
    "user_name": {
      "description": "The username of the TikTok user.",
      "title": "TikTok username",
      "type": "string"
    },
    "max_items": {
      "default": 10,
      "description": "The maximum number of posts to scrape (1-100).",
      "maximum": 100,
      "minimum": 1,
      "title": "Maximum number of posts",
      "type": "integer"
    }
  },
  "required": [
    "user_name"
  ],
  "title": "TikTokUserPostsScrapperNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "TikTokPostData": {
      "description": "TikTok post data.",
      "properties": {
        "id": {
          "description": "The ID of the TikTok post.",
          "title": "Id",
          "type": "string"
        },
        "title": {
          "description": "The title or caption of the TikTok post.",
          "title": "Title",
          "type": "string"
        },
        "views": {
          "description": "The number of views for the post.",
          "title": "Views",
          "type": "integer"
        },
        "likes": {
          "description": "The number of likes for the post.",
          "title": "Likes",
          "type": "integer"
        },
        "comments": {
          "description": "The number of comments on the post.",
          "title": "Comments",
          "type": "integer"
        },
        "shares": {
          "description": "The number of shares for the post.",
          "title": "Shares",
          "type": "integer"
        },
        "bookmarks": {
          "description": "The number of bookmarks for the post.",
          "title": "Bookmarks",
          "type": "integer"
        },
        "song_title": {
          "description": "The title of the song used in the post.",
          "title": "Song Title",
          "type": "string"
        },
        "song_artist": {
          "description": "The artist of the song used in the post.",
          "title": "Song Artist",
          "type": "string"
        },
        "song_album": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "description": "The album of the song used in the post.",
          "title": "Song Album"
        }
      },
      "required": [
        "id",
        "title",
        "views",
        "likes",
        "comments",
        "shares",
        "bookmarks",
        "song_title",
        "song_artist"
      ],
      "title": "TikTokPostData",
      "type": "object"
    }
  },
  "description": "TikTok user posts scrapper node output.",
  "properties": {
    "posts": {
      "description": "The list of TikTok posts for the user.",
      "items": {
        "$ref": "#/$defs/TikTokPostData"
      },
      "title": "Posts",
      "type": "array"
    }
  },
  "required": [
    "posts"
  ],
  "title": "TikTokUserPostsScrapperNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_tiktok_user_posts_scrapper",
  "title": "TikTok user posts scrapper",
  "description": "Scrape TikTok posts for a user....",
  "node_type_name": "tiktok_user_posts_scrapper",
  "input_config": {
    "user_name": "example_value",
    "max_items": 0
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 131. tiktok_user_scrapper

**Title:** TikTok profile scrapper

**Description:** Scrape a TikTok user's profile.

**ID:** `tiktok_user_scrapper`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "TikTok profile scrapper node input.",
  "properties": {
    "username": {
      "description": "The username of the TikTok user.",
      "title": "TikTok username",
      "type": "string"
    }
  },
  "required": [
    "username"
  ],
  "title": "TikTokUserScrapperNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "TikTok profile scrapper node output.",
  "properties": {
    "id": {
      "description": "The ID of the TikTok user.",
      "title": "ID",
      "type": "string"
    },
    "url": {
      "description": "The URL of the TikTok user's profile.",
      "title": "URL",
      "type": "string"
    },
    "username": {
      "description": "The username of the TikTok user.",
      "title": "Username",
      "type": "string"
    },
    "nickname": {
      "description": "The nickname of the TikTok user.",
      "title": "Nickname",
      "type": "string"
    },
    "bio": {
      "description": "The biography of the TikTok user.",
      "title": "Biography",
      "type": "string"
    },
    "followers": {
      "description": "The number of followers of the TikTok user.",
      "title": "Followers count",
      "type": "integer"
    },
    "following": {
      "description": "The number of accounts the TikTok user is following.",
      "title": "Following count",
      "type": "integer"
    },
    "likes": {
      "description": "The total number of likes received by the TikTok user.",
      "title": "Likes count",
      "type": "integer"
    },
    "videos": {
      "description": "The number of videos posted by the TikTok user.",
      "title": "Videos count",
      "type": "integer"
    },
    "verified": {
      "description": "Whether the TikTok user is verified.",
      "title": "Verified",
      "type": "boolean"
    },
    "avatar": {
      "description": "The URL of the TikTok user's avatar.",
      "title": "Avatar URL",
      "type": "string"
    }
  },
  "required": [
    "id",
    "url",
    "username",
    "nickname",
    "bio",
    "followers",
    "following",
    "likes",
    "videos",
    "verified",
    "avatar"
  ],
  "title": "TikTokUserScrapperNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_tiktok_user_scrapper",
  "title": "TikTok profile scrapper",
  "description": "Scrape a TikTok user's profile....",
  "node_type_name": "tiktok_user_scrapper",
  "input_config": {
    "username": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 132. update_agent_task

**Title:** Update Agent Task

**Description:** Update an existing agent task

**ID:** `update_agent_task`

**Scope:** public

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "$defs": {
    "TaskPriority": {
      "description": "The priority of the task.",
      "enum": [
        "low",
        "medium",
        "high"
      ],
      "title": "TaskPriority",
      "type": "string"
    },
    "TaskStatus": {
      "description": "The status of the task.",
      "enum": [
        "pending",
        "in_progress",
        "completed",
        "cancelled",
        "blocked",
        "deferred"
      ],
      "title": "TaskStatus",
      "type": "string"
    }
  },
  "description": "Update Agent Task node input.",
  "properties": {
    "task_id": {
      "description": "ID of the task to update",
      "title": "Task ID",
      "type": "string"
    },
    "title": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "New title for the task",
      "title": "Task Title"
    },
    "description": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "New description for the task",
      "title": "Task Description"
    },
    "status": {
      "anyOf": [
        {
          "$ref": "#/$defs/TaskStatus"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "New status for the task",
      "title": "Task Status"
    },
    "priority": {
      "anyOf": [
        {
          "$ref": "#/$defs/TaskPriority"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "New priority for the task",
      "title": "Task Priority"
    },
    "details": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "New details for the task",
      "title": "Task Details"
    }
  },
  "required": [
    "task_id"
  ],
  "title": "UpdateAgentTaskNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "$defs": {
    "AgentTask": {
      "description": "DTO for agent task models.",
      "properties": {
        "id": {
          "description": "ULID identifier for the task",
          "title": "Id",
          "type": "string"
        },
        "workspace_id": {
          "format": "uuid",
          "title": "Workspace Id",
          "type": "string"
        },
        "agent_id": {
          "anyOf": [
            {
              "format": "uuid",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Agent Id"
        },
        "thread_id": {
          "anyOf": [
            {
              "format": "uuid",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Thread Id"
        },
        "parent_id": {
          "anyOf": [
            {
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Parent Id"
        },
        "title": {
          "title": "Title",
          "type": "string"
        },
        "description": {
          "title": "Description",
          "type": "string"
        },
        "priority": {
          "$ref": "#/$defs/TaskPriority",
          "default": "medium"
        },
        "status": {
          "$ref": "#/$defs/TaskStatus",
          "default": "pending"
        },
        "details": {
          "default": "",
          "title": "Details",
          "type": "string"
        },
        "result": {
          "default": "",
          "title": "Result",
          "type": "string"
        },
        "created_at": {
          "format": "date-time",
          "title": "Created At",
          "type": "string"
        },
        "updated_at": {
          "anyOf": [
            {
              "format": "date-time",
              "type": "string"
            },
            {
              "type": "null"
            }
          ],
          "default": null,
          "title": "Updated At"
        }
      },
      "required": [
        "id",
        "workspace_id",
        "title",
        "description"
      ],
      "title": "AgentTask",
      "type": "object"
    },
    "TaskPriority": {
      "description": "The priority of the task.",
      "enum": [
        "low",
        "medium",
        "high"
      ],
      "title": "TaskPriority",
      "type": "string"
    },
    "TaskStatus": {
      "description": "The status of the task.",
      "enum": [
        "pending",
        "in_progress",
        "completed",
        "cancelled",
        "blocked",
        "deferred"
      ],
      "title": "TaskStatus",
      "type": "string"
    }
  },
  "description": "Update Agent Task node output.",
  "properties": {
    "task": {
      "anyOf": [
        {
          "$ref": "#/$defs/AgentTask"
        },
        {
          "type": "null"
        }
      ],
      "default": null,
      "description": "The updated agent task",
      "title": "Updated Task"
    }
  },
  "title": "UpdateAgentTaskNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_update_agent_task",
  "title": "Update Agent Task",
  "description": "Update an existing agent task...",
  "node_type_name": "update_agent_task",
  "input_config": {
    "task_id": "example_value",
    "title": "example_value",
    "description": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 133. url_context

**Title:** Google URL Context

**Description:** The URL context tool lets you provide additional context to the models in the form of URLs. By including URLs in your request, the model will access the content from those pages to inform and enhance its response.

**ID:** `url_context`

**Scope:** public

**Categories:** popular

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "$defs": {
    "URLContextModel": {
      "enum": [
        "Gemini 2.5 Pro",
        "Gemini 2.5 Flash"
      ],
      "title": "URLContextModel",
      "type": "string"
    }
  },
  "description": "URLContext node input.",
  "properties": {
    "model": {
      "$ref": "#/$defs/URLContextModel",
      "default": "Gemini 2.5 Flash",
      "description": "The model to use for the URL context. Default is Gemini 2.5 Flash",
      "title": "Model",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "prompt": {
      "description": "The prompt to use for the URL context. Include your question and the URL you want the model to analyze, for example: Summarize this document: https://ai.google.dev/gemini-api/docs/models",
      "title": "Prompt",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "include_google_search": {
      "default": false,
      "description": "When Grounding with Google Search are enabled, the model can use its search capabilities to find relevant information online and then use the URL context tool to get a more in-depth understanding of the pages it finds.",
      "title": "Include Google Search",
      "type": "boolean",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "prompt"
  ],
  "title": "URLContextNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "URLContext node output.",
  "properties": {
    "result": {
      "description": "The result from the URL context.",
      "title": "Result",
      "type": "string"
    }
  },
  "required": [
    "result"
  ],
  "title": "URLContextNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_url_context",
  "title": "Google URL Context",
  "description": "The URL context tool lets you provide additional context to ...",
  "node_type_name": "url_context",
  "input_config": {
    "model": "example_value",
    "prompt": "example_value",
    "include_google_search": false
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 134. url_to_markdown

**Title:** URL to Markdown

**Description:** Convert a URL to markdown

**ID:** `url_to_markdown`

**Scope:** public

**Categories:** popular

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Url to markdown node input.",
  "properties": {
    "url": {
      "description": "It can be a url to a PDF/HTML/DOCX/DOC/XLSX/XLS/PPTX/PPT/TXT file or a website url",
      "title": "URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "url",
        "value": null
      }
    }
  },
  "required": [
    "url"
  ],
  "title": "UrlToMarkdownInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Url to markdown node output.",
  "properties": {
    "markdown": {
      "title": "Markdown",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "markdown",
        "value": null
      }
    }
  },
  "required": [
    "markdown"
  ],
  "title": "UrlToMarkdownOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_url_to_markdown",
  "title": "URL to Markdown",
  "description": "Convert a URL to markdown...",
  "node_type_name": "url_to_markdown",
  "input_config": {
    "url": "example_value"
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 135. video_faceswap

**Title:** Video faceswap

**Description:** Video faceswap

**ID:** `video_faceswap`

**Scope:** exclusive

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.1

**Input Schema:**

```json
{
  "description": "Video faceswap node input.",
  "properties": {
    "source_image_url": {
      "description": "Source image URL",
      "title": "Source image URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "video_input_url": {
      "description": "Video input URL",
      "title": "Video input URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "source_image_url",
    "video_input_url"
  ],
  "title": "VideoFaceswapNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Video faceswap node output.",
  "properties": {
    "video_url": {
      "description": "Video URL",
      "title": "Video URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video_url"
  ],
  "title": "VideoFaceswapNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_video_faceswap",
  "title": "Video faceswap",
  "description": "Video faceswap...",
  "node_type_name": "video_faceswap",
  "input_config": {
    "source_image_url": "example_value",
    "video_input_url": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 136. video_faceswap_pro

**Title:** Video Faceswap Pro

**Description:** Advanced face swapping for videos with support for multiple faces and highest quality output

**ID:** `video_faceswap_pro`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.5

**Input Schema:**

```json
{
  "description": "Video faceswap pro node input.",
  "properties": {
    "source_image_urls": {
      "description": "Source image URLs",
      "items": {
        "type": "string"
      },
      "title": "Source image URLs",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "image",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "video_input_url": {
      "description": "Video input URL",
      "title": "Video input URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    },
    "face_detect_info": {
      "additionalProperties": true,
      "description": "Face detection information containing crop_arr, crop_landmarks, and face_index data",
      "title": "Face detect info",
      "type": "object",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": "json",
        "value": null
      }
    }
  },
  "required": [
    "source_image_urls",
    "video_input_url",
    "face_detect_info"
  ],
  "title": "VideoFaceswapProNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Video faceswap pro node output.",
  "properties": {
    "video_url": {
      "description": "Video URL",
      "title": "Video URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": "video",
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "media_url",
        "value": null
      }
    }
  },
  "required": [
    "video_url"
  ],
  "title": "VideoFaceswapProNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_video_faceswap_pro",
  "title": "Video Faceswap Pro",
  "description": "Advanced face swapping for videos with support for multiple ...",
  "node_type_name": "video_faceswap_pro",
  "input_config": {
    "source_image_urls": [],
    "video_input_url": "example_value",
    "face_detect_info": {}
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 137. web_scraping

**Title:** Web Scraping

**Description:** Scrape content from a web page

**ID:** `web_scraping`

**Scope:** public

**Categories:** popular

**Connection Required:** No

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Web scraping node input.",
  "properties": {
    "web_url": {
      "description": "Web URL to scrape.",
      "title": "Web URL",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    },
    "scraping_type": {
      "default": "Text",
      "description": "Type of scraping to perform.",
      "enum": [
        "Html",
        "Text"
      ],
      "title": "Scraping Type",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "max_tokens": {
      "default": 10000,
      "description": "The maximum number of tokens to scrape.",
      "maximum": 32000,
      "minimum": 1,
      "title": "Max Tokens",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "tags_to_extract": {
      "default": [
        "span"
      ],
      "description": "List of tags to extract from the HTML.",
      "items": {
        "type": "string"
      },
      "title": "Tags to Extract",
      "type": "array",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 3,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    }
  },
  "required": [
    "web_url"
  ],
  "title": "WebScrapingNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Web scraping node output.",
  "properties": {
    "scraped_content": {
      "description": "The extracted content from the web URLs.",
      "title": "Extracted Content",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 0,
        "password": false,
        "ref_image": null,
        "type": "long_text",
        "value": null
      }
    }
  },
  "required": [
    "scraped_content"
  ],
  "title": "WebScrapingNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_web_scraping",
  "title": "Web Scraping",
  "description": "Scrape content from a web page...",
  "node_type_name": "web_scraping",
  "input_config": {
    "web_url": "example_value",
    "scraping_type": "example_value",
    "max_tokens": 0
  },
  "output_mapping": {},
  "connection": ""
}
```

---

## 138. web_scraping_apify

**Title:** Web Scraping using Apify

**Description:** Web Scraping using Apify

**ID:** `web_scraping_apify`

**Scope:** public

**Connection Required:**
- Name: PixelML Connection
- Description: The PixelML connection to call PixelML API.
- Required: Yes
- Category: pixelml

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Web scraping node input.",
  "properties": {
    "web_urls": {
      "description": "List of Web URL to scrape.",
      "items": {
        "type": "string"
      },
      "maxItems": 10,
      "minItems": 1,
      "title": "Web URLs",
      "type": "array"
    },
    "crawler_type": {
      "default": "playwright:firefox",
      "description": "Crawling engine to use. Default is playwright:firefox.",
      "enum": [
        "playwright:firefox",
        "playwright:chrome",
        "playwright:adaptive",
        "cheerio",
        "jsdom"
      ],
      "title": "Crawling Engine",
      "type": "string",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 1,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "max_crawl_pages": {
      "default": 10,
      "description": "The maximum number pages to crawl. It includes the start URLs, pagination pages, pages with no content, etc. The crawler will automatically finish after reaching this number. This setting is useful to prevent accidental crawler runaway.",
      "maximum": 100,
      "minimum": 1,
      "title": "Max Crawl Pages",
      "type": "integer"
    },
    "max_crawl_depth": {
      "default": 20,
      "description": "The maximum number of links starting from the start URL that the crawler will recursively follow. The start URLs have depth 0, the pages linked directly from the start URLs have depth 1, and so on.\nThis setting is useful to prevent accidental crawler runaway. By setting it to 0, the Actor will only crawl the Start URLs.",
      "maximum": 50,
      "minimum": 1,
      "title": "Max Crawl Depth",
      "type": "integer"
    },
    "max_tokens_per_url": {
      "default": 32000,
      "description": "Maximum number of tokens to scrape per URL. Default is 10000.",
      "maximum": 64000,
      "minimum": 1,
      "title": "Max Tokens per URL",
      "type": "integer",
      "ui_metadata": {
        "allowed_mime_types": null,
        "depends_on": null,
        "max_height": null,
        "max_size": null,
        "max_width": null,
        "media_type": null,
        "min_height": null,
        "min_size": null,
        "min_width": null,
        "options": null,
        "order": 2,
        "password": false,
        "ref_image": null,
        "type": null,
        "value": null
      }
    },
    "save_markdown": {
      "default": true,
      "description": "If enabled, the crawler converts the transformed HTML of all pages found to Markdown, and stores it under the markdown field in the output dataset.",
      "title": "Save Markdown",
      "type": "boolean"
    },
    "save_html_as_file": {
      "default": false,
      "description": "If enabled, the crawler converts the transformed HTML of all pages found to Markdown, and stores it under the markdown field in the output dataset.",
      "title": "Save HTML as File",
      "type": "boolean"
    }
  },
  "required": [
    "web_urls"
  ],
  "title": "ApifyWebScrapingNodeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Web scraping node output.",
  "properties": {
    "scraped_contents": {
      "description": "The extracted content from the web URLs.",
      "items": {
        "type": "string"
      },
      "title": "List of extracted content",
      "type": "array"
    }
  },
  "required": [
    "scraped_contents"
  ],
  "title": "ApifyWebScrapingNodeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_web_scraping_apify",
  "title": "Web Scraping using Apify",
  "description": "Web Scraping using Apify...",
  "node_type_name": "web_scraping_apify",
  "input_config": {
    "web_urls": [],
    "crawler_type": "example_value",
    "max_crawl_pages": 0
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

## 139. youtube_upload_video

**Title:** Upload Video to YouTube

**Description:** Upload a video to YouTube using the YouTube Data API

**ID:** `youtube_upload_video`

**Scope:** public

**Connection Required:**
- Name: YouTube Connection
- Description: The YouTube connection to use to call the YouTube API.
- Required: Yes
- Category: youtube

**Cost:**
- Credits: 4
- PML Cost: $0.01

**Input Schema:**

```json
{
  "description": "Upload video to YouTube node input.",
  "properties": {
    "file_path": {
      "description": "Path to the video file to upload",
      "title": "Video File Path",
      "type": "string"
    },
    "title": {
      "default": "Test Title",
      "description": "Title of the video",
      "title": "Video Title",
      "type": "string"
    },
    "description": {
      "default": "Default Description",
      "description": "Description of the video",
      "title": "Video Description",
      "type": "string"
    },
    "category": {
      "default": "22",
      "description": "Numeric video category ID. See https://developers.google.com/youtube/v3/docs/videoCategories/list",
      "title": "Category ID",
      "type": "string"
    },
    "keywords": {
      "default": "",
      "description": "Video keywords, comma separated",
      "title": "Keywords",
      "type": "string"
    },
    "privacy_status": {
      "default": "private",
      "description": "Video privacy status",
      "enum": [
        "public",
        "private",
        "unlisted"
      ],
      "title": "Privacy Status",
      "type": "string"
    }
  },
  "required": [
    "file_path"
  ],
  "title": "UploadVideoToYoutubeInput",
  "type": "object"
}
```

**Output Schema:**

```json
{
  "description": "Upload video to YouTube node output.",
  "properties": {
    "video_id": {
      "description": "ID of the uploaded video",
      "title": "Video ID",
      "type": "string"
    },
    "video_url": {
      "description": "URL of the uploaded video",
      "title": "Video URL",
      "type": "string"
    }
  },
  "required": [
    "video_id",
    "video_url"
  ],
  "title": "UploadVideoToYoutubeOutput",
  "type": "object"
}
```

**Example Configuration:**

```json
{
  "name": "my_youtube_upload_video",
  "title": "Upload Video to YouTube",
  "description": "Upload a video to YouTube using the YouTube Data API...",
  "node_type_name": "youtube_upload_video",
  "input_config": {
    "file_path": "example_value",
    "title": "example_value",
    "description": "example_value"
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

