import React from "react";
import "./Landing.css";
import Layout from './../../Layout';
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
        <a href="/editor">
          <button>Start Now!</button>
        </a>
      </div>
    </Layout>
  );
};

export default Landing;
