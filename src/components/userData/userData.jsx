import {
  Content,
  Text,
  Avatar,
  Flex,
  Box,
  Title,
  Input,
  Form,
  Label,
  Button,
  InputText,
} from './userData.styled';
import { useAuth } from '../../hooks';
import { useTranslation } from 'react-i18next';
import 'layouts/i18n/i18next';
const setAvatar = name => {
  const letters = name.toUpperCase().split('');
  return letters[0];
};

const UserData = () => {
  const { user } = useAuth();
  const { t } = useTranslation();

  const { firstName, role, lastName, email, createdAt, name } = user;
  const letter = setAvatar(name);
  return (
    <Content>
      <Flex>
        <Avatar>{letter}</Avatar>
        <Title>{name}</Title>
        <Box>
          <Title>{t(`userData.status`)}</Title> <Text>{role}</Text>
        </Box>
        <Box>
          <Title>{t(`userData.data`)}</Title> <Text>{createdAt}</Text>
        </Box>
      </Flex>
      <Form>
        <Label>{t(`userData.firstName`)}</Label>
        {firstName ? <InputText>{firstName}</InputText> : <InputText>-</InputText>}
        <Input type="text" name="firstName" placeholder={t(`userData.firstName`)} required />
        <Button type="button">Отправить</Button>
        <Button type="button">Изменить</Button>
      </Form>
      <Form>
        <Label>{t(`userData.secondName`)}</Label>
        {lastName ? <InputText>{lastName}</InputText> : <InputText>-</InputText>}
        <Input type="text" name="secondName" placeholder={t(`userData.secondName`)} required />
        <Button type="button">Отправить</Button>
        <Button type="button">Изменить</Button>
      </Form>
      <Form>
        <Label>{t(`userData.email`)}</Label>
        {email ? <InputText>{email}</InputText> : <InputText>-</InputText>}
        <Input type="text" name="email" placeholder={t(`userData.email`)} required />
        <Button type="button">Отправить</Button>
        <Button type="button">Изменить</Button>
      </Form>
    </Content>
  );
};
export default UserData;
