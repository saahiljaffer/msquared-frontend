import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../theme/GlobalStyle";
import Themes from "../../theme/Theme";

export default function StorybookContainer({ children }) {
  return (
    <ThemeProvider theme={Themes.main}>
      <>
        {children}
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}
