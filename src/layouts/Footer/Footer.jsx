import { Container } from './Footer.styled';
import Logo from 'components/logo/Logo';
import FooterNav from '../../components/footer/FooterNav';

const Footer = () => {
  return (
    <Container>
      <Logo />
      <FooterNav />
    </Container>
  );
};

export default Footer;
