import "dotenv/config";

export default async function () {
  const gitToken = process.env.GITHUB_TOKEN;
  const username = "ColindeGroot";
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const fetchHeaders = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "11ty-site",
    };

    // fallback if token is missing, but will be rate limited by GitHub API
    if (gitToken) {
      fetchHeaders.Authorization = `Bearer ${gitToken}`;
    }

    const tokenFetch = await fetch(url, {
      headers: fetchHeaders,
    });

    if (!tokenFetch.ok) {
      throw new Error(`GitHub API response: ${tokenFetch.status}`);
    }

    const data = await tokenFetch.json();

    const stripRepoNames = data.map((repo) => {
      return {
        ...repo,
        formattedName: repo.name.replaceAll("-", " "),
      };
    });

    const filteredRepos = stripRepoNames.filter((repo) => repo.language);

    filteredRepos.forEach((repo) => {
      repo.formattedName =
        repo.formattedName.charAt(0).toUpperCase() +
        repo.formattedName.slice(1);
    });

    return filteredRepos;
  } catch (error) {
    console.error("Error fetching Github data:", error);
    return [];
  }
}