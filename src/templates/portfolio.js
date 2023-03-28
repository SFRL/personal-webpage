import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Post from "../components/post";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const PortfolioTemplate = (props) => {
  const capitalise = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const data = props.data;
  const title = capitalise(props.pageContext.title);
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout title={title}>
      <SEO title={title} />
      {posts.map(({ node }) => {
        return <Post key={node.fields.slug} node={node} />;
      })}
    </Layout>
  );
};

export default PortfolioTemplate;

export const indexQuery = graphql`
  query PortfolioByTopic($regex: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: $regex } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          excerpt
          html
          fields {
            slug
          }
          frontmatter {
            description
            title
            figcaption
            videoSourceURL
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1360) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
