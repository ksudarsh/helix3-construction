# Efficient photo updates: lessons from October 6, 2026

## Known project identity

- Repository: `ksudarsh/helix3-construction`; publication branch: `main`.
- Website: https://ksudarsh.github.io/helix3-construction/
- Static HTML/CSS/JS; GitHub Pages rebuilds after a branch update. No Sites migration or framework installation is required.
- `AGENTS.md` points here. `AGENT_HANDOFF.md` retains the editorial history and dated evidence.
- October 6 update: `october6.js`, six unchanged originals, two self-contained numbered SVG annotations. Final verified publication commit: `8bd0554d7d9072ee0029cee34781b1933dacc4e6`.

## Start with the existing evidence

Use the repository URL and the current conversation instead of broad repository searches or repeatedly retrieving prior conversations. If missing context matters, make one focused Personal Context query. The user explicitly approved the October 6 public photo release after a review rejection; preserve that fact rather than asking again for the same action. New unrelated disclosures require their own judgment. A review rejection must be resolved with authorization/evidence or reported; never bypass it through a different interface.

User-supplied scratch paths initially appeared missing in the chat, but all six files existed when checked with local tools. Check paths first. Use `download_file` only if needed; do not redundantly materialize the same attachments through Library.

Read only the files needed for the update: `AGENT_HANDOFF.md` latest sections, `index.html`, the latest dated update script, `data.js`, `history.js`, and relevant date/style logic. Store large tool results privately and print only summaries. Do not print the full tool registry, base64 images, or entire commit diffs.

## Prepare the whole update before publishing

1. Inspect photographs. Preserve originals in `images/originals/`; record SHA-256, dimensions, date basis and any excluded overlap in `records/`.
2. Add a dated script following `october6.js`. Set a unique section ID and ISO `data-update-date`; insert the new section ahead of the previous update. Match numbered callouts with explanations.
3. Add the script before `ui.js` in `index.html`. Update `data.js`, the overview and `history.js`; bump changed script versions. `ui.js` automatically derives the latest field date and `#latest` from dated sections. Do not hand-edit repeated field dates.
4. Preserve the observer's local date in America/New_York. A commit after UTC midnight can correctly say October 7 while the field observation says October 6.
5. Finish annotations, integrity checks and all narrative changes before one publication commit. Avoid uploading a draft annotation and fixing it through repeated deployments.

## Two annotation pitfalls

**External images inside an SVG:** SVGs displayed through HTML `<img>` should be self-contained. An `<image href="../originals/photo.jpeg">` is unreliable in that rendering mode. Embed the original JPEG bytes as `data:image/jpeg;base64,...` in the SVG. Keep the untouched JPEG separately for original-view links. The annotations are code/vector overlays, not edited source photographs.

**Truncated transfer:** A large shell result was silently capped even with `max_output_tokens: 1000000`. The October 6 excavation SVG was **945,043 bytes locally**, but the uploaded blob decoded to **786,444 bytes**. The tool call succeeded and the file returned HTTP 200, yet the SVG was corrupt. There was no dependable truncation warning inside `output`.

Never infer integrity from success, HTTP 200, token budget or absence of a warning. Compute the expected Git blob SHA locally and compare it with `github_create_blob`'s returned SHA before adding it to the tree. `git hash-object PATH` computes this Git object hash; the SHA-256 recorded for original-photo identity is a different hash.

Use `scripts/photo_payload.py PATH` for metadata and `scripts/photo_payload.py PATH --chunk INDEX` for bounded base64 chunks. Chunks are zero-based and at most 200,000 ASCII characters. Collect the outputs privately in code mode, concatenate in order, verify the total length, then call `github_create_blob` with `encoding: "base64"`. Independent chunk reads can run concurrently. Keep repository mutations sequential.

Example metadata/transfer outline:

```text
metadata = parse the helper's JSON output
chunks = read indices 0 through metadata.chunk_count - 1
content = concatenate chunks in index order
assert content.length == metadata.base64_characters
blob = github_create_blob(repository, content, encoding="base64")
assert blob.sha == metadata.git_blob_sha
```

This pattern works for both unchanged originals and self-contained SVGs. For small UTF-8 files, direct text content is simpler, but still compare returned hashes. Never print the assembled payload into the model context.

## Publication route that worked

Read the remote `main` ref and its Git commit/tree. Use that current tree as the base; do not build on stale local HEAD. Compare the remote head with the checkout before replacing existing files; if it changed, fetch the affected latest content and reconcile first.

Read-only `git clone`/`git fetch` worked here. CLI `git push` failed because terminal Git had no GitHub credentials, while the GitHub connector had write access. Do not repeatedly retry terminal push or probe credentials. Use:

1. `github_create_blob` for each changed file; verify every SHA.
2. `github_create_tree(base_tree_sha=current_tree, tree_elements=changed_entries)`; entries use `path`, `mode: "100644"`, `type: "blob"`, `sha`.
3. `github_create_commit(parent_sha=current_head, tree_sha=new_tree, message=...)`.
4. `github_update_ref(branch_name="main", sha=new_commit, expected_sha=current_head, force=false)`.

If the head/lease changes, inspect the new head and reconcile; do not force over someone else's work. Check errors at every stage. A created blob is not publication; the branch update and successful Pages deployment are required.

## Verify once, at the right time

Before publication:

- Run `node --check` on changed JS and `git diff --check`.
- Resolve new asset paths and parse SVG XML.
- Check original-photo SHA-256 and every upload's Git blob SHA.
- Ensure the SVG contains embedded image bytes and all intended callouts.

After publication:

- Query `actions/runs?per_page=1`; require its `head_sha` to equal the new commit. Then query that exact run ID until `status=completed`, `conclusion=success`. The convenience commit-workflow tool in this session filters PR-triggered runs and is unsuitable for Pages.
- Poll at sensible intervals (roughly 15–30 seconds), printing only ID/head/status/conclusion. Do not repeatedly dump full workflow responses or check the website before deployment finishes.
- Open the live dated section. Inspect matching explanations, latest-date labels, loaded photo dimensions and enlargement/close behavior. Expand collapsed photos before expecting lazy images to load. An offscreen/collapsed lazy image with `naturalWidth=0` is not by itself a broken asset.
- Visually inspect the annotated photo; XML parsing and successful network responses alone cannot prove it renders.
- Use the established responsive CSS. Check a phone viewport if supported; do not claim mobile visual QA without doing it.

An image replaced at the same URL may remain broken in browser/CDN caches. Version its URL in both the dated section and `data.js` (e.g. `IMG_0136.svg?v=20261006-complete`), and bump the affected script URLs in `index.html`. Do this as part of the initial update whenever an existing asset is replaced.

Browser verification worked through CUA. Read its documentation once and use supported APIs. Offscreen clicks and smooth scrolling sometimes produced misleading intermediate views; collect fresh state after each action and allow the scroll to settle before interpreting a screenshot. Navigate with the known dated link instead of guessing scroll amounts. Read-only DOM checks can verify `complete`, `naturalWidth` and `naturalHeight`. Do not assume unsupported viewport or scrolling APIs exist.

Local Playwright had no browser executable; a download attempt failed. CairoSVG was absent too. Do not spend repeated attempts installing rendering stacks merely to check a small update when the live browser can verify it. If local visual QA is unavailable, do syntax/integrity checks before publishing and perform visual QA on the deployed page.

## Keep the next thread inexpensive

Update the handoff with new evidence, exclusions, paths and unresolved questions. Keep this runbook focused on proven mechanisms, not speculative troubleshooting. Repository-backed code/docs stay in Git; they do not need a second Library copy. Create an extra review bundle only when it serves an actual review/blocking need, and refresh any copy if it is offered as the final deliverable.

Completion means: intended commit deployed successfully, original files preserved, annotated images visibly correct, and a direct link to the dated live update returned to the user.
