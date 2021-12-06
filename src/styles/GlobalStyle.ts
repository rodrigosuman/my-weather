import { createGlobalStyle } from "styled-components";
import { TThemeProvider } from "../types/themeProvider";

const GlobalStyle = createGlobalStyle<{ theme: TThemeProvider }>`  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Manrope';
  }

  body {
    background: ${({ theme }) => theme.bg};
    background-repeat: no-repeat;
    background-attachment: fixed;
  }


  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    color: ${({ theme }) => theme.textWhite};

    @media screen and (max-width: 1100px) {
      font-size: 40px;
      text-align: center;
    }

    @media screen and (max-width: 500px) {
      font-size: 28px;

    }
  }

  h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 66px;
    color: ${({ theme }) => theme.textDark};
  }

  h3 {
    color: ${({ theme }) => theme.textWhite};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 33px;

    @media screen and (max-width: 1100px) {
      font-size: 18px;
    }
  }

  span {
    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
  }

  .text-white {
    color: ${({ theme }) => theme.textWhite};
  }

  .text-light {
    color: ${({ theme }) => theme.textLight};
  }

  button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.textWhite};
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }

`;
export default GlobalStyle;
