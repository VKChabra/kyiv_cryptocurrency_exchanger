import Logo from 'components/logo/Logo';
import { useSelector } from 'react-redux';
import HeaderNavigation from 'components/navigation';
import AuthNav from 'components/navigation/AuthNav';
import UserNav from 'components/navigation/UserNav';
import authSelectors from 'redux/auth/authSelectors';
import { NavWrap, HeaderBar } from './Header.styled';

const Header = ({ theme, toggleTheme }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  return (
    <HeaderBar>
      <Logo />
      <NavWrap>
        <HeaderNavigation theme={theme} toggleTheme={toggleTheme} />
        {!isLoggedIn ? <AuthNav /> : <UserNav />}
      </NavWrap>
    </HeaderBar>
  );
};

export default Header;
