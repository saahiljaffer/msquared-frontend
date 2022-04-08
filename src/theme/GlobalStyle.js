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
        --gradient-30: radial-gradient(
        circle at bottom right, 
        hsl(118 20% 65%), hsl(118 20% 65% / 0%)
        ),
        radial-gradient(
          circle at top left, 
          hsl(118 35% 85%), hsl(118 35% 85% / 25%)
        ); 
        --noise-1: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.005' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        --noise-2: url("data:image/svg+xml,%3Csvg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        --noise-3: url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        --noise-4: url("data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        --noise-5: url("data:image/svg+xml,%3Csvg viewBox='0 0 2056 2056' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        --noise-filter-1: contrast(300%) brightness(100%);
        --noise-filter-2: contrast(200%) brightness(150%);
        --noise-filter-3: contrast(200%) brightness(250%);
        --noise-filter-4: contrast(200%) brightness(500%);
        --noise-filter-5: contrast(200%) brightness(1000%);
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
