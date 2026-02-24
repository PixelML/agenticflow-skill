# AgenticFlow Definition of Done (CLI-First)

This document defines when a workflow or agent is actually "done" for production usage via CLI.

`status=success` alone is not enough.

## Workflow Done Criteria

A workflow is done only if all checks pass:

1. Contract validity
   - `agenticflow workflow validate --body @workflow.json` returns success.
   - Required input fields are explicit and tested.
2. Lifecycle validity
   - Workflow can be created/updated via CLI with no schema errors.
   - Workflow can be retrieved (`workflow get`) after create/update.
3. Runtime validity
   - `workflow run` returns a run id.
   - `workflow run-status` reaches terminal `success` for at least one realistic test input.
4. Semantic validity
   - Output matches intended behavior of the source design.
   - If source workflow uses tools (weather/news/search/email/etc), converted workflow must include equivalent tool-capable nodes or be marked as unsupported.
   - Generic fallback LLM answers are not accepted when tool-backed behavior is expected.
5. Evidence completeness
   - Keep artifacts: create payload, run payload, run id, final run-status payload, and a short pass/fail summary.

## Agent Done Criteria

An agent is done only if all checks pass:

1. Contract validity
   - Agent payload validates against public API shape.
2. Lifecycle validity
   - `agent create` succeeds.
   - `agent get` returns the created agent.
   - `agent update` succeeds for at least one non-breaking change.
3. Interaction validity
   - `agent stream` completes for at least one real prompt.
   - Multi-turn behavior is tested when memory is expected.
4. Tool-use validity
   - If agent is expected to use tools, at least one test prompt must require a tool.
   - Results must demonstrate tool-backed capability, not a model-only placeholder response.
5. Guardrail validity
   - Failure paths are exercised (missing input, unavailable connection, invalid config).
   - Errors are actionable and mapped to remediation steps.
6. Evidence completeness
   - Keep artifacts: create/get/update payloads, stream transcript(s), and pass/fail table.

## Semantic Parity Rule for Imported Templates

When converting external templates (for example n8n):

1. Extract source intent
   - Identify required capabilities from source description and nodes.
2. Map capability-by-capability
   - Mark each capability as `equivalent`, `partial`, or `unsupported`.
3. Reject silent degradation
   - Do not claim done if required capabilities are dropped without explicit status.
4. Publish a gap report
   - Include missing nodes, missing tools, and what must be implemented next.

## Sub-Agent Output Contract

Every delegated sub-agent report must include:

1. Scope completed
2. Files changed
3. Commands run
4. Test evidence
5. Semantic pass/fail result
6. Blockers and next required action

If semantic validity is `fail` or `partial`, the task is not done.
