import React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetaData } from '@hooks/useSiteMetaData';

interface SeoProps {
  title: string;
  description?: string;
  url?: string;
}

interface SeoMetaData extends SeoProps {
  image: string;
}

const Seo = ({ title, description, url }: SeoProps) => {
  const data = useSiteMetaData();
  const { siteMetadata } = data.site;

  const seo: SeoMetaData = {
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
      <meta property="og:description" content={seo.description} />
      <meta name="description" content={seo.description} />
    </Helmet>
  );
};

export default Seo;
