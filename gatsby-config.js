const categoriesConfig = require("./categories-config");
const blogConfig = require("./blog-config");

module.exports = {
  siteMetadata: {
    ...blogConfig,
    categories: categoriesConfig,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
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
        plugins: ["@bonobolabs/gatsby-remark-images-custom-widths"],
        gatsbyRemarkPlugins: [
          `gatsby-remark-gifs`,
          {
            resolve: "@bonobolabs/gatsby-remark-images-custom-widths",
            options: {
              maxWidth: 1100,
              linkImagesToOriginal: false,
              quality: 80,
            },
          },
          {
            resolve: `gatsby-remark-images-medium-zoom`,
            options: {
              margin: 36,
              scrollOffset: 0,
            },
          },
        ],
        remarkPlugins: [require("remark-math")],
        rehypePlugins: [require("rehype-katex")],
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
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
  ],
};
