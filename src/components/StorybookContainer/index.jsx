import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import GlobalStyle from "../../theme/GlobalStyle";
import Themes from "../../theme/Theme";

function StorybookContainer({ children }) {
  return (
    <ThemeProvider theme={Themes.main}>
      <>
        {children}
        <GlobalStyle />
      </>
    </ThemeProvider>
  );
}

StorybookContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default StorybookContainer;
