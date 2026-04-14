#!/usr/bin/env node
/**
 * sync-from-cli.mjs — regenerate skill content from the published AgenticFlow CLI.
 *
 * Intent (not yet implemented — this is a stub that documents the mechanism):
 *
 *   1. Install the latest `@pixelml/agenticflow-cli` to a temp directory
 *   2. Read its bundled playbook content (via `af playbook <topic> --json`)
 *   3. Read the CLI's schema surface (via `af schema <resource> --json` +
 *      `af schema <resource> --field <name> --json`)
 *   4. Regenerate skills/<skill-name>/SKILL.md from templates, interpolating
 *      the current CLI surface so the skill content never drifts from what the
 *      CLI actually supports
 *   5. Bump version in plugin manifests + package.json
 *   6. Print a diff the caller can review before committing
 *
 * Why: the CLI's `packages/cli/src/cli/playbooks.ts` is the canonical source of
 * truth for playbook content. Keeping narrow skill descriptions hand-synced is
 * the drift risk we explicitly designed this repo split to avoid — this script
 * closes the loop.
 *
 * Usage (once implemented):
 *   node scripts/sync-from-cli.mjs               # Latest published CLI
 *   node scripts/sync-from-cli.mjs --cli 1.6.4   # Pin to a specific version
 *   node scripts/sync-from-cli.mjs --dry-run     # Show what would change
 *
 * Until implementation lands, skills are hand-maintained and this stub serves
 * as the forcing function + design doc.
 */

const args = new Set(process.argv.slice(2));
const isDryRun = args.has("--dry-run");

console.log(JSON.stringify({
  schema: "agenticflow.skill.sync.v1",
  status: "stub",
  dry_run: isDryRun,
  message: "Not yet implemented. Skills in agenticflow-skill are hand-maintained. See script header for intended behavior.",
  next_action: "Track in https://github.com/PixelML/agenticflow-skill/issues",
}, null, 2));

process.exit(0);
