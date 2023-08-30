import { NavHeader, Link, Text, LineImg, TextWrapper, RegistrationWrapper } from './nav.styled';
import LanguageBtn from './Language';
import Info from './Info';
import Line from 'images/nav/line.svg';
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
      <LineImg src={Line} />
      <Link to="/exchangerates">
        {' '}
        <Text>{t('nav.exchangeRates')}</Text>{' '}
      </Link>
      <LineImg src={Line} />
      <Link to="/news">
        {' '}
        <Text>{t('nav.news')}</Text>{' '}
      </Link>
      <LineImg src={Line} />
      <Info />
      <LineImg src={Line} />
      <LanguageBtn />
      <RegistrationWrapper>
        <Link to="/register">
          {' '}
          <Text>{t('nav.register')}</Text>{' '}
        </Link>
        <Link to="/login">
          {' '}
          <TextWrapper>
            <Text>{t('nav.login')}</Text>{' '}
          </TextWrapper>
        </Link>
      </RegistrationWrapper>
    </NavHeader>
  );
};

export default Nav;