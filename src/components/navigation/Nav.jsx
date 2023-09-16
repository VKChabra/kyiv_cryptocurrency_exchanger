import { NavLinkWrapper, Link, LineImg } from './nav.styled';
import Line from 'images/nav/line.svg';
import { useTranslation } from 'react-i18next';

const Nav = ({ footer = false }) => {
  const { t } = useTranslation();

  return (
    <NavLinkWrapper footer={footer}>
      <Link to="/tradepairs">
        <span>{t('nav.exchangeRates')}</span>
      </Link>
      <LineImg src={Line} />
      <Link to="/news">
        <span>{t('nav.news')}</span>
      </Link>
      <LineImg src={Line} />
    </NavLinkWrapper>
  );
};

export default Nav;
