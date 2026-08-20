const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Modding Help',
  tagline: '-',
  url: 'https://scrapmechanictools.com/',
  baseUrl: '/ModdingHelp/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',

  /*plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: "/",
        searchResultLimits: 8,
      },
    ],
  ],*/

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
		  routeBasePath: '/'
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
        title: 'Modding Help',
        logo: {
          alt: 'SMM Logo',
          src: 'img/logo.png'
        },
        items: [
            {
                to: 'https://scrapmechanictools.com/',
              position: 'right',
              target: '_self',
              label: "Home"
            },
            {
                to: 'https://discord.gg/2eACct5FDm',
                position: 'right',
                target: '_blank',
                label: "Discord Server"
            }
        ]
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
