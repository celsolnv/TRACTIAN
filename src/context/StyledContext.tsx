import { createContext, ReactNode, useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { themeDefault } from "../styles/themes/default";

interface StyledContextData {
  theme: DefaultTheme;
}

interface StyledContextProviderProps {
  children: ReactNode;
}

export const StyledContext = createContext({} as StyledContextData);

export function StyledContextProvider({
  children,
}: StyledContextProviderProps) {
  const [theme, setTheme] = useState(themeDefault);

  return (
    <ThemeProvider theme={theme}>
      <StyledContext.Provider value={{ theme }}>
        {children}
      </StyledContext.Provider>
    </ThemeProvider>
  );
}
