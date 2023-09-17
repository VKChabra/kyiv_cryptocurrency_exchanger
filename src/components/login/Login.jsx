import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Wrap, SubmitBtn } from '../authShared/authShared.styled';
import MuiCustomInput from 'components/input';
import { PasswordInput } from 'components/input/PasswordInput';
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
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <MuiCustomInput
          label={t('auth.mail')}
          name="email"
          type="email"
          autoComplete="current-email"
          defaultValue={email}
          onChange={handleChange}
          required
        />
        <PasswordInput
          label={t('auth.password')}
          name="password"
          type="password"
          autoComplete="current-password"
          defaultValue={password}
          onChange={handleChange}
          required
        />
        <SubmitBtn type="submit">
          <span>{t('auth.login')}</span>
        </SubmitBtn>
      </Form>
    </Wrap>
  );
};

export default Login;
