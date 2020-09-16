const versions = require("./versions.json");

const allDocHomesPaths = [
  "/docs/",
  "/docs/next/",
  ...versions.slice(1).map((version) => `/docs/${version}/`),
];

module.exports = {
  title: "Mia-Platform Documentantion",
  tagline: "Learn how Mia-Platform can help you to develop your business",
  url: "https://docs.mia-platform.eu",
  baseUrl: "/",
  onBrokenLinks: "log",
  favicon: "img/favicon.ico",
  organizationName: "Mia-Platform", // Usually your GitHub org/user name.
  projectName: "Mia-Platform", // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: "light",

      switchConfig: {
        darkIcon: "🌙",
        darkIconStyle: {},
        lightIcon: "☀",
        lightIconStyle: {
          color: "#ffd557",
        },
      },
    },
    navbar: {
      title: "Mia-Platform Docs",
      logo: {
        alt: "Mia_Platform logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/overview/mia_platform_overview",
          label: "Overview",
          position: "left",
        },
        {
          label: "Docs by product",
          position: "left",
          items: [
            {
              label: "DevOps Console",
              to: "docs/development_suite/overview-dev-suite",
            },
            {
              label: "Microservices Ecosystem",
              to: "docs/runtime_suite/overview-runtime-suite",
            },
            {
              label: "Fast Data",
              to: "docs/fast_data/overview",
            },
            {
              label: "API Management & Headless CMS",
              to: "docs/business_suite/overview-business-suite",
            },
          ],
        },
        {
          to: "docs/marketplace/overview_marketplace",
          label: "Marketplace",
          position: "left",
        },
        {
          to: "docs/development_suite/api-console/api-design/plugin_baas_4",
          label: "Learn",
          position: "left",
        },
        {
          type: "docsVersionDropdown",
          position: "right",
        },
        {
          href: "https://www.mia-platform.eu/en/",
          label: "Mia-Platform site",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Company",
          items: [
            {
              label: "Site",
              href: "https://www.mia-platform.eu/en/",
            },
            {
              label: "About",
              href: "https://www.mia-platform.eu/en/company/about",
            },
            {
              label: "Mission",
              href: "https://www.mia-platform.eu/en/company/mission",
            },
            {
              label: "Blog",
              href: "https://blog.mia-platform.eu/en",
            },
          ],
        },
        {
          title: "Products",
          items: [
            {
              label: "DevOps Console",
              href: "https://www.mia-platform.eu/en/products/devops-console",
            },
            {
              label: "Microservice Ecosystem",
              href:
                "https://www.mia-platform.eu/en/products/microservices-ecosystem",
            },
            {
              label: "Fast Data",
              href: "https://www.mia-platform.eu/en/products/fast-data",
            },
            {
              label: "API Management & Headless CMS",
              href:
                "https://www.mia-platform.eu/en/products/api-management-and-headless-cms",
            },
            {
              label: "Release Notes",
              to: "/docs/release_notes/release_notes",
            },
          ],
        },
        {
          title: "Developer Resources",
          items: [
            {
              label: "Guidelines",
              to: "/docs/dev_ops_guide/git_vademecum",
            },
            {
              label: "Walktroughs & Tutorials",
              to:
                "/docs/development_suite/api-console/api-design/plugin_baas_4",
            },
            {
              label: "Library",
              href: "https://resources.mia-platform.eu/en/library",
            },
            {
              label: "GitHub",
              href: "https://github.com/mia-platform",
            },
            {
              label: "GitHub Marketplace",
              href: "https://github.com/mia-platform-marketplace",
            },
          ],
        },
        {
          title: "Privacy",
          items: [
            {
              label: "Privacy Policy",
              href:
                "https://www.mia-platform.eu/img/Privacy_Policy_Website_EN.pdf",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Mia srl. All rights reserved. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "weekly",
          priority: 0.5,
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html"],
        createRedirects: function (path) {
          // redirect to /docs from /overview/mia_platform_overview
          // as introduction has been made the home doc
          if (allDocHomesPaths.includes(path)) {
            return [`${path}/overview/mia_platform_overview/`];
          }
        },
      },
    ],
    [
      require.resolve("docusaurus-lunr-search"),
      {
        excludeRoutes: ["docs/next/**/*"],
      },
    ],
  ],
};