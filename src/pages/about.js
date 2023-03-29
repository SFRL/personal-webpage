import React from "react";
import { graphql, useStaticQuery} from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
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
        linkedin
        twitter
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
            image={
              data.markdownRemark.frontmatter.picture.childImageSharp
                .gatsbyImageData
            }
            alt={"Picture of the site's author"}
            className={"profile-pic"}
          />
          <h5 id="about" style={{ "text-align": "left" }}>
            {data.markdownRemark.frontmatter.title}
          </h5>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <p>
            <div>
              <a href={`mailto:${data.markdownRemark.frontmatter.email}`}> 
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp;
              {data.markdownRemark.frontmatter.email}
              </a>
            </div>
            <div>
              <a
                href={`https://www.linkedin.com/in/${data.markdownRemark.frontmatter.linkedin}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                &nbsp;
                {data.markdownRemark.frontmatter.linkedin}
              </a>
            </div>
            <div>
              <a
                href={`https://twitter.com/${data.markdownRemark.frontmatter.twitter}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
                &nbsp;
                {data.markdownRemark.frontmatter.twitter}
              </a>
            </div>
          </p>
        </div>
      </article>
    </Layout>
  );
};

export default AboutPage;
