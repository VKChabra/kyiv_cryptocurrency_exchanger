import { Container } from './Footer.styled';
import Logo from 'components/logo/Logo';
import FooterNav from '../../components/footer/FooterNav';
import { NavWrap } from 'layouts/Header/Header.styled';

const Footer = () => {
  return (
    <Container>
      <Logo />
      <NavWrap footer={true}>
        <FooterNav />
      </NavWrap>
    </Container>
  );
};

export default Footer;
