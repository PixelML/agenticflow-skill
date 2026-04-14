# Copy-Paste User Prompts

Give any of these prompts to an AI assistant (Claude Code, Cursor, ChatGPT with terminal, Gemini CLI, etc.) that has the `af` CLI available. The AI will discover what to do via `af bootstrap --json` + `af blueprints list --json`.

**Why minimal:** the CLI is designed so an AI can route correctly from `bootstrap` alone. Over-specifying the prompt (e.g. naming exact command) bypasses the discovery — and the discovery surface IS the platform's contract.

**The composition ladder** (explicitly named by rung in each prompt below): rung 0-2 are workflows, rung 3 is agent + plugins, rung 6 is workforce DAG. Pick the lowest rung that solves the user's need.

---

## 🧭 First-time user (ambiguous)

```
I have an AgenticFlow workspace set up. I want to understand what this platform actually does. Using the `af` CLI,
pick a simple ready-made starter that gives me a tangible sense of what AgenticFlow can do, deploy it, test it with
a realistic prompt, and report what you saw. Clean up after. Prefer the LOWEST rung of the composition ladder that
demonstrates something meaningful (don't over-engineer — a workflow may be enough).
```

**Expected:** AI reads `af bootstrap --json` + `af blueprints list --json`, picks a rung-0 workflow (`llm-hello`) OR a rung-3 agent (`research-assistant`) based on what demonstrates the platform best, deploys + runs + deletes.

---

## Rung 0 — Simplest possible (single LLM call)

```
Deploy the simplest thing AgenticFlow can do — one LLM call as a deployable unit. Use `af`. Test it with a real
question. Clean up after.
```

**Expected:** `af workflow init --blueprint llm-hello` → `af workflow run` → success + content.

---

## Rung 1 — Chained LLMs

```
Deploy a workflow that plans a question first and then answers it in two separate LLM calls. Use `af`. Test with
a realistic "how do I decide..." question so the plan-then-execute distinction is visible. Clean up.
```

**Expected:** `af workflow init --blueprint llm-chain` → shows the Planner's steps AND the Executor's answer using those steps.

---

## Rung 2 — Workflow + real-world data

```
Deploy a workflow that fetches a URL and summarizes it. Use `af`. Test with a Wikipedia article. Confirm the
summary reflects the actual article content (not hallucinated). Clean up.
```

**Expected:** `af workflow init --blueprint summarize-url` → real URLs in output → accurate 3-bullet summary.

**Variant — API summary:**

```
Deploy a workflow that calls a JSON API and explains the response in plain English. Use `af`, pick a public API
(jsonplaceholder, GitHub, etc.), test it. Clean up.
```

**Expected:** `af workflow init --blueprint api-summary` → real API response → LLM names specific fields correctly.

---

## Rung 3 — Agent with plugins (flexible)

```
Set up a research agent for me that can answer current-events questions with cited sources from the web. Use the
`af` CLI. Test with a real recent-news question. Confirm it actually used web search (not just training data).
Clean up.
```

**Expected:** `af agent init --blueprint research-assistant` → real URLs + post-cutoff dates in response.

---

## Rung 6 — Multi-agent workforce

```
I want to see a multi-agent workforce that investigates a question in parallel. Deploy a fan-out research workforce
via `af` and test with a 'compare X vs Y' question. Confirm both researchers ran in parallel and a synthesizer
produced the final unified answer. Clean up.
```

**Expected:** `af workforce init --blueprint parallel-research` → 4 agents (coordinator, 2 researchers parallel, synthesizer) → synthesizer's unified answer in output.

**Variant — content + image:**

```
Help me deploy a small workforce: one agent drafts written content, another generates a matching image. Use `af`.
Test by having it produce a short blog-style piece on a topic of your choice. Clean up.
```

---

## 🛍️ Browse the live marketplace

```
Using the `af marketplace` commands, browse the live template catalog. Pick an item that looks genuinely useful
(not a test entry), clone it into my workspace, verify it works end-to-end with a realistic prompt, then clean
up. Tell me what you picked and why.
```

**Expected:** `af marketplace list --type agent_template --json`, picks high-`num_uses` item, `af marketplace try --id <id>`, runs it, deletes.

---

## 🏢 Vertical team (pick a domain blueprint)

```
I run a [YOUR BUSINESS — e.g. 'small marketing agency' or 'tutoring business' or 'freelance consulting practice'].
Using `af bootstrap` and `af blueprints list`, find the workforce blueprint that matches, deploy it, and run one
realistic starter task. Summarize what got created and how to run the team day-to-day.
```

**Expected:** AI matches vertical → `dev-shop` / `marketing-agency` / `sales-team` / `content-studio` / `support-center` / `amazon-seller` / `tutor` / `freelancer`. Deploys with `af workforce init`.

---

## 🧪 What the AI should do with these

1. `af bootstrap --json` — auth + 20 blueprints with `kind` + `complexity` + `deploy_command` + rulebook in `whats_new.for_ai`.
2. `af blueprints list [--kind workflow|agent|workforce] [--complexity 0-6] --json` for the right rung.
3. `af marketplace list --json` only if blueprints don't fit the user's ask.
4. Execute deploy with `--dry-run --json` first, then for real.
5. Smoke-test with a realistic prompt that exercises the agents' plugins or the workflow's nodes.
6. Delete every resource it created.

If the AI skips steps, picks the wrong rung (rung 6 when a rung 0 workflow would suffice), or names a command you didn't hint at, that's useful feedback — see `af playbook marketplace-vs-blueprint` and `af playbook composition-ladder` for the decision rules.
