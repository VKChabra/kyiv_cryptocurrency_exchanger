import { lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import { PrivateRoute, PublicRoute } from './components/routes';
// import Loader from 'components/Loader';

const HomePage = lazy(() => import('./components/homepage'));

const App = () => (
  <>
    <BrowserRouter basename="">
      {/* <Suspense fallback={<Loader />}> */}
      <Routes>
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
              />
              <Route path="partnership" element={<PartnershipPage />} />
              <Route path="news" element={<NewsPage />} />
              <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  </>
);

export default App;
