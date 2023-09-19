import { NavLinkWrapper, Link, LineImg } from './nav.styled';
import { useTranslation } from 'react-i18next';

const Nav = ({ footer = 'false', closeMobileMenu }) => {
  const { t } = useTranslation();

  return (
    <NavLinkWrapper footer={footer}>
      <Link to="/tradepairs" onClick={() => closeMobileMenu()}>
        <span>{t('nav.exchangeRates')}</span>
      </Link>
      <LineImg footer={footer} />
      <Link to="/news" onClick={() => closeMobileMenu()}>
        <span>{t('nav.news')}</span>
      </Link>
      <LineImg footer={footer} />
    </NavLinkWrapper>
  );
};

export default Nav;
