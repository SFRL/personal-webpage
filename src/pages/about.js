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
            between science/technology and art/music.
          </p>
          <p>
            For my undergraduate degree, I studied <b>electrical engineering</b>{" "}
            and <b>music technology</b>, but was mainly interested in producing
            music by the end of it. To further pursue an artistic practise, I
            enrolled on a <b>Masters in Sonic Arts</b> at Goldsmiths University
            of London. During this time I discovered the field of{" "}
            <b>creative coding</b> which slowly led me back to
            technology-focused projects. After working as a{" "}
            <b>sound designer and electronics developer</b> for some time, I was
            accepted into my current PhD programme that lets me combine
            technological fields like{" "}
            <b>
              human computer interaction, software development and machine
              learning with music production
            </b>
            .
          </p>
          <p>
            Besides research, I am interested in{" "}
            <b>working on projects that involve technology and music</b> in some
            form especially when they have a <b>public-facing aspect</b> to
            them. I helped organise and develop exhibitions for festivals like
            the <b>Ars Electronica Festival</b> or the{" "}
            <b>Edinburgh Science Festival</b>. I am also a{" "}
            <b>skilled musician</b>, playing the piano since childhood and later
            learned to play guitar and bass. I used to play in multiple bands
            and went touring through Europe, but in recent year I focused on{" "}
            <b>compositional work</b> for dance performances, film and video
            games.
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
