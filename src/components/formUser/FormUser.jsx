import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Input from '../input';
import 'layouts/i18n/i18next';
import { Form, Button, Text, BoxWrapper } from './formUser.styled';
import { updata } from 'redux/auth/operations';

const FormUser = () => {
  const { t } = useTranslation();
  const [visibleInput, setVisibleInput] = useState(false);
  const user = useSelector(state => state.auth.user);
  const { name } = user;
  const dispatch = useDispatch();
  const [nameUser, setName] = useState(name);
  const setInput = () => {
    setVisibleInput(true);
  };
  //   email, firstName, lastName,
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updata({ name: nameUser }));
  };
  const handleChange = e => {
    const value = e.target.value.trim();
    const field = e.target.name;
    switch (field) {
      case 'name':
        setName(value);
        break;
      //   case 'email':
      //     setEmail(value);
      //     break;
      //   case 'firstName':
      //     setFirstName(value);
      //     break;
      //   case 'lastName':
      //     setLastName(value);
      // break;
      default:
        return;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      {/* <BoxWrapper>
        <Text>{t('userData.firstName')}</Text>
        <Text>{firstName}</Text>
        {visibleInput && (
          <Input
            label={t('userData.firstName')}
            type="text"
            name="firstName"
            placeholder={t(`userData.firstName`)}
            defaultValue={firstName}
            onChange={handleChange}
            required
          />
        )}
        <Button type="button" onClick={setVisibleInput}>
          Изменить
        </Button>
      </BoxWrapper>
      <BoxWrapper>
        <Text>{t(`userData.lastName`)}</Text>
        <Text>{lastName}</Text>
        {visibleInput && (
          <Input
            label={t('userData.lastName')}
            type="text"
            name="lastName"
            placeholder={t(`userData.lastName`)}
            defaultValue={lastName}
            onChange={handleChange}
            required
          />
        )}{' '}
        <Button type="button" onClick={setInput}>
          Изменить
        </Button>
      </BoxWrapper> */}
      <BoxWrapper>
        <Text>{t('userData.name')} </Text>
        <Text>{name}</Text>
        {visibleInput && (
          <Input
            label={t('userData.name')}
            type="text"
            name="name"
            placeholder={t(`userData.name`)}
            defaultValue={name}
            onChange={handleChange}
            required
          />
        )}{' '}
        <Button type="button" onClick={setInput}>
          Изменить
        </Button>
      </BoxWrapper>

      <Button type="submit">Отправить</Button>
    </Form>
  );
};
export default FormUser;

// const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const text = form.elements.text.value;
//     if (text !== '') {
//       dispatch(updateUser(data));
//       form.reset();
//       return;
//     }
//     alert('Task cannot be empty. Enter some text!');
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input name="text" className={css.input} />
//       <button type="submit" className={css.button}>
//         Add task
//       </button>
//     </form>
//   );
// };
