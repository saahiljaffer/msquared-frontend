import React from "react";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRoutes, Navigate } from "react-router-dom";
import useStore from "./store";
import Themes from "./theme/Theme";
import GlobalStyle from "./theme/GlobalStyle";
import Dashboard from "./pages/Dashboard";
import Nikkah from "./pages/Nikkah";
import Reception from "./pages/Reception";
import RSVP from "./pages/RSVP";
import Login from "./pages/Login";
import Mendhi from "./pages/Mendhi";
import Contact from "./pages/Contact";
import PageContainer from "./components/PageContainer";

const queryClient = new QueryClient();

const routes = (isLoggedin) => [
  {
    path: "/nikaah",
    element: isLoggedin ? <Nikkah /> : <Nikkah />,
  },
  {
    path: "/reception",
    element: isLoggedin ? <Reception /> : <Navigate to="/login" replace />,
  },
  {
    path: "/mendhi",
    element: isLoggedin ? <Mendhi /> : <Navigate to="/login" replace />,
  },
  {
    path: "/guestbook",
    element: isLoggedin ? <Contact /> : <Navigate to="/login" replace />,
  },
  {
    path: "/rsvp",
    element: isLoggedin ? <RSVP /> : <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: isLoggedin ? <Navigate to="/" replace /> : <Login />,
  },
  {
    path: "*",
    element: isLoggedin ? <Dashboard /> : <Navigate to="/login" replace />,
  },
];

function App() {
  const chosenPartyId = useStore((state) => state.chosenPartyId);
  const isLoggedIn = !!chosenPartyId;
  const routing = useRoutes(routes(isLoggedIn));

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Themes.main}>
        <PageContainer>
          {routing}
          <GlobalStyle />
        </PageContainer>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
