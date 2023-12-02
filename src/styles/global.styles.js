import { css, Global } from '@emotion/react';
import imageUrl1 from '../images/background2.svg';
export const themes = {
  light: {
    title: 'light',
    colors: {
      body: '#364e50',
      primary: '#fff',
      secondary: '#503647',
      line: '#808080',
      text: '#fff',
      courses: '#426366',
      hovers: '#cfad56',
      background: `${imageUrl1}`,
    },
  },
};

export const GlobalStyle = ({ theme }) => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-family: 'Unbounded', sans-serif
        ${'' /* font-family: 'Atkinson Hyperlegible', sans-serif; */}
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.body};
        transition: background-color 0.6s ease-in-out;
      }
      *,
      *::before,
      *::after {
        padding: 0;
        margin: 0;
        border: 0;
        /* box-sizing: border-box; */
      }
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
      }

      h1,
      h2,
      h3,
      h4,
      p,
      li {
        margin: 0;
        padding: 0;
      }

      h1,
      h2,
      h3,
      h4 {
        text-align: center;
        font-family: 'Unbounded', sans-serif;
      }

      button {
        cursor: pointer;
        background: inherit;
        border-radius: 10px;
      }

      img {
        display: block;
        max-width: 100%;
        height: auto;
      }

      a {
        text-decoration: none;
        font-style: normal;
        color: inherit;
        display: block;
      }

      .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 15px;
        @media (max-width: 768px) {
          max-width: 768px;
        }
        @media (max-width: 575px) {
          max-width: 100%;
        }
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}
  />
);
