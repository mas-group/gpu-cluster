const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const organizationName = "mas-group";
const projectName = "gpu-cluster";

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'A2S GPU Cluster',
    tagline: 'A Kubernetes-based compute cluster with ready-to-use machine learning environments',
    favicon: 'img/A2S_Bildmarke_RGB.svg',

    // Set the production url of your site here
    url: 'https://${organizationName}.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    // baseUrl: '/${projectName}/',
    baseUrl: '/',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // GitHub Pages adds a trailing slash by default
    trailingSlash: false,

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName,
    projectName,

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
                    editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
                },
                blog: {
                    showReadingTime: true,
                    editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
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
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 5,
        },
        navbar: {
            title: 'A2S GPU Cluster',
            logo: {
                alt: 'A2S Group Logo',
                src: 'img/A2S_Bildmarke_RGB.svg',
            },
            items: [{
                    type: 'doc',
                    docId: 'about',
                    position: 'left',
                    label: 'Documentation',
                },
                {
                    to: '/hub',
                    label: 'JupyterHub',
                    position: 'left'
                },
                {
                    to: '/blog',
                    label: 'News',
                    position: 'left'
                },
                {
                    href: 'https://github.com/mas-group/gpu-cluster',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    type: 'localeDropdown',
                    position: 'right'
                },
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} A2S Institute<br>
                        Institute for Artificial Intelligence and Autonomous Systems (A2S)<br>
                        Hochschule Bonn-Rhein-Sieg`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;