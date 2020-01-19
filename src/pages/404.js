import React from "react";

import Layout from "../components/Layout/Layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import Headline from "../components/Headline/Headline";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <Headline label="404 – Not found" />

    <h1 style={{ margin: "80px 0 20px" }}>Sorry, this is a dead end.</h1>
    <p style={{ margin: "0 0 80px" }}>
      But just follow this link to the <Link to="/">frontpage</Link>.
    </p>

    <Headline label="404 – Not found" />
  </Layout>
);

export default NotFoundPage;
