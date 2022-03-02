import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Themes from "./theme/Theme";
import GlobalStyle from "./theme/GlobalStyle";
import { HOME, RSVP_ROUTE, WEDDING_DAY, AFTER_PARTY } from "./routes/routes";

function App() {
  return (
    <Router>
      <ThemeProvider theme={Themes.main}>
        <>
          <Route exact path={HOME.path} component={HOME.component} />
          <Route
            exact
            path={RSVP_ROUTE.path}
            component={RSVP_ROUTE.component}
          />
          <Route
            exact
            path={WEDDING_DAY.path}
            component={WEDDING_DAY.component}
          />
          <Route
            exact
            path={AFTER_PARTY.path}
            component={AFTER_PARTY.component}
          />

          <GlobalStyle />
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
