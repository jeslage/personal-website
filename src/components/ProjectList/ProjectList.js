import React from "react";
import styled from "styled-components";
import Headline from "../Headline/Headline";

const StyledProjectList = styled.div`
  margin-bottom: 120px;

  .ProjectList__headline {
    margin: 120px 0 40px;
  }

  .ProjectList__wrapper {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

const ProjectList = ({ children, label }) => {
  return (
    <StyledProjectList>
      {label && <Headline label={label} className="ProjectList__headline" />}
      <div className="ProjectList__wrapper">{children}</div>
    </StyledProjectList>
  );
};
export default ProjectList;
