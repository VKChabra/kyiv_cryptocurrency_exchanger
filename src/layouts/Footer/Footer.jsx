import { Container, Wrap } from './Footer.styled';
import Logo from 'components/logo/Logo';
import FooterNav from '../../components/footer/FooterNav';
import { NavWrap } from 'layouts/Header/Header.styled';
import { FooterInfo } from 'components/footer/FooterInfo';
import useMediaQueries from 'components/hooks/useMediaQueries';

const Footer = () => {
  const { isMobile, isDesktop, isHuge } = useMediaQueries();

  return (
    <Container>
      <Wrap>
        {(isDesktop || isHuge) && <Logo />}
        {isMobile ? (
          <FooterInfo />
        ) : (
          <NavWrap footer={'true'}>
            <FooterNav />
          </NavWrap>
        )}
      </Wrap>
    </Container>
  );
};

export default Footer;
