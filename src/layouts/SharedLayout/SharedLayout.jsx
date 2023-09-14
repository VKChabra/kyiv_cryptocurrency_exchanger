import { Outlet } from 'react-router-dom';
import Header from 'layouts/Header/Header';
import Footer from 'layouts/Footer/Footer';

const SharedLayout = ({ theme, toggleTheme }) => (
  <>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <Outlet />
    <Footer />
  </>
);

export default SharedLayout;
