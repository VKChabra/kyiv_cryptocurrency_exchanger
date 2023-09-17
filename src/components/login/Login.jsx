import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Form, Wrap, SubmitBtn } from '../authShared/authShared.styled';
import MuiCustomInput from 'components/input';
import { PasswordInput } from 'components/input/PasswordInput';
import { logIn } from 'redux/auth/operations';
import authSelectors from 'redux/auth/authSelectors';
import Verification from 'components/authShared/verification';
import { resetErrors, resetUser } from 'redux/auth/authSlice';

const Login = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const location = useLocation();

  const errorCode = useSelector(authSelectors.selectErrorCode);
  const user = useSelector(authSelectors.selectUser);
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (location.pathname === '/login') {
      dispatch(resetUser());
      dispatch(resetErrors());
    }
  }, [dispatch, location]);

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !password) {
      return console.log('error wrong user data');
    }
    dispatch(logIn({ email, password }));
  };

  const handleChange = e => {
    const value = e.target.value.trim();
    const valueLowerCase = value.toLowerCase();
    const field = e.target.name;
    switch (field) {
      case 'email':
        setMail(valueLowerCase);
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
        {(user.email || errorCode === 403) && <Verification email={email} />}
      </Form>
    </Wrap>
  );
};

export default Login;
