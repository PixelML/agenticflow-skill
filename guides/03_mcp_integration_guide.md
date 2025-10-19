# MCP Integration Guide

Complete guide for integrating 2,500+ external services into AgenticFlow workflows using Model Context Protocol (MCP).

## 🌐 What is MCP?

**Model Context Protocol (MCP)** enables AgenticFlow to connect to virtually any external service through AI-powered actions. Instead of configuring complex APIs, you write natural language instructions that the AI executes.

**Key Benefits:**
- Access 2,500+ services without coding
- AI interprets your instructions
- Handles authentication automatically
- Simplifies complex API interactions

---

## 🎯 When to Use MCP

### Use MCP Integration When:

✅ User mentions external services:
- CRM (HubSpot, Salesforce, Pipedrive)
- Communication (Gmail, Slack, Teams, WhatsApp)
- E-commerce (Shopify, WooCommerce, Stripe)
- Productivity (Google Sheets, Notion, Airtable)
- Marketing (Mailchimp, Facebook, LinkedIn)
- Project Management (Asana, Trello, Jira)

✅ Standard nodes don't provide the functionality

✅ Need advanced features from specific platforms

✅ Want to chain multiple service operations

### Don't Use MCP When:

❌ Simple operations available in standard nodes
❌ No external service integration needed
❌ User doesn't have access to required service
❌ Cost-sensitive and standard nodes work

---

## 📋 MCP Action Structure

### Basic MCP Node Format

```javascript
{
  "name": "descriptive_action_name",
  "title": "Human-Readable Action Title",
  "description": "What this action does",
  "node_type_name": "mcp_run_action",
  "input_config": {
    "action": "SERVICE-ACTION-NAME",
    "input_params": {
      "instruction": "Natural language instruction with {{template_variables}}"
    }
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

### Key Components

**1. Action Name**
- Pattern: `SERVICE-ACTION-NAME` (all uppercase with hyphens)
- Examples:
  - `GMAIL-SEND-EMAIL`
  - `GOOGLE_SHEETS-APPEND-ROW`
  - `HUBSPOT-CREATE-CONTACT`
  - `SLACK-SEND-MESSAGE`

**2. Instruction**
- Natural language describing what to do
- Include template variables for dynamic data
- Be specific about format and requirements
- Example: `"Send email to {{recipient}} with subject '{{subject}}' and body: {{email_content}}"`

**3. Connection**
- Reference format: `{{__app_connections__['connection-uuid']}}`
- Each service needs its own connection
- User sets up at agenticflow.ai/app/mcp

---

## 🔧 Popular MCP Actions by Category

### CRM & Sales

**HubSpot**
```javascript
// Create Contact
{
  "action": "HUBSPOT-CREATE-CONTACT",
  "input_params": {
    "instruction": "Create contact with email {{email}}, name {{name}}, and company {{company}}"
  }
}

// Update Deal
{
  "action": "HUBSPOT-UPDATE-DEAL",
  "input_params": {
    "instruction": "Update deal {{deal_id}} with amount {{amount}} and stage {{stage}}"
  }
}

// Get Contacts
{
  "action": "HUBSPOT-GET-CONTACTS",
  "input_params": {
    "instruction": "Get all contacts created in the last 7 days with engagement scores"
  }
}
```

**Salesforce**
```javascript
// Create Lead
{
  "action": "SALESFORCE-CREATE-LEAD",
  "input_params": {
    "instruction": "Create lead from {{lead_data}} with company {{company_name}}"
  }
}

// Update Opportunity
{
  "action": "SALESFORCE-UPDATE-OPPORTUNITY",
  "input_params": {
    "instruction": "Update opportunity {{opp_id}} status to {{status}}"
  }
}
```

**Pipedrive**
```javascript
// Add Person
{
  "action": "PIPEDRIVE-ADD-PERSON",
  "input_params": {
    "instruction": "Add person with name {{name}}, email {{email}}, and phone {{phone}}"
  }
}

// Create Deal
{
  "action": "PIPEDRIVE-CREATE-DEAL",
  "input_params": {
    "instruction": "Create deal for {{person}} with value {{value}} in stage {{stage}}"
  }
}
```

---

### Communication

**Gmail**
```javascript
// Send Email
{
  "action": "GMAIL-SEND-EMAIL",
  "input_params": {
    "instruction": "Send email to {{recipient}} with subject '{{subject}}' and body: {{email_content}}"
  }
}

// Search Emails
{
  "action": "GMAIL-SEARCH-EMAILS",
  "input_params": {
    "instruction": "Search for emails from {{sender}} in the last 7 days about {{topic}}"
  }
}

// Create Draft
{
  "action": "GMAIL-CREATE-DRAFT",
  "input_params": {
    "instruction": "Create draft email to {{recipient}} with content: {{draft_content}}"
  }
}
```

**Slack**
```javascript
// Send Message
{
  "action": "SLACK-SEND-MESSAGE",
  "input_params": {
    "instruction": "Send message to {{channel}} with text: {{message_text}}"
  }
}

// Create Channel
{
  "action": "SLACK-CREATE-CHANNEL",
  "input_params": {
    "instruction": "Create channel named {{channel_name}} with description {{description}}"
  }
}

// Upload File
{
  "action": "SLACK-UPLOAD-FILE",
  "input_params": {
    "instruction": "Upload file {{file_url}} to channel {{channel}} with comment {{comment}}"
  }
}
```

**Microsoft Teams**
```javascript
// Create Meeting
{
  "action": "TEAMS-CREATE-MEETING",
  "input_params": {
    "instruction": "Create meeting on {{date}} at {{time}} with attendees {{attendees}}"
  }
}

// Send Message
{
  "action": "TEAMS-SEND-MESSAGE",
  "input_params": {
    "instruction": "Send message to {{team_channel}} with content: {{message}}"
  }
}
```

---

### E-commerce

**Shopify**
```javascript
// Get Orders
{
  "action": "SHOPIFY-GET-ORDERS",
  "input_params": {
    "instruction": "Get all orders from the last 24 hours with total value over $100"
  }
}

// Update Inventory
{
  "action": "SHOPIFY-UPDATE-INVENTORY",
  "input_params": {
    "instruction": "Update inventory for product {{product_id}} to {{quantity}} units"
  }
}

// Create Product
{
  "action": "SHOPIFY-CREATE-PRODUCT",
  "input_params": {
    "instruction": "Create product with title {{title}}, price {{price}}, and description: {{description}}"
  }
}
```

**Stripe**
```javascript
// Create Charge
{
  "action": "STRIPE-CREATE-CHARGE",
  "input_params": {
    "instruction": "Charge {{amount}} to customer {{customer_id}} for {{description}}"
  }
}

// Get Customer
{
  "action": "STRIPE-GET-CUSTOMER",
  "input_params": {
    "instruction": "Get customer details for {{customer_id}}"
  }
}

// Create Subscription
{
  "action": "STRIPE-CREATE-SUBSCRIPTION",
  "input_params": {
    "instruction": "Create subscription for customer {{customer_id}} with plan {{plan_id}}"
  }
}
```

**WooCommerce**
```javascript
// Update Order
{
  "action": "WOOCOMMERCE-UPDATE-ORDER",
  "input_params": {
    "instruction": "Update order {{order_id}} status to {{status}}"
  }
}

// Get Products
{
  "action": "WOOCOMMERCE-GET-PRODUCTS",
  "input_params": {
    "instruction": "Get all products in category {{category}} with stock status {{status}}"
  }
}
```

---

### Productivity

**Google Sheets**
```javascript
// Append Row
{
  "action": "GOOGLE_SHEETS-APPEND-ROW",
  "input_params": {
    "instruction": "Append row to sheet {{sheet_name}} with data: {{row_data}}"
  }
}

// Update Cell
{
  "action": "GOOGLE_SHEETS-UPDATE-CELL",
  "input_params": {
    "instruction": "Update cell {{cell_reference}} in sheet {{sheet_name}} with value {{value}}"
  }
}

// Get Data
{
  "action": "GOOGLE_SHEETS-GET-DATA",
  "input_params": {
    "instruction": "Get all data from range {{range}} in sheet {{sheet_name}}"
  }
}

// Update Range
{
  "action": "GOOGLE_SHEETS-UPDATE-RANGE",
  "input_params": {
    "instruction": "Update range {{range}} with values: {{values}}"
  }
}
```

**Notion**
```javascript
// Create Page
{
  "action": "NOTION-CREATE-PAGE",
  "input_params": {
    "instruction": "Create page in database {{database_id}} with title {{title}} and content: {{content}}"
  }
}

// Update Database
{
  "action": "NOTION-UPDATE-DATABASE",
  "input_params": {
    "instruction": "Update database entry {{entry_id}} with properties: {{properties}}"
  }
}

// Search
{
  "action": "NOTION-SEARCH",
  "input_params": {
    "instruction": "Search for pages containing {{keyword}} in workspace"
  }
}
```

**Airtable**
```javascript
// Create Record
{
  "action": "AIRTABLE-CREATE-RECORD",
  "input_params": {
    "instruction": "Create record in table {{table_name}} with fields: {{fields}}"
  }
}

// Find Records
{
  "action": "AIRTABLE-FIND-RECORDS",
  "input_params": {
    "instruction": "Find records in {{table_name}} where {{field}} equals {{value}}"
  }
}
```

---

### Marketing

**Mailchimp**
```javascript
// Add Subscriber
{
  "action": "MAILCHIMP-ADD-SUBSCRIBER",
  "input_params": {
    "instruction": "Add {{email}} to list {{list_id}} with tags {{tags}}"
  }
}

// Create Campaign
{
  "action": "MAILCHIMP-CREATE-CAMPAIGN",
  "input_params": {
    "instruction": "Create campaign with subject {{subject}} for list {{list_id}} and content: {{content}}"
  }
}
```

**SendGrid**
```javascript
// Send Bulk Email
{
  "action": "SENDGRID-SEND-BULK-EMAIL",
  "input_params": {
    "instruction": "Send emails to {{recipients}} with template {{template_id}} and data: {{personalization}}"
  }
}
```

**Facebook**
```javascript
// Create Ad
{
  "action": "FACEBOOK-CREATE-AD",
  "input_params": {
    "instruction": "Create ad with creative {{creative_id}} targeting {{audience}} with budget {{budget}}"
  }
}

// Get Insights
{
  "action": "FACEBOOK-GET-INSIGHTS",
  "input_params": {
    "instruction": "Get ad insights for campaign {{campaign_id}} from {{start_date}} to {{end_date}}"
  }
}
```

**LinkedIn**
```javascript
// Create Post
{
  "action": "LINKEDIN-CREATE-POST",
  "input_params": {
    "instruction": "Create post with text: {{content}} and image {{image_url}}"
  }
}

// Get Profile
{
  "action": "LINKEDIN-GET-PROFILE",
  "input_params": {
    "instruction": "Get profile information for user {{user_id}}"
  }
}
```

---

## 🔄 Hybrid Workflow Patterns

### Pattern 1: Data Collection + AI Processing + Multi-Channel Distribution

```javascript
{
  "nodes": [
    // 1. Collect data from CRM
    {
      "name": "get_crm_contacts",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "HUBSPOT-GET-CONTACTS",
        "input_params": {
          "instruction": "Get contacts created in last 7 days with engagement scores"
        }
      },
      "connection": "{{__app_connections__['hubspot-conn']}}"
    },

    // 2. AI Analysis
    {
      "name": "analyze_contacts",
      "node_type_name": "llm",
      "input_config": {
        "model": "DeepSeek V3",
        "human_message": "Analyze these contacts and segment into high/medium/low priority: {{get_crm_contacts.output}}"
      }
    },

    // 3. Send to Google Sheets
    {
      "name": "update_sheet",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "GOOGLE_SHEETS-APPEND-ROW",
        "input_params": {
          "instruction": "Append analysis to sheet 'Contact Analysis' with data: {{analyze_contacts.content}}"
        }
      },
      "connection": "{{__app_connections__['sheets-conn']}}"
    },

    // 4. Notify team via Slack
    {
      "name": "notify_team",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "SLACK-SEND-MESSAGE",
        "input_params": {
          "instruction": "Send to #sales channel: New contact analysis complete with {{analyze_contacts.content}}"
        }
      },
      "connection": "{{__app_connections__['slack-conn']}}"
    }
  ]
}
```

### Pattern 2: Web Research + CRM Update + Email Campaign

```javascript
{
  "nodes": [
    // 1. Research company
    {
      "name": "research_company",
      "node_type_name": "perplexity_search",
      "input_config": {
        "query": "{{company_name}} latest news and funding rounds"
      }
    },

    // 2. Extract insights
    {
      "name": "extract_insights",
      "node_type_name": "llm",
      "input_config": {
        "model": "Claude 3.5 Sonnet",
        "human_message": "Extract key insights from: {{research_company.response}}"
      }
    },

    // 3. Update CRM
    {
      "name": "update_crm",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "SALESFORCE-UPDATE-OPPORTUNITY",
        "input_params": {
          "instruction": "Update opportunity notes with research: {{extract_insights.content}}"
        }
      },
      "connection": "{{__app_connections__['salesforce-conn']}}"
    },

    // 4. Generate personalized email
    {
      "name": "generate_email",
      "node_type_name": "llm",
      "input_config": {
        "model": "GPT-4o-mini",
        "human_message": "Write personalized email based on insights: {{extract_insights.content}}"
      }
    },

    // 5. Send via Gmail
    {
      "name": "send_email",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "GMAIL-SEND-EMAIL",
        "input_params": {
          "instruction": "Send email generated in {{generate_email.content}} to {{recipient_email}}"
        }
      },
      "connection": "{{__app_connections__['gmail-conn']}}"
    }
  ]
}
```

---

## 🔐 Connection Management

### Setting Up MCP Connections

**User Instructions:**

1. **Navigate to MCP Settings:**
   ```
   Go to: https://agenticflow.ai/app/mcp
   ```

2. **Add Provider:**
   - Click "Add Provider"
   - Select service (Gmail, Slack, HubSpot, etc.)
   - Click "Connect"

3. **Authorize:**
   - Follow OAuth flow
   - Grant required permissions
   - Confirm access

4. **Copy Connection ID:**
   - Connection will be created with UUID
   - Copy for use in workflows

5. **Use in Workflow:**
   ```javascript
   "connection": "{{__app_connections__['copied-uuid-here']}}"
   ```

### Connection Requirements by Service

| Service | Auth Type | Permissions Needed |
|---------|-----------|-------------------|
| Gmail | OAuth | Send, Read emails |
| Google Sheets | OAuth | Edit spreadsheets |
| Slack | OAuth | Post messages, Manage channels |
| HubSpot | API Key | CRM access |
| Salesforce | OAuth | CRM read/write |
| Shopify | API Key | Store management |
| Stripe | API Key | Payment processing |

---

## 💡 Best Practices

### 1. Instruction Design

**Good Instructions:**
✅ Clear and specific
✅ Include all necessary data
✅ Specify format when needed
✅ Use template variables

```javascript
"Send email to {{recipient}} with subject 'Order Confirmation #{{order_id}}' and body: Thank you for your order of {{product_name}}. Total: ${{total}}."
```

**Bad Instructions:**
❌ Vague
❌ Missing data
❌ Unclear format

```javascript
"Send an email about the order"
```

### 2. Error Handling

Always plan for:
- Connection failures
- Rate limits
- Invalid data
- Service outages

### 3. Cost Optimization

- Use MCP only when needed
- Batch operations when possible
- Cache results to avoid redundant calls

### 4. Security

- Never hardcode credentials
- Use connections for auth
- Validate data before sending
- Follow service best practices

---

## 🚀 Quick Start Template

```javascript
{
  "name": "mcp_action_name",
  "title": "Action Title",
  "description": "What this does",
  "node_type_name": "mcp_run_action",
  "input_config": {
    "action": "SERVICE-ACTION-NAME",
    "input_params": {
      "instruction": "Clear instruction with {{variables}}"
    }
  },
  "output_mapping": {},
  "connection": "{{__app_connections__['connection-uuid']}}"
}
```

---

**Next Steps:**
- Check `references/mcp_integrations.md` for full list
- See `references/examples/workflows/` for MCP usage examples
- Review workflow patterns in `references/workflow_guide.md`
