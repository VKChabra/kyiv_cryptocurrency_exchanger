import { Text, Avatar, ProfileHeader, Profile, ProfileWrapper } from './user.styled';
import ButtonsMenu from '../../components/buttonsMenu';

const setAvatar = name => {
  const letters = name.toUpperCase().split('');
  return letters[0];
};

const userData = {
  username: 'Jacques Gluke',
};

const User = () => {
  const { username } = userData;
  const letter = setAvatar(username);

  return (
    <Profile>
      <ProfileHeader>
        <Text>{username}</Text>
        <Avatar>{letter}</Avatar>
      </ProfileHeader>
      <ProfileWrapper>
        <ButtonsMenu />
      </ProfileWrapper>
    </Profile>
  );
};

export default User;
