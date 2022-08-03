module.exports = {
  siteMetadata: {
    siteUrl: `https://ch4md0m.github.io`,
    title: `Today ch4md0m swam`,
    description: `기술 블로그`,
    author: `Kihoon`,
    social: {
      email: "d0m__@naver.com",
      github: "https://github.com/CH4MD0M/",
      instagram: `k1h00n_`,
    },
  },
  plugins: [
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
        path: `${__dirname}/src/posts`,
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
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    "gatsby-plugin-react-helmet",
  ],
};
