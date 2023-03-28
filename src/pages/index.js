import React from "react";
import { graphql, useStaticQuery} from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PostCard from "../components/postCard";

import Typing from "../components/typing"; // Typing animation for page intro

import "../style/normalize.css";
import "../style/all.scss";

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(home)/.*md$/" } }
      sort: { fields: frontmatter___position, order: ASC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
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

const BlogIndex = ({location}) => {
  const data = useStaticQuery(indexQuery);
  const posts = data.allMarkdownRemark.edges;
  const typedWords = data.site.siteMetadata.description;
  const typedCompleted = location.state
    ? location.state.typedCompleted || false
    : false;

  let postCounter = 0;
  return (
    <Layout title={""}>
      <Seo
        title="Home"
        keywords={[
          `portfolio`,
          `research`,
          `technology`,
          `software development`,
          `music`,
        ]}
      />
      {/* <Bio /> */}
      {data.site.siteMetadata.description && (
        <header className="page-head">
          <h2>
            {typedCompleted && (
              <span style={{ whiteSpace: "pre-line" }}>{typedWords}</span>
            )}
            <Typing words={[typedCompleted ? "" : typedWords]} />
          </h2>
        </header>
      )}
      <div className="post-feed">
        {posts.map(({ node }) => {
          postCounter++;
          return (
            <PostCard
              key={node.fields.slug}
              count={postCounter}
              node={node}
              postClass={`post`}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default BlogIndex;
