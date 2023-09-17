import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { register, verifyMail } from 'redux/auth/operations';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Form, Wrap, SubmitBtn } from '../authShared/authShared.styled';
import Captcha from 'components/captcha';
import MuiCustomInput from 'components/input';
import { notifyError } from 'helpers/notifications';
import authSelectors from 'redux/auth/authSelectors';
import { resetErrors } from 'redux/auth/authSlice';

const Registration = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState(false);
  const dispatch = useDispatch();
  const errorCode = useSelector(authSelectors.selectErrorCode);
  const verifyErrorCode = useSelector(authSelectors.selectVerifyErrorCode);
  const user = useSelector(authSelectors.selectUser);

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
      case 'code':
        setCode(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!email || !name || !password) {
      return notifyError(t('auth.errorData'));
    }
    if (!verificationStatus) {
      return notifyError(t('captcha.error'));
    }
    dispatch(register({ name, email, password }));
  };

  if (errorCode === 409) {
    notifyError(t('auth.errorExists'));
    dispatch(resetErrors());
  }

  const handleVerification = e => {
    e.preventDefault();

    if (verifyErrorCode === 404) {
      notifyError(t('auth.errorNotFound'));
      dispatch(resetErrors());
    }
    if (verifyErrorCode === 400) {
      notifyError(t('auth.errorVerifDone'));
      dispatch(resetErrors());
    }
    dispatch(verifyMail({ email, verificationCode: Number(code) }));
  };

  return (
    <Wrap>
      <Form onSubmit={handleSubmit}>
        <MuiCustomInput
          label={t('auth.name')}
          name="name"
          type="name"
          autoComplete="username"
          defaultValue={name}
          onChange={handleChange}
          required
        />
        <MuiCustomInput
          label={t('auth.mail')}
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={email}
          onChange={handleChange}
          required
        />
        <MuiCustomInput
          label={t('auth.password')}
          name="password"
          type="password"
          defaultValue={password}
          onChange={handleChange}
          required
        />
        <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_CLIENT_KEY}>
          <Captcha
            verificationStatus={verificationStatus}
            setVerificationStatus={setVerificationStatus}
          />
        </GoogleReCaptchaProvider>
        <SubmitBtn type="submit">
          <span>{t('auth.register')}</span>
        </SubmitBtn>
        {(user.email || errorCode === 403) && (
          <>
            <MuiCustomInput
              label={t('auth.verifyCode')}
              name="code"
              type="text"
              defaultValue=""
              onChange={handleChange}
              required
            />
            <SubmitBtn type="button" onClick={handleVerification}>
              <span>{t('auth.verify')}</span>
            </SubmitBtn>
          </>
        )}
      </Form>
    </Wrap>
  );
};

export default Registration;
