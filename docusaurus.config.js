// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'pastelaria.dev',
  tagline: 'Software com clareza, criterio e senso operacional.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://pastelaria.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pastelaria-dev', // Usually your GitHub org/user name.
  projectName: 'pastelaria-dev.github.io', // Usually your repo name.
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en-US'],
    localeConfigs: {
      'pt-BR': {
        htmlLang: 'pt-BR',
        label: 'Português (BR)',
      },
      'en-US': {
        htmlLang: 'en-US',
        label: 'English (US)',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/pastelaria.png',
      navbar: {
        title: 'pastelaria.dev',
        logo: {
          alt: 'pastelaria.dev logo',
          src: 'img/logo.png',
        },
        items: [
          {
            to: '/trail',
            label: 'Trail Copilot',
            position: 'left',
          },
          {
            href: 'mailto:w@pastelaria.dev',
            label: 'Email',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
            queryString: '?persistLocale=true',
          },
          {
            href: 'https://github.com/pastelaria-dev',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Empresa',
            items: [
              {
                label: 'pastelaria.dev',
                to: '/',
              },
              {
                label: 'Email',
                href: 'mailto:w@pastelaria.dev',
              },
            ],
          },
          {
            title: 'Produto',
            items: [
              {
                label: 'Trail Copilot',
                to: '/trail',
              },
            ],
          },
          {
            title: 'Elsewhere',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/pastelaria-dev',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} pastelaria.dev.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
