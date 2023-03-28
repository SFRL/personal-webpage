import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Post from "../components/post";
import Seo from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const PortfolioTemplate = (props) => {
  const capitalise = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const data = props.data;
  const title = capitalise(props.pageContext.title);
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout title={title}>
      <Seo title={title} />
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
      sort: { frontmatter: { date: DESC } }
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
                gatsbyImageData(
                  layout: CONSTRAINED
                  width: 1360
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  }
`;
