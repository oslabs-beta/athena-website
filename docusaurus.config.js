// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AthenaJS",
  tagline: "Building React components has never been this easy",
  favicon: "img/athena_icon_whitebg.png",

  // Set the production url of your site here
  url: "https://oslabs-beta.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/athena-website/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "oslabs-beta", // Usually your GitHub org/user name.
  projectName: "athena-website", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/athenajs_social_card.png",
      navbar: {
        logo: {
          alt: "Athena Logo",
          src: "img/navbar_logo_light.png",
          srcDark: "img/navbar_logo_dark.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/oslabs-beta/Athena",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
          {
            href: "https://twitter.com/AthenaJSDev",
            position: "right",
            className: "header-twitter-link",
            "aria-label": "Twitter",
          },
          {
            href: "https://discord.gg/6xkMNXtBYp",
            position: "right",
            className: "header-discord-link",
            "aria-label": "Discord",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
