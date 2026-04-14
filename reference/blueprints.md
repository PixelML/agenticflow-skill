# Blueprints

A **blueprint** is a pre-made multi-agent team that AgenticFlow deploys as a workforce DAG in one command. Each blueprint specifies a set of agent slots (roles + titles + suggested marketplace templates) and a set of starter tasks.

`af workforce init --blueprint <id>` creates the workforce, creates one real agent per required slot, and wires them into a DAG (`trigger → coordinator → worker agents → output`) — atomically. If anything fails, every resource created so far is rolled back.

> **Migration note (CLI v1.7.0, 2026-04-14):** The legacy `af pack *` surface is deprecated and its three original packs (`amazon-seller-pack`, `tutor-pack`, `freelancer-pack`) are now native blueprints (`amazon-seller`, `tutor`, `freelancer`). Sunset date: 2026-10-14. Prefer `af workforce init --blueprint <id>`.

## The 8 built-in blueprints

| ID | Best for | Required slots | Optional |
| --- | --- | --- | --- |
| `dev-shop` | Software dev teams | ceo (Tech Lead), engineer (Senior Engineer) | designer (UX), qa (QA Engineer) |
| `marketing-agency` | Multi-channel marketing | ceo (Agency Director), cmo (Content Strategist), designer (Visual Designer) | researcher (Market Researcher) |
| `sales-team` | Outbound + pipeline | ceo (Sales Director), researcher (Sales Researcher), general (SDR / Outreach) | — |
| `content-studio` | Content production (blog, social, video scripts) | ceo (Creative Director), cmo (Social Media Manager), engineer (Content Writer) | designer (Visual Creator) |
| `support-center` | Customer support | ceo (Support Manager), general (Support Agent) | researcher (Knowledge Base Manager) |
| `amazon-seller` | Amazon Singapore sellers — listings, PPC, competitors, pricing, support | ceo (Amazon Business Manager), cmo (Listing & SEO Specialist), engineer (PPC Campaign Manager), researcher (Market & Competitor Analyst) | general (Customer Support Agent) |
| `tutor` | Tutoring businesses, education professionals | ceo (Tutor Business Manager), cmo (Parent Communication Specialist), engineer (Curriculum Designer), researcher (Student Progress Tracker) | general (Quiz & Assessment Creator) |
| `freelancer` | Freelancers, consultants, independent professionals | ceo (Business Development Manager), cmo (Client Communication Agent), engineer (Project Scope Writer), researcher (Client Research Analyst) | general (Invoice & Contract Generator) |

## How to deploy

```bash
# 1. Preview — no side effects
af workforce init --blueprint tutor --name "My Tutoring Team" --dry-run --json

# 2. Deploy — creates workforce + required agents + wired DAG atomically
af workforce init --blueprint tutor --name "My Tutoring Team" --json

# 3. Optional: include optional slots too (e.g. the 5th agent on tutor/freelancer/amazon-seller)
af workforce init --blueprint tutor --name "My Tutoring Team" --include-optional-slots --json

# 4. Optional: pick a different model for all agents
af workforce init --blueprint tutor --name "My Tutoring Team" --model agenticflow/gemma-4-31b-it --json

# 5. After success, get a shareable public URL
af workforce publish --workforce-id <id> --json
```

The response to a successful `init` has the shape:

```json
{
  "schema": "agenticflow.workforce.init.v1",
  "workforce_id": "01KP...",
  "blueprint": "tutor",
  "mode": "full",
  "node_count": 6,
  "edge_count": 5,
  "skeleton": false,
  "agents": [
    {"slot_role": "ceo",        "agent_id": "uuid", "title": "Tutor Business Manager"},
    {"slot_role": "cmo",        "agent_id": "uuid", "title": "Parent Communication Specialist"},
    {"slot_role": "engineer",   "agent_id": "uuid", "title": "Curriculum Designer"},
    {"slot_role": "researcher", "agent_id": "uuid", "title": "Student Progress Tracker"}
  ],
  "next_steps": [
    "Open the workforce in the UI to wire up real-world actions on each agent.",
    "af workforce run --workforce-id <id> --trigger-data '{\"message\":\"...\"}'",
    "af workforce publish --workforce-id <id>"
  ]
}
```

Each agent starts with `tools: []`. Attach MCP tool providers (Google Docs, Slack, etc.) per agent via:

```bash
af agent update --agent-id <agent_id> --patch --body '{"mcp_clients":[{...}]}' --json
```

See `skills/agenticflow-mcp/SKILL.md` for the inspect-before-attach rule (Pipedream vs Composio write-safety).

## When no blueprint fits

If the user's business isn't in the 8 — coaching, consulting, legal, real-estate, SaaS support, vertical-specific ops, etc. — blueprints aren't the right shortcut. Use:

- **One chat endpoint / customer-facing bot / single assistant** → `af agent create` (see `skills/agenticflow-agent/SKILL.md`)
- **Custom multi-agent graph** → `af workforce create` + `af workforce deploy --body @graph.json` (see `skills/agenticflow-workforce/SKILL.md`)

## Skeleton mode

If the user wants the graph shape but intends to wire their OWN existing agents into it, use `--skeleton-only`:

```bash
af workforce init --blueprint tutor --name "My Tutoring Team" --skeleton-only --json
```

This creates a minimal `trigger → output` graph with the blueprint's metadata (roles, slots, starter tasks) stored on the trigger node's `meta.planned_agents`. No real agents are created — the user fills in the graph via the UI or a follow-up `af workforce deploy`.

## Related skills

- `skills/agenticflow-workforce/SKILL.md` — full `af workforce *` surface
- `skills/agenticflow-agent/SKILL.md` — single-agent use cases + how to attach MCPs after init
- `skills/agenticflow-mcp/SKILL.md` — inspect-before-attach for external tool providers

## Reference

- [CLI setup](./cli-setup.md)
- [Troubleshooting](./troubleshooting.md)
- [Glossary](./glossary.md)
