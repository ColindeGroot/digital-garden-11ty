export default async function () {
  // NOTE: `process.env.URL` Needs to be adjusted when deploying
  return {
    url: process.env.URL || "http://localhost:8080",
    siteName: "Colin - Home",
    siteDescription: "Digital playground for showcasing projects and posts.",
  };
}
