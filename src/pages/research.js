import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

import SVGs from "../components/researchSVGs";
import SVGRow from "../components/svgRow";

import Video from "../components/video";

const ElementsPage = (props) => {
  const siteTitle = props.data.site.siteMetadata.title + " | Research";

  return (
    <Layout title={siteTitle}>
      <SEO title="Research" />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <p>
            I am a{" "}
            <a
              href="https://epsrc.ukri.org/skills/students/centres/2013-cdt-exercise/mediaandartstechnology/UKRI"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              UKRI{" "}
            </a>{" "}
            funded PhD researcher at the{" "}
            <a
              href="http://c4dm.eecs.qmul.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Centre for Digital Music (C4DM)
            </a>{" "}
            at the School for Electrical Engineering and Computer Science at
            Queen Mary University of London and part of the{" "}
            <a
              href="https://mat.qmul.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Media and Arts Technology Centre for Doctoral Training
            </a>{" "}
            . My research is titled{" "}
            <b>
              Sketching Sounds: Using sound-shape associations to build a
              sketch-based sound synthesiser
            </b>{" "}
            and it is routed in <b>Music Computing</b>,{" "}
            <b>Human Computer Interaction</b>, <b>Computer Vision </b>
            and <b>Human Perception and Cognition</b>. I am designing and
            conducting <b>user studies to create a substantial dataset</b> of
            sound-sketches and use accomplished statistical and novel{" "}
            <b>machine learning</b> methods for analysis.
          </p>

          <hr />

          <h3>Research Overview</h3>
          <p>
            Humans are surprisingly good at creating mental images of sound.
            However, sound-design tools are not always intuitive when it comes
            to realising an idea in a straightforward way.
          </p>
          <SVGRow
            SVG1={SVGs["dials"]}
            SVG3={SVGs["faders"]}
            SVG5={SVGs["badSpeaker"]}
          />

          <p>
            When describing a sound, we often refer to associations with other
            areas like colour, movement or light. This project looks deeper into
            how people express their sound ideas through shapes and forms.
          </p>
          <SVGRow
            SVG1={SVGs["instruments"]}
            SVG3={SVGs["equal"]}
            SVG5={SVGs["soundShapes"]}
          />
          <p>
            These findings are used to build a system that produces sound based
            on a simple sketch input. This approach allows anyone to explore,
            find and produce sounds in a simple and direct way.
          </p>
          <SVGRow
            SVG1={SVGs["sketches"]}
            SVG2={SVGs["arrow"]}
            SVG3={SVGs["computer"]}
            SVG4={SVGs["arrow"]}
            SVG5={SVGs["goodSpeaker"]}
          />
          <p>
            Here is a short video that introduces a first working prototype of a
            sketch-driven sound synthesiser.
          </p>
          <Video videoSrcURL={"https://www.youtube.com/embed/ca1LYn8Yy-g"} />
          <p>
            You can have a look at this{" "}
            <a
              href="https://github.com/SFRL/PhD_Research_Sketching_Sounds"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub repository
            </a>{" "}
            for more detailed information or check out my publications.
          </p>

          <hr />

          <h3>Publications</h3>
          <ul>
            <li>
              <a
                href={props.data.icmc21.publicURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sketching Sounds: an exploratory study on sound-shape
                associations
              </a>{" "}
              - paper presented at the International Computer Music Conference
              (ICMC) in 2021
            </li>
            <li>
              <a
                href={props.data.icmpc21.publicURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Representation of musical timbre through visual sketching
              </a>{" "}
              - poster presented at the International Conference for Music
              Perception and Cognition (ICMPC) in 2021
            </li>
          </ul>
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
    icmc21: file(relativePath: { eq: "ICMC_Paper_2021.pdf" }) {
      publicURL
    }
    icmpc21: file(relativePath: { eq: "Lobbers530.jpeg" }) {
      publicURL
    }
  }
`;

export default (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
);
