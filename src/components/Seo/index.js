import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetaData } from '../../hooks/useSiteMetaData';

const Seo = ({ title, description, url }) => {
  const data = useSiteMetaData();
  const { siteMetadata } = data.site;

  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    image: `${siteMetadata.siteUrl}/og-image.png`,
    url: url || siteMetadata.siteUrl,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:image" content={seo.image} />
      <meta property="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
    </Helmet>
  );
};

export default Seo;
