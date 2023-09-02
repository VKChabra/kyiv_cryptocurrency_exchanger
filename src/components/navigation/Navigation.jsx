import { useSelector } from 'react-redux';
import Nav from 'components/nav/Nav';
import AuthNav from 'components/nav/AuthNav';
import UserNav from 'components/nav/UserNav';
import authSelectors from 'redux/auth/authSelectors';
import { HeaderStyled } from './navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <HeaderStyled>
      <Nav />
      {!isLoggedIn ? <AuthNav /> : <UserNav />}
    </HeaderStyled>
  );
};

export default Navigation;
