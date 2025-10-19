# AgenticFlow Complete Node Types Reference

This file contains cached node type definitions to avoid repeated API calls. **Last updated: 2025-10-18**

## Node Types by Category

### AI & LLM Processing
- **llm** - Use a large language model such as GPT (popular)
- **claude_ask** - Ask Claude anything you want! (popular)
- **openai_ask_chat_gpt** - Use AI to ask a question
- **openai_ask_assistant** - Ask a GPT assistant anything you want! (popular)
- **pml_llm** - Ask LLM advance (popular)
- **groq_chat** - Chat with Groq (popular)
- **google_gen_ai_ask_gemini** - Ask Gemini (popular)
- **llama3** - LLama 3 node

### Web Research & Search
- **perplexity_search** - Search with Perplexity AI models (popular)
- **openai_search** - OpenAI Web Search
- **google_search** - Google Search (popular)
- **tavily_search** - Search the web using Tavily's AI-powered search engine

### Web Scraping & Data Extraction
- **web_scraping** - Scrape content from a web page (popular)
- **web_scraping_apify** - Web Scraping using Apify
- **url_to_markdown** - Convert a URL to markdown (popular)
- **firecrawl_scrape** - Scrape a website using Firecrawl
- **firecrawl_extract** - Extract data from a website using Firecrawl
- **firecrawl_map** - Attempts to output all website's urls in a few seconds
- **firecrawl_crawl** - Crawls a URL and all its accessible subpages
- **firecrawl** - FireCrawl (exclusive)

### Data Processing & Extraction
- **extract_content** - Extract structured content from text using a specified schema
- **openai_extract_structured_data** - Returns structured data from provided unstructured text
- **claude_extract_structured_data** - Extract structured data with Claude
- **string_to_json** - Convert a string representation to a JSON object
- **get_value_by_key** - Get a value from a data object by key

### Image Generation & Processing
- **generate_image** - Use AI to generate images from your imagination
- **generate_image_v2** - Generate Image V2 (exclusive)
- **openai_generate_image** - Generate an image using text-to-image models
- **straico_image_generate** - Run Straico Image Generation
- **imagine_v4** - Imagine V4 (exclusive)
- **pml_edit_image** - Edit an image using a prompt
- **describe_image** - Use AI vision models to analyze and describe image content (popular)

### Image Enhancement & Editing
- **enhance** - Enhance image node (exclusive)
- **enhance_image_v2** - Image enhancement version 2.0 (exclusive)
- **magic_upscale** - Upscale and enhance image quality using AI (exclusive)
- **remove_background** - Remove the background from an image
- **face_detailer** - Face Detailer node (exclusive)
- **face_swap** - Face Swap node (exclusive)
- **hair_style** - Apply a new hair style to an image (exclusive)
- **inpainting** - Inpainting node for image editing (exclusive)
- **outpainting** - Expand an image beyond its original boundaries (exclusive)
- **instant_background** - Instantly create stunning AI-generated scene backgrounds (exclusive)
- **instant_background_v2** - Instant Background V2
- **image_to_image** - Image to Image (exclusive)
- **image_compare** - Compare two images side by side

### Video Generation & Processing
- **text_to_video** - Text to video
- **image_to_video** - Image to video
- **image_to_video_v2** - Image to video v2
- **image_to_video_v3** - Image to video v3
- **google_gen_ai_generate_veo_video** - Generate videos using Google's Veo (popular)
- **google_gen_ai_check_veo_video_status** - Check Veo video status (popular)
- **pixelml_sora** - Sora (Generate Video) (popular)
- **pixelml_bytedance** - ByteDance (Generate Video) (popular)
- **create_video** - Create video from topic
- **edit_video** - Edit video
- **video_faceswap** - Video faceswap (exclusive)
- **video_faceswap_pro** - Video Faceswap Pro
- **lipsync** - Lipsync

### Video Rendering & Templates
- **render_video** - Render video
- **render_video_with_preset** - Render video with preset
- **render_audiogram_video** - Render audiogram video
- **render_tiktok_video** - Render tiktok video

### Audio & Speech
- **text_to_speech** - Text to speech node
- **text_to_speech_custom** - Text to speech custom node
- **text_to_speech_voice_clone** - Text to speech with voice clone
- **openai_text_to_speech** - Text-to-Speech (OpenAI)
- **openai_transcriptions** - Audio Transcription
- **speech_to_text** - Speech to text node
- **text_to_music** - Text to music node

### QR Codes & Art
- **qr_art_v6** - Generate QR Art V6
- **qr_art_v5s_plus** - QR Art V5S Plus
- **blend_v4** - Generate Blend V4 (exclusive)

### Communication & Social
- **send_email** - Send an email to specified recipients
- **telegram_send_message** - Send a message to a Telegram chat
- **telegram_send_photo** - Send a photo to a Telegram chat
- **telegram_send_audio** - Send an audio file to a Telegram chat
- **telegram_send_document** - Send a document to a Telegram chat
- **telegram_send_video** - Send a video to a Telegram chat
- **telegram_send_chat_action** - Send a chat action to indicate bot activity
- **telegram_call_bot_api** - Call the Telegram bot API

### Social Media Integration
- **tiktok_upload_video** - Upload a video to TikTok
- **youtube_upload_video** - Upload a video to YouTube
- **instagram_scrapper** - Scrape an Instagram user
- **instagram_profile_analyzer** - Analyze an Instagram profile
- **tiktok_user_scrapper** - Scrape a TikTok user's profile
- **tiktok_user_posts_scrapper** - Scrape TikTok posts for a user
- **social_profile_analyzer** - Analyze a social media profile
- **linkedin_scrape_profile** - Fetch a LinkedIn Profile
- **linkedin_scrape_company** - Fetch a LinkedIn Company

### Data Management & Storage
- **json_to_google_sheet** - Create a Google Sheet from JSON
- **export_data_to_file** - Export data to a file
- **export_dataset** - Export a dataset to a file
- **import_dataset** - Import a file into a dataset
- **knowledge_retrieval** - Retrieve knowledge from a dataset
- **drive_create_folder** - Create a new folder in Drive
- **drive_list_items** - List items in a Drive folder
- **drive_get_item** - Get a Drive item by ID
- **drive_update_item** - Update a Drive item (rename/move)
- **drive_delete_item** - Delete a Drive item (soft delete)
- **drive_get_download_url** - Get presigned download URL for a Drive item
- **drive_create_upload_session** - Create an upload session
- **drive_resolve_uri** - Resolve a pmlfs:// URI to a Drive item
- **drive_get_uri_download_url** - Get presigned download URL by URI

### API & External Services
- **api_call** - Call an API
- **mcp_run_action** - Run any action on MCP
- **replicate_run_model** - Run any model on Replicate.com
- **fal_run_model** - Run any model on FAL.ai
- **straico_prompt_completion** - Run Straico Prompt Completion
- **url_context** - Google URL Context (popular)

### Task & Agent Management
- **create_agent_task** - Create a new agent task
- **list_agent_tasks** - List all agent tasks with optional filtering
- **get_agent_task** - Get an agent task by ID
- **update_agent_task** - Update an existing agent task
- **delete_agent_task** - Delete an agent task
- **create_multiple_agent_tasks** - Create multiple agent tasks at once
- **create_cx_agent** - Create a CX agent

### Workflow & Utilities
- **call_other_workflow** - Call another workflow
- **echo** - Get back whatever your input is
- **run_javascript** - Run JavaScript code
- **html_to_image** - Convert HTML content to an image

### Content & Media Search
- **search_video_in_pexels** - Search video in Pexels
- **search_sound_in_yt_sound_lib** - Search sound in Youtube sound library

### Document Processing
- **text_extract** - Extract text from various file formats including PDFs and images
- **optical_character_recognition** - Extract text and structure from documents (popular)

### Email & Marketing
- **generate_email_from_template** - Generate email from template (exclusive)
- **generate_email_from_template_gxs** - Generate email from template (exclusive)
- **generate_email_from_template_fsi** - Generate email from template (exclusive)
- **create_pinpoint_email_template** - Create a new email template for Amazon Pinpoint (exclusive)
- **create_pinpoint_campaign** - Create a campaign in PinPoint
- **import_pinpoint_segment** - Import PinPoint segment

### Business & Customer Management
- **customer_segment** - Generate customer segment from Amazon Personalize (exclusive)
- **segment_user** - Segment user
- **segment_user_v2** - Segment user V2

### Specialized Services
- **mma_flashbiz_connect** - MMA FlashBiz Connect node (exclusive)
- **mma_brand_confirm** - MMA Brand Confirm node (exclusive)
- **mma_art_moments** - MMA Art Moments node (exclusive)
- **submit_artifact** - Submit artifact to the platform GPTsDex (exclusive)

### AI Research
- **research_deep_research** - Research a topic using a deep research agent

## Connection Requirements

### Requires OpenAI Connection
- openai_ask_assistant, openai_ask_chat_gpt, openai_extract_structured_data
- openai_generate_image, openai_text_to_speech, openai_transcriptions
- openai_search, research_deep_research

### Requires Claude Connection
- claude_ask, claude_extract_structured_data

### Requires PixelML Connection
- Most image/video generation and processing nodes
- Social media scraping nodes
- Advanced AI features

### Requires Google Gen AI Connection
- google_gen_ai_ask_gemini, google_gen_ai_generate_veo_video
- google_gen_ai_check_veo_video_status

### Requires Perplexity Connection
- perplexity_search

### Requires TikTok Connection
- tiktok_upload_video

### Requires YouTube Connection
- youtube_upload_video

### Requires Telegram Bot Connection
- All telegram_* nodes

### Requires Firecrawl Connection
- firecrawl_scrape, firecrawl_extract, firecrawl_map, firecrawl_crawl

### Requires Replicate Connection
- replicate_run_model

### Requires FAL Connection
- fal_run_model

### Requires Straico Connection
- straico_prompt_completion, straico_image_generate

### Requires Tavily Connection
- tavily_search

### Requires Groq Connection
- groq_chat

### Requires MCP Connection
- mcp_run_action

## No Connection Required
- Many utility nodes: echo, run_javascript, html_to_image
- Data processing: extract_content, string_to_json, get_value_by_key
- Drive operations: drive_*
- Basic workflow operations: call_other_workflow
- Data export: export_data_to_file

## Popular Node Types
Based on the "popular" category:
- llm, claude_ask, openai_ask_assistant, pml_llm, groq_chat
- google_gen_ai_ask_gemini, perplexity_search, google_search
- web_scraping, describe_image, optical_character_recognition
- url_to_markdown, google_gen_ai_generate_veo_video
- google_gen_ai_check_veo_video_status, pixelml_sora
- pixelml_bytedance, url_context

## Cost Information
- Most nodes cost 4 credits with 0.01 PML cost
- Video generation nodes cost 0.1 PML (render_*, create_video, edit_video, image_to_video_*, text_to_video, lipsync, video_faceswap*, text_to_speech_voice_clone)
- Video Faceswap Pro costs 0.5 PML
- URL Context costs 0.1 PML

## Template Variable Usage

Use `{{node_name.field_name}}` syntax to reference outputs from previous nodes in workflow data flow.

Examples:
- `{{web_scraping.scraped_content}}`
- `{{llm.content}}`
- `{{claude_ask.content}}`
- `{{generate_image.image}}`
- `{{api_call.response_body}}`