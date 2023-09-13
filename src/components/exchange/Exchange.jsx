import { useState } from 'react';
import { useSelector } from 'react-redux';
import MuiCustomInput from 'components/input';
import { FormContainer, Form, AcceptTermsLabel, ExchangeCheckbox } from './Exchange.styled';
import { useTranslation } from 'react-i18next';
import calculatorSelectors from 'redux/calculator/calculatorSelectors';
import options from 'shared/options';
import NeoButton from 'layouts/Button/Button';
import authSelectors from 'redux/auth/authSelectors';
import { useAddTransactionMutation } from 'services/transactionsApi';
import { notifySuccess } from 'helpers/notifications';

const Exchange = () => {
  const { t } = useTranslation();
  const calcData = useSelector(calculatorSelectors.calcFormData);
  const user = useSelector(authSelectors.selectUser);
  const [addTransaction] = useAddTransactionMutation();

  let fullName = `${user?.firstName} ${user?.middleName} ${user?.lastName}`;
  if (user?.firstName === null || user?.lastName === null) fullName = null;

  const [formData, setFormData] = useState({
    amountToExchange: calcData?.exchange || '',
    amountToReceive: calcData?.receive.toString() || '',
    currencyToExchange: calcData?.exchangeCurr || options[0].value,
    currencyToReceive: calcData?.receiveCurr || options[1].value,
    name: fullName || '',
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

  const handleSubmit = async e => {
    e.preventDefault();
    await addTransaction(formData);
    notifySuccess(t('exchange.success'));
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
