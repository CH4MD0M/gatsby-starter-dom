import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetaData = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          siteUrl
          name
          author
          description
          ga
          socials {
            email
            github
            instagram
          }
          utterances {
            repo
          }
        }
      }
    }
  `);

  return data;
};
