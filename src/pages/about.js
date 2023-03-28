import React from "react";
import { graphql, useStaticQuery} from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../style/normalize.css";
import "../style/all.scss";

const indexQuery = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/(about)/" }) {
      id
      html
      frontmatter {
        title
        email
        picture {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 300
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;

const AboutPage = () => {

  const data= useStaticQuery(indexQuery);

  return (
    <Layout title={"About"}>
      <Seo title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <GatsbyImage
            image={data.markdownRemark.frontmatter.picture.childImageSharp.gatsbyImageData}
            alt={"Picture of the site's author"}
            className={"profile-pic"}
            />
          <b id="about">{data.markdownRemark.frontmatter.title}</b>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;
            {data.markdownRemark.frontmatter.email}
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default AboutPage;
