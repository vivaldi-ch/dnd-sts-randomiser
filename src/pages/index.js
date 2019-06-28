import React from 'react';
import { Link } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Welcome!</h1>
    <p>Use these to generate randomised loots after an encounter or to generate merchant list.</p>
    <p>Only use on your dungeon master&apos;s discretion.</p>
    <div className="flex flex-row">
      <div className="p-2">
        <Link to="/encounter/normal">
          <button className="btn" type="button">Normal</button>
        </Link>
      </div>
      <div className="p-2">
        <Link to="/encounter/deadly">
          <button className="btn" type="button">Deadly</button>
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
