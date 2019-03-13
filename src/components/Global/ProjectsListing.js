import React from 'react'
import styled from 'styled-components';

import { useStaticQuery, graphql, Link } from 'gatsby'
import { type } from 'src/Styles/utilities/Typography';
import { above } from 'src/Styles/utilities/Breakpoints';
import { space } from 'src/Styles/utilities/Variables';
import { theme } from 'src/Styles/utilities/Colors';

export default function ProjectsListing() {
  const { allMarkdownRemark } = useStaticQuery(PROJECTS_LISTING_QUERY)

  const getImage = (nodeHTML) => {
    let closingSpan = nodeHTML.lastIndexOf("</span>") + 7;
    let content = nodeHTML.slice(0, closingSpan)
    return content
  }

  const GetallPosts = ({allMarkdownRemark, getImage}) => {
    let list = allMarkdownRemark.edges.map((edge, index) => (
      <li key={index}>
        <Link to={`/projects${edge.node.frontmatter.slug}`}>
          <div dangerouslySetInnerHTML={{
            __html: getImage(edge.node.html)
          }} />
          {edge.node.frontmatter.title}
        </Link>
      </li>
    ))
    return (
      <>{list}</>
    )
  }


  return (
    <ContentList>
      <GetallPosts
        allMarkdownRemark={allMarkdownRemark}
        getImage={getImage}/>
    </ContentList>
  )
}

const ContentList = styled.ul`
  padding: ${space("small")} 0;
  display: grid;
  grid-gap: ${space("xsmall")};
  grid-template-columns: repeat(2, 1fr);

  ${above.small`
    grid-template-columns: repeat(3, 1fr);
  `};


  li {
    padding: ${space("xsmall")};

    text-align: center;

    border: 1px solid ${theme.gray2};
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.1);
      box-shadow: 0 0 10px 3px rgba(0,0,0,0.05);
    }



    div {
      margin-bottom: ${space("xsmall")};
    }

    a {
      ${type.bodyCopy};
    }
  }
`;

const PROJECTS_LISTING_QUERY = graphql`
  query ProjectsListing {
    allMarkdownRemark(filter: {
      frontmatter: {
        type: {eq: "project"}
      }
    }) {
      edges {
        node {
          frontmatter {
            slug
            title
            photo
          }
          html
        }
      }
    }
  }`;
