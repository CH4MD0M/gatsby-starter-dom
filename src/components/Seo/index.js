import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const Seo = ({ description, lang, meta, title }) => {
  return (
    <StaticQuery
      query={seoQuery}
      render={(data) => {
        const metaDescription =
          description || data.site.siteMetadata.description;
        const defaultTitle = "참돔 블로그";

        return (
          <Helmet
            htmlAttributes={{ lang }}
            defaultTitle={defaultTitle}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: title || defaultTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: `summary`,
              },
              {
                name: `twitter:creator`,
                content: data.site.siteMetadata.author,
              },
              {
                name: `twitter:title`,
                content: title,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `google-site-verification`,
                content: "Td2FVAr2l6Zwnul0s2sHek3QuYryO1uejM59c8zFcNk",
              },
              {
                name: `naver-site-verification`,
                content: "e40969b9a336da7fc9db0f3faade27cc5209cd78",
              },
            ].concat(meta)}
          ></Helmet>
        );
      }}
    ></StaticQuery>
  );
};

Seo.defaultProps = {
  lang: `ko`,
  meta: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
};

export default Seo;

const seoQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
      }
    }
  }
`;
