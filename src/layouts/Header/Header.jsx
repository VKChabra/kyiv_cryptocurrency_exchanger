import Logo from 'components/logo/Logo';
import Navigation from 'components/navigation/Navigation';
import { HeaderBar } from './Header.styled';
import LanguageFlags from './LangaugeButton/LangaugeButton';

const Header = () => (
  <>
    <HeaderBar>
      <LanguageFlags />
      {/* <Logo /> */}
      <Logo />
      <Navigation />
    </HeaderBar>
  </>
);

export default Header;
