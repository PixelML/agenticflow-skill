# AgenticFlow Skill Guides

Complete guide system for building AgenticFlow workflows from natural language requirements.

## 📖 Guide Overview

This directory contains four comprehensive guides that break down the complete workflow creation process into manageable, focused documents.

---

## 🎯 The Four Core Guides

### 1. Workflow Creation Process (START HERE)

**File:** `01_workflow_creation_process.md`

**Purpose:** The complete 7-phase process for creating workflows from natural language to production

**When to use:** ALWAYS load this first when user requests a new workflow

**What's inside:**
- Phase 1: Health Check & Setup
- Phase 2: Discovery & Requirements Analysis
- Phase 3: MCP Integration Analysis
- Phase 4: Configuration Planning
- Phase 5: Pre-Building & Validation
- Phase 6: Building the Workflow
- Phase 7: Validation & Documentation

**Key sections:**
- Step-by-step instructions for each phase
- Visual workflow diagrams
- Common workflow patterns
- Pre-flight checklist

**Length:** ~300 lines

---

### 2. Node Selection Strategy

**File:** `02_node_selection_strategy.md`

**Purpose:** Choose the right node types for any requirement

**When to use:** When deciding which nodes to use in a workflow

**What's inside:**
- All 139 nodes organized by use case
- Decision flow charts
- Connection requirements
- Cost considerations
- Output field reference

**Categories covered:**
- AI & LLM Nodes (20 nodes)
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

**Key sections:**
- Node selection philosophy
- Category-by-category breakdown
- Decision flow charts
- Quick reference by use case

**Length:** ~400 lines

---

### 3. MCP Integration Guide

**File:** `03_mcp_integration_guide.md`

**Purpose:** Complete guide for integrating 2,500+ external services

**When to use:** When user mentions external services (Gmail, Slack, HubSpot, etc.)

**What's inside:**
- MCP action structure
- Popular actions by category
- Hybrid workflow patterns
- Connection setup instructions

**Service categories:**
- CRM & Sales (HubSpot, Salesforce, Pipedrive)
- Communication (Gmail, Slack, Teams, WhatsApp)
- E-commerce (Shopify, WooCommerce, Stripe)
- Productivity (Google Sheets, Notion, Airtable)
- Marketing (Mailchimp, SendGrid, Facebook, LinkedIn)

**Key sections:**
- What is MCP and when to use it
- MCP action structure and format
- Category-by-category action examples
- Hybrid workflow patterns
- Connection management
- Best practices

**Length:** ~400 lines

---

### 4. Technical Requirements

**File:** `04_technical_requirements.md`

**Purpose:** Field requirements, common fixes, and validation

**When to use:** When building or debugging workflows

**What's inside:**
- Complete node structure requirements
- Common errors and solutions
- Template variable syntax
- Validation checklist

**Key sections:**
- Field-by-field breakdown of node structure
- Common errors with fixes
- Template variable rules
- Workflow-level requirements
- Input schema structure
- Execution order & dependencies
- Pre-flight checklist
- Validation examples

**Length:** ~350 lines

---

## 🚀 How to Use These Guides

### Workflow Creation Journey

```
User Request
     ↓
[1] Load 01_workflow_creation_process.md
     ↓
Phase 2: Discovery
     ↓
[2] Load 02_node_selection_strategy.md
     ↓
Phase 3: MCP Integration?
     ↓
[3] Load 03_mcp_integration_guide.md (if needed)
     ↓
Phase 5: Pre-Building
     ↓
[4] Load 04_technical_requirements.md
     ↓
Phase 6: Build Workflow
     ↓
Success!
```

### Quick Reference

**For planning:**
- Start: `01_workflow_creation_process.md`
- Nodes: `02_node_selection_strategy.md`
- MCP: `03_mcp_integration_guide.md`

**For building:**
- Fields: `04_technical_requirements.md`
- Schemas: `../references/complete_node_types.md`
- Examples: `../references/examples/workflows/`

**For debugging:**
- Errors: `04_technical_requirements.md` → Common Errors section
- Variables: `04_technical_requirements.md` → Template Variables section
- Validation: `04_technical_requirements.md` → Pre-Flight Checklist

---

## 📊 Guide Statistics

| Guide | Lines | Focus | Load When |
|-------|-------|-------|-----------|
| 01_workflow_creation_process.md | ~300 | Process | Always first |
| 02_node_selection_strategy.md | ~400 | Nodes | Choosing nodes |
| 03_mcp_integration_guide.md | ~400 | MCP | External services |
| 04_technical_requirements.md | ~350 | Technical | Building/debugging |

**Total:** ~1,450 lines of comprehensive workflow building guidance

---

## 🎯 Learning Paths

### Path 1: Simple Workflow (1-3 nodes)

1. Load `01_workflow_creation_process.md`
2. Follow Phases 1-7
3. Reference `02_node_selection_strategy.md` for node selection
4. Use `04_technical_requirements.md` for validation
5. Check `../references/examples/workflows/` for similar patterns

**Example:** "Create AI images from text prompts"

---

### Path 2: MCP Workflow (External Services)

1. Load `01_workflow_creation_process.md`
2. Load `03_mcp_integration_guide.md`
3. Review service-specific action patterns
4. Use `02_node_selection_strategy.md` for standard nodes
5. Use `04_technical_requirements.md` for validation
6. Document connection setup requirements

**Example:** "Sync Shopify orders to Google Sheets with Slack notifications"

---

### Path 3: Complex Workflow (5+ nodes, mixed)

1. Load `01_workflow_creation_process.md`
2. Load `02_node_selection_strategy.md` for node planning
3. Load `03_mcp_integration_guide.md` if MCP needed
4. Review `../references/workflow_guide.md` for patterns
5. Use `04_technical_requirements.md` extensively
6. Check multiple examples in `../references/examples/workflows/`

**Example:** "Research companies, enrich CRM data, generate personalized emails, track in spreadsheet"

---

## 💡 Pro Tips

1. **Don't load everything at once** - Load strategically based on current phase
2. **Follow the process** - The 7-phase process in Guide 01 ensures nothing is missed
3. **Check examples** - Real workflows in `../references/examples/workflows/` are invaluable
4. **Validate early** - Use Guide 04 checklist before building, not after errors
5. **Think hybrid** - Combine standard nodes (Guide 02) with MCP (Guide 03) for power

---

## 🔗 Related Documentation

**In `../references/`:**
- `node_types.md` - Quick node reference (139 nodes)
- `complete_node_types.md` - Full API schemas
- `mcp_integrations.md` - MCP service catalog
- `workflow_guide.md` - Design patterns
- `examples/workflows/` - 78 real workflow templates
- `examples/agents/` - 8 agent templates

**Main Files:**
- `../SKILL.md` - Main skill definition with overview
- `../README.md` - Skill documentation for users

---

## 📝 Quick Command Reference

**Essential MCP Functions:**
```javascript
// Always start with this
agenticflow_health_check()

// Find nodes
agenticflow_search_node_types({name: 'keyword'})
agenticflow_list_node_types({limit: 200})

// Create workflow
agenticflow_create_workflow({
  name: "Workflow Name",
  description: "What it does",
  nodes: [...],
  input_schema: {...},
  output_mapping: {...}
})

// Validate before creating
agenticflow_validate_workflow({...})
```

---

## ✅ Success Criteria

After using these guides, you should be able to:

- [ ] Transform any natural language request into a workflow
- [ ] Select appropriate nodes for any use case
- [ ] Integrate external services via MCP
- [ ] Structure workflows with proper field requirements
- [ ] Validate workflows before creation
- [ ] Provide clear setup instructions to users
- [ ] Debug common workflow errors
- [ ] Design efficient data flow with template variables

---

**Last Updated:** 2025-10-19
**Total Documentation:** 4 guides + 6 references + 86 examples = Complete workflow building system
