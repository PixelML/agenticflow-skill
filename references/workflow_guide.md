# AgenticFlow Workflow Design Guide

## Hybrid Workflow Patterns

### Pattern 1: Data Collection + AI Processing + Multi-Channel Distribution
```javascript
const hybridWorkflow = {
  nodes: [
    // Collect data from multiple sources
    {
      name: "get_crm_data",
      node_type_name: "mcp_run_action",
      input_config: {
        action: "HUBSPOT-GET-CONTACTS",
        input_params: {
          instruction: "Get all contacts created in the last 7 days with their engagement scores"
        }
      }
    },
    // AI Analysis
    {
      name: "analyze_contacts",
      node_type_name: "llm",
      input_config: {
        model: "DeepSeek V3",
        human_message: "Analyze these contacts and segment them: {{get_crm_data.output}}"
      }
    },
    // Multi-channel outreach
    {
      name: "email_campaign",
      node_type_name: "mcp_run_action",
      input_config: {
        action: "SENDGRID-SEND-BULK-EMAIL",
        input_params: {
          instruction: "Send personalized emails based on segmentation: {{analyze_contacts.content}}"
        }
      }
    }
  ]
}
```

### Pattern 2: Web Scraping + External Service Integration
```javascript
{
  nodes: [
    {
      name: "scrape_competitor",
      node_type_name: "web_scraping",
      input_config: {
        web_url: "{{competitor_url}}",
        max_tokens: 10000
      }
    },
    {
      name: "analyze_data",
      node_type_name: "llm",
      input_config: {
        model: "DeepSeek V3",
        human_message: "Extract pricing and features: {{scrape_competitor.scraped_content}}"
      }
    },
    {
      name: "update_sheet",
      node_type_name: "mcp_run_action",
      input_config: {
        action: "GOOGLE_SHEETS-UPDATE-RANGE",
        input_params: {
          instruction: "Update competitor analysis sheet with: {{analyze_data.content}}"
        }
      }
    }
  ]
}
```

## Parallel Processing Patterns
For efficiency, design workflows with parallel execution:
```javascript
// Good: Multiple competitors researched in parallel
{
  nodes: [
    { name: "identify_competitors", ... },
    { name: "competitor_1_research", prevNodeName: "identify_competitors" },
    { name: "competitor_2_research", prevNodeName: "identify_competitors" },
    { name: "competitor_3_research", prevNodeName: "identify_competitors" },
    { name: "final_analysis", prevNodeName: "competitor_3_research" } // Waits for all
  ]
}
```
