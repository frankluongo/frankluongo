const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/fakepage',
    component: path.resolve('./src/components/postLayout.js'),
  })

}
