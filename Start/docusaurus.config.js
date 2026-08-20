const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'ScrapMechanicTools',
  tagline: '-',
  url: 'https://scrapmechanictools.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },

        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'SMM Logo',
          src: 'img/logo.png'
        },
        items: [
            {
                to: 'https://discord.gg/DyUxeyAJRz',
                position: 'right',
                target: '_blank',
                label: "ReDoIng Mods Discord"
            }
        ]
      },

      footer: {
        style: 'dark',
        copyright: 'This is an unofficial fan-made website and is not affiliated with, endorsed, or sponsored by Axolot Games.<br/>Scrap Mechanic and related names, logos, and other trademarks are the property of their respective owners.'
      },

      colorMode: {
         defaultMode: 'dark',
         disableSwitch: true
      },

      prism: {
		additionalLanguages: ['lua'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
