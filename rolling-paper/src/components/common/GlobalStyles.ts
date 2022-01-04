import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';

export const GlobalStyles = css`
  ${emotionReset}

  html,
  body {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 5vh 10vw;
  }

  html {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: transparent;
  }

  a {
    text-decoration: none;
  }
`;
