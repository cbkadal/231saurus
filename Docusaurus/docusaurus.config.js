// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '231saurus',                     // Or else
  tagline: 'May the fork() be with you!', // Or else
  favicon: 'img/favicon.ico',             // Or else
  url: 'https://cbkadal.github.io',       // Or else
  baseUrl: '/231saurus/',                 // Or else
  organizationName: 'cbkadal',            // (Usually your GitHub org/user name)
  projectName: '231saurus',               // (Usually your repo name)
  trailingSlash: true,                    // "true" or "false"

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'HOME',
        logo: {
          alt: 'Logo',
          src: 'img/cbkadal.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'General',
            to: '/docs',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/cbkadal/231saurus/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'General',
                to: '/docs',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/cbkadal/231saurus/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} BinKadal, Sendirian Berhad --- Revision: 25a - 01 Jun 2023`,
        // ZCZC
        // REV25: Thu 01 Jun 2023 20:00
        // REV19: Fri 26 May 2023 10:00
        // REV09: Thu 25 May 2023 07:00
        // REV05: Thu 11 May 2023 03:00
        // REV01: Wed 03 May 2023 20:00
        // START: Sat 29 Apr 2023 13:00
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

