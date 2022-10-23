import styled from "styled-components";

export const PanelContainer = styled.main`
  padding: 100px 50px;

  width: 100%;
  height: 100vh;
  z-index: 2;

  background-image: linear-gradient(
    to left,
    ${(props) => props.theme.colors["tw-gradient-from"]},
    ${(props) => props.theme.colors["tw-gradient-to"]}
  );

  color: ${(props) => props.theme.colors.text};

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  h1 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  h4 {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 300;
  }
  .gif-work img {
    width: 640px;
    height: 640px;
  }
`;
