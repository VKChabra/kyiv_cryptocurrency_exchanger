import { useCallback } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { CaptchaBtn } from './Captcha.styled';

const Captcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    // const token = await executeRecaptcha('userRegistration');
    // console.log(token);
  }, [executeRecaptcha]);

  return <CaptchaBtn onClick={handleReCaptchaVerify}>Verify recaptcha</CaptchaBtn>;
};

export default Captcha;
