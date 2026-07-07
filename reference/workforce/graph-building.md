# MAS Graph Building — field-verified rules

Rules for hand-authoring or editing workforce graphs (`af workforce deploy --body @graph.json`).
Every rule below was verified against live production runs (2026-07-07). The fastest path is to
NOT hand-author: `af workforce init --blueprint autonomous-desk` deploys the full high-autonomy
pattern (plan → route → execute → critic QA gate → auto-revision → editor) with all of these
rules already applied. This doc is for when you need to go custom.

Also available inside the CLI: `af playbook mas-graph-building`.

## 1. Templating — the `.output` hop, and the silent failure mode

The template context is the raw run state: `{trigger, nodes, variables, messages}`.

| You want                    | Write                                                     |
|-----------------------------|-----------------------------------------------------------|
| Trigger field               | `{{trigger.message}}`                                     |
| Agent's reply               | `{{nodes.<node_name>.output.last_message}}`               |
| Agent's JSON field          | `{{nodes.<node_name>.output.structured_output.<field>}}`  |
| Shared state variable       | `{{variables.<name>}}`                                    |
| call_other_workflow result  | `{{nodes.<name>.output.output.workflow_output.content}}`  |

- The `.output` hop is **mandatory**: node state is `{status, output, error_message, ...}` and your
  data lives under `output`. `{{nodes.planner.last_message}}` (hop missing) resolves to an
  **empty string** — no error is raised; the run "succeeds" with hollow prompts downstream.
- Use dot notation, not bracket syntax.
- A string that is *exactly one* `{{ref}}` returns the **native value** (booleans stay booleans —
  this is what makes `BooleanEquals` gates work). Refs embedded in longer text are Jinja2-rendered
  to strings.
- **Always smoke-run the graph once** and read `node_start.node_input` in the event stream to
  confirm substitution before trusting a mission run.

## 2. Condition nodes and branch edges

Condition node input:

```json
{"branches": [{"description": "...", "logic": "and",
               "conditions": [{"operator": "StringEquals", "left": "{{...}}", "right": "stock"}]}]}
```

Operators: `StringEquals`, `StringEqualsIgnoreCase`, `StringMatches`, `NumericEquals/LessThan/
GreaterThan(/OrEqual)`, `BooleanEquals`, `IsPresent`, `IsNull`, `IsNumeric`, `IsString`,
`IsBoolean`. First true branch wins.

Outgoing edges from a condition node use `connection_type: "condition"` with
`connection_config: {branch_index: 0}` (0-based). **`branch_index: -1` is the default/else
branch** — give every condition node one, or unmatched evaluations dead-end the run.

## 3. Structured-output agents drive the gates

Routing decisions need machine-readable fields. On the agent:

```json
"response_format": {
  "enable": true,
  "prompt": "Return the plan as JSON.",
  "schema": {
    "name": "mission_plan",
    "strict": true,
    "schema": {
      "type": "object",
      "additionalProperties": false,
      "properties": {"route": {"type": "string", "enum": ["workflow", "research"]}},
      "required": ["route"]
    }
  }
}
```

- The `{name, strict, schema}` wrapper is **required** (a bare JSON schema → 400
  `Schema is missing required fields {'schema','name'}`).
- `"additionalProperties": false` is **required on every object level** — without it the agent
  call fails at runtime inside MAS runs (opaquely on non-OpenAI models).
- **Pin router agents to a structured-output-native model** (`agenticflow/gpt-4o-mini` class):
  reliable strict-schema parsing, real provider errors when a schema is wrong, and ~10–20×
  cheaper per decision. Spend frontier models on prose/judgment slots, not routing.
- The JSON lands in the agent node's `structured_output`; gates read
  `{{nodes.<name>.output.structured_output.<field>}}`.

## 4. Branch merging via state_modifier

Give each execution branch its own `state_modifier` writing the same variable:

```json
{"name": "variables.draft", "value": "{{nodes.<branch_node>.output.last_message}}", "reducer": "set"}
```

Downstream nodes read `{{variables.draft}}` without caring which branch ran.
Reducers: `set` | `append` | `prepend`.

## 5. Invoking a deployed workflow from a workforce

Use a `plugin` node wrapping the `call_other_workflow` engine node:

```json
{"name": "run_workflow", "type": "plugin",
 "input": {"node_type_name": "call_other_workflow",
           "node_input": {"workflow_id": "<uuid>",
                          "workflow_input": "{\"ticker\": \"{{nodes.agent_planner.output.structured_output.workflow_input_primary}}\"}"},
           "connection": null}}
```

- `workflow_input` is a JSON **string** (the node parses it), not an object. Template refs inside
  it are fine.
- The target workflow **must have `public_runnable: true`** — otherwise the node fails with
  `Workflow is not public runnable`. Set it via
  `af workflow update --workflow-id <id> --body '{... "public_runnable": true ...}'`.
- Result ref: `{{nodes.run_workflow.output.output.workflow_output.content}}`.
- Prefer this path over the raw `tool` node for whole-workflow invocation.
- With `af workforce init --blueprint autonomous-desk`, all of this is one flag:
  `--tool-workflow-id <id> --tool-workflow-purpose "..." --tool-workflow-input '<json template>'`.

## 6. Deploy mechanics

- Node names must be valid python identifiers, unique per workforce.
- `af workforce deploy` diffs nodes **by name**. An existing name is *updated* — and an update
  cannot change the node's type (the new input is validated against the old type's schema).
  **To change a node's type, rename it** (forces delete + create).
- Graph rules: exactly one trigger, ≥ 1 edge, no cycles (`af workforce validate` checks),
  note nodes can't be connected, agent_team has exactly one leader edge.

## 7. Reading runs

- Stream events use `event_type` / `event_data` keys. Watch `node_start` (substituted inputs),
  `node_end` (per-node `status` + `node_output`), `workforce_run_end`.
- A node can fail while the run completes: agent/plugin failures flow downstream as empty state.
  **Pair every risky node with a critic/QA gate downstream** (the desk pattern) so bad drafts get
  caught and revised instead of shipped.
- Final user-facing text = the output node's rendered `message`.
- If authenticated `af workforce run` returns the known `Failed to retrieve user info` 400, run
  via the public endpoint instead: `af workforce publish`, then
  `POST https://api.agenticflow.ai/v1/workforce/public/<key>/run` with
  `{"trigger_data": {...}, "stream": true}`.

## The desk pattern (reference topology)

```
trigger → planner (structured: route + questions)
        → route_gate ── branch 0 ──→ run_workflow (plugin/call_other_workflow) → save draft ─┐
                    └── default ───→ researcher (web tools) → save draft ────────────────────┤
        → critic (structured: approved/score/feedback)                                       │
        → qa_gate ── approved ──→ editor → output                                            │
                 └── default ───→ reviser (researcher agent + critic feedback) → save → editor
```

Why it works: the workflow gives a cheap deterministic baseline; agent judgment is spent only on
the delta; the critic gate turns component failures and thin drafts into revision passes instead
of shipped garbage. Deploy it with `af workforce init --blueprint autonomous-desk`.
