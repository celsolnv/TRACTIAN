import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Poppins;
    src: url('/fonts/Poppins-Regular.otf') format('opentype');

  }
  @font-face {
    font-family: Poppins;
    src: url('/fonts/Poppins-Bold.otf') format('opentype');
    font-weight: bold
  }

  *{
    font-family: Poppins, 'Times New Roman';
  }
`;
