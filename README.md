# Portfolio — Divyank Khewale

Personal portfolio site for an AI engineering student: a single scrolling page covering
background, projects, skills and contact, with a WebGL particle hero and live GitHub data.

**Live:** [divyankkhewale.vercel.app](https://divyankkhewale.vercel.app)

> The live URL currently serves an earlier GSAP build. This repository is the Next.js
> rebuild that replaces it.

## Overview

The page is composed of standalone sections rendered in order from `app/page.tsx`:

| Section | Purpose |
|---|---|
| `Hero` | Headline, animated intro copy, resume and contact CTAs, particle canvas |
| `RecruiterMode` | Quick actions — resume download, email, GitHub, projects |
| `About` | Background and approach |
| `AIIdentity` | Six capability cards |
| `Achievements` | Hackathon credential plus live GitHub counters |
| `Projects` | Deep dives with problem, solution, architecture, stack and highlights |
| `Skills` | Four technology groups |
| `Experience` | Timeline of roles and education |
| `GithubActivity` | Selected repositories, fetched at runtime |
| `Contact` | Details and a working contact form |

Two content rules hold throughout: nothing is claimed that a repository, the CV, or a
live API response does not support, and a live demo is only linked where the URL was
checked and responded.

## Tech Stack

- **Framework** — Next.js 16 (App Router, Turbopack), React 19
- **Language** — TypeScript
- **Styling** — Tailwind CSS 4, shadcn-style primitives
- **Motion** — GSAP, Framer Motion, Lenis smooth scroll
- **3D** — three.js via react-three-fiber and drei
- **Mail** — Resend, called over `fetch` with no SDK dependency

## Project Structure

```text
app/
├── api/
│   ├── contact/route.ts      POST — validates and sends the contact form
│   ├── github/route.ts       GET  — selected repository metadata
│   └── github/stats/route.ts GET  — public repo count, languages, contributions
├── layout.tsx                Fonts, metadata, chrome
├── page.tsx                  Section composition
└── globals.css
components/
├── sections/                 One file per page section
├── ui/                       Reusable primitives
├── context/                  LoadingProvider
└── data/
public/
├── models/, draco/           3D assets
└── Divyank_Khewale_Resume.pdf
```

## Running Locally

Requires Node 20 or newer.

```bash
npm install
```

```bash
npm run dev
```

The site is served at `http://localhost:3000`.

```bash
npm run build
```

## Environment Variables

Copy `.env.example` to `.env` and fill in what you need. Every variable is optional —
each route degrades honestly when its key is absent rather than showing wrong data.

| Variable | Required | Effect when unset |
|---|---|---|
| `GITHUB_PAT` | No | Repository calls fall back to fixed data; the contributions counter is omitted rather than guessed |
| `RESEND_API_KEY` | No | The contact form reports that delivery is unconfigured and offers a mailto fallback pre-filled with the visitor's message |
| `CONTACT_TO_EMAIL` | No | Defaults to the site owner's address |
| `CONTACT_FROM_EMAIL` | No | Defaults to Resend's shared sender, which needs no verified domain |

`GITHUB_PAT` needs no scopes for public data; a classic token with `public_repo` is enough.
It is read server-side only and is never exposed to the client.

## API

### `POST /api/contact`

```json
{ "name": "string", "email": "string", "message": "string" }
```

Validates presence, email shape, and length caps (100 / 200 / 5000) before sending.

| Status | Meaning |
|---|---|
| `200` | Sent |
| `400` | Validation failed — the body names the reason |
| `502` | The mail provider rejected the send |
| `503` | No `RESEND_API_KEY` configured |

### `GET /api/github/stats`

```json
{ "publicRepos": 11, "languages": 4, "contributions": 163 }
```

Any field that could not be fetched is `null`, and the UI omits it. Values are never
substituted with placeholders.

## Deployment

Deploys to Vercel as a standard Next.js app. Set the environment variables above in the
project settings; `GITHUB_PAT` and `RESEND_API_KEY` are the two that change behaviour.

## Testing

There is no automated test suite. Before shipping, the build must pass:

```bash
npm run build
```

Type checking runs as part of the build and fails it on error.

## Future Improvements

- Handle `prefers-reduced-motion` across the GSAP, Lenis and Framer Motion layers
- Shorten the intro sequence, which currently delays first meaningful paint
- Wire up the character model in `public/models/`, or remove it — nothing requests it today
- Add project screenshots
- Add a profile photo at `public/profile.jpg`

## License

No license has been chosen yet, so default copyright applies: the code may be read but
not reused without permission.
