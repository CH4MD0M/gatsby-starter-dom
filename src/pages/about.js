import React from "react";

import Layout from "../layout";
import Seo from "../components/Seo";
import PageTitle from "../components/PageTitle";
import Bio from "../components/Bio";

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <PageTitle>About.</PageTitle>
      <Bio />
    </Layout>
  );
};

export default AboutPage;
