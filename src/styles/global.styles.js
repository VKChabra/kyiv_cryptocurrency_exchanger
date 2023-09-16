import { css, Global } from '@emotion/react';

export const themes = {
  light: {
    title: 'light',
    colors: {
      body: '#F6F3E0',
      primary: '#4D4D4D',
      secondary: '#fff',
      curses: '#fbf6e1',
      hovers: '#cfad56',
    },
  },
  dark: {
    title: 'dark',
    colors: {
      body: '#30302B',
      primary: '#fff',
      secondary: '#fff',
      curses: '#2C2C27',
      hovers: '#f4de8b',
    },
  },
  media: {
    mobile: '@media (max-width: 767px)',
    tablet: '@media (max-width: 1279px) and (min-width: 768px)',
    desktop: '@media (min-width: 1280px)',
  },
};

export const GlobalStyle = ({ theme }) => (
  <Global
    styles={css`
      body {
        margin: 0;
        font-family: Manrope, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Phudu', 'Helvetica Neue', sans-serif;
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

      button {
        cursor: pointer;
        background: inherit;
      }

      input,
      /* button, */
      textarea,
      select {
        font: inherit;
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
