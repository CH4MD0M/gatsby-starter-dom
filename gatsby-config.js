const blogConfig = require("./blog-config");

const wrapESMPlugin = (name) =>
  function wrapESM(opts) {
    return async (...args) => {
      const mod = await import(name);
      const plugin = mod.default(opts);
      return plugin(...args);
    };
  };

module.exports = {
  siteMetadata: blogConfig,

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          blogConfig.ga, // Google Analytics / GA
          // Google Ads / Adwords / AW
          // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],

        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: blogConfig.title,
        short_name: blogConfig.title,
        description: blogConfig.description,
        start_url: `/`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://ch4md0m.blog",
        sitemap: "https://ch4md0m.blog/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 680,
              backgroundColor: "transparent",
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              margin: 36,
              scrollOffset: 0,
            },
          },
          `gatsby-remark-static-images`,
        ],

        remarkPlugins: [wrapESMPlugin(`remark-slug`), require(`remark-math`)],
        rehypePlugins: [require(`rehype-katex`)],
      },
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          `Damion`,
          `Fira+Code\:300,400,500,600,700`,
          `Noto+Sans+KR\:100,300,400,500,700,900`,
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
  ],
};
