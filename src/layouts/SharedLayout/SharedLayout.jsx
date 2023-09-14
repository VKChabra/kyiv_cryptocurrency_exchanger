import { Outlet } from 'react-router-dom';
import Header from 'layouts/Header/Header';
import Footer from 'layouts/Footer/Footer';
import ChatButtons from '../../components/chat/ChatButtons';

const SharedLayout = ({ theme, toggleTheme }) => (
  <>
    <Header theme={theme} toggleTheme={toggleTheme} />
    <Outlet />
    <ChatButtons />
    <Footer />
  </>
);

export default SharedLayout;
