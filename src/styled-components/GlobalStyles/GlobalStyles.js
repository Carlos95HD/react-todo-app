import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    /* background-image: ${({ theme }) => theme.background}; */
    /* background-repeat: no-repeat; */
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `