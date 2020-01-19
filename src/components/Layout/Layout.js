import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Header from "../Header/Header";
import CookieNotice from "../CookieNotice/CookieNotice";

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
      <CookieNotice />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
