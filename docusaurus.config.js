// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Stackbill Documentation',
  tagline: 'Your Comprehensive User Guide',
  favicon: 'logo_icon.svg',

  // Set the production url of your site here
  url: 'https://www.stackbill.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'StackBill', // Usually your GitHub org/user name.
  projectName: 'DocsPublic', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: "StackBill",
          src: "/logo_light.svg",
          srcDark: `/logo_dark.svg`,
          href: "/",
          target: "_self",
          width: 139,
          height: 28,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'User Guide',
          },
          {
            type: 'docSidebar',
            sidebarId: 'pluginsSidebar',
            position: 'left',
            label: 'Plugins',
          },
          {
            type: 'docSidebar',
            sidebarId: 'marketplaceSidebar',
            position: 'left',
            label: 'Marketplace Apps',
          },
          {
            type: 'docSidebar',
            sidebarId: 'ApiSideBar',
            position: 'left',
            label: 'APIs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'deploymentSideBar',
            position: 'left',
            label: 'Deployment',
          },
          {
            type: 'docSidebar',
            sidebarId: 'interactiveVideoSideBar',
            position: 'left',
            label: 'Interactive Video',
          },
          {
            type: "search",
            position: "right",
          },
          {
            label: 'Support',
            position: 'right', 
            items: [
              {
                label: 'Help Center',
                href: 'https://clients.stackbill.com', 
              },
              {
                label: 'Customer Support',
                href: 'https://www.stackbill.com',
              }
            ],
          },
          {
            href: 'https://github.com/stackbill/docs-public',
            label: 'GitHub',
            position: 'right',
          },

        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} StackBill. All rights reserved`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
