import styled from "styled-components";

const StyledProjectItem = styled.div`
  .ProjectItem__wrapper {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-top: calc((300 / 400) * 100%);
    background: ${props => props.color};
  }

  .ProjectItem__image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: 80%;
    transform: translate(-50%, -50%);
    height: auto;
    box-shadow: 0px 20px 20px -15px rgba(0, 0, 0, 0.25);
    transition: max-width 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
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
  }
`;

export default StyledProjectItem;
