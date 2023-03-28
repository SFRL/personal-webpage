import React from "react";
import { graphql, useStaticQuery} from "gatsby";

import Layout from "../components/layout";
import Publication from "../components/publication";
import Seo from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

import SVGs from "../components/researchSVGs";
import SVGRow from "../components/svgRow";

import Video from "../components/video";

const indexQuery = graphql`
  query {
    publications: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(publications)/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          type
          title
          authors
          date(formatString: "MMMM YYYY")
          in
          link
          asset {
            publicURL
          }
        }
        id
      }
    }
  }
`;

const ElementsPage = () => {
  const pageTitle = "Research";
  const data = useStaticQuery(indexQuery);

  const publications = data.publications.nodes.map((node) => (
      <Publication 
        key={node.id} 
        type={node.frontmatter.type} 
        title={node.frontmatter.title}
        authors={node.frontmatter.authors}
        in={node.frontmatter.in}
        date={node.frontmatter.date}
        link={node.frontmatter.link}
        asset={node.frontmatter.asset.publicURL}
      />
  ));

  return (
    <Layout title={pageTitle}>
      <Seo title="Research" />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <figure className="kg-card kg-image-card">
            <Video videoSrcURL={"https://www.youtube.com/embed/ca1LYn8Yy-g"} />
            <figcaption className="gatsby-resp-image-figcaption">
              Short video introduction to my research.
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

          <figure className="kg-card kg-image-card">
            <Video videoSrcURL={"https://www.youtube.com/embed/4Yzv2rgTgOE"} />
            <figcaption className="gatsby-resp-image-figcaption">
              Demonstration of the latest implementation of the sketch-control
              synthesiser called: SketchSynth.
            </figcaption>
          </figure>

          <hr />

          <h3>Publications</h3>
          {publications}
        </div>
      </article>
    </Layout>
  );
};

export default ElementsPage;
