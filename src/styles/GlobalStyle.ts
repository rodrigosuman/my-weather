import { createGlobalStyle } from "styled-components";
import { TThemeProvider } from "../types/themeProvider";

const GlobalStyle = createGlobalStyle<{ theme: TThemeProvider }>`  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Manrope';
  }


  h1 {
    
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    color: ${({ theme }) => theme.textWhite};
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
