import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

import StyledProjectItem from "./ProjectItem.style";

const ProjectItem = ({ link, image, label, color }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        edges {
          node {
            id
            relativePath
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  `);

  const currentImage = data.allFile.edges.filter(
    ({ node }) => node.relativePath === image
  )[0];

  const isExternal = link.includes("http");

  const ProjectLink = ({ children }) => {
    return isExternal ? (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link to={link}>{children}</Link>
    );
  };

  return (
    currentImage && (
      <StyledProjectItem color={color}>
        <ProjectLink>
          <div className="ProjectItem__wrapper">
            <div className="ProjectItem__image">
              <Img fluid={currentImage.node.childImageSharp.fluid} />
            </div>
          </div>

          {label && (
            <p>
              {label}

              {isExternal && (
                <span>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
                    ></path>
                  </svg>
                </span>
              )}
            </p>
          )}
        </ProjectLink>
      </StyledProjectItem>
    )
  );
};
export default ProjectItem;
