import React from "react";
import styled from "styled-components";
import ams from "adaptive-modular-scale";

const StyledHeadline = styled.h2`
  position: relative;
  text-transform: uppercase;

  &:before,
  &:after {
    ${ams(1)}
    position: absolute;
    top: 1px;
    font-weight: 100;
  }

  &:before {
    transform: translateX(-100%);
    content: "${props => props.firstChar.repeat(10)}"
  }

  &:after {
    content: "${props => props.lastChar.repeat(100)}"
  }
`;

const Headline = ({ className, label }) => {
  const firstCharacter = label.charAt(0);
  const lastCharacter = label.charAt(label.length - 1);

  return (
    <StyledHeadline
      firstChar={firstCharacter}
      lastChar={lastCharacter}
      className={className}
    >
      {label}
    </StyledHeadline>
  );
};
export default Headline;
