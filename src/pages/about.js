import React from "react";
import { graphql, useStaticQuery} from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const indexQuery = graphql`
  query {
    profilePic: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const AboutPage = () => {

  const data= useStaticQuery(indexQuery);

  return (
    <Layout title={"About"}>
      <SEO title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <Img
            fluid={data.profilePic.childImageSharp.fluid}
            alt={"Picture of the site's author"}
            className={"profile-pic"}
          />
          <p>
            Hi, I'm Sebastian. I am passionate about working on{" "}
            <b>human-centred projects</b> that involve{" "}
            <b>
              novel technology, data-driven research and multi-disciplinary
              collaboration
            </b>
            . My current main occupation is UKRI funded <b>PhD research</b> at
            the Centre for Digital Music (C4DM) with a focus on Music Technology
            and human computer interaction; but I am frequently involved in
            organising and managing additional projects, events and exhibitions,
            working with a variety of people across disciplines.
          </p>
          <p>
            Please feel free to contact me if you have any questions about my
            work, want to collaborate or just want to exchange ideas:
            <br />
            <br />
            <b>s.lobbers[at]qmul.ac.uk</b>
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default AboutPage;
