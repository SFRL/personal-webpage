import React, { useState } from "react";
import Video from "./video";
import { GatsbyImage } from "gatsby-plugin-image";

  const getMedia = (frontmatter) => {
    if (frontmatter.videoSourceURL) {
      return <Video videoSrcURL={frontmatter.videoSourceURL} />;
    } else if (frontmatter.thumbnail) {
      return (
        <GatsbyImage 
          image={frontmatter.thumbnail.childImageSharp.gatsbyImageData}
          className="kg-image"
        />
      );
    } else {
      return <></>;
    }
  };

const Post = (props) => {
  const [showContent, setShowContent] = useState(false);

  const media = getMedia(props.node.frontmatter);

  const postId = `${props.node.frontmatter.title}`.replace(
      /[^a-zA-Z0-9]/g,
      ""
    );

  const content = (
    <div dangerouslySetInnerHTML={{ __html: props.node.html }}></div>
  );

  const button = showContent ? (
    <a href={`#${postId}`}>
      <button onClick={() => setShowContent(!showContent)} className="button">
        Show less
      </button>
    </a>
  ) : (
    <button onClick={() => setShowContent(!showContent)} className="button">
      Show more
    </button>
  );
    


  return (
    <>
      <article className="post-content page-template no-image" id={postId}>
        <div className="post-content-body">
          <h2>{props.node.frontmatter.title}</h2>

          <figure className="kg-card kg-image-card">
            {media}
            <figcaption className="gatsby-resp-image-figcaption">
              {props.node.frontmatter.figcaption}
            </figcaption>
          </figure>

          <p>{props.node.frontmatter.description}</p>

          {showContent && content}

          {props.node.excerpt && button}
        </div>
      </article>
      <hr />
    </>
  );
};

export default Post;
