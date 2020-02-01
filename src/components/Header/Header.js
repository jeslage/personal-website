import { Link } from "gatsby";
import styled from "styled-components";
import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/themeProvider";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 70px;

  & > div {
    flex-grow: 2;

    a {
      display: inline-block;
      text-decoration: none;
    }

    h1  {
      font-weight: 900;
      text-transform: uppercase;
    }
  }

  button {
    outline: 0;
    border: none;
    background: transparent;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
`;

const Header = () => {
  const { toggleColorTheme } = useContext(ThemeContext);

  return (
    <StyledHeader>
      <div>
        <Link to="/">
          <h1>BRNC JR.</h1>
        </Link>
      </div>
      <button title="Dark Mode" onClick={toggleColorTheme}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 25 25"
        >
          <path d="M12.5 25a12.418 12.418 0 01-8.839-3.661 12.5 12.5 0 010-17.677A12.419 12.419 0 0112.5 0a12.419 12.419 0 018.839 3.661 12.5 12.5 0 010 17.677A12.418 12.418 0 0112.5 25zm0-22a9.5 9.5 0 109.5 9.5A9.511 9.511 0 0012.5 3z" />
          <path d="M12.5 4.603v15.285a8.526 8.526 0 01-2.685-.591 8.18 8.18 0 01-2.595-1.648 7.623 7.623 0 01-1.743-2.433 7.204 7.204 0 01-.636-2.97c0-1.03.214-2.03.636-2.97.41-.912.996-1.73 1.743-2.434a8.18 8.18 0 012.595-1.648 8.526 8.526 0 012.685-.591z" />
          <path d="M12 19.342V5.149a7.996 7.996 0 00-2 .51 7.682 7.682 0 00-2.437 1.547 7.126 7.126 0 00-1.63 2.274 6.708 6.708 0 00-.592 2.765c0 .96.2 1.89.593 2.766.382.85.93 1.616 1.629 2.274A7.682 7.682 0 0010 18.832a7.997 7.997 0 002 .51m1 1.06a9.066 9.066 0 01-3.37-.641 8.678 8.678 0 01-2.753-1.748 8.12 8.12 0 01-1.856-2.593 7.701 7.701 0 01-.68-3.175c0-1.1.229-2.169.68-3.174a8.12 8.12 0 011.856-2.593A8.678 8.678 0 019.629 4.73 9.065 9.065 0 0113 4.089v16.313z" />
        </svg>
      </button>
    </StyledHeader>
  );
};

export default Header;
