import { useCallback, useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useTranslation } from 'react-i18next';
import { CaptchaBtn, Flex } from './Captcha.styled';
import { notifyError } from 'helpers/notifications';
import { verifyCaptcha } from 'services/verifyCaptcha';
import { ExchangeCheckbox } from 'components/exchange/Exchange.styled';

const Captcha = () => {
  const { t } = useTranslation();
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [verificationStatus, setVerificationStatus] = useState(false);

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      notifyError('Execute recaptcha not yet available');
      return;
    }

    const token = await executeRecaptcha('userRegistration');
    const data = await verifyCaptcha(token);
    verifySet(data);
  }, [executeRecaptcha]);

  const verifySet = data => {
    setVerificationStatus(data?.success ? true : false);
  };

  return (
    <Flex>
      <ExchangeCheckbox name="captcha" checked={verificationStatus} readOnly />
      <CaptchaBtn type="button" onClick={handleReCaptchaVerify}>
        {t('captcha.verify')}
      </CaptchaBtn>
    </Flex>
  );
};

export default Captcha;
