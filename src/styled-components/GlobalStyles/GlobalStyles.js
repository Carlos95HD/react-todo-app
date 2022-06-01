import { createGlobalStyle } from "styled-components";
import { lightStyles } from "./Themes";

export const GlobalStyles = createGlobalStyle`
  *{
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  body {
    background: ${({ theme }) => theme.bg_primary};
    color: ${({ theme }) => theme.text_primary};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    transition: all 0.50s linear;
  }

  h1{
    color: ${ lightStyles.Very_Light_Gray };
    font-weight: 700;
  }

  p{
    font-weight: 400;
  }
  `;