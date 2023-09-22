import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../input';
import { Form, Button, Text, BoxWrapper, ButtonSubmit } from './formUser.styled';
import { update } from 'redux/auth/operations';
import authSelectors from 'redux/auth/authSelectors';

const FormUser = () => {
  const { t } = useTranslation();

  const user = useSelector(authSelectors.selectUser);
  const { name, firstName, lastName } = user;

  const dispatch = useDispatch();
  const [visibleInput, setVisibleInput] = useState(false);
  const [nameUser, setNameUser] = useState(name);
  const [firstNameUser, setFirstNameUser] = useState(firstName);
  const [lastNameUser, setLastNameUser] = useState(lastName);

  const setInput = () => {
    setVisibleInput(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(update({ name: nameUser, firstName: firstNameUser, lastName: lastNameUser }));
    setVisibleInput(false);
  };

  const handleChange = e => {
    const value = e.target.value.trim();
    const field = e.target.name;
    switch (field) {
      case 'name':
        setNameUser(value);
        break;
      case 'firstName':
        setFirstNameUser(value);
        break;
      case 'lastName':
        setLastNameUser(value);
        break;
      default:
        return;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <BoxWrapper>
        <Text>{t('userData.firstName')}</Text>
        <Text>{firstName}</Text>
        {visibleInput ? (
          <Input
            label={t('userData.firstName')}
            type="text"
            name="firstName"
            margin="none"
            placeholder={t(`userData.firstName`)}
            defaultValue={firstName}
            onChange={handleChange}
            required
          />
        ) : (
          <Button type="button" onClick={setInput}>
            {t(`button.edit`)}
          </Button>
        )}
      </BoxWrapper>
      <BoxWrapper>
        <Text>{t(`userData.lastName`)}</Text>
        <Text>{lastName}</Text>
        {visibleInput ? (
          <Input
            label={t('userData.lastName')}
            type="text"
            name="lastName"
            margin="0px"
            placeholder={t(`userData.lastName`)}
            defaultValue={lastName}
            onChange={handleChange}
            required
          />
        ) : (
          <Button type="button" onClick={setInput}>
            {t(`button.edit`)}
          </Button>
        )}
      </BoxWrapper>
      <BoxWrapper>
        <Text>{t('userData.name')} </Text>
        <Text>{name}</Text>
        {visibleInput ? (
          <Input
            label={t('userData.name')}
            type="text"
            name="name"
            margin="0px"
            placeholder={t(`userData.name`)}
            defaultValue={name}
            onChange={handleChange}
            required
          />
        ) : (
          <Button type="button" onClick={setInput}>
            {t(`button.edit`)}
          </Button>
        )}
      </BoxWrapper>

      <ButtonSubmit type="submit">{t(`button.submit`)}</ButtonSubmit>
    </Form>
  );
};
export default FormUser;
