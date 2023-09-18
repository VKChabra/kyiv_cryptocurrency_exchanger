import { NavHeader } from './navigation.styled';
import { LineImg } from './nav.styled';
import Nav from './Nav';
import Info from './Info';
import Line from 'images/nav/line.svg';
import LanguageButton from './LanguageButton';
import ThemeSwitcherButton from 'components/themeSwitch/ThemeSwitch';

const HeaderNavigation = ({ theme, toggleTheme }) => {
  return (
    <NavHeader>
      <Nav />
      <Info />
      <LineImg src={Line} />
      <LanguageButton />
      <ThemeSwitcherButton theme={theme} toggleTheme={toggleTheme} />
    </NavHeader>
  );
};

export default HeaderNavigation;
