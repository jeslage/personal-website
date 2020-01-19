import { Link } from "gatsby";
import styled from "styled-components";
import React from "react";
import adaptiveModularScale from "adaptive-modular-scale";

const StyledFooter = styled.footer`
  margin: 50px 0 0;

  a {
    ${adaptiveModularScale(0)}
    margin-right: 10px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Link to="/imprint">Imprint</Link>
      <Link to="/data-privacy">Data Privacy</Link>
    </StyledFooter>
  );
};

export default Footer;
