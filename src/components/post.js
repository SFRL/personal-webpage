import React, { useState } from "react";
import Video from "./video";
import Img from "gatsby-image";

const Post = (props) => {
  const [showContent, setShowContent] = useState(false);

  const content = (
    <div dangerouslySetInnerHTML={{ __html: props.node.html }}></div>
  );

  const button = (
    <button
      onClick={() => setShowContent(!showContent)}
      className="button primary"
    >
      {showContent ? "Show less" : "Show more"}
    </button>
  );

  const getMedia = (frontmatter) => {
    if (frontmatter.videoSourceURL) {
      return <Video videoSrcURL={frontmatter.videoSourceURL} />;
    } else if (frontmatter.thumbnail) {
      return (
        <Img
          fluid={props.node.frontmatter.thumbnail.childImageSharp.fluid}
          className="kg-image"
        />
      );
    } else {
      return <></>;
    }
  };

  const media = getMedia(props.node.frontmatter);

  const postId = `${props.node.frontmatter.title}`.replace(/[^a-zA-Z0-9]/g, "");

  return (
    <>
      <article className="post-content page-template no-image" id={postId}>
        <div className="post-content-body">
          <h2>{props.node.frontmatter.title}</h2>
          <p>{props.node.frontmatter.description}</p>
          <figure className="kg-card kg-image-card">
            {media}
            <figcaption className="gatsby-resp-image-figcaption">
              {props.node.frontmatter.figcaption}
            </figcaption>
          </figure>

          {showContent && content}

          {props.node.excerpt && button}
        </div>
      </article>
      <hr />
    </>
  );
};

export default Post;
