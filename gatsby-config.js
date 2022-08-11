const categoriesConfig = require("./categories-config");
module.exports = {
  siteMetadata: {
    siteUrl: `https://ch4md0m.blog`,
    title: `Today ch4md0m swam`,
    description: `ch4md0m의 기술 블로그`,
    author: `Kihoon`,
    social: {
      email: "d0m__@naver.com",
      github: "https://github.com/CH4MD0M/",
      instagram: `k1h00n_`,
    },
    categories: categoriesConfig,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-2QPXMQNDX9", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content`,
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
              maxWidth: 1200,
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
        ],
        remarkPlugins: [require("remark-math")],
        rehypePlugins: [require("rehype-katex")],
      },
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: {
          l: "(max-width: 950px)",
          md: "(max-width: 768px)",
          sm: "(max-width: 500px)",

          portrait: "(orientation: portrait)",
        },
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
  ],
};
