import { NavHeader, Link, Text, LineImg } from './nav.styled';
import Info from './Info';
import Line from 'images/nav/line.svg';
import { useTranslation } from 'react-i18next';
import LanguageButton from './LanguageButton/LanguageButton';
import ThemeSwitcherButton from 'components/themeSwitch/ThemeSwitch';

const Nav = ({ theme, toggleTheme }) => {
  const { t } = useTranslation();

  return (
    <NavHeader>
      <Link to="/">
        <Text>{t('nav.home')}</Text>
      </Link>
      <LineImg src={Line} />
      <Link to="/tradepairs">
        <Text>{t('nav.exchangeRates')}</Text>
      </Link>
      <LineImg src={Line} />
      <Link to="/news">
        <Text>{t('nav.news')}</Text>
      </Link>
      <LineImg src={Line} />
      <Info />
      <LineImg src={Line} />
      <LanguageButton />
      <ThemeSwitcherButton theme={theme} toggleTheme={toggleTheme} />
    </NavHeader>
  );
};

export default Nav;
