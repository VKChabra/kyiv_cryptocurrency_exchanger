import { NavFooter } from './FooterNav.styled';
import { LineImg } from 'components/navigation/nav.styled';
import Nav from 'components/navigation/Nav';
import Info from 'components/navigation/Info';
import Line from 'images/nav/line.svg';
import { FooterInfo } from './FooterInfo';

const FooterNav = () => {
  return (
    <NavFooter>
      <Nav footer={true} />
      <Info footer={true} />
      <LineImg src={Line} footer={true} />
      <FooterInfo />
      <LineImg src={Line} />
    </NavFooter>
  );
};

export default FooterNav;
