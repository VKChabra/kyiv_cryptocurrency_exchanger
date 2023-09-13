import Logo from 'components/logo/Logo';
import Navigation from 'components/navigation/Navigation';
import { HeaderBar } from './Header.styled';

const Header = ({ theme, toggleTheme }) => (
  <HeaderBar>
    <Logo />
    <Navigation theme={theme} toggleTheme={toggleTheme} />
  </HeaderBar>
);

export default Header;
