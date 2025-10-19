# AgenticFlow Skill References

This directory contains comprehensive reference materials for building AgenticFlow workflows using the AgenticFlow skill.

## 📚 Documentation Structure

### Core Documentation

#### 1. **node_types.md** (64KB, 2,562 lines)
Quick reference guide for all 139 available node types, organized by functional category.

**Use this when:**
- You need to quickly find the right node for a task
- You want to browse available capabilities
- You need descriptions and key fields overview

**Categories:**
- AI & LLM (20 nodes)
- Web Research & Search (6 nodes)
- Web Scraping (9 nodes)
- Data Extraction & Processing (4 nodes)
- Image Generation & Processing (13 nodes)
- Video Processing (14 nodes)
- Audio & Speech (5 nodes)
- Document Processing (2 nodes)
- Email & Communication (5 nodes)
- File Storage & Management (12 nodes)
- API & Integration (3 nodes)
- Specialized & Advanced (46 nodes)

#### 2. **complete_node_types.md** (638KB, 29,368 lines)
Complete API reference with full JSON schemas for all 139 node types.

**Use this when:**
- You need exact field names and types for workflow creation
- You want to understand complete input/output schemas
- You need to configure ui_metadata properly
- You're troubleshooting field requirements

**Includes:**
- Complete input_schema with all fields and constraints
- Output_schema definitions
- Connection requirements
- Cost information
- Example configurations for each node

#### 3. **mcp_integrations.md** (11KB)
Guide to 2,500+ external service integrations via MCP.

**Use this when:**
- User needs external service integration (Gmail, Slack, Shopify, etc.)
- Building hybrid workflows with standard nodes + MCP
- Planning CRM, communication, e-commerce, or productivity automations

**Includes:**
- Popular MCP actions by category
- Integration patterns
- Connection setup guidance

#### 4. **workflow_guide.md** (9.3KB)
Workflow design patterns and best practices.

**Use this when:**
- Designing workflow architecture
- Implementing parallel processing
- Structuring input schemas with UI metadata
- Building error-handling patterns

**Includes:**
- Hybrid workflow patterns
- Parallel processing examples
- Input schema design
- Template variable syntax
- Best practices and troubleshooting

### Example Collections

#### 5. **examples/workflows/** (78 workflow templates)
Real-world workflow examples extracted from production use cases.

**Categories include:**
- Content Creation (Blog posts, social media, images)
- Email Marketing (Campaigns, newsletters, automation)
- Event Management (Invitations, registration, feedback)
- Research & Analysis (Company research, competitor analysis)
- E-commerce (Product catalogs, order processing)
- Creative & Visual (AI art, memes, photo booths)

**Notable examples:**
- `Generate AI Images.json` - Simple image generation workflow
- `SEO Optimized Blog Post Generator.json` - Content creation
- `Research A Company And Find Leads.json` - Business intelligence
- `🔍 Website Scraper Auto-Generate Product Catalog + Static Pages.json` - E-commerce automation

#### 6. **examples/agents/** (8 agent templates)
Pre-built AI agent configurations for common business roles.

**Available agents:**
- **Mason, the Social Media Manager** - Content and campaign management
- **Olivia, the Sales Strategist** - Sales strategies and lead conversion
- **Ethan, the Ecommerce Manager** - Online store operations
- **Sophia, the SEO Mastermind** - Website optimization
- **Chloe, the Event Manager** - Event planning and coordination
- **Iris, the Visual Designer** - Image creation and editing
- **Rachel, the Support Agent** - Customer support automation
- **Ari, the Market Researcher** - Market insights and analysis

### Raw Data Files

- **official_node_types.json** - Official API response with all node type definitions (current)
- **archive/** - Original API response files (archived for reference)

## ⚡ Performance Optimization

**IMPORTANT:** All data is available locally - minimize API calls!

**Use Local Files First (No API calls):**
- ✅ Node browsing → `node_types.md`
- ✅ Field details → `complete_node_types.md`
- ✅ Examples → `examples/workflows/`
- ✅ MCP actions → `mcp_integrations.md`
- ✅ Patterns → `workflow_guide.md`

**Only Use API When:**
- Creating workflow → `agenticflow_create_workflow()` - REQUIRED
- Validating workflow → `agenticflow_validate_workflow()` - Optional
- Health check → `agenticflow_health_check()` - Optional (first time only)

**Result:** Typically only 1 API call per workflow! 🚀

## 🎯 Quick Start Guide

### For Building Workflows (Optimized)

1. **Start here:** Load `node_types.md` to understand available capabilities (LOCAL)
2. **Find your nodes:** Browse by category to select appropriate node types (LOCAL)
3. **Get details:** Reference `complete_node_types.md` for exact field requirements (LOCAL)
4. **See examples:** Check `examples/workflows/` for similar use cases (LOCAL)
5. **Add MCP:** Reference `mcp_integrations.md` for external service needs (LOCAL)
6. **Follow patterns:** Use `workflow_guide.md` for architecture best practices (LOCAL)
7. **Create once:** Call `agenticflow_create_workflow()` (1 API CALL)

### For Creating Agents

1. **Browse templates:** Check `examples/agents/` for similar roles
2. **Study structure:** Understand system prompts and tool configurations
3. **Adapt & customize:** Modify templates for your specific needs

## 📊 Statistics

- **Total Node Types:** 139
- **Workflow Examples:** 78
- **Agent Templates:** 8
- **MCP Integrations:** 2,500+
- **Documentation Size:** ~720KB
- **Total Lines:** 32,000+

## 🔄 Update History

- **2025-10-19:** Complete reorganization with official API data
  - Added official_node_types.json (139 nodes from API)
  - Generated node_types.md with functional categorization
  - Generated complete_node_types.md with full schemas
  - Split workflow examples into 78 individual files
  - Split agent templates into 8 individual files
  - Updated SKILL.md with new resource structure

## 💡 Usage Tips

1. **Don't load everything at once** - Reference files strategically based on current task
2. **Start with categories** - Use node_types.md to quickly find the right node type
3. **Deep dive when needed** - Only load complete_node_types.md for detailed field info
4. **Learn from examples** - Check workflow/agent examples for real-world patterns
5. **Think hybrid** - Combine standard nodes with MCP integrations for powerful solutions

## 🔗 Related Files

- **Main skill definition:** `/SKILL.md`
- **Skill documentation:** `/README.md`
- **Workflow guide reference:** `agenticflow-copilot.md` (in parent directory)

---

**Last Updated:** 2025-10-19
**Maintained by:** AgenticFlow Skill Contributors
