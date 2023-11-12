import { NavHeader } from './navigation.styled';
import { LineImg } from './nav.styled';
import Nav from './Nav';
import Info from './Info';
import Line from 'images/nav/line.svg';
import LanguageButton from './LanguageButton';

const HeaderNavigation = ({ closeMobileMenu }) => {
  return (
    <NavHeader>
      <Nav closeMobileMenu={closeMobileMenu} />
      <Info closeMobileMenu={closeMobileMenu} />
      <LineImg src={Line} />
      <LanguageButton />
    </NavHeader>
  );
};

export default HeaderNavigation;
