import { useState } from 'react';
import Logo from 'components/logo/Logo';
import { useSelector } from 'react-redux';
import HeaderNavigation from 'components/navigation';
import AuthNav from 'components/navigation/AuthNav';
import UserNav from 'components/navigation/UserNav';
import authSelectors from 'redux/auth/authSelectors';
import { NavWrap, HeaderBar, MobileButton, MobileMenu } from './Header.styled';
import useMediaQueries from 'components/hooks/useMediaQueries';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isDesktop, isHuge } = useMediaQueries();
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <HeaderBar>
      <Logo />
      {!isDesktop && !isHuge && (
        <MobileButton onClick={toggleMobileMenu}>
          <div />
          <div />
          <div />
        </MobileButton>
      )}
      {mobileMenuOpen ? (
        <MobileMenu>
          <HeaderNavigation closeMobileMenu={closeMobileMenu} />
          {!isLoggedIn ? (
            <AuthNav closeMobileMenu={closeMobileMenu} />
          ) : (
            <UserNav closeMobileMenu={closeMobileMenu} />
          )}
        </MobileMenu>
      ) : (
        <NavWrap>
          <HeaderNavigation />
          {!isLoggedIn ? <AuthNav /> : <UserNav />}
        </NavWrap>
      )}
    </HeaderBar>
  );
};

export default Header;
