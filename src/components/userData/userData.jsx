import { Content, Text, Avatar } from './userData.styled';
const setAvatar = name => {
  const letters = name.toUpperCase().split('');
  return letters[0];
};

const userData = {
  username: 'Jacques Gluke',
};

const UserData = () => {
  const { username } = userData;
  const letter = setAvatar(username);
  return (
    <Content>
      <Text>{username}</Text>
      <Avatar>{letter}</Avatar>
    </Content>
  );
};
export default UserData;
