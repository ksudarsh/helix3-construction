# HELIX 3 Construction Engineering Journal — Agent Handoff

This file is the durable project memory for any future ChatGPT/agent continuing this site.

## 1. Project identity
- Repository: `ksudarsh/helix3-construction`
- Public site: `https://ksudarsh.github.io/helix3-construction/`
- Branch: `main`
- Project: HELIX 3, New Brunswick, New Jersey
- Purpose: a public, photo-based construction engineering journal for civil/structural engineering students and interested observers.
- Tone: sophisticated, visual, concise, educational; more like a polished Wix/Squarespace experience than a raw engineering notebook.

## 2. Core editorial rule
Every interpretation must distinguish:
- **Observed** — directly visible in photographs.
- **Likely** — engineering interpretation strongly consistent with visible evidence.
- **Unknown / not yet known** — requires drawings, geotechnical records, contractor information, or later evidence.

Do not overclaim exact shaft depths, diameters, capacities, bearing strata, structural load maps, or contractor identities unless independently confirmed.

## 3. Current engineering interpretation
The site is in deep-foundation / excavation / substructure work.

Observed:
- Multiple sizes of drilled-shaft foundations.
- Steel casings remain visible while surrounding excavation advances.
- Large rotary foundation drilling rigs work through casings and drill below the visible casing toe.
- Large drilling/clean-out buckets and Kelly bars are used.
- Long cylindrical reinforcing cages are staged horizontally, lifted vertically, and lowered into shafts.
- Wet-hole / groundwater conditions are significant.
- Concrete is pumped into shafts with mixer trucks sequenced for sustained placement.
- Upper casing sections are cut away; cut steel is flattened/scrapped.
- Shaft IDs such as 31, 33, 40, 41, 45, 46 and others are markings for individual shaft locations, not diameters.
- Excavation, shaft construction and concrete logistics occur concurrently.
- Perimeter excavation support/shoring is visible along the site boundaries.
- Excavators of several sizes are used for different tasks and constrained work zones.

Likely:
- Larger interior shafts serve heavier structural demands than smaller perimeter shafts.
- A smaller pipe installed inside a small steel casing with clean coarse stone around it is consistent with a dewatering/groundwater-control well or drainage installation; final confirmation would be pump/header/cable/well-head evidence.

Unknown:
- Exact shaft diameters, depths and capacities.
- Exact bearing strata.
- Whether left-in-place casing is structurally credited or sacrificial permanent casing.
- Final pile-cap / grouped-cap / mat / grade-beam arrangement.

## 4. Current site architecture
Important files:
- `index.html` — main page structure.
- `styles.css` — primary responsive / polished UI styling.
- `data.js` — current photo journal data (`window.HELIX_PHOTOS`).
- `app.js` — builds the gallery and lightbox.
- `field-guide.js` — dynamically inserts Student Field Guide and its nav link.
- `history.js` + `history.css` — Site Evolution / historical photo timeline.
- `ui.js` — hero actions, stats, mobile nav, scroll progress, section reveal effects.
- `foundation-section.svg` — responsive conceptual drilled-shaft section graphic.
- `images/originals/` — current construction photographs.
- `images/annotated/` — annotated copies for selected images.
- `images/history/` — historical site-evolution photographs.

Do not rename or delete referenced images without updating the JS that points to them.

## 5. UI / design principles
- Responsive on phones first.
- Avoid narrow, very tall text cards and ugly wrapping.
- Field Guide uses compact expandable rows (`<details>`), not long vertical panels.
- Gallery and process cards may swipe horizontally on small screens.
- Sticky/mobile navigation should remain usable.
- Keep visual hierarchy, generous spacing, rounded cards, subtle shadows, photography-led sections.
- React is not required merely for responsiveness. Keep static HTML/CSS/JS unless a more complex interaction genuinely justifies a build system.

## 6. Student Field Guide — confirmed content
Vendors:
- **Silvi Materials** — confirmed from photographs; ready-mix concrete supplier.
- Foundation drilling contractor — not yet identified.
- Concrete pumping contractor — not yet identified.

Equipment already documented:
- Rotary foundation drilling rig.
- Casing installation system.
- Kelly bar and drilling bucket.
- Concrete boom pump.
- Reinforcing cage and lifting operation.
- Hydraulic excavators.

Methods already documented:
- Drilled-shaft foundations.
- Wet-hole construction.
- Steel casing for bore stability.
- Continuous pumped concrete placement.
- Groundwater-control well with filter pack — marked Likely.
- Concurrent construction logistics.

Future equipment content should distinguish large crawler excavators, mid-size excavators and compact excavators by functional role rather than guess an exact model unless markings clearly establish it.

## 7. Historical section
Nine historical photos are in `images/history/` and are presented as Site Evolution. They show the district/site progressing from earlier conditions through neighboring steel construction, site preparation, excavation, casings and deep-foundation operations.

Three separate street-level images showing Clydz / Paterson Street and a June 2024 Street View were explicitly rejected by the user for inclusion. Do not add them unless the user reverses that decision.

## 8. Photo-update workflow
The user usually takes site photos on iPhone and may share them in ChatGPT first for analysis. Binary images must ultimately exist in the repo before the live website can reference them reliably.

Preferred workflow:
1. User takes photos on iPhone and may send them to ChatGPT for interpretation.
2. On Mac, user exports the selected day's new images.
3. User uploads them to GitHub under `images/originals/` in one batch.
4. User says: **`[date] photos committed. Close out today.`**
5. Agent verifies filenames in GitHub before changing `data.js` or other site text.
6. Agent updates gallery captions, Field Guide and/or Interpretation only after the referenced image paths are confirmed.
7. Treat each construction day as one closeout; do not duplicate images already in the repo.

## 9. Exact prompt for a brand-new ChatGPT conversation
User can paste:

> Continue my HELIX 3 Construction Engineering Journal. The GitHub repo is `ksudarsh/helix3-construction`. First read `AGENT_HANDOFF.md` and inspect the current live-site files before making changes. Continue from the existing design and engineering interpretation, preserve Observed / Likely / Unknown distinctions, and update the website with any new photos I provide. Do not ask me to re-explain the project unless something is genuinely missing.

A future agent should treat this repository file as the canonical project handoff, then inspect current repo state before editing.

## 10. Latest not-yet-closed field observations
Most recent shared field evidence includes:
- Work continuing after the long weekend with mass excavation and deep-foundation activity ongoing.
- Perimeter shoring/excavation support especially visible along site edges.
- Several sizes of excavators working concurrently, illustrating bulk earthmoving versus more constrained/precise excavation.
- Additional zoom photographs show numbered casings, stacked/cut reinforcing cages and casing segments, excavators working around shaft locations, and closer views of excavation support along the perimeter.

Before publishing captions for any newly shared photo, verify that the corresponding file has been uploaded to `images/originals/`.

## 11. Important safety/editorial caution
This is an educational visual interpretation, not project design documentation or formal engineering certification. Do not state measurements or structural conclusions as fact unless supported by project records.
