# Workflow Creation Process - Step-by-Step Guide

This guide provides the complete process for creating AgenticFlow workflows from natural language requirements to production-ready automation.

## 🎯 The 7-Phase Workflow Creation Process

### Phase 1: Health Check & Setup

**OPTIONAL - Only call API when necessary:**

```javascript
agenticflow_health_check() // SKIP this unless you need to validate connection
```

**When to call:**
- ✅ First time using the skill in a session (validate connection)
- ✅ User explicitly asks to check connection
- ✅ After errors to verify API is working
- ❌ **NOT needed** for every workflow - all node data is LOCAL

**Purpose (when called):**
- Verify API connectivity
- Check available features
- Confirm workspace access
- Validate MCP tools availability

**IMPORTANT:** All node type data (139 nodes) is available locally in:
- `references/official_node_types.json` - Complete node data
- `references/node_types.md` - Categorized reference
- `references/complete_node_types.md` - Full schemas

**Save API calls** - Use local files for node discovery!

---

### Phase 2: Discovery & Requirements Analysis

**Goal:** Understand what the user wants to automate and break it down into actionable components.

**Steps:**

1. **Deep Thinking:**
   - Analyze the user's natural language request
   - Identify the core automation goal
   - Break down into logical workflow steps
   - Consider data sources and destinations

2. **Clarifying Questions:**
   - Ask follow-up questions if requirements are unclear
   - Confirm assumptions about data formats
   - Verify external service access
   - Understand expected outputs

3. **Node Discovery (USE LOCAL FILES FIRST):**
   - **PRIMARY:** Load `references/node_types.md` - Browse 139 nodes by category
   - **PRIMARY:** Check `references/examples/workflows/` - 78 real workflow patterns
   - **PRIMARY:** Reference `guides/02_node_selection_strategy.md` - Node selection guide
   - **FALLBACK:** Only use API if absolutely needed:
     - `agenticflow_search_node_types({name: 'keyword'})` - Specific search
     - `agenticflow_list_node_types({limit: 200})` - Need latest data
   - **TIP:** Local files have ALL 139 nodes with complete details!

4. **Service Identification:**
   - List all external services mentioned (Gmail, Slack, Shopify, etc.)
   - Determine if standard nodes or MCP integrations are needed
   - Check for 2,500+ MCP integration options

**Example:**

```
User: "I need to monitor competitor prices and update my team via Slack"

Discovery:
✓ Data Source: Competitor websites (web scraping needed)
✓ Processing: Price extraction and analysis (LLM + data extraction)
✓ Destination: Slack notifications (MCP integration)
✓ Frequency: Scheduled or manual trigger
✓ Nodes needed: web_scraping, llm, mcp_run_action
```

---

### Phase 3: MCP Integration Analysis

**When to use MCP:**
- User mentions external services (Gmail, Slack, HubSpot, etc.)
- Need CRM, communication, e-commerce, or productivity tools
- Standard nodes don't provide required functionality

**MCP Planning Process:**

1. **Identify MCP Services:**
   - CRM: HubSpot, Salesforce, Pipedrive
   - Communication: Gmail, Slack, Teams, WhatsApp
   - E-commerce: Shopify, WooCommerce, Stripe
   - Productivity: Google Sheets, Notion, Airtable
   - Marketing: Mailchimp, Facebook, LinkedIn
   - And 2,500+ more!

2. **Plan MCP Actions:**
   - Action naming pattern: `SERVICE-ACTION-NAME` (all caps with hyphens)
   - Examples:
     - `GMAIL-SEND-EMAIL`
     - `GOOGLE_SHEETS-APPEND-ROW`
     - `SLACK-SEND-MESSAGE`
     - `HUBSPOT-CREATE-CONTACT`

3. **Design Instructions:**
   - Write clear, specific instruction for AI to execute
   - Include template variables from previous nodes
   - Specify exact operations and formatting

4. **Note Connection Requirements:**
   - Document which MCP connections user needs
   - Each service requires its own connection
   - User sets up at agenticflow.ai/app/mcp

**MCP Node Structure:**
```javascript
{
  "name": "descriptive_action_name",
  "title": "Descriptive Action Title",
  "node_type_name": "mcp_run_action",
  "input_config": {
    "action": "SERVICE-ACTION-NAME",
    "input_params": {
      "instruction": "Detailed instruction with {{template_variables}}"
    }
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

### Phase 4: Configuration Planning

**Goal:** Design the complete workflow architecture with proper data flow.

**Steps:**

1. **Node Selection:**
   - Choose appropriate node types for each step
   - Reference `references/node_types.md` for categories
   - Check `references/complete_node_types.md` for field details

2. **Data Flow Design:**
   - Map how data flows between nodes
   - Use template variables: `{{node_name.field}}`
   - Common output fields:
     - LLM nodes: `.content`
     - Perplexity/search: `.response`
     - Web scraping: `.scraped_content`
     - MCP actions: `.output`
     - Structured extraction: `.extracted_data`

3. **Input Schema Design:**
   - Define workflow input parameters
   - Add proper UI metadata for user-friendly forms
   - Include descriptions and placeholders

4. **Execution Order:**
   - Plan sequential vs parallel execution
   - Use `prevNodeName` for dependencies
   - Optimize for performance

**Visual Representation:**
Always show the user a workflow diagram like:
```
User Input → Web Scraping → AI Analysis → External Service → Output
```

---

### Phase 5: Pre-Building & Validation

**Goal:** Structure the complete workflow before creation.

**Components to prepare:**

1. **Workflow Metadata:**
```javascript
{
  "name": "Clear Workflow Name",
  "description": "What this workflow does and why"
}
```

2. **Input Schema:**
```javascript
{
  "input_schema": {
    "type": "object",
    "title": "User inputs",
    "required": ["essential_field"],
    "properties": {
      "field_name": {
        "type": "string",
        "title": "Display Label",
        "description": "Help text for users",
        "ui_metadata": {
          "type": "short_text", // or long_text, dropdown, multi_select
          "order": 0,
          "placeholder": "Example value",
          "value": "default_value"
        }
      }
    }
  }
}
```

3. **Nodes Array:**
- Each node with complete configuration
- Proper field requirements met
- Template variables correctly referenced

4. **Output Mapping:**
```javascript
{
  "output_mapping": {
    "result": "{{final_node.content}}",
    "metadata": "{{extraction_node.data}}"
  }
}
```

5. **Connection Documentation:**
- List all MCP connections needed
- Provide setup instructions
- Note connection categories

---

### Phase 6: Building the Workflow

**Goal:** Create the actual workflow using AgenticFlow MCP tools.

**Build Steps:**

1. **Prepare Complete JSON:**
   - Validate all required fields
   - Check node type names are exact
   - Ensure proper data types

2. **REQUIRED: Validate First:**
```javascript
// ALWAYS validate before creating
const validationResult = agenticflow_validate_workflow({
  name: "Workflow Name",
  description: "Workflow description",
  nodes: [...],
  input_schema: {...},
  output_mapping: {...}
})
```

**Check Validation Results:**
- ✅ If validation passes → Proceed to creation
- ❌ If validation fails → Fix errors and validate again
- ⚠️ If warnings → Review and decide whether to fix

**Never skip validation!** This prevents creating broken workflows that clutter the user's workspace.

3. **Node Structure Requirements:**
```javascript
{
  "name": "node_name",           // Required: string
  "title": "Display Title",      // Required: string (optional for some nodes)
  "description": "What it does",  // Required: string (optional for some nodes)
  "node_type_name": "node_type",  // Required: exact from API
  "input_config": {},             // Required: object (can be empty {})
  "output_mapping": {},           // Required: object (use {} not null)
  "connection": ""                // Required: string (use "" not null)
}
```

4. **Critical Fixes:**
   - Never use `null` for `output_mapping` → use `{}`
   - Never use `null` for `connection` → use `""`
   - Always include all required fields
   - Use exact node type names

5. **Only After Validation Passes - Create Workflow:**
```javascript
// Only call this after agenticflow_validate_workflow() succeeds
agenticflow_create_workflow({
  name: "Workflow Name",
  description: "Workflow description",
  nodes: [...],
  input_schema: {...},
  output_mapping: {...}
})
```

**CRITICAL:** Never create without validating first!

6. **Provide Direct Link:**
```
https://agenticflow.ai/app/workspaces/{workspace_id}/workflows/{workflow_id}/build
```

---

### Phase 7: Post-Creation Documentation

**Goal:** Provide user with complete setup and usage information.

**Note:** Validation is done in Phase 6 BEFORE creation, not after!

**Documentation Steps:**

1. **Workflow Summary:**
   - Confirm workflow was created successfully
   - Provide direct link to workflow
   - Explain what the workflow does
   - Share validation results (already completed)

2. **Validation Confirmation (Already Done):**
   - Workflow structure validated ✓
   - All fields properly configured ✓
   - Data flow verified ✓
   - Template variables correct ✓

3. **MCP Connection Check:**
   - All MCP actions have connections specified
   - Connection UUIDs format correct
   - Services properly identified

**Documentation to Provide:**

1. **Workflow Summary:**
   - What the workflow does
   - Input requirements
   - Expected outputs

2. **MCP Setup Instructions:**
```markdown
## Required MCP Connections

1. **Gmail Connection**
   - Go to agenticflow.ai/app/mcp
   - Add Gmail provider
   - Authorize your Google account
   - Copy connection ID to workflow

2. **Slack Connection**
   - Add Slack provider
   - Connect workspace
   - Select channels for access
```

3. **Usage Guide:**
   - How to run the workflow
   - What inputs to provide
   - How to interpret outputs

4. **Limitations & Notes:**
   - Rate limits
   - Cost estimates
   - Best practices
   - Error handling

---

## 🎨 Workflow Design Patterns

### Pattern 1: Data Collection → AI Processing → Distribution

```
Web Scraping → LLM Analysis → Multi-Channel Output
   ↓                ↓                 ↓
Research      Extract Insights   Email + Slack + Sheets
```

### Pattern 2: External Service Integration

```
MCP Data Source → AI Processing → MCP Action
      ↓                  ↓              ↓
  HubSpot CRM    Analyze & Segment  Send Campaigns
```

### Pattern 3: Parallel Processing

```
                  ┌─ Research Source 1 ─┐
Input → Split →   ├─ Research Source 2 ─┤ → Combine → Output
                  └─ Research Source 3 ─┘
```

---

## 📋 Quick Reference Checklist

**Before Building:**
- [ ] Health check completed
- [ ] Requirements fully understood
- [ ] Node types identified
- [ ] MCP services planned
- [ ] Data flow mapped
- [ ] Input schema designed

**During Building:**
- [ ] All required fields included
- [ ] Template variables correct
- [ ] Connection fields proper format
- [ ] No null values for objects
- [ ] Node names unique and descriptive

**After Building:**
- [ ] Workflow created successfully
- [ ] Direct link provided
- [ ] MCP setup documented
- [ ] Usage instructions clear
- [ ] Limitations noted

---

## 💡 Pro Tips

1. **Think Hybrid:** Always consider both standard nodes AND MCP integrations
2. **Start Simple:** Build core functionality first, then add enhancements
3. **Use Examples:** Reference `references/examples/workflows/` for patterns
4. **Validate Early:** Check field requirements before building
5. **Document Well:** Clear MCP setup instructions prevent user confusion

---

**Next Steps:**
- Review `references/node_types.md` for node selection
- Check `references/workflow_guide.md` for patterns
- See `references/examples/workflows/` for real examples
