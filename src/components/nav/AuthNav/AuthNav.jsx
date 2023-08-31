import { Link, Text, TextWrapper } from '../nav.styled';
import { RegistrationWrapper } from './authNav.styled';
import { useTranslation } from 'react-i18next';
import 'layouts/i18n/i18next';

const AuthNav = () => {
  const { t } = useTranslation();
  return (
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
  );
};

export default AuthNav;
