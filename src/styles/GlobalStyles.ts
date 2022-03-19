import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Quicksand:wght@600;700&display=swap');

    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        font-family: "Poppins", sans-serif;
        box-sizing: border-box;

        @media only screen and (min-width: 37.5em) {
            /* font-size: 60.5%; */
        }

        @media only screen and (min-width: 87.5em) {
            
        }
  
        @media only screen and (min-width: 112.5em) {
            /* font-size: 62.5%; */
        }
    }
    
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    body {
        box-sizing: border-box;
        min-height: 100vh;
    }

    @keyframes opacityLoading {
        0% {
            opacity: 0.2;
        }
        100% {
            opacity: 1;
        }
    }
`;
