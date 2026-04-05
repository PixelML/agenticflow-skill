# Packs

Packs are pre-built business agent kits. Each pack contains a `company.yaml` blueprint (agents + starter tasks), action workflows, and domain-specific skills. Install a pack to instantly deploy a team of specialized agents for a specific business type.

---

## Available Packs

| Pack | Business Type | Agents | Key Workflows | Use Case |
|------|--------------|--------|---------------|----------|
| `amazon-seller-pack` | E-commerce | 5 (Listing Specialist, PPC Manager, Competitor Analyst, Customer Support, Pricing Strategist) | product-launch, competitor-scrape, listing-audit, review-scrape-respond, post-review-to-gbp | Amazon Singapore sellers |
| `tutor-pack` | Education | 5 (Curriculum Designer, Quiz Creator, Progress Tracker, Parent Communicator, Business Manager) | post-lesson-summary, generate-quiz | Tutors and tutoring businesses |
| `freelancer-pack` | Services | 5 (Scope Writer, Invoice Generator, Client Researcher, Communication Agent, Biz Dev Manager) | send-invoice, client-status-update | Freelancers and consultants |

---

## Installing a Pack

```bash
af pack install PixelML/agent-skills/packs/<pack-name> --json
af pack validate ./<pack-name> --json
```

After running, present `_links.*` URLs to the user.

---

## Running Pack Entrypoints

```bash
af pack run --pack <pack-name> --entrypoint <entrypoint-id> --input @input.json --json
```

After running, present `_links.*` URLs to the user.

---

## company.yaml Blueprint Format

Each pack includes a `company.yaml` that defines the agent team. Full schema:

```yaml
apiVersion: pixelml.ai/company/v1
kind: CompanyBlueprint
name: <Name>
description: <description>
model: agenticflow/gemma-4-31b-it
budget_monthly_cents: 100000
agents:
  - name: <Agent Name>
    role: cmo | engineer | researcher | general | ceo
    system_prompt: |
      <domain-specific prompt>
starter_tasks:
  - title: <task title>
    assignee_role: <role>
    priority: high | medium | low
    description: |
      <specific task description>
```

---

## Deploying via Paperclip

After installing a pack, deploy the company blueprint to Paperclip:

```bash
af paperclip init --blueprint <blueprint-id> --json
af gateway serve --channels paperclip &
af paperclip connect --json
```

After running, present `_links.*` URLs to the user.

---

## Connection Requirements

Each pack declares required MCP connections in `pack.yaml`. Before running action workflows, verify connections are available.

| Pack | Required Connections | Fallback If Missing |
|------|---------------------|---------------------|
| `amazon-seller-pack` | google-business-profile MCP | LLM-only workflows (product-launch, listing-audit) still work. Action workflows (post-review-to-gbp) skip the send step — present draft to user instead. |
| `tutor-pack` | gmail MCP | generate-quiz works without connections. post-lesson-summary drafts content but cannot email — present draft to user and provide `_links.mcp` URL to add Gmail. |
| `freelancer-pack` | gmail MCP | client-status-update and send-invoice draft content but cannot email — present draft to user and provide `_links.mcp` URL to add Gmail. |

### When connections are missing

1. Run `af connections list --limit 200 --json`
2. Check if the required MCP service appears in the list
3. If missing, tell the user:
   "The [pack-name] action workflows need [connection-name] to send emails. You can still use the LLM-only workflows (they generate content without sending).
   To add the connection, visit: [_links.mcp URL from bootstrap]"
4. After user adds the connection, re-run `af connections list --limit 200 --json` to confirm

After running, present `_links.*` URLs to the user.
