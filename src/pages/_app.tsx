import type { AppProps } from "next/app";
import { StyledContextProvider } from "../context/StyledContext";
import { GlobalStyle } from "../styles/GlobalStyle";
import "../styles/reset.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <StyledContextProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </StyledContextProvider>
    </>
  );
}

export default MyApp;
