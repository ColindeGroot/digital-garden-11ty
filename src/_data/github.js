export default async function () {
  const url = "https://api.github.com/users/ColindeGroot/repos";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.message) {
      return [];
      console.log("git message:", data.message);
    }
    return data;
  } catch (error) {
    console.error("Error with GitHub data:", error);
    return [];
  }
}

// expample response
// {
//   id: 1153432739,
//   node_id: 'R_kgDORL_8ow',
//   name: 'next-application',
//   full_name: 'ColindeGroot/next-application',
//   private: false,
//   owner: {
//     login: 'ColindeGroot',
//     id: 70688950,
//     node_id: 'MDQ6VXNlcjcwNjg4OTUw',
//     avatar_url: 'https://avatars.githubusercontent.com/u/70688950?v=4',
//     gravatar_id: '',
//     url: 'https://api.github.com/users/ColindeGroot',
//     html_url: 'https://github.com/ColindeGroot',
//     followers_url: 'https://api.github.com/users/ColindeGroot/followers',
//     following_url: 'https://api.github.com/users/ColindeGroot/following{/other_user}',
//     gists_url: 'https://api.github.com/users/ColindeGroot/gists{/gist_id}',
//     starred_url: 'https://api.github.com/users/ColindeGroot/starred{/owner}{/repo}',
//     subscriptions_url: 'https://api.github.com/users/ColindeGroot/subscriptions',
//     organizations_url: 'https://api.github.com/users/ColindeGroot/orgs',
//     repos_url: 'https://api.github.com/users/ColindeGroot/repos',
//     events_url: 'https://api.github.com/users/ColindeGroot/events{/privacy}',
//     received_events_url: 'https://api.github.com/users/ColindeGroot/received_events',
//     type: 'User',
//     user_view_type: 'public',
//     site_admin: false
//   },
