import { useState } from 'react';
import { useSelector } from 'react-redux';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
// import authSelectors from 'redux/auth/authSelectors';
// import Registration from 'pages/Registration';
import { Wrap } from './Exchange.styled';
import { FormContainer, Input, AcceptTermsLabel, ExchangeCheckbox } from './Exchange.styled';
import { useTranslation } from 'react-i18next';
import Calculator from 'components/calculator';
import exchangeSelectors from 'redux/exchange/exchangeSelectors';
import options from 'shared/options';
import Captcha from 'components/captcha';
import NeoButton from 'layouts/Button/Button';

const Exchange = () => {
  const { t } = useTranslation();
  // const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const calcData = useSelector(exchangeSelectors.calcFormData);

  const [formData, setFormData] = useState({
    exchange: calcData?.exchange || '',
    exchangeCurr: calcData?.exchangeCurr || options[0].value,
    receiveCurr: calcData?.receiveCurr || options[1].value,
    name: '',
    email: '',
    additionalContact: '',
    acceptTerms: false,
  });

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Wrap>
      {/* <Registration /> */}
      <Calculator showSubmitButton={false} />
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Input 1"
            required
          />
          <Input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Input 2"
            required
          />
          <Input
            type="text"
            name="additionalContact"
            value={formData.additionalContact}
            onChange={handleChange}
            placeholder="Input 3"
            required
          />
          <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_CLIENT_KEY}>
            <Captcha />
          </GoogleReCaptchaProvider>
          <AcceptTermsLabel>
            <ExchangeCheckbox
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              required
            />
            {t('exchange.agreement')}
          </AcceptTermsLabel>
          <NeoButton type="submit" text={t('calc.submit')}></NeoButton>
        </form>
      </FormContainer>
    </Wrap>
  );
};

export default Exchange;
