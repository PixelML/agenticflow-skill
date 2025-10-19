# Node Type Selection Guide

## For Web Research
- `perplexity_search` (best for comprehensive research, requires Perplexity connection)
- `openai_search` (alternative, requires OpenAI connection)
- `google_search` (basic search, requires PixelML connection)

## For AI Processing
- `llm` (flexible, multiple models including DeepSeek V3, no connection required)
- `claude_ask` (requires Claude connection)
- `openai_ask_chat_gpt` (requires OpenAI connection)

## For Data Extraction
- `openai_extract_structured_data` (best for JSON schema extraction)
- `claude_extract_structured_data` (alternative)
- `extract_content` (basic extraction)

## For Web Scraping
- `web_scraping` (simple, no connection required)
- `web_scraping_apify` (advanced, requires PixelML connection)

## Field Requirements & Common Fixes

### Node Structure Requirements
```javascript
{
  "name": "node_name",           // Required: string
  "title": "Display Title",      // Required: string
  "description": "Description",  // Required: string
  "node_type_name": "node_type", // Required: from available nodes
  "input_config": {},           // Required: object (can be empty {})
  "output_mapping": {},         // Required: object (can be empty {})
  "connection": "",             // Required: string (empty "" if not needed)
  "prevNodeName": null          // Optional: for workflow building only
}
```

### Critical Fixes
- Never use `null` for `output_mapping` or `connection` - use `{}` and `""` respectively
- Always include all required fields even if empty
- Use exact node type names from `agenticflow_list_node_types()`

### Template Variables
- Node outputs: `{{node_name.field}}` (e.g., `{{company_research.response}}`)
- Input variables: `{{input_variable}}` (e.g., `{{company_name}}`)
- Perplexity outputs use `.response`, LLM outputs use `.content`
