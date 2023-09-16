import { Link } from '../nav.styled';
import { UserWrapper, Button } from './userNav.styled';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserNav = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());
  return (
    <UserWrapper>
      <Link to="/user">
        <span>{t('nav.profile')}</span>
      </Link>
      <Button type="button" onClick={handleLogOut}>
        {t('exitButton.exit')}
      </Button>
    </UserWrapper>
  );
};

export default UserNav;
