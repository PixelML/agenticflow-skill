# Data Source Priority - Optimize API Usage

## 🎯 Golden Rule: Local First, API Only When Required

This skill contains **ALL** node data, workflow examples, and documentation locally. Use local files to minimize API calls and improve performance.

---

## 📊 Complete Local Data Inventory

### Node Type Data (139 Nodes)

| File | Size | Content | Use For |
|------|------|---------|---------|
| `references/official_node_types.json` | 697KB | Raw API data, all 139 nodes | Programmatic parsing |
| `references/node_types.md` | 64KB | Categorized reference | Quick browsing |
| `references/complete_node_types.md` | 638KB | Full schemas | Detailed field info |

### Examples & Templates

| Directory | Count | Content | Use For |
|-----------|-------|---------|---------|
| `references/examples/workflows/` | 78 files | Real workflow templates | Similar patterns |
| `references/examples/agents/` | 8 files | Agent configurations | Agent setup |

### Guides & Patterns

| File | Content | Use For |
|------|---------|---------|
| `guides/01_workflow_creation_process.md` | 7-phase process | Step-by-step workflow building |
| `guides/02_node_selection_strategy.md` | Node selection guide | Choosing right nodes |
| `guides/03_mcp_integration_guide.md` | MCP integration patterns | External services |
| `guides/04_technical_requirements.md` | Field requirements | Validation & building |
| `references/mcp_integrations.md` | MCP service catalog | Service integration |
| `references/workflow_guide.md` | Design patterns | Architecture patterns |

---

## ✅ Use LOCAL Files For (No API Calls)

### Node Discovery & Selection
```
❌ Don't: agenticflow_list_node_types({limit: 200})
✅ Do: Load references/node_types.md
```

**Why:** All 139 nodes with descriptions, categories, and key fields available locally.

### Node Field Details
```
❌ Don't: agenticflow_search_node_types({name: 'llm'})
✅ Do: Load references/complete_node_types.md and search for "llm"
```

**Why:** Complete schemas with all input/output fields available locally.

### Finding Similar Workflows
```
❌ Don't: Call API to get workflow examples
✅ Do: Read references/examples/workflows/*.json
```

**Why:** 78 real production workflow templates available locally.

### Understanding MCP Actions
```
❌ Don't: Call external MCP API
✅ Do: Load references/mcp_integrations.md
```

**Why:** Popular MCP actions by category documented locally.

### Learning Patterns
```
❌ Don't: Request workflow patterns via API
✅ Do: Load references/workflow_guide.md
```

**Why:** Common patterns and best practices documented locally.

---

## ⚠️ Use API Calls For (When Required)

### Creating Workflows (REQUIRED)
```javascript
✅ Required: agenticflow_create_workflow({
  name: "Workflow Name",
  nodes: [...],
  input_schema: {...},
  output_mapping: {...}
})
```

**Why:** Must call API to actually create the workflow.

### Validating Workflows (OPTIONAL)
```javascript
⚠️ Optional: agenticflow_validate_workflow({...})
```

**Why:** Can validate structure locally, but API provides official validation.

### Health Check (OPTIONAL - Rare)
```javascript
⚠️ Optional: agenticflow_health_check()
```

**When to use:**
- ✅ First time in session (verify connection)
- ✅ After errors (check API status)
- ✅ User explicitly requests
- ❌ NOT for every workflow

### Node Search (FALLBACK)
```javascript
⚠️ Fallback: agenticflow_search_node_types({name: 'keyword'})
```

**When to use:**
- Only if local search in `references/node_types.md` is insufficient
- Verifying exact node name spelling
- Need absolute latest nodes (unlikely to change)

---

## 🚀 Optimized Workflow Creation Process

### Traditional Approach (Multiple API Calls)
```
1. agenticflow_health_check() ← API call
2. agenticflow_list_node_types({limit: 200}) ← API call
3. agenticflow_search_node_types({name: 'llm'}) ← API call
4. agenticflow_search_node_types({name: 'web_scraping'}) ← API call
5. agenticflow_create_workflow({...}) ← API call

Total: 5 API calls
```

### Optimized Approach (1 API Call)
```
1. Load references/node_types.md ← Local file
2. Load references/examples/workflows/similar.json ← Local file
3. Load guides/02_node_selection_strategy.md ← Local file
4. Design workflow using local data ← No API
5. agenticflow_create_workflow({...}) ← 1 API call

Total: 1 API call (80% reduction!)
```

---

## 📋 Quick Decision Matrix

| Task | Use Local | Use API |
|------|-----------|---------|
| Browse available nodes | ✅ `node_types.md` | ❌ |
| Get node field details | ✅ `complete_node_types.md` | ❌ |
| Find workflow examples | ✅ `examples/workflows/` | ❌ |
| Learn MCP actions | ✅ `mcp_integrations.md` | ❌ |
| Understand patterns | ✅ `workflow_guide.md` | ❌ |
| Validate connection | ❌ | ⚠️ Optional |
| Search specific node | ✅ Search local first | ⚠️ Fallback |
| Validate workflow | ✅ Check locally | ⚠️ Optional |
| Create workflow | ❌ | ✅ Required |

---

## 💡 Performance Tips

### 1. Cache Loaded Files
Once you load a reference file, keep it in context. Don't reload unnecessarily.

### 2. Search Local Files First
Use grep/search on local markdown files before calling API search.

### 3. Batch Operations
Design complete workflow using local data, then make single API call to create.

### 4. Example-Driven Development
Start with similar workflow from `examples/workflows/`, modify using local node data.

### 5. Skip Health Check
Only call `agenticflow_health_check()` if:
- First workflow in session
- After API errors
- User explicitly requests

---

## 🎯 Success Metrics

**Ideal Workflow Creation:**
- API Calls: 1 (just `agenticflow_create_workflow`)
- Local File Loads: 2-4 (guides + references as needed)
- Time Saved: ~80% reduction in API latency
- User Experience: Faster workflow creation

**What to Avoid:**
- ❌ Calling `agenticflow_list_node_types()` for every workflow
- ❌ Searching nodes via API when local data available
- ❌ Health check for every workflow
- ❌ Multiple redundant API calls

---

## 📖 Implementation Example

```markdown
User: "Create a workflow to scrape competitor prices and send to Slack"

Agent Process:

1. Load guides/02_node_selection_strategy.md (Local)
   → Identify: web_scraping, llm, mcp_run_action

2. Load references/node_types.md (Local)
   → Get details on web_scraping and llm nodes

3. Load references/mcp_integrations.md (Local)
   → Find SLACK-SEND-MESSAGE action pattern

4. Load references/examples/workflows/similar.json (Local)
   → Reference similar workflow structure

5. Design complete workflow JSON using local data

6. agenticflow_create_workflow({...}) (API - 1 call)
   → Create workflow

7. Return workflow link to user

Total API Calls: 1
Total Local Loads: 4
Performance: Optimal ✅
```

---

## 🔄 Workflow Comparison

### Slow Approach (5+ API calls)
```
User Request
  ↓
Health Check (API)
  ↓
List All Nodes (API)
  ↓
Search Node 1 (API)
  ↓
Search Node 2 (API)
  ↓
Create Workflow (API)
  ↓
Result: ~5 API calls, slower
```

### Fast Approach (1 API call)
```
User Request
  ↓
Load Local Guides
  ↓
Load Local Node Data
  ↓
Load Local Examples
  ↓
Design Complete Workflow
  ↓
Create Workflow (API - only call)
  ↓
Result: 1 API call, much faster ✅
```

---

## 📌 Remember

**Golden Rules:**
1. Local files contain ALL data you need
2. Only call API to CREATE or VALIDATE
3. Skip health check unless needed
4. Search locally before calling API
5. Batch your work - design locally, create once

**Benefits:**
- ⚡ 80% faster workflow creation
- 💰 Reduced API costs
- 🎯 Better user experience
- 🔒 More reliable (less network dependency)

---

**Last Updated:** 2025-10-19
**Data Completeness:** 100% (All 139 nodes + 86 examples locally available)
