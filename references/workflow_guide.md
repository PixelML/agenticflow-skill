# AgenticFlow Workflow Design Guide

## Core Design Principles

### Progressive Disclosure Approach
Design workflows with clear phases: data collection → processing → distribution. Each phase should build on the previous one.

### Template Variable Syntax
Use `{{node_name.field}}` syntax for data flow between nodes:
```javascript
{{node_name.response}}      // API call response
{{node_name.content}}       // LLM output
{{node_name.output}}        // MCP action output
{{input_parameter_name}}    // Input parameters
{{__app_connections__['uuid']}}  // MCP connections
```

## Hybrid Workflow Patterns

### Pattern 1: Data Collection + AI Processing + Multi-Channel Distribution
```javascript
{
  "name": "crm_enrichment_workflow",
  "nodes": [
    // Collect data from multiple sources
    {
      "name": "get_crm_data",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "HUBSPOT-GET-CONTACTS",
        "input_params": {
          "instruction": "Get all contacts created in last 7 days with their engagement scores"
        }
      }
    },
    // AI Analysis
    {
      "name": "analyze_contacts",
      "node_type_name": "llm",
      "input_config": {
        "model": "DeepSeek V3",
        "human_message": "Analyze these contacts and segment them: {{get_crm_data.output}}"
      }
    },
    // Multi-channel outreach
    {
      "name": "email_campaign",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "SENDGRID-SEND-BULK-EMAIL",
        "input_params": {
          "instruction": "Send personalized emails based on segmentation: {{analyze_contacts.content}}"
        }
      }
    }
  ]
}
```

### Pattern 2: Web Scraping + External Service Integration
```javascript
{
  "name": "competitor_analysis_workflow",
  "nodes": [
    {
      "name": "scrape_competitor",
      "node_type_name": "web_scraping",
      "input_config": {
        "web_url": "{{competitor_url}}",
        "max_tokens": 10000
      }
    },
    {
      "name": "analyze_data",
      "node_type_name": "llm",
      "input_config": {
        "model": "DeepSeek V3",
        "human_message": "Extract pricing and features: {{scrape_competitor.scraped_content}}"
      }
    },
    {
      "name": "update_sheet",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "GOOGLE_SHEETS-UPDATE-RANGE",
        "input_params": {
          "instruction": "Update competitor analysis sheet with: {{analyze_data.content}}"
        }
      }
    }
  ]
}
```

### Pattern 3: Content Creation + Multi-Platform Distribution
```javascript
{
  "name": "content_syndication_workflow",
  "nodes": [
    {
      "name": "generate_content",
      "node_type_name": "llm",
      "input_config": {
        "model": "Claude 3.5 Sonnet",
        "human_message": "Create engaging social media post about: {{topic}}"
      }
    },
    {
      "name": "create_image",
      "node_type_name": "generate_image",
      "input_config": {
        "prompt": "Create an image for social media post: {{generate_content.content}}"
      }
    },
    {
      "name": "post_to_linkedin",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "LINKEDIN-CREATE-POST",
        "input_params": {
          "instruction": "Post this content with image: {{generate_content.content}} and {{create_image.image_url}}"
        }
      }
    },
    {
      "name": "post_to_twitter",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "TWITTER-CREATE-TWEET",
        "input_params": {
          "instruction": "Tweet this content: {{generate_content.content}}"
        }
      }
    }
  ]
}
```

## Parallel Processing Patterns

### Efficient Parallel Execution
For workflows that can process multiple items simultaneously:
```javascript
{
  "name": "bulk_research_workflow",
  "nodes": [
    {
      "name": "get_competitors",
      "node_type_name": "llm",
      "input_config": {
        "human_message": "List top 5 competitors in {{industry}}"
      }
    },
    // Research branches execute in parallel
    {
      "name": "research_competitor_1",
      "node_type_name": "web_scraping",
      "input_config": {
        "web_url": "{{get_competitors.competitors[0]}}"
      },
      "prevNodeName": null
    },
    {
      "name": "research_competitor_2",
      "node_type_name": "web_scraping",
      "input_config": {
        "web_url": "{{get_competitors.competitors[1]}}"
      },
      "prevNodeName": null
    },
    {
      "name": "research_competitor_3",
      "node_type_name": "web_scraping",
      "input_config": {
        "web_url": "{{get_competitors.competitors[2]}}"
      },
      "prevNodeName": null
    },
    // Final aggregation waits for all research
    {
      "name": "compile_analysis",
      "node_type_name": "llm",
      "input_config": {
        "human_message": "Analyze and compare these competitor research results: {{research_competitor_1.scraped_content}}, {{research_competitor_2.scraped_content}}, {{research_competitor_3.scraped_content}}"
      },
      "prevNodeName": "research_competitor_3"
    }
  ]
}
```

## Error Handling Patterns

### Robust Workflow Design
Always include error handling for critical operations:
```javascript
{
  "name": "robust_email_workflow",
  "nodes": [
    {
      "name": "get_email_list",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "GOOGLE_SHEETS-GET-RANGE",
        "input_params": {
          "instruction": "Get email addresses from sheet"
        }
      }
    },
    {
      "name": "validate_emails",
      "node_type_name": "llm",
      "input_config": {
        "model": "DeepSeek V3",
        "human_message": "Validate these email addresses and remove invalid ones: {{get_email_list.output}}"
      }
    },
    {
      "name": "send_emails",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "SENDGRID-SEND-BULK-EMAIL",
        "input_params": {
          "instruction": "Send emails to validated addresses: {{validate_emails.content}}"
        }
      }
    },
    {
      "name": "log_results",
      "node_type_name": "mcp_run_action",
      "input_config": {
        "action": "GOOGLE_SHEETS-APPEND-ROW",
        "input_params": {
          "instruction": "Log email campaign results: {{send_emails.output}}"
        }
      }
    }
  ]
}
```

## Input Schema Design

### Professional User Interfaces
Design input schemas with proper UI metadata:
```javascript
{
  "input_schema": {
    "topic": {
      "type": "string",
      "title": "Content Topic",
      "description": "What should the content be about?",
      "ui_metadata": {
        "type": "short_text",
        "order": 0,
        "placeholder": "e.g., AI trends in marketing"
      }
    },
    "platforms": {
      "type": "array",
      "items": {"type": "string"},
      "title": "Target Platforms",
      "description": "Where should this be posted?",
      "ui_metadata": {
        "type": "multi_select",
        "options": ["LinkedIn", "Twitter", "Facebook", "Instagram"],
        "value": ["LinkedIn"],
        "order": 1
      }
    },
    "tone": {
      "type": "string",
      "title": "Content Tone",
      "description": "What tone should the content have?",
      "ui_metadata": {
        "type": "dropdown",
        "options": ["Professional", "Casual", "Humorous", "Inspirational"],
        "value": "Professional",
        "order": 2
      }
    }
  }
}
```

## Best Practices

### Performance Optimization
1. **Use Parallel Processing**: Execute independent nodes simultaneously
2. **Cache Results**: Store frequently used data in intermediate nodes
3. **Batch Operations**: Group similar operations together
4. **Use Efficient Models**: Choose appropriate LLM models (DeepSeek V3 for simple tasks, Claude 3.5 for complex ones)

### Maintainability
1. **Descriptive Node Names**: Use clear, action-oriented names
2. **Consistent Data Flow**: Follow predictable patterns
3. **Documentation**: Include comments for complex logic
4. **Modular Design**: Break large workflows into reusable components

### Error Prevention
1. **Input Validation**: Validate data before processing
2. **Connection Checks**: Verify MCP connections exist
3. **Rate Limiting**: Respect API rate limits
4. **Fallback Logic**: Provide alternatives for critical operations

## Common Architectural Patterns

### E-commerce Automation
```
Product Data → Price Analysis → Inventory Update → Notification System
```

### Content Marketing Pipeline
```
Research → Content Creation → Image Generation → Multi-Platform Posting
```

### Customer Support Automation
```
Ticket Analysis → Response Generation → CRM Update → Customer Notification
```

### Data Processing Pipeline
```
Data Collection → Cleaning/Validation → AI Processing → Storage/Distribution
```

## Troubleshooting Guide

### Common Issues

**Template Variable Errors**
- Verify node names match exactly
- Check field names in node output
- Use proper syntax: `{{node_name.field}}`

**MCP Connection Issues**
- Verify connection UUID is correct
- Ensure MCP service is enabled
- Check authentication status

**Workflow Performance**
- Reduce parallel execution for complex operations
- Use lighter LLM models where possible
- Implement caching for repeated operations

**Validation Failures**
- Check required fields in input_schema
- Verify node configurations
- Ensure output_mapping is properly structured