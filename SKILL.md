---
name: agenticflow
description: This skill should be used when users want to design, build, or validate AgenticFlow automation workflows. Use this skill when users mention AgenticFlow, automation workflows, or want to integrate external services (Gmail, Slack, Shopify, CRM systems, etc.) into automated processes.
license: MIT License - See LICENSE file for complete terms
---

# AgenticFlow

## Overview

This skill enables design, building, and validation of AgenticFlow automation workflows using both standard nodes and the extensive MCP ecosystem of 2,500+ integrations. AgenticFlow is an AI automation platform that can connect to virtually any service to create sophisticated automation workflows.

## Core Workflow Process

When working with AgenticFlow, follow this systematic process:

### 1. Health Check & Discovery

**ALWAYS start** new conversations with:
```javascript
agenticflow_health_check()
```

This verifies API connectivity and available features.

### 2. Discovery Phase

Think deeply about the user's request and the logic needed to fulfill it. Ask follow-up questions to clarify intent if something is unclear.

**CRITICAL**: Don't limit to standard nodes! Consider MCP integrations for:
- CRM operations (HubSpot, Salesforce, Pipedrive)
- Communication (Gmail, Slack, Teams, WhatsApp)
- E-commerce (Shopify, WooCommerce, Stripe)
- Productivity (Google Sheets, Notion, Airtable)
- Marketing (Mailchimp, Facebook, LinkedIn)
- Project Management (Asana, Trello, Jira)
- And 2,500+ more services!

**Search available nodes:**
```javascript
agenticflow_search_node_types({name: 'keyword'})
agenticflow_list_node_types({limit: 200})
```

**Consider MCP actions** from the extensive catalog for any external service integration. See `references/mcp_integrations.md` for popular MCP actions by category.

### 3. MCP Integration Analysis

When user needs external services:
- Check if functionality exists in standard nodes
- If not, identify the appropriate MCP service (Gmail, Sheets, Slack, etc.)
- Plan the MCP action name (e.g., "GOOGLE_DOCS-GET-DOCUMENT", "PINTEREST-CREATE-PIN")
- Design the instruction parameter that tells the AI what to do
- Note required MCP connections that user will need to set up

### 4. Configuration Phase

Plan node configurations:

**For standard nodes:** Analyze required fields from node type definitions

**For MCP nodes:** Structure the `mcp_run_action` node:
```javascript
{
  "name": "descriptive_name",
  "node_type_name": "mcp_run_action",
  "input_config": {
    "action": "SERVICE-ACTION-NAME",  // e.g., "GMAIL-SEND-EMAIL"
    "input_params": {
      "instruction": "Detailed instruction for the AI to execute the action with context from {{previous_nodes}}"
    }
  },
  "connection": "{{__app_connections__['connection-id']}}"
}
```

Use template variables for data flow between all node types. Show a visual representation of the workflow architecture to the user.

### 5. Pre-Building Phase

Structure the comprehensive workflow:
- Design input_schema with proper UI metadata
- Plan execution order mixing standard nodes and MCP actions
- Map data flow using `{{node_name.field}}` syntax
- Configure output_mapping for final results
- Document which MCP connections user needs to set up

### 6. Building Phase

Create the enhanced workflow:

Mix and match node types for optimal results:
- Use LLM nodes for AI processing
- Use MCP nodes for external service integration
- Use web scraping for data collection
- Use data extraction for structuring

Build the workflow in an artifact for easy editing. Include clear documentation about MCP connections needed.

### 7. Validation & Documentation Phase

- Validate workflow structure using `agenticflow_validate_workflow()`
- Document all MCP connections required
- Provide setup instructions for MCP providers
- Test workflow logic flow
- Note any limitations or prerequisites

## Workflow Design Best Practices

1. **Start with Requirements**: Understand what external services are needed
2. **Mix Node Types**: Combine standard nodes with MCP for powerful workflows
3. **Chain Operations**: Use output from one service as input to another
4. **Error Handling**: Plan for MCP action failures
5. **Documentation**: Always document required MCP connections
6. **Parallel Processing**: Design workflows with parallel execution when possible (see `references/workflow_guide.md`)

## Key Mindset Shift

**OLD**: "Here are the available node types: LLM, web_scraping, image_generation..."
**NEW**: "AgenticFlow can connect to 2,500+ services. What would you like to automate?"

Do not limit to built-in nodes. Access to virtually any API or service is available through MCP. Think expansively about what's possible, not restrictively about node types.

## Response Framework

When users ask "Can AgenticFlow do X?", follow this thought process:
1. Check if standard nodes can do it
2. Check if MCP integration exists for the service
3. Design a hybrid solution if needed
4. Never limit to just standard nodes

Example: "Can AgenticFlow send emails?"
- Standard way: Use `send_email` node (basic)
- MCP way: Use `GMAIL-SEND-EMAIL` or `SENDGRID-SEND-EMAIL` (advanced features)
- Best practice: Choose based on user's needs

## Workflow URL Generation

Always provide direct workflow links after creation:
```
https://agenticflow.ai/app/workspaces/{workspace_id}/workflows/{workflow_id}/build
```

## Example User Interactions

**User**: "I need to sync Shopify orders to Google Sheets and send Slack notifications"

**Approach**:
- Use `mcp_run_action` with `SHOPIFY-GET-ORDERS`
- Use `mcp_run_action` with `GOOGLE_SHEETS-APPEND-ROW`
- Use `mcp_run_action` with `SLACK-SEND-MESSAGE`
- Connect with LLM nodes for intelligent processing

**User**: "Can AgenticFlow manage my Instagram posts?"

**Approach**:
- Check for Instagram MCP actions
- Combine with `generate_image` for content creation
- Use LLM for caption generation
- Design complete social media workflow

## Resources

This skill includes reference documentation to guide workflow creation:

### references/workflow_guide.md
Comprehensive workflow design patterns including:
- Hybrid workflow patterns (Data Collection + AI Processing + Distribution)
- Web Scraping + External Service Integration patterns
- Parallel processing patterns for efficiency

Load this when designing complex workflows or when user needs workflow architecture guidance.

### references/mcp_integrations.md
Complete MCP integration reference including:
- MCP node structure and syntax
- Popular MCP actions by category (CRM, Communication, E-commerce, Productivity, Marketing)
- MCP integration rules and best practices
- Instruction design guidelines
- Connection management details

Load this when user needs MCP integrations or external service connectivity.

### references/node_types.md
Node type selection guide including:
- Node types for web research (perplexity_search, openai_search, google_search)
- Node types for AI processing (llm, claude_ask, openai_ask_chat_gpt)
- Node types for data extraction and web scraping
- Field requirements and common fixes
- Template variable syntax and usage

Load this when selecting appropriate node types or troubleshooting node configuration issues.
