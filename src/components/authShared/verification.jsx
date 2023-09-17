import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { notifyError } from 'helpers/notifications';
import { verifyMail } from 'redux/auth/operations';
import { resetErrors } from 'redux/auth/authSlice';
import authSelectors from 'redux/auth/authSelectors';
import MuiCustomInput from 'components/input';
import { SubmitBtn } from './authShared.styled';

const Verification = ({ email }) => {
  const { t } = useTranslation();

  const [code, setCode] = useState('');
  const dispatch = useDispatch();
  const verifyErrorCode = useSelector(authSelectors.selectVerifyErrorCode);

  const handleChange = e => {
    setCode(e.target.value.trim());
  };

  const handleVerification = e => {
    e.preventDefault();

    if (!code) {
      return notifyError('Please enter a verification code.');
    }

    dispatch(verifyMail({ email, verificationCode: Number(code) }));

    if (verifyErrorCode === 404) {
      notifyError(t('auth.errorNotFound'));
      dispatch(resetErrors());
    }
    if (verifyErrorCode === 400) {
      notifyError(t('auth.errorVerifDone'));
      dispatch(resetErrors());
    }
  };

  return (
    <>
      <MuiCustomInput
        label="Verification Code"
        name="code"
        type="text"
        defaultValue={code}
        onChange={handleChange}
        required
      />
      <SubmitBtn type="button" onClick={handleVerification}>
        Verify
      </SubmitBtn>
    </>
  );
};

export default Verification;
