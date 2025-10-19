# AgenticFlow Node Types Reference

This document provides a comprehensive guide to all available node types in AgenticFlow, organized by functional category. Use this reference when designing workflows to select the appropriate nodes for your automation needs.

**Total Node Types Available:** 139

---

## Quick Selection Guide

### When to Use Each Category

**AI & LLM Nodes** - For intelligent processing, text generation, analysis, and decision-making
**Web Research & Search** - For gathering information from the internet
**Web Scraping** - For extracting data from specific websites
**Data Extraction & Processing** - For structuring unstructured data
**Image Generation & Processing** - For creating and manipulating images
**Video Processing** - For creating and editing videos
**Audio & Speech** - For voice synthesis and transcription
**Document Processing** - For working with documents and markdown
**Email & Communication** - For sending emails and messages
**File Storage & Management** - For file operations and storage
**API & Integration** - For connecting to external services
**MCP Integration** - For accessing 2,500+ external service integrations

---

## AI & LLM

*Intelligent processing, text generation, analysis, and AI-powered tasks*

**Node Types:** 20

### claude_ask

**Title:** Ask Claude

**Description:** Ask Claude anything you want!

**Connection Required:** Claude Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (any): The model to use for the chat.
- `prompt` (string): The question to ask the model.
- `images` (any): The images to use for the chat.
- `temperature` (number): Controls randomness: Lowering results in less random completions. As the tempera
- `max_tokens` (integer): The maximum number of tokens to generate. Requests can use up to 2,048 or 4,096 
- ... and 1 more fields

---

### claude_extract_structured_data

**Title:** Extract Structured Data with Claude

**Description:** Extract structured data from text or images using Claude.

**Connection Required:** Claude Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (any): The model to use for extracting structured data.
- `text` (any): Text to extract structured data from.
- `images` (any): Images to extract structured data from.
- `prompt` (string): Prompt to guide the AI in extracting structured data.
- `schema_mode` (any): Mode for defining the schema.
- ... and 3 more fields

---

### create_agent_task

**Title:** Create Agent Task

**Description:** Create a new agent task

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `title` (string): Title of the task
- `description` (string): Description of the task
- `priority` (any): Priority level of the task
- `details` (string): Additional details for the task
- `agent_id` (any): ID of the agent assigned to the task
- ... and 2 more fields

---

### create_multiple_agent_tasks

**Title:** Create Multiple Agent Tasks

**Description:** Create multiple new agent tasks at once using JSON input

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `tasks_json` (array): JSON string containing list of tasks to create. Each task should have title, des
- `thread_id` (any): ID of the thread associated with the tasks
- `parent_id` (any): ID of the parent task
- `agent_id` (any): ID of the agent assigned to the task

---

### delete_agent_task

**Title:** Delete Agent Task

**Description:** Delete an agent task

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `task_id` (string): ID of the task to delete

---

### get_agent_task

**Title:** Get Agent Task

**Description:** Get an agent task by ID

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `task_id` (string): ID of the task to retrieve
- `include_subtasks` (boolean): Whether to include subtasks in the response

---

### google_gen_ai_ask_gemini

**Title:** Ask Gemini

**Description:** Ask a Gemini anything you want!

**Connection Required:** Google Gen AI Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (any): The model to use for the chat.
- `model_response_modalities` (array): Model Response Modalities
- `prompt` (string): The question to ask the model.
- `images` (any): The images to use for the chat.
- `temperature` (number): Controls randomness: Lowering results in less random completions. As the tempera
- ... and 4 more fields

---

### groq_chat

**Title:** Chat with Groq

**Description:** Chat with high-performance Groq models for fast inference on open-source LLMs.

**Connection Required:** Groq Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (any): The Groq model to use for the chat.
- `prompt` (string): The message to send to the Groq model.
- `system_message` (any): Instructions for the AI assistant on how to behave and respond.
- `temperature` (number): Controls randomness: Lower values make output more focused and deterministic, hi
- `max_tokens` (integer): The maximum number of tokens to generate in the response.
- ... and 2 more fields

---

### list_agent_tasks

**Title:** List Agent Tasks

**Description:** List all agent tasks with optional filtering

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `thread_id` (any): Filter tasks by thread ID
- `parent_id` (any): Filter tasks by parent task ID

---

### llm

**Title:** LLM

**Description:** Use a large language model such as GPT

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `human_message` (string): The prompt that is fed to the model.
- `system_message` (any): This represents a system message, which tells the model how to behave.
- `chat_history_id` (any): The chat history id used to retrieve the chat history. If not provided, a new ch
- `model` (string): The AI model to use to generate the response.
- `temperature` (number): The temperature to use when generating the response. Higher temperatures will re

---

### openai_ask_assistant

**Title:** Ask Assistant

**Description:** Ask a GPT assistant anything you want!

**Connection Required:** OpenAI Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `assistant` (string): The assistant which will generate the completion.
- `prompt` (string): The text prompt to ask the assistant.
- `memory_key` (any): A memory key that will keep the chat history shared across runs. Leave empty to 

---

### openai_ask_chat_gpt

**Title:** Ask ChatGPT

**Description:** Use AI to ask a question

**Connection Required:** OpenAI Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (string): The model to use for the chat.
- `prompt` (string): The question to ask the model.
- `temperature` (number): Controls randomness: Lowering results in less random completions. As the tempera
- `max_tokens` (integer): The maximum number of tokens to generate. Requests can use up to 2,048 or 4,096 
- `top_p` (number): An alternative to sampling with temperature, called nucleus sampling, where the 
- ... and 3 more fields

---

### openai_extract_structured_data

**Title:** Extract Structured Data

**Description:** Returns structured data from provided unstructured text.

**Connection Required:** OpenAI Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (string): The model to use for extracting structured data. Use gpt-4o-2024-08-06 or later 
- `text` (string): The text from which to extract structured data.
- `schema_name` (string): A name for the schema (required by OpenAI).
- `json_schema` (object): The JSON Schema that defines the structure of the data to extract. Must be a val
- `strict` (boolean): Whether to enforce strict schema validation. When true, the model will always ge
- ... and 1 more fields

---

### openai_generate_image

**Title:** Generate Image

**Description:** Generate an image using text-to-image models

**Connection Required:** OpenAI Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (string): The model which will generate the image.
- `prompt` (string): The text prompt to generate an image from.
- `resolution` (string): The resolution to generate the image in.
- `quality` (string): Standard is faster, HD has better details.

---

### openai_search

**Title:** OpenAI Web Search

**Description:** Searches the web using OpenAI's capabilities

**Connection Required:** OpenAI Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `search_queries` (array): List of search queries to process using OpenAI's web search capability
- `model` (string): The OpenAI model to use for search

---

### openai_text_to_speech

**Title:** Text-to-Speech (OpenAI)

**Description:** Generate an audio recording from text using OpenAI's text-to-speech API

**Connection Required:** OpenAI Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (string): The model which will generate the audio.
- `text` (string): The text you want to convert to speech.
- `voice` (string): The voice to generate the audio in.
- `format` (string): The format you want the audio file in.
- `speed` (number): The speed of the audio. Minimum is 0.25 and maximum is 4.00.
- ... and 1 more fields

---

### openai_transcriptions

**Title:** Audio Transcription

**Description:** Transcribe audio to text using OpenAI's Whisper model

**Connection Required:** OpenAI Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (string): The model to use for transcription.
- `audio_file` (string): The audio file to transcribe.
- `response_format` (string): The format of the transcript output.
- `language` (any): The language of the input audio. Supplying the input language in ISO-639-1 forma
- `prompt` (any): An optional text to guide the model's style or continue a previous audio segment
- ... and 1 more fields

---

### pml_llm

**Title:** Ask LLM advance

**Description:** Use a large language model such as GPT

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `human_message` (string): The prompt that is fed to the model.
- `system_message` (any): This represents a system message, which tells the model how to behave.
- `chat_history_id` (any): The chat history id used to retrieve the chat history. If not provided, a new ch
- `model` (string): The AI model to use to generate the response.
- `temperature` (number): The temperature to use when generating the response. Higher temperatures will re

---

### telegram_send_chat_action

**Title:** Send Telegram Chat Action

**Description:** Send a chat action to a Telegram chat to indicate what the bot is doing.

**Connection Required:** Telegram Bot Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `chat_id` (string): Unique identifier for the target chat or username of the target channel (in the 
- `action` (string): Type of action to broadcast. Choose one, depending on what the user is about to 
- `business_connection_id` (any): Unique identifier of the business connection on behalf of which the action will 
- `message_thread_id` (any): Unique identifier for the target message thread; for supergroups only

---

### update_agent_task

**Title:** Update Agent Task

**Description:** Update an existing agent task

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `task_id` (string): ID of the task to update
- `title` (any): New title for the task
- `description` (any): New description for the task
- `status` (any): New status for the task
- `priority` (any): New priority for the task
- ... and 1 more fields

---

## Web Research & Search

*Information gathering and web search capabilities*

**Node Types:** 6

### google_search

**Title:** Google Search

**Description:** Search Google for recent results.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `search_query` (string): What do you want to search for?
- `top_k` (integer): Number of top search results to return

---

### perplexity_search

**Title:** Perplexity Search

**Description:** Search with Perplexity AI models.

**Connection Required:** Perplexity Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `prompt` (string): The prompt to send to Perplexity.
- `model` (string): The model to use for chat completion.
- `temperature` (number): Controls randomness in the response. Higher values make the output more random, 

---

### research_deep_research

**Title:** Deep Research

**Description:** Research a topic using a deep research agent.

**Connection Required:** OpenAI Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `topic` (string): The topic to research.
- `max_tool_calls` (integer): control the total number of tool calls (like to web search or an MCP server) tha
- `tools` (array): The tools to use for research. Read https://platform.openai.com/docs/guides/deep

---

### search_sound_in_yt_sound_lib

**Title:** Search sound in Youtube sound library

**Description:** Search sound in Youtube sound library.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `query` (string): The search query. Ocean, Tigers, Pears, etc.
- `num_results` (integer): Number of results to return

---

### search_video_in_pexels

**Title:** Search video in Pexels

**Description:** Search video in Pexels.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `query` (string): The search query. Ocean, Tigers, Pears, etc.
- `orientation` (any): Desired video orientation. The current supported orientations are: `landscape`, 
- `size` (any): Minimum video size. The current supported sizes are: `large`(4K), `medium`(Full 
- `page` (any): The page number you are requesting.
- `per_page` (any): Number of items per page.

---

### tavily_search

**Title:** Tavily Search

**Description:** Search the web using Tavily's AI-powered search engine

**Connection Required:** Tavily Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `query` (string): The search query to execute using Tavily
- `max_results` (integer): Maximum number of search results to return
- `topic` (string): Category of the search
- `include_answer` (boolean): Include a short answer to the original query in results
- `include_raw_content` (boolean): Include cleaned and parsed HTML of each search result
- ... and 5 more fields

---

## Web Scraping

*Extract data from websites and web pages*

**Node Types:** 9

### firecrawl

**Title:** FireCrawl

**Description:** FireCrawl

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `url` (string): URL to crawl.
- `prompt` (any): The prompt to use for the extraction without a schema.

---

### firecrawl_crawl

**Title:** Firecrawl Crawl

**Description:** Crawls a URL and all its accessible subpages, outputting the content from each page.

**Connection Required:** Firecrawl Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `url` (string): The URL to crawl.
- `ignore_sitemap` (boolean): Ignore the website sitemap when crawling.
- `crawl_entire_website` (boolean): Crawl the entire domain. Enables the crawler to navigate from a specific URL to 
- `limit` (integer): Maximum number of pages to crawl. Maximum is 100.
- `max_depth` (any): Maximum depth to crawl. Maximum is 100. If not specified, the crawler will crawl
- ... and 3 more fields

---

### firecrawl_extract

**Title:** Firecrawl Extract

**Description:** Extract data from a website using Firecrawl.

**Connection Required:** Firecrawl Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `urls` (array): The URLs to extract from.
- `prompt` (any): The prompt to use for the extract.
- `schema` (any): The schema to use for the extract.
- `enable_web_search` (boolean): When true, extraction can follow links outside the specified domain.

---

### firecrawl_map

**Title:** Firecrawl Map

**Description:** Attempts to output all website's urls in a few seconds.

**Connection Required:** Firecrawl Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `url` (string): The URL to scrape.
- `search` (any): Use the search feature to find URLs relevant to your query. For example, enterin
- `include_subdomains` (boolean): Include subdomains of the url in the result such as docs.*, blog.*, etc.
- `ignore_sitemap` (boolean): Ignore the website sitemap when mapping.
- `limit` (integer): The maximum number of URLs to return. Maximum is 5000.

---

### firecrawl_scrape

**Title:** Firecrawl Scrape

**Description:** Scrape a website using Firecrawl.

**Connection Required:** Firecrawl Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `url` (string): The URL to scrape.
- `format` (array): The format to use for the scrape.
- `json_options` (object): The options to use for the JSON scrape.

---

### linkedin_scrape_company

**Title:** Get a LinkedIn Company

**Description:** Fetch a LinkedIn Company

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.02)

**Key Input Fields:**
- `company_url` (string): The URL of the LinkedIn company to scrape.

---

### linkedin_scrape_profile

**Title:** Get a LinkedIn Profile

**Description:** Fetch a LinkedIn Profile

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.02)

**Key Input Fields:**
- `profile_url` (string): The URL of the LinkedIn profile to scrape.

---

### web_scraping

**Title:** Web Scraping

**Description:** Scrape content from a web page

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `web_url` (string): Web URL to scrape.
- `scraping_type` (string): Type of scraping to perform.
- `max_tokens` (integer): The maximum number of tokens to scrape.
- `tags_to_extract` (array): List of tags to extract from the HTML.

---

### web_scraping_apify

**Title:** Web Scraping using Apify

**Description:** Web Scraping using Apify

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `web_urls` (array): List of Web URL to scrape.
- `crawler_type` (string): Crawling engine to use. Default is playwright:firefox.
- `max_crawl_pages` (integer): The maximum number pages to crawl. It includes the start URLs, pagination pages,
- `max_crawl_depth` (integer): The maximum number of links starting from the start URL that the crawler will re
- `max_tokens_per_url` (integer): Maximum number of tokens to scrape per URL. Default is 10000.
- ... and 2 more fields

---

## Data Extraction & Processing

*Structure and process unstructured data*

**Node Types:** 5

### extract_content

**Title:** Extract Content

**Description:** Extract structured content from text using a specified schema.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `extract_from` (string): The content to extract from.
- `extract_schema` (object): A json string represent schema for the extracted content.
- `model` (any): The LLM model to use for extracting content.

---

### json_to_google_sheet

**Title:** JSON to Google Sheet

**Description:** Create a Google Sheet from JSON.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `title` (string): Title of the Google Sheet.
- `data` (string): Data to be inserted into the Google Sheet. Data can be a list of JSON objects or
- `share_with` (any): Emails to share the Google Sheet with. If not provided, the Google Sheet will be
- `role` (string): Role of the user to be shared with.
- `prem_type` (string): The account type to be shared with. Default is anyone.

---

### optical_character_recognition

**Title:** Optical Character Recognition

**Description:** Extract text and structure from documents and images using OCR

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `type` (any): Type of document to process
- `url` (string): URL of the document or image to process

---

### string_to_json

**Title:** Convert String to JSON

**Description:** Convert a string representation to a JSON object.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `string_to_convert` (string): The string to convert to JSON.

---

### text_extract

**Title:** Text Extract

**Description:** Extract text from various file formats including PDFs and images.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `file` (string): File to extract text from

---

## Image Generation & Processing

*Create, edit, and analyze images*

**Node Types:** 13

### describe_image

**Title:** Analyze Image

**Description:** Use AI vision models to analyze and describe image content

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `image_url` (string): The URL of the image to analyze and describe
- `model` (string): The AI vision model to use for image analysis. Gemini Flash offers fast, efficie
- `prompt` (string): Instructions for how the AI should analyze and describe the image

---

### enhance_image_v2

**Title:** Enhance Image V2

**Description:** Image enhancement version 2.0 utilizes artificial intelligence to improve the quality of your photos. It can increase resolution, sharpen details, and correct colors, all while preserving the original content of your image. This can be especially helpful for restoring old photos or enlarging low-resolution images

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `image_url` (string): Image url

---

### generate_image

**Title:** Generate Image

**Description:** Use AI to generate images from your imagination. Simply describe what you want to see, and watch the AI bring it to life.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `provider` (string): The provider to use for the image generation. Default is Runware
- `prompt` (string): What you wish to see in the output image. A strong, descriptive prompt that clea
- `negative_prompt` (string): A blurb of text describing what you do not wish to see in the output image.
- `aspect_ratio` (string): The aspect ratio of the generated image.
- `model_id` (any): The model ID to use for the image generation.
- ... and 1 more fields

---

### generate_image_v2

**Title:** Generate Image V2

**Description:** Use AI to generate images from your imagination. Simply describe what you want to see, and watch the AI bring it to life.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `prompt` (string): What you wish to see in the output image. A strong, descriptive prompt that clea
- `negative_prompt` (string): A blurb of text describing what you do not wish to see in the output image.
- `guidance_scale` (number): The guidance scale of the generated image.
- `steps` (integer): The number of steps to take in the generated image.
- `batch_size` (integer): The number of images to generate in a batch.
- ... and 2 more fields

---

### html_to_image

**Title:** HTML to Image

**Description:** Convert HTML content to an image.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `html_content` (string): The HTML content to convert to an image
- `width` (integer): Width of the output image in pixels
- `height` (any): Height of the output image in pixels (optional - will be calculated from content
- `shared_messages` (any): Shared messages from the node

---

### image_compare

**Title:** Image Compare

**Description:** Compare two images side by side.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `first_image` (string): First image url
- `second_image` (string): Second image url

---

### image_to_image

**Title:** Image to Image

**Description:** Use AI to generate images from your imagination. Simply describe what you want to see, and watch the AI bring it to life.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `source_image` (string): The image to use as the source for the image to image generation.
- `prompt` (string): What you wish to see in the output image. A strong, descriptive prompt that clea
- `prompt_2` (any): A second prompt to guide the image generation.
- `negative_prompt` (string): A blurb of text describing what you do not wish to see in the output image.
- `guidance_scale` (number): The guidance scale of the generated image.
- ... and 7 more fields

---

### image_to_video

**Title:** Image to video

**Description:** Image to video

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `model` (string): Model
- `prompt` (string): Prompt
- `image` (string): Image
- `negative_prompt` (any): Negative prompt
- `size` (string): Size (Only for Pixel M)
- ... and 1 more fields

---

### image_to_video_v2

**Title:** Image to video v2

**Description:** Image to video v2

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `prompt` (string): Prompt
- `image` (string): Start image of the video.
- `end_image` (any): End image of the video. If provided, the video will be generated by interpolatin
- `negative_prompt` (any): Negative prompt
- `width` (integer): Width
- ... and 5 more fields

---

### image_to_video_v3

**Title:** Image to video v3

**Description:** Image to video v3

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `prompt` (string): Prompt
- `image` (string): Start image of the video.
- `negative_prompt` (any): Negative prompt
- `steps` (integer): Steps
- `guidance_scale` (integer): Guidance scale
- ... and 1 more fields

---

### pml_edit_image

**Title:** Edit Image

**Description:** Edit an image using a prompt.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (string): The model to use for the edit image. Default is Nano Banana
- `prompt` (string): The prompt to edit the image.
- `images` (array): The images to use for the chat.
- `aspect_ratio` (string): The aspect ratio to use for the edit image.
- `temperature` (number): Controls randomness: Lowering results in less random completions. As the tempera
- ... and 2 more fields

---

### straico_image_generate

**Title:** Run Straico Image Generation

**Description:** Run a image generation using the Straico API.

**Connection Required:** Straico Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (string): The AI model to use for image generation
- `description` (string): A detailed textual description of the image to be generated
- `size` (string): The desired image dimensions
- `variations` (integer): Number of images to generate

---

### telegram_send_photo

**Title:** Send Telegram Photo

**Description:** Send a photo to a Telegram chat.

**Connection Required:** Telegram Bot Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `chat_id` (string): Unique identifier for the target chat or username of the target channel (in the 
- `photo` (string): Photo to send. Pass a file_id as String to send a photo that exists on the Teleg
- `business_connection_id` (any): Unique identifier of the business connection on behalf of which the message will
- `message_thread_id` (any): Unique identifier for the target message thread (topic) of the forum; for forum 
- `caption` (any): Photo caption (may also be used when resending photos by file_id), 0-1024 charac
- ... and 10 more fields

---

## Video Processing

*Create and edit video content*

**Node Types:** 14

### create_video

**Title:** Create video from topic

**Description:** Create video from topic

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `brief` (any): Brief description of the video. Required if transcript is not provided.
- `images` (any): List of image URLs, used to create the video. If not provided, our AI will find 
- `transcript` (any): Transcript of the video. If not provided, our AI will generate the transcript ba
- `voice_over_language` (any): Voice over id. If not provided, our AI will choose the most suitable voice based
- `background_music` (any): Background music. If not provided, our AI will choose the most suitable backgrou
- ... and 2 more fields

---

### edit_video

**Title:** Edit video

**Description:** Edit video

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `brief` (string): Brief description of the video.
- `images` (any): List of image URLs, used to create the video. If not provided, our AI will find 
- `existing_video_config` (string): Existing Video Config
- `existing_video_gen_info` (string): Existing Video Gen Info
- `change_request` (string): Change Request

---

### google_gen_ai_check_veo_video_status

**Title:** Check Veo Video Status

**Description:** Check the status of a Veo video generation operation and retrieve the result if completed.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `operation_id` (string): The operation ID returned from the video generation request.

---

### google_gen_ai_generate_veo_video

**Title:** Generate Veo Video

**Description:** Generate videos using Google's Veo video generation models.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (any): The Veo model to use for video generation.
- `prompt` (string): The prompt describing the video to generate.
- `aspect_ratio` (any): The aspect ratio for the generated video.
- `resolution` (any): The resolution for the generated video.
- `person_generation` (any): Controls person generation in videos.
- ... and 3 more fields

---

### render_audiogram_video

**Title:** Render audiogram video

**Description:** Render audiogram video

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `cover_img` (string): Cover image
- `title` (string): Video title
- `title_color` (string): Title color
- `subtitle_text_color` (string): Subtitle text color
- `subtitle_line_per_page` (integer): Subtitle line per page
- ... and 6 more fields

---

### render_tiktok_video

**Title:** Render tiktok video

**Description:** Render tiktok video

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `video` (string): Video to use for rendering
- `voice` (any): Voice
- `voice_volume` (any): Voice volume
- `audio` (any): Audio to use for rendering
- `audio_volume` (any): Audio volume
- ... and 1 more fields

---

### render_video

**Title:** Render video

**Description:** Render video

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `video_config` (string): Video configuration
- `file_name` (any): File name

---

### render_video_with_preset

**Title:** Render video with preset

**Description:** Render video preset

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `images` (any): List of images to use for rendering
- `caption` (string): Url to a srt file containing the caption
- `voice` (any): Url to voice file
- `voice_volume` (any): Voice volume
- `audio` (any): Url to audio file
- ... and 3 more fields

---

### telegram_send_video

**Title:** Send Telegram Video

**Description:** Send a video to a Telegram chat.

**Connection Required:** Telegram Bot Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `chat_id` (string): Unique identifier for the target chat or username of the target channel (in the 
- `video` (string): Video to send. Pass a file_id as String to send a video that exists on the Teleg
- `business_connection_id` (any): Unique identifier of the business connection on behalf of which the message will
- `message_thread_id` (any): Unique identifier for the target message thread (topic) of the forum; for forum 
- `duration` (any): Duration of sent video in seconds
- ... and 17 more fields

---

### text_to_video

**Title:** Text to video

**Description:** Text to video

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `model` (string): Model
- `prompt` (string): Prompt
- `negative_prompt` (any): Negative prompt
- `steps` (integer): Steps
- `guidance_scale` (integer): Guidance scale
- ... and 3 more fields

---

### tiktok_upload_video

**Title:** Upload Video to TikTok

**Description:** Upload a video to TikTok

**Connection Required:** TikTok Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `video_url` (string): The URL to the video to upload.

---

### video_faceswap

**Title:** Video faceswap

**Description:** Video faceswap

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `source_image_url` (string): Source image URL
- `video_input_url` (string): Video input URL

---

### video_faceswap_pro

**Title:** Video Faceswap Pro

**Description:** Advanced face swapping for videos with support for multiple faces and highest quality output

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.5)

**Key Input Fields:**
- `source_image_urls` (array): Source image URLs
- `video_input_url` (string): Video input URL
- `face_detect_info` (object): Face detection information containing crop_arr, crop_landmarks, and face_index d

---

### youtube_upload_video

**Title:** Upload Video to YouTube

**Description:** Upload a video to YouTube using the YouTube Data API

**Connection Required:** YouTube Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `file_path` (string): Path to the video file to upload
- `title` (string): Title of the video
- `description` (string): Description of the video
- `category` (string): Numeric video category ID. See https://developers.google.com/youtube/v3/docs/vid
- `keywords` (string): Video keywords, comma separated
- ... and 1 more fields

---

## Audio & Speech

*Voice synthesis, transcription, and audio processing*

**Node Types:** 6

### speech_to_text

**Title:** Speech to text

**Description:** Speech to text node.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `provider` (any): Which provider to use for speech to text
- `language` (any): Which language that the audio is in
- `audio` (string): Audio file url to convert transcribe

---

### telegram_send_audio

**Title:** Send Telegram Audio

**Description:** Send an audio file to a Telegram chat.

**Connection Required:** Telegram Bot Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `chat_id` (string): Unique identifier for the target chat or username of the target channel (in the 
- `audio` (string): Audio file to send. Pass a file_id as String to send an audio file that exists o
- `business_connection_id` (any): Unique identifier of the business connection on behalf of which the message will
- `message_thread_id` (any): Unique identifier for the target message thread (topic) of the forum; for forum 
- `caption` (any): Audio caption, 0-1024 characters after entities parsing
- ... and 12 more fields

---

### text_to_music

**Title:** Text to music

**Description:** Text to music node.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `prompt` (string): Prompt for the music generation.
- `instrumental` (any): Create a song without lyrics.
- `style` (string): Music style. For example: pop, rock, jazz, etc.
- `title` (string): Title of the song.

---

### text_to_speech

**Title:** Text to speech

**Description:** Text to speech node.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `voice` (any): Voice to use for text to speech
- `text` (string): Text to convert to speech

---

### text_to_speech_custom

**Title:** Text to speech custom

**Description:** Text to speech custom node.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `provider` (string): Provider
- `text` (string): Text to convert to speech
- `description` (string): Provide description of the output audio

---

### text_to_speech_voice_clone

**Title:** Text to speech with voice clone

**Description:** Convert text to speech with voice cloning across 32 languages.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `voice_id` (string): Voice ID
- `text` (string): Text
- `file_name` (any): File name

---

## Document Processing

*Work with documents, PDFs, and text formats*

**Node Types:** 2

### telegram_send_document

**Title:** Send Telegram Document

**Description:** Send a document to a Telegram chat.

**Connection Required:** Telegram Bot Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `chat_id` (string): Unique identifier for the target chat or username of the target channel (in the 
- `document` (string): File to send. Pass a file_id as String to send a file that exists on the Telegra
- `business_connection_id` (any): Unique identifier of the business connection on behalf of which the message will
- `message_thread_id` (any): Unique identifier for the target message thread (topic) of the forum; for forum 
- `thumbnail` (any): Thumbnail of the file sent; can be ignored if thumbnail generation for the file 
- ... and 10 more fields

---

### url_to_markdown

**Title:** URL to Markdown

**Description:** Convert a URL to markdown

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `url` (string): It can be a url to a PDF/HTML/DOCX/DOC/XLSX/XLS/PPTX/PPT/TXT file or a website u

---

## Email & Communication

*Send emails and communicate*

**Node Types:** 5

### create_pinpoint_email_template

**Title:** Create PinPoint Email Template

**Description:** Create a new email template for Amazon Pinpoint.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `template_name` (string): The name of the message template.
- `html` (string): The message body, in HTML format, to use in email messages that are based on the
- `text` (string): The message body, in plain text format, to use in email messages that are based 
- `subject` (string): Email subject.
- `template_description` (any): A custom description of the message template.

---

### generate_email_from_template

**Title:** Generate email from template

**Description:** Quickly create an email content by filling in pre-written content from a template.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `email_template` (string): The email template to use for generating the email content.
- `email_content` (string): The email content to include in the template.
- `hero_image` (string): The hero image to include in the email.
- `cta` (string): The call to action link to include in the email.

---

### generate_email_from_template_fsi

**Title:** Generate email from template

**Description:** Quickly create an email content by filling in pre-written content from a template.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `email_template` (string): The email template to use for generating the email content.
- `email_content` (string): The email content to include in the template.
- `hero_image` (string): The hero image to include in the email.
- `cta` (string): The call to action link to include in the email.

---

### generate_email_from_template_gxs

**Title:** Generate email from template

**Description:** Quickly create an email content by filling in pre-written content from a template.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `email_template` (string): The email template to use for generating the email content.
- `email_content` (string): The email content to include in the template.
- `hero_image` (string): The hero image to include in the email.
- `cta` (string): The call to action link to include in the email.

---

### send_email

**Title:** Send Email

**Description:** Send an email to specified recipients.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `recipient_emails` (array): List email addresses of the recipients.
- `cc_emails` (array): List email addresses of the CC recipients.
- `bcc_emails` (array): List email addresses of the BCC recipients.
- `subject` (string): Subject of the email.
- `body` (any): Body of the email. This field is required if body_html is not provided.
- ... and 1 more fields

---

## File Storage & Management

*File operations, storage, and management*

**Node Types:** 13

### drive_create_folder

**Title:** Create Folder

**Description:** Create a new folder in Drive

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `name` (string): Name of the folder to create
- `parent_id` (any): ID of the parent folder (leave empty for root)

---

### drive_create_upload_session

**Title:** Create Upload Session

**Description:** Create an upload session and get presigned URL for file upload

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `name` (string): Name of the file to upload
- `content_type` (string): MIME type of the file
- `parent_id` (any): ID of the parent folder (None for root)
- `size` (any): Expected file size in bytes
- `sha256` (any): Expected SHA256 hash of the file
- ... and 1 more fields

---

### drive_delete_item

**Title:** Delete Item

**Description:** Delete a Drive item (soft delete)

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `item_id` (string): ID of the item to delete

---

### drive_get_download_url

**Title:** Get Download URL

**Description:** Get presigned download URL for a Drive item

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `item_id` (string): ID of the item to get download URL for
- `ttl` (integer): URL expiration time in seconds (default: 3600)

---

### drive_get_item

**Title:** Get Item

**Description:** Get a Drive item by ID

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `item_id` (string): ID of the item to retrieve

---

### drive_get_uri_download_url

**Title:** Get URI Download URL

**Description:** Get presigned download URL for a Drive item by URI

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `uri` (string): PMLFS URI to resolve (format: pmlfs://<project_id>/<path>)
- `ttl` (integer): URL expiration time in seconds (default: 3600)

---

### drive_list_items

**Title:** List Items

**Description:** List items in a Drive folder

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `parent_id` (any): ID of the parent folder (leave empty for root)
- `limit` (integer): Maximum number of items to return
- `offset` (integer): Number of items to skip

---

### drive_resolve_uri

**Title:** Resolve URI

**Description:** Resolve a pmlfs:// URI to a Drive item

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `uri` (string): PMLFS URI to resolve (format: pmlfs://<project_id>/<path>)

---

### drive_update_item

**Title:** Update Item

**Description:** Update a Drive item (rename/move)

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `item_id` (string): ID of the item to update
- `name` (any): New name for the item (leave empty to keep current name)
- `parent_id` (any): ID of the new parent folder (leave empty to keep current parent)
- `if_match` (any): ETag for concurrency control (optional)

---

### export_data_to_file

**Title:** Export Data to File

**Description:** Export data to a file. The file will be stored in S3 and the URL will be returned.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `data` (string): Data to export
- `file_extension` (string): File extension

---

### export_dataset

**Title:** Export Data Set

**Description:** Export a dataset to a file.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `dataset_id` (string): The ID of the dataset to export.
- `workflow_run_status` (any): Filter documents by workflow run status.

---

### instagram_profile_analyzer

**Title:** Instagram profile analyzer

**Description:** Analyze an Instagram profile.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `instagram_profile` (string): The Instagram profile to analyze.
- `profile_pic_url` (string): The URL of the profile picture.

---

### social_profile_analyzer

**Title:** Social profile analyzer

**Description:** Analyze a social media profile.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `social_data` (string): The social media data to analyze in JSON string format.
- `profile_pic_url` (string): The URL of the profile picture.

---

## API & Integration

*Connect to external services and APIs*

**Node Types:** 3

### api_call

**Title:** API Call

**Description:** Call an API

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `url` (string): The URL to call.
- `method` (any): The method to call the API.
- `headers` (any): The headers to send in the API call in JSON format.
- `body` (any): The body to send in the API call.
- `timeout` (integer): The timeout in seconds for the API call.
- ... and 1 more fields

---

### mcp_run_action

**Title:** Run MCP Action

**Description:** Run any action on MCP.

**Connection Required:** MCP Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `action` (string): The action to run. This is the name of the action to run.
- `input_params` (object): The input parameters for the model. These vary depending on the model you're usi

---

### telegram_call_bot_api

**Title:** Call Telegram Bot API

**Description:** Call the Telegram bot API.

**Connection Required:** Telegram Bot Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `endpoint` (string): The endpoint to call on the Telegram bot API. For example, 'sendMessage'.
- `data` (object): The data to send to the Telegram bot API.

---

## Specialized & Advanced

*Specialized tools and advanced features*

**Node Types:** 43

### blend_v4

**Title:** Generate Blend V4

**Description:** Unleash Artistic QR Codes: Generate stunning AI-powered QR art with Quick Blend V4 (powered by https://quickqr.art)

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `prompt` (string): What you wish to see in the output image. A strong, descriptive prompt that clea
- `negative_prompt` (string): A blurb of text describing what you do not wish to see in the output image
- `background_url` (string): The URL of the background image.
- `qr_code_url` (string): The URL of the QR code image.
- `qr_strength` (number): The strength of the QR code. Higher values will make the QR code more prominent 
- ... and 5 more fields

---

### call_other_workflow

**Title:** Call Other Workflow

**Description:** Call another workflow.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `workflow_id` (string): The ID of the workflow to call. (Destination workflow must have public access)
- `workflow_input` (string): The input to the workflow in JSON format.

---

### comfy_ui

**Title:** Comfy UI

**Description:** Run any ComfyUI workflow.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `workflow_json` (string): Your ComfyUI workflow as JSON. You must use the API version of your workflow. Ge

---

### create_cx_agent

**Title:** Create CX Agent

**Description:** Create a CX agent.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `access_token` (string): The access token to use to create the agent.
- `workspace_id` (string): The ID of the workspace to create the agent in.
- `agent_name` (string): The name of the agent to create.
- `data` (object): The data to create the agent with.
- `email` (string): The email address to send notifications when the agent is created.

---

### create_pinpoint_campaign

**Title:** Create PinPoint Campaign

**Description:** Create a campaign in PinPoint.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `application_id` (string): The ID of the application to import the segment to.
- `name` (string): Campaign Name.
- `description` (any): Campaign Description.
- `segment_id` (string): Segment ID.
- `email_body` (any): Email Body.
- ... and 3 more fields

---

### customer_segment

**Title:** Customer Segment

**Description:** Generate customer segment from Amazon Personalize.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `prompt` (string): The prompt to use for the question answering.
- `car_model` (string): The car model to use for the question answering.

---

### echo

**Title:** Echo

**Description:** Get back whatever your input is

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `data` (string): The data to echo

---

### enhance

**Title:** Enhance Image

**Description:** Enhance image node.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `image_url` (string): Image url

---

### face_detailer

**Title:** Face Detailer

**Description:** Face Detailer node.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `image_url` (string): Image url

---

### face_swap

**Title:** Face Swap

**Description:** Face Swap node.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `source_image_url` (string): Source image url
- `input_image_url` (string): Input image url
- `frame_image_url` (string): Frme image url
- `frame_width` (integer): The width of the frame image.
- `frame_height` (integer): The height of the frame image.
- ... and 4 more fields

---

### fal_run_model

**Title:** Run FAL Model

**Description:** Run any model on FAL.ai with your API key.

**Connection Required:** FAL Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (string): The FAL model to run (format: 'owner/model_name'). Example: 'fal-ai/fast-sdxl'
- `input_params` (object): The input parameters for the model. These vary depending on the model you're usi
- `image_input` (any): Optional image input for models that require an image. This will be added to the
- `use_streaming` (boolean): Whether to use streaming for models that support it. This allows receiving parti

---

### get_value_by_key

**Title:** Get Value by Key

**Description:** Get a value from a data object by key.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `data` (string): The data object to get the value from.
- `key_to_match` (string): The key field to search for in the data objects.
- `value_to_match` (string): The value to match in the specified key field.

---

### hair_style

**Title:** Hair Style

**Description:** Apply a new hair style to an image.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `prompt` (string): Prompt
- `image_url` (string): Image url

---

### imagine_v4

**Title:** Imagine V4

**Description:** Imagine V4

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `prompt` (string): Input your prompt

---

### import_dataset

**Title:** Import Data into Dataset

**Description:** Import a file into a dataset.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `file_url` (string): The URL of the file to import. Supports CSV, XLSX, and JSON lines.
- `dataset_id` (string): The ID of the dataset to import into, if applicable.

---

### import_pinpoint_segment

**Title:** Import PinPoint Segment

**Description:** Import PinPoint segment.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `application_id` (string): The ID of the application to import the segment to.
- `segment_name` (string): Segment name.
- `format` (string): The format of the files that contain the endpoint definitions to import.
- `data` (string): The data to import.

---

### inpainting

**Title:** Inpainting

**Description:** Inpainting node for image editing.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `prompt` (string): Prompt
- `image_url` (string): Image url
- `mask_url` (string): Mask url

---

### instagram_scrapper

**Title:** Instagram scrapper

**Description:** Scrape an Instagram user.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `user_name` (string): The username of the Instagram user.

---

### instant_background

**Title:** Instant Background

**Description:** Instantly create stunning AI-generated scene backgrounds for your product images with one click, offering commercial-grade quality and a diverse style selection for every need.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `image_url` (string): Image url
- `object` (string): Object (What should stay in the image?) 
- `background_prompt` (string): Describe the new background you want to add to the image.
- `padding_top` (any): Padding top
- `padding_bottom` (any): Padding bottom
- ... and 2 more fields

---

### instant_background_v2

**Title:** Instant Background V2

**Description:** Instantly create stunning AI-generated scene backgrounds for your product images with one click, offering commercial-grade quality and a diverse style selection for every need

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `image_url` (string): Image url
- `prompt` (string): Describe the new background you want to add to the image.
- `negative_prompt` (any): Negative prompt
- `padding_top` (any): Padding top
- `padding_bottom` (any): Padding bottom
- ... and 2 more fields

---

### knowledge_retrieval

**Title:** Knowledge Retrieval

**Description:** Retrieve knowledge from a dataset.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `dataset` (string): The dataset to retrieve knowledge from.
- `query` (string): The query to retrieve knowledge from the dataset.
- `top_k` (integer): The number of documents to return.

---

### lipsync

**Title:** Lipsync

**Description:** Lipsync

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `input_video_url` (string): Input video URL
- `audio_url` (string): Audio URL
- `file_name` (any): File name

---

### llama3

**Title:** LLama 3

**Description:** LLama 3 node

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `background` (string): The background prompt sent to the LLama 3 model
- `prompt` (string): The prompt sent to the LLama 3 model

---

### magic_upscale

**Title:** Magic Upscale

**Description:** Upscale and enhance image quality using AI.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `image_url` (string): Image url

---

### mma_art_moments

**Title:** MMA Art Moments

**Description:** MMA Art Moments node

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `code` (string): Code
- `name` (string): Name
- `email` (string): Email
- `company_name` (string): Company Name
- `job_title` (string): Job Title

---

### mma_brand_confirm

**Title:** MMA Brand Confirm

**Description:** MMA Brand Confirm node

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `brand` (string): Brand Name
- `morning_session` (array): List of morning session topics
- `afternoon_session` (array): List of afternoon session topics

---

### mma_flashbiz_connect

**Title:** MMA FlashBiz Connect

**Description:** MMA FlashBiz Connect node

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `name` (string): Name
- `company_name` (string): Company Name
- `email` (string): Email
- `phone_number` (string): Phone Number
- `company_pitch_deck` (string): Company Pitch Deck
- ... and 2 more fields

---

### outpainting

**Title:** Outpainting

**Description:** Expand an image beyond its original boundaries using AI-generated content.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `image_url` (string): Image url
- `direction` (any): Direction to expand

---

### pixelml_bytedance

**Title:** ByteDance (Generate Video)

**Description:** Generate video using ByteDance's video generation models.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (any): The ByteDance model to use for video generation.
- `prompt` (string): The prompt describing the video to generate.
- `start_frame` (any): Optional URL to an image to use as the starting frame for video generation. If p
- `end_frame` (any): Optional URL to an image to use as the ending frame for video generation. If pro
- `aspect_ratio` (any): The aspect ratio for the generated video.
- ... and 1 more fields

---

### pixelml_sora

**Title:** Sora (Generate Video)

**Description:** Generate video using OpenAI's Sora video generation models.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (any): The Sora model to use for video generation.
- `prompt` (string): The prompt describing the video to generate.
- `image` (any): Optional URL to an image to use as the starting frame for video generation. If p
- `aspect_ratio` (any): The aspect ratio for the generated video.
- `duration` (integer): The duration of the generated video.

---

### qr_art_v5s_plus

**Title:** QR Art V5S Plus

**Description:** Generate artistic QR codes with advanced customization options.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `prompt` (string): Input your prompt
- `qr_content` (string): Input your QR content (URL, text, etc.)
- `qr_strength` (number): QR strength
- `seed` (integer): Seed
- `resolution` (string): Select the resolution of the image.
- ... and 2 more fields

---

### qr_art_v6

**Title:** Generate QR Art V6

**Description:** Unleash Artistic QR Codes: Generate stunning AI-powered QR art with Quick QR Art V6 (powered by https://quickqr.art)

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `prompt` (string): What you wish to see in the output image. A strong, descriptive prompt that clea
- `negative_prompt` (string): A blurb of text describing what you do not wish to see in the output image
- `qr_content` (string): The content you wish to encode in the QR code.
- `qr_strength` (number): The strength of the QR code. Higher values will make the QR code more prominent 
- `resolution` (string): Select the resolution of the image.
- ... and 3 more fields

---

### remove_background

**Title:** Remove Background

**Description:** Remove the background from an image, leaving only the main subject.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `image_url` (string): Image url

---

### replicate_run_model

**Title:** Run Replicate Model

**Description:** Run any model on Replicate.com with your API token.

**Connection Required:** Replicate Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `model` (string): The Replicate model to run (format: 'username/model_name:version' or 'username/m
- `input_params` (object): The input parameters for the model. These vary depending on the model you're usi
- `image_input` (any): Optional image input for models that require an image. This will be added to the
- `webhook_url` (any): Optional webhook URL to receive updates when the prediction is complete.

---

### run_javascript

**Title:** Run JavaScript

**Description:** Run JavaScript code.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `code` (string): The Javascript code to execute, returning the value to use in the next node.
   
- `input` (object): Input to the JavaScript code. Input will be available in the `args.input` object

---

### segment_user

**Title:** Segment User

**Description:** Segment user.

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `users` (string): List of users in JSON format.

---

### segment_user_v2

**Title:** Segment User V2

**Description:** Segment user V2

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `users` (string): List of users in JSON format.

---

### straico_prompt_completion

**Title:** Run Straico Prompt Completion V1

**Description:** Run a prompt completion using the Straico API.

**Connection Required:** Straico Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `models` (array): An array of 1-4 unique model identifiers
- `message` (string): The prompt text for which completions are requested
- `file_urls` (any): An array of up to 4 file URLs, previously uploaded via the File Upload endpoint
- `images` (array): An array of image URLs.
- `youtube_urls` (any): An array of up to 4 YouTube video URLs
- ... and 3 more fields

---

### submit_artifact

**Title:** Submit Artifact

**Description:** Submit artifact to the platform GPTsDex

**Connection Required:** No

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `accessToken` (string): Access Token
- `title` (string): Title
- `url` (string): URL
- `description` (string): Description
- `thumbnail` (string): Thumbnail
- ... and 3 more fields

---

### telegram_send_message

**Title:** Send Telegram Message

**Description:** Send a message to a Telegram chat.

**Connection Required:** Telegram Bot Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `chat_id` (string): Unique identifier for the target chat or username of the target channel (in the 
- `text` (string): Text of the message to be sent, 1-4096 characters after entities parsing
- `business_connection_id` (any): Unique identifier of the business connection on behalf of which the message will
- `message_thread_id` (any): Unique identifier for the target message thread (topic) of the forum; for forum 
- `parse_mode` (any): Mode for parsing entities in the message text. Can be 'Markdown', 'MarkdownV2', 
- ... and 8 more fields

---

### tiktok_user_posts_scrapper

**Title:** TikTok user posts scrapper

**Description:** Scrape TikTok posts for a user.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `user_name` (string): The username of the TikTok user.
- `max_items` (integer): The maximum number of posts to scrape (1-100).

---

### tiktok_user_scrapper

**Title:** TikTok profile scrapper

**Description:** Scrape a TikTok user's profile.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.01)

**Key Input Fields:**
- `username` (string): The username of the TikTok user.

---

### url_context

**Title:** Google URL Context

**Description:** The URL context tool lets you provide additional context to the models in the form of URLs. By including URLs in your request, the model will access the content from those pages to inform and enhance its response.

**Connection Required:** PixelML Connection (Required)

**Cost:** 4 credits (PML: $0.1)

**Key Input Fields:**
- `model` (any): The model to use for the URL context. Default is Gemini 2.5 Flash
- `prompt` (string): The prompt to use for the URL context. Include your question and the URL you wan
- `include_google_search` (boolean): When Grounding with Google Search are enabled, the model can use its search capa

---

