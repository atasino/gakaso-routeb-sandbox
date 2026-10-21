// Static export for GitHub Pages (project site: https://atasino.github.io/gakaso-routeb-sandbox/).
// Keep this file free of host-level URL mapping: Gakaso's analyzer cannot see such rules and
// would mark the route table as incomplete.
const config = {
  output: "export",
  basePath: "/gakaso-routeb-sandbox",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default config;
