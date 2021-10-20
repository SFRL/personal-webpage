import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title + " | About";

  return (
    <Layout title={siteTitle}>
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
            the Centre for Digital Music (C4DM) with focus on Music Technology
            and human computer interaction; but I am frequently involved in
            organising and managing additional projects, events and exhibitions,
            working with a variety of people across disciplines. My focus lies
            between science, technology, art and music.
          </p>
          <p>
            Please feel free to contact me if you have any questions about my
            work, want to start a collaboration or just want to exchange ideas:
            <br />
            <br />
            <b>s.lobbers[at]qmul.ac.uk</b>
          </p>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    profilePic: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);
