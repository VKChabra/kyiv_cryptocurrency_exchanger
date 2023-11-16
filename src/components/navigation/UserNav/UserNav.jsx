import { Link } from '../nav.styled';
import {
  UserWrapper,
  Button,
  Text,
  ProfileHeader,
  TextHeader,
  AvatarHeader,
} from './userNav.styled';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
import { logOut } from 'redux/auth/operations';

const UserNav = ({ closeMobileMenu }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMenu = () => {
    closeMobileMenu && closeMobileMenu();
  };
  const handleLogOut = () => {
    dispatch(logOut());
    closeMobileMenu && closeMobileMenu();
  };

  const setAvatar = name => {
    const letters = name.toUpperCase().split('');
    return letters[0];
  };

  const user = useSelector(authSelectors.selectUser);
  const { role, name } = user;
  const letter = setAvatar(name);

  const onAvatarAdminClick = () => {
    if (role === 'admin') {
      navigate('/admin');
    } else {
      return;
    }
  };

  return (
    <UserWrapper>
      <Link to="/user/private" onClick={handleMenu}>
        <span>{t('nav.profile')}</span>
      </Link>
      <Button type="button" onClick={handleLogOut}>
        <Text>{t('button.exit')}</Text>
      </Button>
      <ProfileHeader>
        <TextHeader>{name}</TextHeader>
        <AvatarHeader role={role} onClick={onAvatarAdminClick}>
          {letter}
        </AvatarHeader>
      </ProfileHeader>
    </UserWrapper>
  );
};

export default UserNav;
