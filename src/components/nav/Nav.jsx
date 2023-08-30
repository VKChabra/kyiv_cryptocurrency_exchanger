import { NavHeader, Link, Text } from './nav.styled';
import { useTranslation } from 'react-i18next';
import '../../layouts/i18n/i18next';

const Nav = () => {
  const { t } = useTranslation();

  return (
    <NavHeader>
      <Link to="/">
        {' '}
        <Text>{t('nav.home')}</Text>
      </Link>
      <Link to="/exchangerates">
        {' '}
        <Text>{t('nav.exchangeRates')}</Text>{' '}
      </Link>
      <Link to="/news">
        {' '}
        <Text>{t('nav.news')}</Text>{' '}
      </Link>
      <Link to="/partnership">
        {' '}
        <Text>{t('nav.partnership')}</Text>
      </Link>
      <Link to="/reviews">
        {' '}
        <Text>{t('nav.reviews')}</Text>{' '}
      </Link>
      <Link to="/faq">
        {' '}
        <Text>{t('nav.faq')}</Text>{' '}
      </Link>
      <Link to="#contacts">
        {' '}
        <Text>{t('nav.contacts')}</Text>{' '}
      </Link>
      <Link to="/login">
        {' '}
        <Text>{t('nav.login')}</Text>{' '}
      </Link>
    </NavHeader>
  );
};

export default Nav;
