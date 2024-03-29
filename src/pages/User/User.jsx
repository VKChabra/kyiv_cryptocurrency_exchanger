import { Outlet } from 'react-router-dom';
import Loader from 'components/loader/Loader';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { RiHome2Line, RiMacLine, RiLockUnlockLine, RiPriceTag3Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import {
  Text,
  ProfileWrapper,
  Link,
  ProfileNav,
  ExitButton,
  ButtonWrapper,
  Avatar,
  Box,
} from './user.styled';
import authSelectors from 'redux/auth/authSelectors';

const setAvatar = name => {
  const letters = name.toUpperCase().split('');
  return letters[0];
};
const User = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.selectUser);
  const { role, name } = user;
  const letter = setAvatar(name);

  const handleLogOut = () => dispatch(logOut());

  return (
    <ProfileWrapper>
      <ProfileNav>
        <ButtonWrapper>
          <Link to="private">
            <RiHome2Line />
            <Text>{t(`button.private`)}</Text>
          </Link>
          <Link to="transactions">
            <RiMacLine />
            <Text>{t(`button.operation`)}</Text>
          </Link>
          <Link to="reviews">
            <RiPriceTag3Line />
            <Text>{t(`button.feedback`)}</Text>
          </Link>
        </ButtonWrapper>
        <ExitButton type="button" onClick={handleLogOut}>
          <RiLockUnlockLine />
          <Text>{t('button.exit')}</Text>
        </ExitButton>
      </ProfileNav>
      <Box>
        <Avatar role={role}>{letter}</Avatar>
        <Suspense fallback={<Loader />} style={{ width: '100%' }}>
          <Outlet />
        </Suspense>
      </Box>
    </ProfileWrapper>
  );
};

export default User;
