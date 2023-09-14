import { Outlet } from 'react-router-dom';
import Header from 'layouts/Header/Header';
import Footer from 'layouts/Footer/Footer';
import ChatButtons from '../../components/chat/ChatButtons';

const SharedLayout = () => (
  <>
    <Header />
    <Outlet />
    <ChatButtons />
    <Footer />
  </>
);

export default SharedLayout;
