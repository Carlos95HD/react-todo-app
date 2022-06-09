import { createGlobalStyle } from "styled-components";
import { lightStyles } from "./Themes";

export const GlobalStyles = createGlobalStyle`
  *{
    list-style: none;
    margin: 0px;
    padding: 0px;
    -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 
  }

  body,
  input{
    background: ${({ theme }) => theme.bg_primary};
    color: ${({ theme }) => theme.text_primary};
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    transition: all 0.50s linear;
  }

  h1{
    color: ${lightStyles.Very_Light_Gray};
    font-weight: 700;
  }

  p{
    font-weight: 400;
  }

  input{
    border: none;
    outline: none;
    -webkit-appearance: none;
  }

  footer{
    display: flex;
    justify-content: center;
    font-size: 14px;
    margin-bottom: 1rem;

    a, a:visited {
      color: hsl(220, 98%, 61%);
    }
  }

  ::placeholder{
      color: ${({ theme }) => theme.text_gray};
      font-family: 'Josefin Sans', sans-serif;
      font-size: 18px;
    }

  @media screen and (max-width: 768px) {
    p{
      font-size: 16px;
    }

    ::placeholder{
      font-size: 18px;
    }

    footer{
      font-size: 12px;
    }
  }
  `;
