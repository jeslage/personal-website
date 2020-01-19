import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import GlobalStyle from "../../stylesheets/global";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const StyledLayout = styled.div`
  padding: 20px;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
