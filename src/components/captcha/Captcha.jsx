import { useCallback, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { CaptchaBtn, Flex } from './Captcha.styled';
import { notifyError } from 'helpers/notifications';
import { verifyCaptcha } from 'services/verifyCaptcha';
import { ExchangeCheckbox } from 'components/exchange/Exchange.styled';

const Captcha = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [verificationStatus, setVerificationStatus] = useState(null);

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      notifyError('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('userRegistration');
    const response = await verifyCaptcha(token);
    console.log(response);

    setVerificationStatus(response?.success ? true : false);
    console.log(verificationStatus);
  }, [executeRecaptcha, verificationStatus]);

  return (
    <Flex>
      <ExchangeCheckbox name="captcha" checked={verificationStatus} required readOnly />
      <CaptchaBtn onClick={handleReCaptchaVerify}>Verify recaptcha</CaptchaBtn>
    </Flex>
  );
};

export default Captcha;
