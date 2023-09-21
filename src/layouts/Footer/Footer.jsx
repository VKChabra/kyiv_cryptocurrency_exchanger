import { useMediaQuery } from 'react-responsive';
import { Container } from './Footer.styled';
import Logo from 'components/logo/Logo';
import FooterNav from '../../components/footer/FooterNav';
import { NavWrap } from 'layouts/Header/Header.styled';
import { bp } from 'styles/breakpoints';
import { FooterInfo } from 'components/footer/FooterInfo';

const Footer = () => {
  const isDesktop = useMediaQuery({ minWidth: bp.desktop });

  return (
    <Container>
      {isDesktop && <Logo />}
      {!isDesktop ? (
        <FooterInfo />
      ) : (
        <NavWrap footer={'true'}>
          <FooterNav />
        </NavWrap>
      )}
    </Container>
  );
};

export default Footer;
