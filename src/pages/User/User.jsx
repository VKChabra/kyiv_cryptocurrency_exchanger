import { Outlet } from 'react-router-dom';
import Loader from 'components/loader/Loader';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { RiHome2Line, RiMacLine, RiLockUnlockLine, RiPriceTag3Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { handleDateFormat } from '../../helpers/formatDate';
import { logOut } from 'redux/auth/operations';
import {
  Text,
  AvatarHeader,
  ProfileHeader,
  Profile,
  ProfileWrapper,
  Link,
  ProfileNav,
  ExitButton,
  ButtonWrapper,
  TextHeader,
  Avatar,
  Flex,
  Title,
  FlexWrapper,
} from './user.styled';
import authSelectors from 'redux/auth/authSelectors';

const setAvatar = name => {
  const letters = name.toUpperCase().split('');
  return letters[0];
};
const User = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleLogOut = () => dispatch(logOut());
  const user = useSelector(authSelectors.selectUser);
  const { role, createdAt, name } = user;

  const letter = setAvatar(name);
  return (
    <>
      <Profile>
        <ProfileHeader>
          <TextHeader>{name}</TextHeader>
          <AvatarHeader role={role}>{letter}</AvatarHeader>
        </ProfileHeader>
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
          <Avatar role={role}>{letter}</Avatar>
          <FlexWrapper>
            <Flex>
              <Title>{name}</Title>
              <Title>
                {t(`userData.status`)}: {role}
              </Title>
              <Title>
                {t(`userData.data`)}: {handleDateFormat(createdAt)}
              </Title>
            </Flex>
            <Suspense fallback={<Loader />} style={{ width: '100%' }}>
              <Outlet />
            </Suspense>
          </FlexWrapper>
        </ProfileWrapper>
      </Profile>
    </>
  );
};

export default User;
