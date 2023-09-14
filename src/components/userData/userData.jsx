import { Content, Text, Avatar, Flex, Box, Title } from './userData.styled';
import { useAuth } from '../../hooks';
import FormUser from '../../components/formUser';
import { useTranslation } from 'react-i18next';
import 'layouts/i18n/i18next';
const setAvatar = name => {
  const letters = name.toUpperCase().split('');
  return letters[0];
};

const UserData = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const { role, createdAt, name } = user;
  const letter = setAvatar(name);

  return (
    <Content>
      <Flex>
        <Avatar role={role}>{letter}</Avatar>
        <Title>{name}</Title>
        <Box>
          <Title>{t(`userData.status`)}</Title>
          <Text>{role}</Text>
        </Box>
        <Box>
          <Title>{t(`userData.data`)}</Title>
          <Text>{createdAt}</Text>
        </Box>
      </Flex>
      <FormUser user={user} />
    </Content>
  );
};
export default UserData;
