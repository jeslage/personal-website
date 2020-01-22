import React, { useState } from "react";
import styled from "styled-components";
import Headline from "../Headline/Headline";
import ams from "adaptive-modular-scale";
import { useEffect } from "react";

const StyledCookieNotice = styled.aside`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 10px 20px;
  background: ${props => props.theme.color};
  overflow: hidden;
  color: ${props => props.theme.background};
  width: calc(100% - 40px);

  @media (min-width: 768px) {
    max-width: 500px;
    right: 40px;
    bottom: 20px;
    padding: 10px 40px;
  }

  p,
  button {
    ${ams(0)}
  }

  p {
    padding: 20px 0;
  }

  button {
    outline: 0;
    background: transparent;
    margin: 0 10px 30px 0;
    padding: 8px 15px;
    line-height: 1;
    color: ${props => props.theme.background};
    cursor: pointer;
    border: 1px solid ${props => props.theme.background};
    text-transform: uppercase;
    font-weight: 900;

    &:hover {
      background: ${props => props.theme.background};
      color: ${props => props.theme.color};
    }
  }
`;

const CookieNotice = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("cookieNotice") !== "accept") {
      setIsVisible(true);
    }
  }, []);
  const handleClick = () => {
    window.localStorage.setItem("cookieNotice", "accept");
    setIsVisible(false);
  };

  return isVisible ? (
    <StyledCookieNotice>
      <Headline label="Cookie" />
      <p>
        This page is using cookies to enhance your experience. Therefore we will
        set some cookie.
      </p>
      <button type="button" onClick={handleClick}>
        Sure
      </button>
      <button type="button" onClick={handleClick}>
        How about no
      </button>
      <Headline label="Notice" />
    </StyledCookieNotice>
  ) : null;
};
export default CookieNotice;
