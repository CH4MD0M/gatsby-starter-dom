interface PostContextProps {
  next?: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
  previous?: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
  slug: string;
}
