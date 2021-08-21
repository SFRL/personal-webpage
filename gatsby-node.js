const path = require(`path`);
const _ = require("lodash");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const portfolio = path.resolve(`./src/templates/portfolio.js`);
  // Create an array of the folder names of the portfilios to iterate over. This could be automised in future!
  const portfolioTitles = ["projects", "music"];
  portfolioTitles.forEach((title) => {
    const path = `/${title}/`;
    const regex = `/(content/portfolios/${title})/`;
    createPage({
      path: path,
      component: portfolio,
      context: {
        title,
        regex,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
