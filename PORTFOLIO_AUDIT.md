# Portfolio Audit — DivyankLosse

Generated: 2026-09-16. Facts below are from `gh` API calls, HTTP checks, and local builds run on this machine. Nothing is estimated.

---

## 1. Repository Inventory

17 repositories under `DivyankLosse` (0 forks, 0 archived).

| Repo | Lang | Vis | Last push | Size | README | Topics | Demo |
|---|---|---|---|---|---|---|---|
| astro-guru | TypeScript | private | 2026-09-15 | 131 MB | 3.3 KB | none | none |
| classroom_monitor | Python | private | 2026-09-08 | 16 MB | 1.4 KB | none | none |
| posture-report-hub | Python | private | 2026-08-28 | 8 MB | 3.9 KB | none | none |
| posture-guardian | Python | public | 2026-08-25 | 5 MB | 5.4 KB | 12 | none |
| Schedular | TypeScript | private | 2026-07-05 | 1.4 MB | 2.4 KB | none | **200 OK** |
| portfolio | SCSS | private | 2026-05-23 | 16 MB | **missing** | none | **404 DEAD** |
| EcoGrid | Python | public | 2026-04-26 | 855 KB | 3.7 KB | none | none |
| SSS-Startup-Survival-Simulator | Python | public | 2026-04-25 | 588 KB | 9.5 KB | none | none |
| Sign-Bridge | JavaScript | public | 2026-04-14 | 65 MB | 2.0 KB | none | **404 DEAD** |
| AgriLO | JavaScript | public | 2026-04-01 | 211 MB | 3.8 KB | 8 | **200 OK** |
| Customer-Retention | Python | private | 2026-03-20 | 7.8 MB | **missing** | none | none |
| videospark-studio | TypeScript | private | 2026-03-14 | 282 KB | 2.1 KB | none | none |
| Taizo-VideoAI | TypeScript | public | 2026-03-14 | 329 KB | 1.9 KB | none | none |
| DivyankLosse (profile) | — | public | 2026-02-13 | 14 KB | 4.8 KB | 2 | — |
| IPL-data-Viz- | — | public | 2026-01-27 | 0 KB | **missing** | none | none |
| Hospital-Management-System | Python | public | 2025-04-08 | 1 MB | 4.1 KB | none | none |
| Hotel-Billing-System | Jupyter | public | 2024-09-05 | 5 KB | 40 B stub | none | none |

### Classification

**A. FLAGSHIP** — `astro-guru`, `posture-guardian`, `AgriLO`, `Sign-Bridge`, and this portfolio site.
**B. ACTIVE** — `Schedular`, `classroom_monitor`, `posture-report-hub`, `EcoGrid`, `Taizo-VideoAI`, `videospark-studio`.
**C. DEAD / BROKEN** — this portfolio site (build fails, remote missing), `portfolio` (demo 404, no README), `Sign-Bridge` (demo 404).
**D. PROTOTYPE** — `SSS-Startup-Survival-Simulator`, `Customer-Retention`, `IPL-data-Viz-`.
**E. ARCHIVE** — `Hotel-Billing-System`, `Hospital-Management-System` (2024–2025 coursework).

---

## 2. Portfolio Status (local: `D:\Projects\Portfolio`)

Next.js 16.2.6 / React 19 / Tailwind 4 / GSAP / three.js + react-three-fiber. A substantial in-progress rebuild: 32 uncommitted paths, last commit `e0af7c4`.

**Resolved 2026-09-16:** `portfolio-site` created (private), remote re-pointed, build green, rebuild pushed as `3a28c3b`. The four problems below are kept as the record of what was wrong.

**Blocking problems, in order:**

1. **The git remote does not exist.** `origin` points at `https://github.com/DivyankLosse/portfolio-site.git`, which returns HTTP 404 from the GitHub API. None of the rebuild can be pushed anywhere. A separate `portfolio` repo (SCSS, private) does exist and holds the older site, whose Vercel demo is 404.
2. **`npm run build` fails.** Compilation succeeds in 6.3 s; type checking then fails at `components/sections/Hero.tsx:64` — `BlurText` is called without its required `animationFrom`, `animationTo`, and `onAnimationComplete` props. This is the only type error in application code.
3. **`react-bits-temp/` — 118 MB of vendored scratch library source** sitting untracked in the project root. It is inside the `tsconfig` include set and contributes ~20 further type errors (missing `ogl`, `gl-matrix`, `@react-three/rapier`, `matter-js`, `react-router-dom`). Committing it would balloon the repo; it should be removed or gitignored once the components in use are copied into `components/`.
4. **Stale artifacts committed to the working tree** — `build_output.txt` (UTF-16, references a `components/reference/` directory that no longer exists) and `tsc_errors.log`. Both are obsolete and should be deleted and gitignored.

---

## 3. Security Findings

- `.env` exists locally, holds one key (`GITHUB_PAT`), is matched by `.gitignore:34` (`.env*`), is untracked, and **never appears in git history**. No leak.
- `GITHUB_PAT` is read server-side only, in `app/api/github/route.ts:6`. No `NEXT_PUBLIC_` exposure anywhere in `app/`, `lib/`, or `components/`. Correct.
- **Missing:** no `.env.example` documenting `GITHUB_PAT` for anyone cloning the repo.
- Wider secret scanning across the other 16 repositories has **not** been run yet.

---

## 4. Repository Quality Gaps

- **15 of 17 repos have no topics.** Only `posture-guardian` and `AgriLO` are tagged. Topics drive GitHub search discovery.
- **3 repos have no README** (`portfolio`, `Customer-Retention`, `IPL-data-Viz-`); `Hotel-Billing-System`'s is a 40-byte stub.
- **`IPL-data-Viz-` is 0 KB** — an empty repo with a long description promising analysis that contains no code. The trailing hyphen in the name is also a typo.
- **No repo has a description** except `posture-guardian`, `AgriLO`, `Taizo-VideoAI`, `IPL-data-Viz-`, `Hospital-Management-System`, `Hotel-Billing-System`.
- **`AgriLO` is 211 MB and `Sign-Bridge` 65 MB** — likely committed binaries or model weights; not yet inspected.
- No GitHub Actions workflows checked yet on any repo.

---

## 5. Deployment Status

| Project | URL | Status |
|---|---|---|
| Schedular | schedular-seven.vercel.app | Live (200) |
| AgriLO | agri-lo-six.vercel.app | Live (200) |
| portfolio (old) | portfolio-liart-ten-…vercel.app | **Dead (404)** |
| portfolio (live) | divyankkhewale.vercel.app | Live (200) — serves the **old GSAP site**, not the Next.js rebuild |
| Sign-Bridge | sign-bridge-chi.vercel.app | **Dead (404)** |

Both dead URLs are still advertised in their repositories' `homepage` field, so GitHub shows a broken link on each repo page.

---

## 6. Not Yet Investigated

Discovery so far covered GitHub metadata, the live-URL checks, and a full local build of the portfolio only. Still outstanding: cloning and running the other 16 repos, their dependency health, their CI, model-file handling in the AI/ML repos, and the current content of the profile README.

---

## 7. Recommended Execution Order

1. **Unblock the portfolio** — fix the `BlurText` type error so the build is green, remove `react-bits-temp/` and the stale logs, add `.env.example`.
2. **Resolve the remote question** (needs your decision — see below), then commit and push the rebuild.
3. **Portfolio content and QA** — real project data for the flagship repos, responsive and accessibility passes, no dead demo links.
4. **Kill the broken links** — clear or correct the `homepage` field on `portfolio` and `Sign-Bridge`; decide whether to redeploy either.
5. **Repository hygiene sweep** — descriptions, topics, and READMEs across all 17; secret scan; decide the fate of `IPL-data-Viz-`.
6. **Flagship deep work** — `astro-guru`, `posture-guardian`, `AgriLO`, `Sign-Bridge`: run locally, verify, document, revive.
7. **Profile README** — refresh once the flagship set is settled.

## 8. Needs Your Input

- **Point Vercel at the new repo.** `divyankkhewale.vercel.app` currently builds from the old GSAP site, not from `portfolio-site`. Switching the Vercel project's Git source (and setting `GITHUB_PAT` in its environment variables) is a dashboard action only you can take.
- **`IPL-data-Viz-` deletion is blocked.** The `gh` token lacks the `delete_repo` scope. Run `gh auth refresh -h github.com -s delete_repo` in an interactive terminal, then I can delete it.
- **The other dead deployment.** `Sign-Bridge` still advertises a 404 demo. I can make the repo deployment-ready but cannot deploy it.

---

# Frontend Design Review — 2026-09-16

Conducted against the running app at 1440x900 and 375x812, with DOM and network
inspection. Every item below was observed, not inferred.

## A. Blocking — fix before the site goes live

| # | Finding | Evidence |
|---|---|---|
| A1 | **Project tech stacks and architectures are fabricated.** See section B. | Cross-checked against repo metadata and the CV |
| A2 | **Four `PLACEHOLDER` strings render as visible text** — one profile image in About, three screenshot boxes in Projects | `innerText` match count: 4 |
| A3 | ~~Hero takes ~19 s to become visible~~ — **withdrawn.** That figure was measured against `next dev`, where Turbopack compiles the three.js bundle on demand. Measured against a production server the same page reports DOMContentLoaded 30 ms and load 297 ms. The dev-mode number was not a user-facing defect | `npx next start`, Navigation Timing API |
| A4 | **The floating header pill overlaps content at every scroll position.** The logo tile is an opaque black square that sits over whatever is behind it — hero eyebrow text, "Quick Actions", section headings | Visible in every desktop screenshot |

## B. Fabricated project data

The same class of problem as the removed Experience entries. Each claim below is
contradicted by a source you control.

**SSS Startup Survival Simulator** — site claims `Next.js, Python, FastAPI, PostgreSQL, Redis, AWS`
and "microservices architecture deployed on AWS, utilizing a highly concurrent game engine backend".
The repository is 588 KB of Python. The CV describes it as "LLM Agents, OpenEnv" and "an AI
simulation environment using LLM agents". Next.js, PostgreSQL, Redis, AWS, the microservices claim
and the game engine claim have no support. The site also says "reinforcement learning principles"
where the CV says LLM agents.

**AgriLO** — site claims `React Native, TensorFlow, Django, IoT Data Pipeline`. The repository's own
topics, which you set, are `fastapi, mongodb, react, razorpay, iot, agritech`. Django contradicts
FastAPI; React Native contradicts React. MongoDB and Razorpay are missing entirely.

**Sign-Bridge** — site claims `Python, MediaPipe, PyTorch, React, WebRTC`. The repository's primary
language is JavaScript. The CV says "React + Vite frontend, FastAPI backend, and MongoDB". FastAPI,
Vite and MongoDB are absent; PyTorch and WebRTC are unsupported.

## C. Dead weight in the repository

| Item | Size | Status |
|---|---|---|
| `public/models/` (character.glb, character.enc, decrypt.cjs, .hdr) | 4.1 MB | **Never requested.** No code references `.glb`, `useGLTF`, or `.enc` |
| `public/draco/` (decoder js + wasm) | 984 KB | **Never requested.** No `DRACOLoader` anywhere |
| `components/Antigravity.jsx` | orphan | Only `components/ui/Antigravity.tsx` is imported; the two differ by 374 lines |
| `file.svg`, `window.svg`, `globe.svg`, `next.svg`, `vercel.svg` | small | Next.js starter leftovers, unreferenced |

Roughly 5 MB of binary assets ship in the repo for a 3D character that never loads. The hero's
right half is empty as a result — only the Antigravity particle canvas renders.

## D. Accessibility

- ~~`prefers-reduced-motion` is not handled anywhere.~~ **Fixed.** Now honoured across Framer Motion
  (`MotionConfig reducedMotion="user"`), Lenis (not instantiated), the particle canvas (frame loop
  short-circuits) and CSS. Correction to the original finding: GSAP is listed in `package.json` but
  is **not imported anywhere in the app**, so it was never part of the motion stack.
- **Heading order starts at H2 before the H1** (`H2,H1,H3,...`).
- Good: all 5 images carry `alt`, no button lacks an accessible name, and after the fixes below no
  `href="#"` links remain.

## E. Fixed in this pass

- Nav "Work" pointed at `#work`, which does not exist — the section id is `projects`. Fixed in both
  the desktop and mobile nav.
- The mobile menu's `LI / GH / TW` row was three `href="#"` dead links. Replaced with a working
  GitHub link and an email link.

## F. Recommended, in order

1. Replace the fabricated project data with what the repos and CV actually support.
2. Add real screenshots, or drop the placeholder boxes and let the cards be text-only.
3. Add a profile photo, or remove the About image panel.
4. Either wire up the 3D character the assets were committed for, or delete the 5 MB.
5. Shorten the intro sequence, and gate it behind `prefers-reduced-motion`.
6. Give the header a solid background or move the logo out of the content column.
7. Write a README. The repo is public and has none.
