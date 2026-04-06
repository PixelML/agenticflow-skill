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

## Pack Contents Detail

### amazon-seller-pack
**Agents:** AMZ Listing & SEO Specialist (cmo), AMZ PPC Campaign Manager (engineer), AMZ Competitor Analyst (researcher), AMZ Customer Support (general), AMZ Pricing Strategist (ceo)
**Workflows:** full-product-launch, competitor-scrape, listing-audit, review-scrape-respond, post-review-to-gbp
**Starter Tasks:** Optimize top 3 product listings, Plan PPC campaigns (SGD 800/month budget), Competitive analysis report, Draft review response templates, Quarterly pricing strategy
**Connections:** google-business-profile MCP (required for post-review-to-gbp; other workflows are LLM-only)

### tutor-pack
**Agents:** Curriculum Designer (cmo), Quiz & Assessment Creator (engineer), Student Progress Tracker (researcher), Parent Communication Specialist (general), Tutor Business Manager (ceo)
**Workflows:** post-lesson-summary (LLM + gmail MCP), generate-quiz (LLM only -- no connection needed)
**Starter Tasks:** Create 4-week curriculum for Grade 5 Mathematics, Generate 20-question assessment for Grade 5 fractions, Analyze student performance data for Term 1, Draft parent progress report for mid-term, Create pricing packages for tutoring services
**Connections:** gmail MCP (required for post-lesson-summary email sending; generate-quiz works without connections)

### freelancer-pack
**Agents:** Project Scope Writer (cmo), Invoice & Contract Generator (engineer), Client Research Analyst (researcher), Client Communication Agent (general), Business Development Manager (ceo)
**Workflows:** send-invoice (LLM + gmail MCP), client-status-update (LLM + gmail MCP)
**Starter Tasks:** Write project proposal for web development client, Generate invoice for March project work, Research Acme Corp for new business pitch, Draft follow-up email for proposal sent last week, Set freelance rates for full-stack development
**Connections:** gmail MCP (required for send-invoice and client-status-update email sending)

---

## Installing a Pack

```bash
# From GitHub (note: github: prefix is REQUIRED for remote sources)
af pack install github:PixelML/agent-skills/packs/<pack-name> --json

# From a local directory (absolute path)
af pack install /path/to/agent-skills/packs/<pack-name> --json

# Validate after install
af pack validate --path ./<pack-name> --json
```

**Important:** Bare paths like `PixelML/agent-skills/packs/tutor-pack` (without the `github:` prefix) are treated as LOCAL paths relative to your current directory, which will fail. Always use `github:` for GitHub sources.

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

### Built-in Blueprints

`af paperclip init --blueprint <id>` only works with these built-in blueprints:
**dev-shop**, **marketing-agency**, **sales-team**, **content-studio**, **support-center**, **amazon-seller**

```bash
af paperclip init --blueprint <blueprint-id> --json
af gateway serve --channels paperclip &
af paperclip connect --json
```

### Packs Without a Built-in Blueprint (tutor-pack, freelancer-pack)

These packs do NOT have a matching Paperclip blueprint. Create agents individually from the pack's `company.yaml` instead:

```bash
# Read agents from company.yaml, then create each one:
af agent create --name "<Agent Name>" --system-prompt "<prompt from company.yaml>" --json
# Repeat for each agent in the pack
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
