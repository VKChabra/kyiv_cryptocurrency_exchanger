import { Link } from '../nav.styled';
import { TextWrapper } from '../navigation.styled';
import { RegistrationWrapper } from './authNav.styled';
import { useTranslation } from 'react-i18next';

const AuthNav = ({ closeMobileMenu }) => {
  const { t } = useTranslation();
  return (
    <RegistrationWrapper>
      <Link to="/register" onClick={() => closeMobileMenu()}>
        <span>{t('nav.register')}</span>
      </Link>
      <Link to="/login" onClick={() => closeMobileMenu()}>
        <TextWrapper>
          <span>{t('nav.login')}</span>
        </TextWrapper>
      </Link>
    </RegistrationWrapper>
  );
};

export default AuthNav;
