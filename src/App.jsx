import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
// import { PrivateRoute, PublicRoute } from './components/routes';
// import Loader from 'components/Loader';
import Loader from './components/loader';

import theme from 'styles/theme';
// import themes from 'themes';

const SharedLayout = lazy(() => import('./layouts/SharedLayout'));
const HomePage = lazy(() => import('./pages/Home'));
const ReviewsPage = lazy(() => import('./pages/Reviews'));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="">
        <Suspense fallback={Loader}>
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
              <Route path="login" />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
