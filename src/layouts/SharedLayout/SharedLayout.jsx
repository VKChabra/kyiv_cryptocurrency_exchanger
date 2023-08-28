import { Outlet } from 'react-router-dom';
import Header from 'layouts/Header/Header';

const SharedLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default SharedLayout;
