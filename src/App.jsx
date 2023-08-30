import { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
// import { PrivateRoute, PublicRoute } from './components/routes';
import Loader from './components/loader';

import { GlobalStyle, themes } from 'styles/global.styles';
import AdminPage from 'pages/Admin/Admin';
// import themes from 'themes';
import { createTheme } from '@mui/material';

const SharedLayout = lazy(() => import('./layouts/SharedLayout'));
const HomePage = lazy(() => import('./pages/Home'));
const ReviewsPage = lazy(() => import('./pages/Reviews'));

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const getThemeFromLocalStorage = () => {
    const themeString = localStorage.getItem('theme');
    if (!themeString) {
      return null;
    }
    try {
      return JSON.parse(themeString);
    } catch (error) {
      console.error('Error parsing theme from localStorage:', error);
      return null;
    }
  };

  useEffect(() => {
    const themeFromLocalStorage = getThemeFromLocalStorage();
    if (themeFromLocalStorage) {
      setCurrentTheme(themeFromLocalStorage);
    }
  }, []);

  const setThemeToLocalStorage = theme => {
    localStorage.setItem('theme', JSON.stringify(theme));
  };

  const handleThemeChange = () => {
    const newTheme = currentTheme.title === 'dark' ? themes.light : themes.dark;
    setCurrentTheme(newTheme);
    setThemeToLocalStorage(newTheme);
  };

  const theme = createTheme({
    ...currentTheme,
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="">
        <Suspense fallback={<Loader />}>
          <GlobalStyle theme={currentTheme} />
          <button onClick={handleThemeChange} style={{ position: 'absolute' }}>
            Change theme
          </button>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              {/* <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="user"
                element={
                  <PrivateRoute>
                    <AccoutPage />
                  </PrivateRoute>
                }
              /> */}
              <Route path="exchangerates" />
              <Route path="news" />
              <Route path="partnership" />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="faq" />
              <Route path="contacts" />
              <Route path="register" />
              <Route path="login" />
              <Route path="admin" element={<AdminPage />} />

              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
