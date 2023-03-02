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
          <figure className="kg-card kg-image-card">
            <Video videoSrcURL={"https://www.youtube.com/embed/ca1LYn8Yy-g"} />
            <figcaption className="gatsby-resp-image-figcaption">
              The current state of my research: a first functioning sketch
              synthesiser prototype.
            </figcaption>
          </figure>
          <p>
            I am a{" "}
            <a
              href="https://webarchive.nationalarchives.gov.uk/ukgwa/20210701203432/https://epsrc.ukri.org/skills/students/centres/2013-cdt-exercise/mediaandartstechnology/"
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
            conducting <b>user studies</b> to create a substantial dataset of
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
                href={props.data.chi23.publicURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                AI as mediator between composers, sound designers, and creative
                media producers
              </a>{" "}
              - position paper accepted at Integrating AI in Human-Human
              Collaborative Ideation workshop at the ACM CHI Conference on Human
              Factors in Computing System in 2023
            </li>
            <li>
              <a
                href={props.data.evomusart23.publicURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                SketchSynth: cross-modal control of sound synthesis
              </a>{" "}
              - paper accepted at the EvoMUSART conference in 2023
            </li>
            <li>
              <a
                href={props.data.icmc22.publicURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Seeing Sounds, Hearing Shapes: a gamified study to evaluate
                sound-sketches
              </a>{" "}
              - paper presented at the International Computer Music Conference
              (ICMC) in 2022
            </li>
            <li>
              <a
                href={props.data.dmrn16.publicURL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Sketching Sounds: Using sound-shape associations to build a
                sketch-based sound synthesiser
              </a>{" "}
              - research overview presented at the Digital Music Research
              Network (DMRN) workshop in 2021
            </li>
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
    chi23: file(
      relativePath: { eq: "CHI2023_Workshop_paper.pdf"}
    ) {
      publicURL
    }
    evomusart23: file(
      relativePath: { eq: "SketchSynth_cross-modal_control_of_sound_synthesis.pdf" }
    ) {
      publicURL
    }
    icmc21: file(relativePath: { eq: "ICMC_Paper_2021.pdf" }) {
      publicURL
    }
    icmc22: file(relativePath: { eq: "ICMC_Paper_2022.pdf" }) {
      publicURL
    }
    icmpc21: file(relativePath: { eq: "Lobbers530.jpeg" }) {
      publicURL
    }
    dmrn16: file(relativePath: { eq: "DMRN16-Sketching_Sounds.pdf" }) {
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
