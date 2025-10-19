# Node Selection Strategy Guide

Complete guide for selecting the right node types for any workflow requirement.

## 🎯 Selection Philosophy

**Key Principle:** Choose the simplest, most appropriate node that fulfills the requirement while considering:
- Connection requirements (some nodes need external connections)
- Cost efficiency (credits per execution)
- Feature capabilities
- Output format compatibility with downstream nodes

---

## 📊 Node Categories & When to Use

### 1. AI & LLM Nodes (20 nodes)

**Use for:** Intelligent processing, text generation, analysis, decision-making

#### Primary Choices

**`llm` - General Purpose AI** ⭐ MOST VERSATILE
- **Best for:** Any AI processing task
- **Connection:** None required
- **Models:** DeepSeek V3, Claude 3.5 Sonnet, GPT-4o-mini, GPT-4o
- **Cost:** Varies by model
- **Output field:** `.content`
- **Use when:** You need flexible AI processing without service lock-in

```javascript
{
  "node_type_name": "llm",
  "input_config": {
    "model": "DeepSeek V3",  // Cost-effective
    "temperature": 0.3,
    "max_tokens": 4000,
    "human_message": "Process this: {{input_data}}",
    "system_message": "You are an expert..."
  }
}
```

**`claude_ask` - Claude-Specific**
- **Best for:** Tasks requiring Claude's specific capabilities
- **Connection:** Claude Connection required
- **Cost:** 4 credits + PML $0.01
- **Output field:** `.answer`
- **Use when:** User specifically wants Claude or needs citations

**`openai_ask_chat_gpt` - ChatGPT-Specific**
- **Best for:** ChatGPT-specific features
- **Connection:** OpenAI Connection required
- **Output field:** `.response`
- **Use when:** User prefers OpenAI ecosystem

**`openai_ask_assistant` - GPT Assistants**
- **Best for:** Using pre-configured GPT assistants
- **Connection:** OpenAI Connection required
- **Use when:** Leveraging existing assistant configurations

#### Model Selection Guide

**DeepSeek V3:**
- Best for: Simple tasks, cost-effective processing
- Speed: Fast
- Quality: Good for straightforward tasks

**Claude 3.5 Sonnet:**
- Best for: Complex analysis, nuanced understanding
- Speed: Medium
- Quality: Excellent for complex reasoning

**GPT-4o-mini:**
- Best for: General tasks, good balance
- Speed: Fast
- Quality: Very good for most use cases

**GPT-4o:**
- Best for: Most complex reasoning tasks
- Speed: Medium
- Quality: Best available

---

### 2. Web Research & Search Nodes (6 nodes)

**Use for:** Gathering information from the internet

**`perplexity_search` - AI-Powered Research** ⭐ RECOMMENDED
- **Best for:** Comprehensive research with citations
- **Connection:** Perplexity required
- **Output:** Structured results with sources
- **Output field:** `.response`
- **Use when:** Need accurate, cited research

**`google_search` - Google Results**
- **Best for:** Simple web searches
- **Connection:** PixelML required
- **Output:** Organic and paid results
- **Use when:** Need Google-specific results

**`tavily_search` - Fast Web Search**
- **Best for:** Quick comprehensive searches
- **Output:** Results with direct answers
- **Use when:** Speed is priority

**`research_deep_research` - In-Depth Analysis**
- **Best for:** Thorough research projects
- **Use when:** Need comprehensive analysis

---

### 3. Web Scraping Nodes (9 nodes)

**Use for:** Extracting data from specific websites

**`web_scraping` - Simple Scraping** ⭐ START HERE
- **Best for:** Basic content extraction
- **Connection:** None required
- **Output field:** `.scraped_content`
- **Max tokens:** Configurable
- **Use when:** Simple page content needed

```javascript
{
  "node_type_name": "web_scraping",
  "input_config": {
    "web_url": "{{target_url}}",
    "max_tokens": 10000,
    "include_images": false,
    "include_links": false
  }
}
```

**`firecrawl_scrape` - Advanced Scraping**
- **Best for:** JavaScript-heavy sites, complex pages
- **Features:** JS rendering, screenshots
- **Use when:** Simple scraping fails

**`firecrawl_crawl` - Multi-Page Scraping**
- **Best for:** Scraping entire website sections
- **Use when:** Need multiple related pages

**`linkedin_scrape_profile` / `linkedin_scrape_company`**
- **Best for:** LinkedIn data extraction
- **Use when:** Specifically targeting LinkedIn

**`web_scraping_apify` - Advanced Features**
- **Connection:** PixelML required
- **Use when:** Need advanced scraping capabilities

---

### 4. Data Extraction & Processing Nodes (4 nodes)

**Use for:** Converting unstructured data to structured formats

**`openai_extract_structured_data` - JSON Extraction** ⭐ RECOMMENDED
- **Best for:** Reliable JSON schema extraction
- **Connection:** OpenAI recommended
- **Provides:** Guaranteed JSON structure
- **Use when:** Need structured data output

```javascript
{
  "node_type_name": "openai_extract_structured_data",
  "input_config": {
    "model": "gpt-4o-mini",
    "input_text": "{{unstructured_text}}",
    "json_schema": {
      "type": "object",
      "properties": {
        "name": {"type": "string"},
        "email": {"type": "string"},
        "price": {"type": "number"}
      },
      "required": ["name", "email"]
    }
  }
}
```

**`claude_extract_structured_data` - Alternative**
- **Best for:** Claude-based extraction
- **Use when:** Prefer Claude or OpenAI unavailable

**`string_to_json` - Simple Conversion**
- **Best for:** Converting string representations to JSON
- **Use when:** Data already in JSON-like format

**`optical_character_recognition` - OCR**
- **Best for:** Extracting text from images
- **Use when:** Processing scanned documents, images with text

---

### 5. Image Generation & Processing Nodes (13 nodes)

**Use for:** Creating and manipulating images

**`generate_image` - General Image Creation** ⭐ START HERE
- **Best for:** Creating images from prompts
- **Models:** DALL-E 3, Midjourney, Stable Diffusion
- **Output field:** `.image_url`

```javascript
{
  "node_type_name": "generate_image",
  "input_config": {
    "prompt": "{{image_description}}",
    "model": "dall-e-3",
    "size": "1024x1024",
    "quality": "standard"
  }
}
```

**`generate_image_v2` - Advanced Generation**
- **Best for:** More control over image parameters
- **Use when:** Need specific models or settings

**`describe_image` - Image Analysis**
- **Best for:** Understanding image content
- **Output:** Detailed descriptions, objects, text
- **Use when:** Need to analyze existing images

**`pml_edit_image` - Image Editing**
- **Best for:** Modifying existing images
- **Use when:** Need to edit rather than create

**`enhance_image_v2` - Image Enhancement**
- **Best for:** Upscaling, improving quality
- **Use when:** Need to improve image quality

---

### 6. Video Processing Nodes (14 nodes)

**Use for:** Creating and editing video content

**`text_to_video` - Text to Video**
- **Best for:** Creating videos from text prompts
- **Use when:** Need video content from descriptions

**`image_to_video` - Image Animation**
- **Best for:** Animating static images
- **Use when:** Have images to animate

**`render_video` - Video Rendering**
- **Best for:** Creating videos from templates
- **Use when:** Need structured video creation

**`google_gen_ai_generate_veo_video` - Google Veo**
- **Best for:** Advanced video generation
- **Connection:** Google Gen AI required

---

### 7. Audio & Speech Nodes (5 nodes)

**Use for:** Voice synthesis and transcription

**`text_to_speech` - TTS** ⭐ RECOMMENDED
- **Best for:** Converting text to speech
- **Use when:** Need voice output

**`speech_to_text` - Transcription**
- **Best for:** Converting audio to text
- **Use when:** Processing voice input

**`openai_text_to_speech` - OpenAI TTS**
- **Connection:** OpenAI required
- **Best for:** High-quality OpenAI voices

**`text_to_music` - Music Generation**
- **Best for:** Creating background music
- **Use when:** Need audio content

---

### 8. Document Processing Nodes (2 nodes)

**Use for:** Working with documents and text formats

**`url_to_markdown` - Web to Markdown**
- **Best for:** Converting web pages to clean markdown
- **Use when:** Need formatted text extraction

---

### 9. Email & Communication Nodes (5 nodes)

**Use for:** Sending emails (for advanced needs, use MCP)

**`send_email` - Basic Email**
- **Best for:** Simple email sending
- **Use when:** Basic email needs

**For advanced email:**
- Use MCP: `GMAIL-SEND-EMAIL`, `SENDGRID-SEND-BULK-EMAIL`

---

### 10. File Storage & Management Nodes (12 nodes)

**Use for:** File operations and storage

**`drive_*` nodes - OneDrive Integration**
- `drive_create_folder`
- `drive_upload_file`
- `drive_get_item`
- `drive_list_items`
- `drive_delete_item`

**`export_data_to_file` - Export Data**
- **Best for:** Saving workflow results to files
- **Formats:** JSON, CSV, TXT, XML

---

### 11. API & Integration Nodes (3 nodes)

**Use for:** Connecting to external services

**`api_call` - Custom HTTP Requests** ⭐ VERSATILE
- **Best for:** Any REST API integration
- **Methods:** GET, POST, PUT, DELETE, PATCH
- **Use when:** Need custom API integration

```javascript
{
  "node_type_name": "api_call",
  "input_config": {
    "url": "{{api_endpoint}}",
    "method": "GET",
    "headers": {
      "Content-Type": "application/json",
      "Authorization": "Bearer {{api_token}}"
    },
    "body": {},
    "response_type": "json"
  }
}
```

**`mcp_run_action` - MCP Integration** ⭐ POWERFUL
- **Best for:** 2,500+ service integrations
- **Use when:** Integrating Gmail, Slack, HubSpot, Shopify, etc.
- **See:** `references/mcp_integrations.md`

```javascript
{
  "node_type_name": "mcp_run_action",
  "input_config": {
    "action": "GMAIL-SEND-EMAIL",
    "input_params": {
      "instruction": "Send email to {{recipient}} with content: {{content}}"
    }
  },
  "connection": "{{__app_connections__['gmail-connection-id']}}"
}
```

---

## 🔄 Decision Flow Charts

### Choosing AI/LLM Nodes

```
Need AI processing?
  ↓
Do you need a specific provider?
  ├─ Yes: Use provider-specific node (claude_ask, openai_ask_chat_gpt)
  └─ No: Use llm node (most flexible)
       ↓
  Choose model based on task:
    ├─ Simple/Cost-effective: DeepSeek V3
    ├─ Balanced: GPT-4o-mini
    ├─ Complex reasoning: Claude 3.5 Sonnet
    └─ Most advanced: GPT-4o
```

### Choosing Research Nodes

```
Need web information?
  ↓
What type?
  ├─ Specific website content: web_scraping
  ├─ General research: perplexity_search
  ├─ Google results: google_search
  └─ Fast comprehensive: tavily_search
```

### Choosing Integration Approach

```
Need external service?
  ↓
Is it a standard service (Gmail, Slack, HubSpot, etc.)?
  ├─ Yes: Use mcp_run_action
  └─ No: Does it have a REST API?
       ├─ Yes: Use api_call
       └─ No: May not be possible
```

---

## 💡 Pro Tips

### Connection vs No Connection

**No Connection Required (Easier):**
- `llm` (most AI tasks)
- `web_scraping` (basic scraping)
- `string_to_json`
- Most utility nodes

**Connection Required (More Setup):**
- `claude_ask`, `openai_ask_chat_gpt` (provider-specific)
- `perplexity_search` (Perplexity)
- `mcp_run_action` (each service)
- Provider-specific nodes

**Recommendation:** Start with no-connection nodes when possible

### Cost Considerations

**Low Cost:**
- `llm` with DeepSeek V3
- `web_scraping`
- Basic utility nodes

**Medium Cost:**
- `llm` with GPT-4o-mini
- Search nodes
- Basic AI nodes

**Higher Cost:**
- `llm` with Claude 3.5 Sonnet or GPT-4o
- Advanced AI processing
- Image/video generation

### Output Field Reference

| Node Type | Output Field |
|-----------|--------------|
| `llm` | `.content` |
| `claude_ask` | `.answer` |
| `openai_ask_chat_gpt` | `.response` |
| `perplexity_search` | `.response` |
| `web_scraping` | `.scraped_content` |
| `openai_extract_structured_data` | `.extracted_data` |
| `generate_image` | `.image_url` |
| `mcp_run_action` | `.output` |
| `api_call` | `.response` |

---

## 📚 Quick Reference by Use Case

**Content Creation:**
- Text: `llm`
- Images: `generate_image`
- Videos: `text_to_video`
- Audio: `text_to_speech`

**Data Collection:**
- Web research: `perplexity_search`
- Specific sites: `web_scraping`
- APIs: `api_call` or `mcp_run_action`

**Data Processing:**
- Analysis: `llm`
- Extraction: `openai_extract_structured_data`
- Transformation: `llm` with specific prompts

**External Services:**
- Standard services: `mcp_run_action`
- Custom APIs: `api_call`
- Email: `send_email` or MCP

**File Operations:**
- Export: `export_data_to_file`
- Storage: `drive_*` nodes

---

**Next Steps:**
- Check `references/node_types.md` for complete node list
- See `references/complete_node_types.md` for detailed schemas
- Review `references/examples/workflows/` for real usage
