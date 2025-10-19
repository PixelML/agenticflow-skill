# MCP Integration Reference

## MCP Node Structure

### Basic MCP Action Node
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

### Advanced MCP Action with Error Handling
```javascript
{
  "name": "robust_action",
  "node_type_name": "mcp_run_action",
  "input_config": {
    "action": "SERVICE-ACTION",
    "input_params": {
      "instruction": "Process this data: {{previous_node.output}}. Handle errors gracefully and provide fallback results."
    }
  },
  "connection": "{{__app_connections__['connection-uuid']}}",
  "output_mapping": {
    "success_data": "output.results",
    "error_message": "output.error",
    "status": "output.status"
  }
}
```

## Popular MCP Actions by Category

### CRM & Sales
**HubSpot**
- `HUBSPOT-CREATE-CONTACT` - Create new contact
- `HUBSPOT-UPDATE-DEAL` - Update deal information
- `HUBSPOT-GET-COMPANIES` - List companies
- `HUBSPOT-SEARCH-CONTACTS` - Search contacts by criteria

**Salesforce**
- `SALESFORCE-CREATE-LEAD` - Create new lead
- `SALESFORCE-UPDATE-OPPORTUNITY` - Update opportunity
- `SALESFORCE-QUERY-ACCOUNTS` - Query account data
- `SALESFORCE-CREATE-TASK` - Create follow-up task

**Pipedrive**
- `PIPEDRIVE-ADD-PERSON` - Add person to pipeline
- `PIPEDRIVE-CREATE-DEAL` - Create new deal
- `PIPEDRIVE-UPDATE-DEAL` - Update deal value
- `PIPEDRIVE-GET-ACTIVITIES` - Get recent activities

### Communication

**Gmail**
- `GMAIL-SEND-EMAIL` - Send email with HTML support
- `GMAIL-SEARCH-EMAILS` - Search emails by criteria
- `GMAIL-CREATE-DRAFT` - Create email draft
- `GMAIL-GET-THREADS` - Get email threads
- `GMAIL-LABEL-EMAIL` - Apply labels to emails

**Slack**
- `SLACK-SEND-MESSAGE` - Send message to channel/user
- `SLACK-CREATE-CHANNEL` - Create new channel
- `SLACK-UPLOAD-FILE` - Upload file to Slack
- `SLACK-GET-CHANNELS` - List available channels
- `SLACK-ADD-REACTION` - Add emoji reaction

**Microsoft Teams**
- `TEAMS-CREATE-MEETING` - Create Teams meeting
- `TEAMS-SEND-MESSAGE` - Send message in channel
- `TEAMS-GET-CHANNELS` - List team channels
- `TEAMS-UPLOAD-FILE` - Upload file to Teams

**WhatsApp**
- `WHATSAPP-SEND-MESSAGE` - Send WhatsApp message
- `WHATSAPP-SEND-MEDIA` - Send media via WhatsApp
- `WHATSAPP-CREATE-GROUP` - Create WhatsApp group
- `WHATSAPP-GET-CONTACTS` - Get WhatsApp contacts

### E-commerce

**Shopify**
- `SHOPIFY-GET-ORDERS` - Retrieve orders
- `SHOPIFY-UPDATE-PRODUCT` - Update product info
- `SHOPIFY-CREATE-PRODUCT` - Create new product
- `SHOPIFY-GET-CUSTOMERS` - Get customer data
- `SHOPIFY-GET-INVENTORY` - Check inventory levels

**WooCommerce**
- `WOO-CREATE-ORDER` - Create new order
- `WOO-UPDATE-PRODUCT` - Update product
- `WOO-GET-PRODUCTS` - List products
- `WOO-GET-CUSTOMERS` - Get customer data

**Stripe**
- `STRIPE-CREATE-PAYMENT` - Create payment intent
- `STRIPE-GET-CUSTOMERS` - Get customer list
- `STRIPE-CREATE-INVOICE` - Create invoice
- `STRIPE-REFUND-PAYMENT` - Process refund
- `STRIPE-GET-BALANCE` - Get account balance

### Productivity

**Google Sheets**
- `GOOGLE_SHEETS-APPEND-ROW` - Add row to sheet
- `GOOGLE_SHEETS-UPDATE-RANGE` - Update cell range
- `GOOGLE_SHEETS-GET-RANGE` - Read cell range
- `GOOGLE_SHEETS-CREATE-SHEET` - Create new sheet
- `GOOGLE_SHEETS-DELETE-ROW` - Delete row from sheet

**Google Docs**
- `GOOGLE_DOCS-GET-DOCUMENT` - Get document content
- `GOOGLE_DOCS-UPDATE-DOCUMENT` - Update document
- `GOOGLE_DOCS-CREATE-DOCUMENT` - Create new document
- `GOOGLE_DOCS-EXPORT-DOCUMENT` - Export to PDF/Word

**Notion**
- `NOTION-CREATE-PAGE` - Create Notion page
- `NOTION-UPDATE-PAGE` - Update page content
- `NOTION-GET-DATABASE` - Get database entries
- `NOTION-SEARCH-PAGES` - Search pages
- `NOTION-ADD-BLOCK` - Add content block

**Airtable**
- `AIRTABLE-CREATE-RECORD` - Create new record
- `AIRTABLE-UPDATE-RECORD` - Update existing record
- `AIRTABLE-GET-RECORDS` - Get records from table
- `AIRTABLE-DELETE-RECORD` - Delete record
- `AIRTABLE-SEARCH-RECORDS` - Search records

### Marketing

**Mailchimp**
- `MAILCHIMP-ADD-SUBSCRIBER` - Add email subscriber
- `MAILCHIMP-SEND-CAMPAIGN` - Send email campaign
- `MAILCHIMP-GET-LISTS` - Get email lists
- `MAILCHIMP-CREATE-CAMPAIGN` - Create campaign
- `MAILCHIMP-GET-SUBSCRIBERS` - Get subscriber data

**Facebook**
- `FACEBOOK-CREATE-POST` - Create Facebook post
- `FACEBOOK-GET-PAGES` - Get Facebook pages
- `FACEBOOK-UPLOAD-PHOTO` - Upload photo to page
- `FACEBOOK-GET-INSIGHTS` - Get page insights

**LinkedIn**
- `LINKEDIN-CREATE-POST` - Create LinkedIn post
- `LINKEDIN-GET-PROFILE` - Get profile data
- `LINKEDIN-SEND-CONNECTION` - Send connection request
- `LINKEDIN-GET-COMPANY-PAGE` - Get company page info

**Twitter/X**
- `TWITTER-CREATE-TWEET` - Create tweet
- `TWITTER-GET-TIMELINE` - Get timeline
- `TWITTER-GET-FOLLOWERS` - Get followers
- `TWITTER-RETWEET` - Retweet post

### Project Management

**Asana**
- `ASANA-CREATE-TASK` - Create new task
- `ASANA-UPDATE-TASK` - Update task details
- `ASANA-GET-TASKS` - Get tasks from project
- `ASANA-CREATE-PROJECT` - Create new project
- `ASANA-ADD-COMMENT` - Add comment to task

**Trello**
- `TRELLO-CREATE-CARD` - Create new card
- `TRELLO-UPDATE-CARD` - Update card details
- `TRELLO-GET-BOARDS` - Get boards
- `TRELLO-ADD-COMMENT` - Add comment to card
- `TRELLO-MOVE-CARD` - Move card between lists

**Jira**
- `JIRA-CREATE-ISSUE` - Create new issue
- `JIRA-UPDATE-ISSUE` - Update issue details
- `JIRA-GET-ISSUES` - Get issues from project
- `JIRA-ADD-COMMENT` - Add comment to issue
- `JIRA-TRANSITION-ISSUE` - Change issue status

### Social Media

**Instagram**
- `INSTAGRAM-CREATE-POST` - Create Instagram post
- `INSTAGRAM-GET-MEDIA` - Get media posts
- `INSTAGRAM-GET-COMMENTS` - Get post comments
- `INSTAGRAM-GET-INSIGHTS` - Get post insights

**TikTok**
- `TIKTOK-CREATE-VIDEO` - Create TikTok video
- `TIKTOK-GET-VIDEOS` - Get user videos
- `TIKTOK-GET-COMMENTS` - Get video comments
- `TIKTOK-GET-INSIGHTS` - Get video insights

**YouTube**
- `YOUTUBE-UPLOAD-VIDEO` - Upload YouTube video
- `YOUTUBE-GET-VIDEOS` - Get channel videos
- `YOUTUBE-GET-COMMENTS` - Get video comments
- `YOUTUBE-GET-ANALYTICS` - Get video analytics

### Development Tools

**GitHub**
- `GITHUB-CREATE-ISSUE` - Create GitHub issue
- `GITHUB-GET-REPOSITORIES` - Get repositories
- `GITHUB-CREATE-PULL-REQUEST` - Create pull request
- `GITHUB-GET-ISSUES` - Get repository issues

**GitLab**
- `GITLAB-CREATE-ISSUE` - Create GitLab issue
- `GITLAB-GET-PROJECTS` - Get projects
- `GITLAB-CREATE-MERGE-REQUEST` - Create merge request
- `GITLAB-GET-ISSUES` - Get project issues

### Analytics & Data

**Google Analytics**
- `GOOGLE_ANALYTICS-GET-REPORT` - Get analytics report
- `GOOGLE_ANALYTICS-GET-REALTIME` - Get realtime data
- `GOOGLE_ANALYTICS-GET-METADATA` - Get account metadata

**Mixpanel**
- `MIXPANEL-TRACK-EVENT` - Track user event
- `MIXPANEL-GET-USER-PROFILE` - Get user profile
- `MIXPANEL-EXPORT-DATA` - Export event data

**Amplitude**
- `AMPLITUDE-TRACK-EVENT` - Track event
- `AMPLITUDE-GET-USER-PROPERTIES` - Get user properties
- `AMPLITUDE-EXPORT-DATA` - Export user data

## MCP Integration Best Practices

### Connection Management
1. **UUID Format**: Always use proper UUID format: `{{__app_connections__['uuid-here']}}`
2. **Connection Testing**: Test connections before deploying workflows
3. **Authentication**: Ensure OAuth/API keys are properly configured
4. **Rate Limiting**: Respect service rate limits and implement delays

### Instruction Design
1. **Be Specific**: Provide clear, detailed instructions for AI execution
2. **Include Context**: Pass relevant data from previous nodes using template variables
3. **Error Handling**: Ask AI to handle errors gracefully and provide fallbacks
4. **Data Formatting**: Specify desired output format when needed

### Advanced Patterns

### Conditional MCP Actions
```javascript
{
  "name": "conditional_action",
  "node_type_name": "llm",
  "input_config": {
    "model": "DeepSeek V3",
    "human_message": "Based on this data {{previous_node.output}}, should we send an email or Slack notification? Respond with either 'EMAIL' or 'SLACK'"
  }
},
// Then use conditional logic to route to appropriate MCP action
```

### Batch Processing
```javascript
{
  "name": "batch_processor",
  "node_type_name": "mcp_run_action",
  "input_config": {
    "action": "GOOGLE_SHEETS-APPEND-ROWS",
    "input_params": {
      "instruction": "Add all these rows to the sheet: {{data_array}}"
    }
  }
}
```

### Retry Logic
```javascript
{
  "name": "retry_action",
  "node_type_name": "mcp_run_action",
  "input_config": {
    "action": "SERVICE-ACTION",
    "input_params": {
      "instruction": "Attempt this action. If it fails, wait 5 seconds and retry once: {{data}}"
    }
  }
}
```

## Troubleshooting MCP Integrations

### Common Issues

**Connection Not Found**
```
Error: "Connection not found"
Solution:
1. Verify UUID is correct: {{__app_connections__['your-uuid']}}
2. Check connection exists at agenticflow.ai/app/mcp
3. Ensure connection is properly authenticated
```

**Authentication Failed**
```
Error: "Authentication failed"
Solution:
1. Refresh OAuth tokens for the service
2. Verify API keys are valid
3. Check service account permissions
```

**Rate Limit Exceeded**
```
Error: "Rate limit exceeded"
Solution:
1. Add delays between MCP actions
2. Implement batch processing
3. Use exponential backoff for retries
```

**Invalid Action**
```
Error: "Invalid action: SERVICE-ACTION"
Solution:
1. Verify action name is correct
2. Check MCP catalog for available actions
3. Ensure service is properly connected
```

## Service Discovery

To find new MCP services:
1. Visit agenticflow.ai/app/mcp
2. Browse available services by category
3. Test actions in the MCP playground
4. Check action documentation for required parameters

## Performance Optimization

### Caching Strategies
1. **Cache Frequent Queries**: Store results in intermediate nodes
2. **Batch Operations**: Group similar MCP actions together
3. **Parallel Execution**: Run independent MCP actions simultaneously
4. **Connection Reuse**: Use same connection for multiple actions

### Cost Management
1. **Monitor Usage**: Track MCP action usage and costs
2. **Choose Efficient Actions**: Use batch operations when possible
3. **Implement Caching**: Reduce redundant API calls
4. **Rate Limit Awareness**: Avoid unnecessary repeated calls

## Security Best Practices

### Data Protection
1. **Sensitive Data**: Avoid passing sensitive data in instructions
2. **Input Validation**: Validate data before MCP processing
3. **Access Control**: Use principle of least privilege for connections
4. **Audit Logging**: Log MCP actions for compliance

### Connection Security
1. **Secure Storage**: Store connection UUIDs securely
2. **Regular Rotation**: Rotate API keys and OAuth tokens
3. **Access Monitoring**: Monitor connection usage and access patterns
4. **Revocation**: Immediately revoke compromised connections