import styled from "styled-components";

const StyledProjectItem = styled.div`
  .ProjectItem__wrapper {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-top: calc((300 / 400) * 100%);
    background: ${(props) => props.color};
  }

  .ProjectItem__image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 80%;
    transform: translate(-50%, -50%);
    height: auto;
    box-shadow: 0px 20px 20px -15px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease-in-out;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      content: "";
      transition: opacity 0.4s ease-in-out;
      background: linear-gradient(
        27deg,
        rgba(255, 255, 255, 0.01) 0%,
        rgba(255, 255, 255, 0.3) 45%,
        rgba(255, 255, 255, 0.01) 100%
      );
      opacity: 0;
      z-index: 1;
    }
  }

  p {
    margin-top: 10px;
  }

  a {
    display: block;
    text-decoration: none;

    p {
      display: flex;
      align-items: center;

      span {
        display: flex;
        justify-content: flex-end;
        flex-grow: 2;
      }
    }

    svg {
      width: 15px;
      height: 15px;
      display: inline-block;
      margin-left: 10px;
    }
  }

  a:hover {
    text-decoration: underline;

    .ProjectItem__image {
      transform-style: preserve-3d;
      transform: translate(-50%, -50%) perspective(1000px) rotateX(10deg)
        scale(1.05);
      box-shadow: 0px 20px 20px -5px rgba(0, 0, 0, 0.2);

      &:before {
        opacity: 1;
      }
    }
  }
`;

export default StyledProjectItem;
