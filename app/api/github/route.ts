import { NextResponse } from "next/server";

export async function GET() {
  const username = "DivyankLosse";
  const reposToFetch = ["SSS-Startup-Survival-Simulator", "AgriLO", "Sign-Bridge"];
  const token = process.env.GITHUB_PAT;

  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const reposData = await Promise.all(
      reposToFetch.map(async (repo) => {
        const response = await fetch(`https://api.github.com/repos/${username}/${repo}`, { headers, next: { revalidate: 3600 } });
        if (!response.ok) {
          throw new Error(`Failed to fetch ${repo}`);
        }
        return response.json();
      })
    );

    const formattedData = reposData.map((repo) => ({
      name: repo.name,
      description: repo.description,
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      language: repo.language,
      url: repo.html_url,
    }));

    return NextResponse.json(formattedData);
  } catch (error) {
    console.error("GitHub API error:", error);
    // Fallback data. Only used when the API call fails (no token, expired
    // token, or rate limit). Languages here must match the real repositories.
    return NextResponse.json([
      { name: "SSS-Startup-Survival-Simulator", stars: 0, forks: 0, language: "Python", url: "https://github.com/DivyankLosse/SSS-Startup-Survival-Simulator" },
      { name: "AgriLO", stars: 0, forks: 0, language: "JavaScript", url: "https://github.com/DivyankLosse/AgriLO" },
      { name: "Sign-Bridge", stars: 0, forks: 0, language: "JavaScript", url: "https://github.com/DivyankLosse/Sign-Bridge" },
    ], { status: 200 }); // Return 200 with fallback data
  }
}
