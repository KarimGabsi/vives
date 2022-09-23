// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vives Courses',
  tagline: '',
  url: 'https://karimgabsi.github.io/vives',
  baseUrl: '/vives/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicons.ico',
  projectName: 'karimgabsi.github.io/vives',
  organizationName: 'karimgabsi',
  trailingSlash: false,

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
          routeBasePath: 'docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars/sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
      [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-python',
        path: 'docs-python',
        routeBasePath: 'docs-python',
        sidebarPath: require.resolve('./sidebars/sidebars-python.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-intro-to-ai',
        path: 'docs-intro-to-ai',
        routeBasePath: 'docs-intro-to-ai',
        sidebarPath: require.resolve('./sidebars/sidebars-intro-to-ai.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docs-cloud-for-ai',
        path: 'docs-cloud-for-ai',
        routeBasePath: 'docs-cloud-for-ai',
        sidebarPath: require.resolve('./sidebars/sidebars-cloud-for-ai.js'),
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        disableInDev: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Vives Courses',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs-python/Intro',
            position: 'left',
            activeBaseRegex: '/docs-python/',
            label: 'Python',
          },
          {
            to: '/docs-intro-to-ai/Intro',
            position: 'left',
            activeBaseRegex: '/docs-intro-to-ai/',
            label: 'Introduction to AI',
          },
          {
            to: '/docs-cloud-for-ai/Intro',
            position: 'left',
            activeBaseRegex: '/docs-cloud-for-ai/',
            label: 'Cloud for AI',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/facebook/docusaurus',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} Karim Gabsi`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        lightCodeTheme: lightCodeTheme,
      },
      themes: ['@docusaurus/theme-live-codeblock'],
    }),
};

module.exports = config;
