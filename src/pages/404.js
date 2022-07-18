import React from "react";
import { Link } from "gatsby";
import Layout from "../layout";

const NotFoundPage = () => (
  <Layout>
    <section className="error-page">
      <div className="page-center">
        <span>404</span>
        <h3>죄송합니다. 요청하신 페이지를 찾을 수 없습니다.</h3>
        <Link to="/" className="btn">
          back Home
        </Link>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
