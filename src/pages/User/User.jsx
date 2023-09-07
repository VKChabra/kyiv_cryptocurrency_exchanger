import { Text, Avatar, ProfileHeader, Profile, ProfileWrapper } from './user.styled';
import ButtonsMenu from '../../components/buttonsMenu';
import { useAuth } from '../../hooks';

const setAvatar = name => {
  const letters = name.toUpperCase().split('');
  return letters[0];
};

const User = () => {
  const { user } = useAuth();
  const letter = setAvatar(user.name);

  return (
    <Profile>
      <ProfileHeader>
        <Text>{user.name}</Text>
        <Avatar>{letter}</Avatar>
      </ProfileHeader>
      <ProfileWrapper>
        <ButtonsMenu />
      </ProfileWrapper>
    </Profile>
  );
};

export default User;
