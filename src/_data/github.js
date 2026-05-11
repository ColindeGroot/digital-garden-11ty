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

    const stripRepoNames = data.map((repo) => {
      return {
        ...repo,
        formattedName: repo.name.replaceAll("-", " "),
      };
    });

    // dont return the repos without a language
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
