import 'layouts/i18n/i18next';
import { useTranslation } from 'react-i18next';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Field, Form } from './Login.styled';
import { logIn } from 'redux/auth/operations';

const Login = () => {
  const { t } = useTranslation();

  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      return console.log('error wrong user data');
    }
    dispatch(logIn({ email, password }));

    setMail('');
    setPassword('');
  };

  const handleChange = e => {
    const value = e.target.value.toLowerCase().trim();
    const field = e.target.name;
    switch (field) {
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
        <span>{t('auth.mail')}</span>
        <input type="email" name="email" value={email} onChange={handleChange} />
      </Field>
      <Field>
        <span>{t('auth.password')}</span>
        <input type="password" name="password" value={password} onChange={handleChange} />
      </Field>
      <button type="submit">
        <span>{t('auth.login')}</span>
      </button>
    </Form>
  );
};

export default Login;
