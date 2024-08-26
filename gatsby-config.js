const blogConfig = require('./blog-config');

const wrapESMPlugin = name =>
  function wrapESM(opts) {
    return async (...args) => {
      const mod = await import(name);
      const plugin = mod.default(opts);
      return plugin(...args);
    };
  };

module.exports = {
  pathPrefix: '/gatsby-starter-dom',
  siteMetadata: blogConfig,
  graphqlTypegen: true,

  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          blogConfig.ga, // Google Analytics / GA
        ],

        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: blogConfig.title,
        short_name: blogConfig.title,
        description: blogConfig.description,
        start_url: '/',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: blogConfig.siteUrl,
        sitemap: `${blogConfig.siteUrl}/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: `${blogConfig.siteUrl}`,
        stripQueryString: true,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 680,
              backgroundColor: 'transparent',
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: 'gatsby-remark-images-medium-zoom',
            options: {
              margin: 36,
              scrollOffset: 0,
            },
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
            },
          },
        ],

        remarkPlugins: [require('remark-math')],
        rehypePlugins: [require('rehype-katex'), wrapESMPlugin('rehype-slug')],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Damion',
          'Fira+Code:300,400,500,600,700',
          'Nanum+Gothic:400,700,800',
        ],
        display: 'swap',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-advanced-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-sharp',
  ],
};
