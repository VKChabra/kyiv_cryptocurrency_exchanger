import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, BoxWrapper, ButtonSubmit, Select, Label } from './formUser.styled';
import { update } from 'redux/auth/operations';
import authSelectors from 'redux/auth/authSelectors';
import FormUserInput from './FormUserInput';

const FormUser = () => {
  const { t } = useTranslation();

  const user = useSelector(authSelectors.selectUser);
  const { name, firstName, lastName, additionalContact, paymentMethod, paymentValue } = user;

  const dispatch = useDispatch();
  const [visibleInput, setVisibleInput] = useState(false);
  const [nameUser, setNameUser] = useState(name);
  const [firstNameUser, setFirstNameUser] = useState(firstName);
  const [lastNameUser, setLastNameUser] = useState(lastName);
  const [additionalContactUser, setAdditionalContactUser] = useState(additionalContact);
  const [paymentMethodUser, setPaymentMethodUser] = useState(paymentMethod);
  const [paymentValueUser, setPaymentValueUser] = useState(paymentValue);

  const setInput = () => {
    setVisibleInput(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      update({
        name: nameUser,
        firstName: firstNameUser,
        lastName: lastNameUser,
        additionalContact: additionalContactUser,
        paymentMethod: paymentMethodUser,
        paymentValue: paymentValueUser,
      })
    );
    setVisibleInput(false);
  };

  const handleChange = e => {
    const value = e.target.value.trim();
    const field = e.target.name;
    switch (field) {
      case 'name':
        setNameUser(value);
        break;
      case 'firstName':
        setFirstNameUser(value);
        break;
      case 'lastName':
        setLastNameUser(value);
        break;
      case 'additionalContact':
        setAdditionalContactUser(value);
        break;
      case 'paymentMethod':
        setPaymentMethodUser(value);
        break;
      case 'paymentValue':
        setPaymentValueUser(value);
        break;
      default:
        return;
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <BoxWrapper>
        <FormUserInput
          fieldName="firstName"
          labelKey="userData.firstName"
          visibleInput={visibleInput}
          setInput={setInput}
          user={user}
          handleChange={handleChange}
          required
        />
      </BoxWrapper>
      <BoxWrapper>
        <FormUserInput
          fieldName="lastName"
          labelKey="userData.lastName"
          visibleInput={visibleInput}
          setInput={setInput}
          user={user}
          handleChange={handleChange}
          required
        />
      </BoxWrapper>
      <BoxWrapper>
        <FormUserInput
          fieldName="name"
          labelKey="userData.name"
          visibleInput={visibleInput}
          setInput={setInput}
          user={user}
          handleChange={handleChange}
        />
      </BoxWrapper>
      <BoxWrapper>
        <FormUserInput
          fieldName="additionalContact"
          labelKey="userData.additionalContact"
          visibleInput={visibleInput}
          setInput={setInput}
          user={user}
          handleChange={handleChange}
        />
      </BoxWrapper>
      <BoxWrapper>
        <Label htmlFor="paymentMethod">{t('userData.paymentMethod')}</Label>
        <Select
          name="paymentMethod"
          id="paymentMethod"
          onChange={handleChange}
          value={paymentMethodUser}
        >
          <option value="wallet">{t('admin.wallet')}</option>
          <option value="creditCard">{t('admin.creditCard')}</option>
          <option value="cash">{t('admin.cash')}</option>
        </Select>
      </BoxWrapper>
      {paymentMethod && (
        <BoxWrapper>
          <FormUserInput
            fieldName="paymentValue"
            labelKey={`userData.${paymentMethodUser}.paymentValue`}
            visibleInput={visibleInput}
            setInput={setInput}
            user={user}
            handleChange={handleChange}
          />
        </BoxWrapper>
      )}

      <ButtonSubmit type="submit">{t(`button.submit`)}</ButtonSubmit>
    </Form>
  );
};
export default FormUser;
