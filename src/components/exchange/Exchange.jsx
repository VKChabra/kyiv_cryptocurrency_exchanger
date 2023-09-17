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
import { notifyError, notifySuccess, notifyWarning } from 'helpers/notifications';

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
    paymentMethod: 'walletNumber',
    creditCard: '',
    walletNumber: '',
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
    const { paymentMethod, creditCard, walletNumber, name, additionalContact, ...dataToSend } =
      formData;

    const paymentDetailsToSend = paymentMethod === 'creditCard' ? { creditCard } : { walletNumber };
    const dataToSendTransaction = {
      ...dataToSend,
      paymentMethod,
      ...paymentDetailsToSend,
    };
    // const dataToUpdateUser = {
    //   name,
    //   additionalContact,
    //   paymentMethod,
    //   ...paymentDetailsToSend,
    // };
    if (dataToSendTransaction.creditCard === '' || dataToSendTransaction.walletNumber === '') {
      return notifyWarning(t('exchange.emptyDetails'));
    }
    delete dataToSendTransaction.acceptTerms;
    const response = await addTransaction(dataToSendTransaction);
    if (response.error) {
      notifyError(t('exchange.error'));
      console.log(response.error);
    } else notifySuccess(t('exchange.success'));
  };

  const renderNameInput = () => {
    return (
      <MuiCustomInput
        label={t('exchange.name')}
        helperText={t('exchange.nameHelp')}
        name="name"
        type="text"
        defaultValue={formData.name}
        onChange={handleChange}
        required
      />
    );
  };

  const renderCreditCardInput = () => {
    return (
      <MuiCustomInput
        label={t('exchange.creditCard')}
        helperText={t('exchange.creditCardHelp')}
        name="creditCard"
        type="text"
        defaultValue={formData.creditCard}
        onChange={handleChange}
        required
      />
    );
  };

  const renderWalletNumberInput = () => {
    return (
      <MuiCustomInput
        label={t('exchange.walletNumber')}
        helperText={t('exchange.walletNumberHelp')}
        name="walletNumber"
        type="text"
        defaultValue={formData.walletNumber}
        onChange={handleChange}
        required
      />
    );
  };

  const renderAdditionalContactInput = () => {
    return (
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
    );
  };

  const renderAcceptTermsCheckbox = () => {
    return (
      <ExchangeCheckbox
        type="checkbox"
        name="acceptTerms"
        checked={formData.acceptTerms}
        onChange={handleChange}
        required
      />
    );
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        {!fullName && renderNameInput()}
        <div>
          <label>Payment Method:</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="walletNumber">Wallet</option>
            <option value="creditCard">Credit Card</option>
          </select>
        </div>
        {formData.paymentMethod === 'creditCard'
          ? renderCreditCardInput()
          : renderWalletNumberInput()}
        {!user?.additionalContact && renderAdditionalContactInput()}
        <AcceptTermsLabel>
          {renderAcceptTermsCheckbox()}
          {t('exchange.agreement')}
        </AcceptTermsLabel>
        <NeoButton type="submit" text={t('calc.submit')}></NeoButton>
      </Form>
    </FormContainer>
  );
};

export default Exchange;
