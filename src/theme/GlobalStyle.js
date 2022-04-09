import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Eu Alonira';
        font-style: normal;
        font-weight: normal;
        src: local('Eu Alonira'), url('/fonts/Eu Alonira.otf') format('opentype');
    }

    @font-face {
        font-family: 'Niveau Grotesk';
        font-style: normal;
        font-weight: 300;
        src: local('Niveau Grotesk'), url('/fonts/NiveauGroteskLight.otf') format('opentype');
    }

    @font-face {
        font-family: 'Niveau Grotesk';
        font-style: normal;
        font-weight: 400;
        src: local('Niveau Grotesk'), url('/fonts/NiveauGroteskRegular.otf') format('opentype');
    }

    @font-face {
        font-family: 'Niveau Grotesk';
        font-style: normal;
        font-weight: 500;
        src: local('Niveau Grotesk'), url('/fonts/NiveauGroteskMedium.otf') format('opentype');
    }

    @font-face {
        font-family: 'Niveau Grotesk';
        font-style: normal;
        font-weight: 400;
        src: local('Niveau Grotesk'), url('/fonts/NiveauGroteskBold.otf') format('opentype');
    }

    html,
    body,
    #root {
        height: 100%;
    }

    :where(html) {
        --font-size-fluid-0: clamp(.75rem, 2vw, 1rem);
        --font-size-fluid-1: clamp(1rem, 4vw, 1.5rem);
        --font-size-fluid-2: clamp(1.25rem, 5vw, 1.75rem);
        --font-size-fluid-3: clamp(2rem, 9vw, 3.5rem);
    }

    html, body, #root {
        background-color: hsl(118 25% 80%);
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "Niveau Grotesk", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
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
