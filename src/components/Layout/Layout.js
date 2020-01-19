import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
