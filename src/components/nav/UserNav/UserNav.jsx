import { Link, Text } from '../nav.styled';
import { UserWrapper } from './userNav.styled';
import { useTranslation } from 'react-i18next';
import 'layouts/i18n/i18next';

const UserNav = () => {
  const { t } = useTranslation();
  return (
    <UserWrapper>
      <Link to="/user">
        {' '}
        <Text>{t('nav.profile')}</Text>{' '}
      </Link>
    </UserWrapper>
  );
};

export default UserNav;
