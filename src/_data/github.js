import "dotenv/config";

export default async function () {
  // added a token to increase amount of requests and allow for more customisation
  const gitToken = process.env.GITHUB_TOKEN;
  const username = "ColindeGroot";
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const tokenFetch = await fetch(url, {
      headers: {
        Authorization: `Bearer ${gitToken}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "11ty-site",
      },
    });

    if (!tokenFetch.ok) {
      throw new Error(`GitHub API response: ${tokenFetch.status}`);
    }

    const data = await tokenFetch.json();
    return data;
  } catch (error) {
    console.error("Error fetching Github data:", error);
    return [];
  }
}
