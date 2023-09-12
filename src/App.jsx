import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import './layouts/i18n/i18next';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { refresh } from 'redux/auth/operations';
import { GlobalStyle, themes } from 'styles/global.styles';

import { PrivateRoute, PublicRoute } from './components/routes';
import Loader from './components/loader';
import { AdminMenu } from 'components/admin/AdminMenu';
import authSelectors from 'redux/auth/authSelectors';

const SharedLayout = lazy(() => import('./layouts/SharedLayout'));
const HomePage = lazy(() => import('./pages/Home'));
const ReviewsPage = lazy(() => import('./pages/Reviews'));
const AdminReviewPage = lazy(() => import('./pages/Admin/ReviewPage'));
const AdminTransactionPage = lazy(() => import('./pages/Admin/TransactionPage'));
const AdminAccountPage = lazy(() => import('./pages/Admin/AdminAccountPage'));
const RegistrationPage = lazy(() => import('./pages/Registration'));
const LoginPage = lazy(() => import('./pages/Login'));
const UserPage = lazy(() => import('./pages/User'));
const ExchangePage = lazy(() => import('./pages/Exchange'));
const NewsPage = lazy(() => import('./pages/News'));

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);
  const dispatch = useDispatch();

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

  const userToken = useSelector(authSelectors.getUserToken);

  useEffect(() => {
    if (userToken) dispatch(refresh());

    const themeFromLocalStorage = getThemeFromLocalStorage();
    if (themeFromLocalStorage) {
      setCurrentTheme(themeFromLocalStorage);
    }
  }, [dispatch, userToken]);

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
              <Route
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
                    <RegistrationPage />
                  </PublicRoute>
                }
              />
              <Route
                path="user"
                element={
                  <PrivateRoute>
                    <UserPage />
                  </PrivateRoute>
                }
              />
              <Route path="exchange" element={<ExchangePage />} />
              <Route path="exchangerates" />
              <Route path="news" element={<NewsPage />} />
              <Route path="partnership" />
              <Route path="reviews" element={<ReviewsPage />} />
              <Route path="faq" />
              <Route path="contacts" />
              <Route path="admin" element={<AdminMenu />}>
                <Route index element={<AdminAccountPage />} />
                <Route path="reviews" element={<AdminReviewPage />} />
                <Route path="transactions" element={<AdminTransactionPage />} />
              </Route>

              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
