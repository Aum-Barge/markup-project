import React from "react";
import "./Landing.css";
import Layout from './../../Layout';
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Layout>
      <div className="cont">
        <h1 className="">Unlock Your Writing Potential with Markdown</h1>
        <p>
          {" "}
          Unleash your creativity and efficiency by harnessing the simplicity
          and versatility of Markdown for your writing needs.
        </p>
        <Link to="/editor">
          <button>Start Now!</button>
        </Link>
      </div>
    </Layout>
  );
};

export default Landing;
