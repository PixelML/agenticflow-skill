# AgenticFlow Marketplace — Reference

Added in CLI v1.8.0 (2026-04-14). The marketplace is the **live backend catalog** of user- and admin-curated templates. It complements (does not replace) the CLI-shipped blueprints.

## What the marketplace is

- A unified catalog at `/v1/marketplace/items` that covers three template kinds:
  - `agent_template` — a pre-built agent (`plugin_tools[]` + workflow tools) a user can clone.
  - `workflow_template` — a pre-built workflow graph users can import.
  - `mas_template` — a pre-built MAS/workforce DAG (nodes + edges, referencing source-workspace agent ids).
- Backend-hosted, so new templates appear without a CLI release.
- Exposed to the CLI via `af marketplace *` (browse + fetch + clone) and `af templates duplicate *` (clone by id without going through the marketplace wrapper).

## When to reach for marketplace vs blueprint

| If you want… | Use |
|---|---|
| A starter that works in any workspace, offline, CI-friendly | Blueprint (`af agent init` / `af workforce init`) |
| A specific user-published template (link shared by a teammate, found in web UI) | Marketplace (`af marketplace try --id <item_id>`) |
| To browse the full community catalog | Marketplace (`af marketplace list --type <kind>`) |
| Something the CLI team didn't ship | Marketplace |

Concise form: `af playbook marketplace-vs-blueprint`.

## Commands

### Browse

```bash
# Top 50 items, all kinds
af marketplace list --limit 50 --json

# Filter by kind
af marketplace list --type agent_template --json
af marketplace list --type workflow_template --json
af marketplace list --type mas_template --json

# Search + featured + free
af marketplace list --search "seo" --featured --free --json

# Field projection (items[] only — envelope stays)
af marketplace list --limit 10 --fields id,name,type,creator --json
```

### Get

```bash
af marketplace get --id <item_id> --json
# Response includes the embedded *_template_detail ready for cloning.
```

### Try (clone into your workspace)

```bash
# Preview
af marketplace try --id <item_id> --dry-run --json

# Execute
af marketplace try --id <item_id> --json
```

Auto-detects the item's type:
- `agent_template` → creates tool workflows, then the agent (mirrors `af templates duplicate agent`).
- `workflow_template` → creates the workflow (mirrors `af templates duplicate workflow`).
- `mas_template` → creates the workforce shell, then PUTs nodes+edges.

### Templates-namespace equivalents (same end state)

```bash
af templates duplicate agent --template-id <agent_template_uuid> --json
af templates duplicate workflow --template-id <workflow_template_uuid> --json
af templates duplicate workforce --template-id <marketplace_mas_item_id> --json
```

Use `af templates duplicate` when you already have a specific `*_template_id` in hand (e.g. from `af templates sync`). Use `af marketplace` when you're working from marketplace item ids or exploring the catalog.

## Cross-workspace caveat (MAS templates)

MAS templates store the **source workspace's agent_ids** directly on their agent nodes. Cloning the template into your workspace produces a workforce whose agent nodes reference agents that DON'T EXIST in your workspace → the workforce will 400 on runs until you wire it up.

Both `af marketplace try --type mas_template` and `af templates duplicate workforce` emit a `warnings` array listing the referenced agent ids. For each one:

1. Duplicate/recreate the source agent in your workspace.
2. Patch the workforce graph to point to your workspace's new agent ids:
   ```bash
   af workforce schema --workforce-id <id> --json > /tmp/wf.json
   # edit /tmp/wf.json: replace agent_id values in agent nodes
   af workforce deploy --workforce-id <id> --body @/tmp/wf.json --json
   ```

Agent and workflow template clones don't have this problem — tool workflows are materialized automatically.

## Why we keep blueprints alongside marketplace

- **Zero network.** Blueprints work without hitting the marketplace API — useful in CI and air-gapped setups.
- **Version lock.** A given CLI version always produces the same starter. Marketplace items can change under you.
- **Tier awareness.** Tier 1 blueprints bypass MAS Workforce entirely — important for workspaces that don't have that feature.
- **Opinionated.** The 3 Tier 1 blueprints ship a curated plugin loadout (web_search, web_retrieval, api_call, etc.) vetted against the node-type registry.

Marketplace is where the long tail lives; blueprints are where the guaranteed-working shortcuts live.

## Future direction

Anticipated (not shipped yet):
- Marketplace items for the CLI's own blueprints, so `af agent init --blueprint` can optionally check marketplace for a newer curated version.
- Native "try" endpoint surfaced for API-key auth (today the `/mix` endpoint rejects API keys and requires user JWT).
- Tags/categories as first-class filters.
