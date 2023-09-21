import { Content, Text, Avatar, Flex, Title } from './user.styled';
import { useAuth } from '../../hooks';
import FormUser from '../../components/formUser';
import { useTranslation } from 'react-i18next';
import { handleDateFormat } from '../../helpers/formatDate';
const setAvatar = name => {
  const letters = name.toUpperCase().split('');
  return letters[0];
};

const UserPrivate = () => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const { role, createdAt, name } = user;
  const letter = setAvatar(name);

  return (
    <Content>
      <Flex>
        <Avatar role={role}>{letter}</Avatar>
        <Title>{name}</Title>
        <div>
          <Title>{t(`userData.status`)}</Title>
          <Text>{role}</Text>
        </div>
        <div>
          <Title>{t(`userData.data`)}</Title>
          <Text>{handleDateFormat(createdAt)}</Text>
        </div>
      </Flex>
      <FormUser user={user} />
    </Content>
  );
};
export default UserPrivate;
