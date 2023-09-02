import 'layouts/i18n/i18next';
import { useTranslation } from 'react-i18next';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field, Form } from './Login.styled';
import { logIn } from 'redux/auth/operations';

const Login = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !name || !password) {
      return console.log('error wrong user data');
    }
    dispatch(logIn({ name, email, password }));
    setName('');
    setMail('');
    setPassword('');
  };

  const handleChange = e => {
    const value = e.target.value.toLowerCase().trim();
    const field = e.target.name;
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setMail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        <span>{t('auth.name')}</span>{' '}
        <input type="text" name="name" value={name} onChange={handleChange} />
      </Field>
      <Field>
        <span>{t('auth.mail')}</span>{' '}
        <input type="email" name="email" value={email} onChange={handleChange} />
      </Field>
      <Field>
        <span>{t('auth.password')}</span>{' '}
        <input type="password" name="password" value={password} onChange={handleChange} />
      </Field>
      <button type="submit">
        {' '}
        <span>{t('auth.login')}</span>{' '}
      </button>
    </Form>
  );
};

export default Login;
