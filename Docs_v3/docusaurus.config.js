// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
	title: 'Scrap Mechanic Lua API Documentation',
	tagline: '-',
	url: 'https://scrapmechanictools.com',
	baseUrl: '/Lua/',
	onBrokenLinks: 'warn',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',

	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	},

	presets: [
		[
			'classic',
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					routeBasePath: '/',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					//editUrl: 'https://github.com/MrCrackx04/ScrapMechanicTools-Lua-API-Docs/tree/main/'
				},
				blog: false,
				theme: {
					customCss: require.resolve('./src/css/custom.css')
				}
			})
		]
	],

	/*plugins: [
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{
				language: 'en',
				hashed: false,
				docsDir: 'docs',
				blogDir: 'blog',
				//ignoreFiles: [],
				indexDocs: true,
				indexBlog: false,	//default true
				indexPages: false,
				searchResultLimits: 8,
				searchBarShortcut: true,
				docsRouteBasePath: '/',
				blogRouteBasePath: '/blog',
				removeDefaultStemmer: true,	//default false
				searchBarShortcutHint: true,
				explicitSearchResultPath: false,
				searchResultContextMaxLength: 50,
				removeDefaultStopWordFilter: true,	//default false
				highlightSearchTermsOnTargetPage: false

				//docsPluginIdForPreferredVersion: null
				//zhUserDict: null
				//zhUserDictPath: null
			}
		]
	],*/

	themes: [
		[
			require.resolve('@easyops-cn/docusaurus-search-local'),
			{
				language: 'en',
				hashed: true,
				docsDir: 'docs',
				blogDir: 'blog',
				ignoreFiles: [],
				indexDocs: true,
				indexBlog: false,	//default true
				indexPages: false,
				searchResultLimits: 8,
				searchBarShortcut: true,
				docsRouteBasePath: '/',	//default /docs
				blogRouteBasePath: '/blog',
				removeDefaultStemmer: false,	//default false
				searchBarShortcutHint: true,
				explicitSearchResultPath: true,
				searchResultContextMaxLength: 50,
				removeDefaultStopWordFilter: true,	//default false
				highlightSearchTermsOnTargetPage: true

				//docsPluginIdForPreferredVersion: null
				//zhUserDict: null
				//zhUserDictPath: null
			}
		]
	],

	themeConfig: ({
		navbar: {
			title: 'Scrap Mechanic Lua API Documentation',
			logo: {
				alt: 'Scrap Mechanic Logo',
				src: 'img/logo.png'
			},
			items: [
				{
					to: 'https://scrapmechanictools.com',
					position: 'right',
					target: '_self',
					label: 'Home'
				}
			]
		},

		colorMode: {
			defaultMode: 'dark',
			disableSwitch: false
		},

		prism: {
			additionalLanguages: ['lua'],
			theme: lightCodeTheme,
			darkTheme: darkCodeTheme
		},

		tableOfContents: {
			maxHeadingLevel: 4
		}
	})
};

module.exports = config;
