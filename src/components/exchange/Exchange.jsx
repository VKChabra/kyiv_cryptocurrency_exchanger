import { useState } from 'react';
import { useSelector } from 'react-redux';
import MuiCustomInput from 'components/input';
import { FormContainer, Form, AcceptTermsLabel, ExchangeCheckbox } from './Exchange.styled';
import { useTranslation } from 'react-i18next';
import exchangeSelectors from 'redux/exchange/exchangeSelectors';
import options from 'shared/options';
import NeoButton from 'layouts/Button/Button';

const Exchange = () => {
  const { t } = useTranslation();
  const calcData = useSelector(exchangeSelectors.calcFormData);

  const [formData, setFormData] = useState({
    exchange: calcData?.exchange || '',
    exchangeCurr: calcData?.exchangeCurr || options[0].value,
    receiveCurr: calcData?.receiveCurr || options[1].value,
    name: '',
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
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <MuiCustomInput
          label={t('exchange.name')}
          helperText={t('exchange.nameHelp')}
          name="name"
          type="text"
          defaultValue={formData.name}
          onChange={handleChange}
          required
        />
        <MuiCustomInput
          label={t('exchange.additionalContact')}
          helperText={t('exchange.additionalContactHelp')}
          name="additionalContact"
          type="text"
          size="small"
          defaultValue={formData.additionalContact}
          onChange={handleChange}
          margin="dense"
          required
        />
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
      </Form>
    </FormContainer>
  );
};

export default Exchange;
