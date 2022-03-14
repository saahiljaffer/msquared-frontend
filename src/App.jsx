import React from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRoutes, Navigate } from "react-router-dom";
import useStore from "./store";
import Themes from "./theme/Theme";
import GlobalStyle from "./theme/GlobalStyle";
import PageWithNav from "./pages/PageWithNav";
import Dashboard from "./pages/Dashboard";
import Nikkah from "./pages/Nikkah";
import Reception from "./pages/Reception";
import RSVP from "./pages/RSVP";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const routes = (isLoggedin) => [
  {
    path: "/",
    element: isLoggedin ? <Dashboard /> : <Navigate to="/login" replace />,
  },
  {
    path: "/nikkah",
    element: isLoggedin ? <Nikkah /> : <Navigate to="/login" replace />,
  },
  {
    path: "/reception",
    element: isLoggedin ? <Reception /> : <Navigate to="/login" replace />,
  },
  {
    path: "/rsvp",
    element: isLoggedin ? <RSVP /> : <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: isLoggedin ? <Navigate to="/" replace /> : <Login />,
  },
];

function App() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const isLoggedIn = !!chosenPartyId;
  const routing = useRoutes(routes(isLoggedIn));

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Themes.main}>
        <PageWithNav>
          {routing}
          <GlobalStyle />
        </PageWithNav>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
