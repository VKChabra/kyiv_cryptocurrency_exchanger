import Logo from 'components/logo/Logo';
import Navigation from 'components/navigation/Navigation';
import { HeaderBar } from './Header.styled';

const Header = () => (
  <>
    <HeaderBar>
      {/* <Logo /> */}
      <Logo />
      <Navigation />
    </HeaderBar>
  </>
);

export default Header;
