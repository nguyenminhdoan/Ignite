import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: darkgrey;
        }

        
    }
    body {
        font-family: 'Poppins', sans-serif;
        width: 100%;

    }
    h2 {
        font-family: 'Abril Fatface', cursive;
        font-size:2.5rem;
        font-weight:lighter;
        color :#333;

    }
    h3 {
        font-size: 1.2rem;
        color :#333;
        padding : 1.3rem;
    }
    p{
        font-size: 1.2rem;
        line-height:200%;
        color : #696969;
    }

    a{
        text-decoration: none;
        color : #333;
    }

`;

export default GlobalStyle;
