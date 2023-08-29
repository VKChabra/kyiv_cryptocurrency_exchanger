import { css, Global } from '@emotion/react';

export const themes = {
  light: {
    title: 'light',
    colors: {
      body: '#F6F3E0',
      primaryText: '#4D4D4D',
      secondary: '#fff',
    },
  },
  dark: {
    title: 'dark',
    colors: {
      body: '#30302B',
      primary: '#fff',
      secondary: '#fff',
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
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${theme.colors.body};
      }

      ul,
      ol {
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
      }

      input,
      button,
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
    `}
  />
);
