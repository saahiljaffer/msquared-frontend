import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Rubik:300,400,500,600");
    @import url("https://fonts.googleapis.com/css?family=Cookie");

    html,
    body,
    #root {
        height: 100%;
    }

    :root {
        --gradient-30: radial-gradient(
      circle at top right, 
      hsl(118 28% 50%), hsl(118 28% 50% / 0%)
    ),
    radial-gradient(
      circle at bottom left, 
      hsl(118 28% 84%), hsl(118 28% 84% / 0%)
    );
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "Rubik", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: var(--gradient-30);
        }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
        margin-block-start: 0;
        margin-block-end: 0;
    }
`;

export default GlobalStyle;
