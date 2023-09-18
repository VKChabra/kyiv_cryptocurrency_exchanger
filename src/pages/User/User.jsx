import { Text, AvatarHeader, ProfileHeader, Profile, ProfileWrapper } from './user.styled';
import ButtonsMenu from '../../components/buttonsMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

const setAvatar = name => {
  const letters = name.toUpperCase().split('');
  return letters[0];
};

const User = () => {
  const user = useSelector(authSelectors.selectUser);
  const { name, role } = user;

  const letter = setAvatar(name);

  return (
    <Profile>
      <ProfileHeader>
        <Text>{name}</Text>
        <AvatarHeader role={role}>{letter}</AvatarHeader>
      </ProfileHeader>
      <ProfileWrapper>
        <ButtonsMenu />
      </ProfileWrapper>
    </Profile>
  );
};

export default User;
