import { NextResponse } from "next/server";

const USERNAME = "DivyankLosse";

export type GithubStats = {
  publicRepos: number | null;
  languages: number | null;
  contributions: number | null;
};

/**
 * Real, verifiable profile numbers for the Achievements counters.
 *
 * Every field is nullable on purpose: a value we could not fetch is returned as
 * null and simply not rendered. We never substitute a placeholder number here,
 * because a wrong stat on a portfolio is worse than a missing one.
 */
export async function GET() {
  const token = process.env.GITHUB_PAT;

  const headers: HeadersInit = { Accept: "application/vnd.github.v3+json" };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const stats: GithubStats = { publicRepos: null, languages: null, contributions: null };

  try {
    const [user, repos] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, { headers, next: { revalidate: 3600 } }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100`, { headers, next: { revalidate: 3600 } }),
    ]);

    if (user.ok) {
      stats.publicRepos = (await user.json()).public_repos ?? null;
    }

    if (repos.ok) {
      const list: Array<{ language: string | null }> = await repos.json();
      stats.languages = new Set(list.map((r) => r.language).filter(Boolean)).size || null;
    }
  } catch (error) {
    console.error("GitHub stats REST error:", error);
  }

  // The contribution calendar is GraphQL-only and needs a token. Without one we
  // leave the counter out rather than guessing at a number.
  if (token) {
    try {
      const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          query: `query($login:String!){user(login:$login){contributionsCollection{contributionCalendar{totalContributions}}}}`,
          variables: { login: USERNAME },
        }),
        next: { revalidate: 3600 },
      });

      if (res.ok) {
        const json = await res.json();
        stats.contributions =
          json?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? null;
      }
    } catch (error) {
      console.error("GitHub contributions error:", error);
    }
  }

  return NextResponse.json(stats);
}
