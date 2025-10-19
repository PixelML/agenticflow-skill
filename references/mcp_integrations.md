# MCP Integration Reference

## MCP Node Structure
```javascript
{
  "name": "action_name",
  "title": "Descriptive Title",
  "node_type_name": "mcp_run_action",
  "input_config": {
    "action": "SERVICE-ACTION",  // From MCP catalog
    "input_params": {
      "instruction": "AI instruction with {{template_variables}} from other nodes"
    }
  },
  "connection": "{{__app_connections__['uuid']}}"
}
```

## Popular MCP Actions by Category

### CRM & Sales
- `HUBSPOT-CREATE-CONTACT`, `HUBSPOT-UPDATE-DEAL`, `HUBSPOT-GET-COMPANIES`
- `SALESFORCE-CREATE-LEAD`, `SALESFORCE-UPDATE-OPPORTUNITY`
- `PIPEDRIVE-ADD-PERSON`, `PIPEDRIVE-CREATE-DEAL`

### Communication
- `GMAIL-SEND-EMAIL`, `GMAIL-SEARCH-EMAILS`, `GMAIL-CREATE-DRAFT`
- `SLACK-SEND-MESSAGE`, `SLACK-CREATE-CHANNEL`, `SLACK-UPLOAD-FILE`
- `TEAMS-CREATE-MEETING`, `TEAMS-SEND-MESSAGE`

### E-commerce
- `SHOPIFY-GET-ORDERS`, `SHOPIFY-UPDATE-INVENTORY`, `SHOPIFY-CREATE-PRODUCT`
- `STRIPE-CREATE-CHARGE`, `STRIPE-GET-CUSTOMER`, `STRIPE-CREATE-SUBSCRIPTION`
- `WOOCOMMERCE-UPDATE-ORDER`, `WOOCOMMERCE-GET-PRODUCTS`

### Productivity
- `GOOGLE_SHEETS-APPEND-ROW`, `GOOGLE_SHEETS-UPDATE-CELL`, `GOOGLE_SHEETS-GET-DATA`
- `NOTION-CREATE-PAGE`, `NOTION-UPDATE-DATABASE`, `NOTION-SEARCH`
- `AIRTABLE-CREATE-RECORD`, `AIRTABLE-FIND-RECORDS`

### Marketing
- `MAILCHIMP-ADD-SUBSCRIBER`, `MAILCHIMP-CREATE-CAMPAIGN`
- `FACEBOOK-CREATE-AD`, `FACEBOOK-GET-INSIGHTS`
- `LINKEDIN-CREATE-POST`, `LINKEDIN-GET-PROFILE`

## MCP Integration Rules

1. **ALWAYS explore MCP options** when user mentions:
   - External services (Gmail, Slack, Shopify, etc.)
   - CRM operations
   - Spreadsheet/database operations
   - Communication needs
   - E-commerce workflows
   - Marketing automation

2. **MCP Action Format**: Usually follows pattern `SERVICE-ACTION-NAME` (all caps with hyphens)

3. **Instruction Design**: The instruction field should:
   - Be clear and specific
   - Include template variables from previous nodes
   - Specify exact operations needed
   - Include any formatting requirements

4. **Connection Management**:
   - Each MCP service needs its own connection
   - Connections are referenced by UUID
   - User must set up connections at agenticflow.ai/app/mcp

5. **Extend Capabilities**: Don't say "AgenticFlow can't do X" without checking:
   - Standard nodes
   - MCP integrations for the service
   - Combination of both
