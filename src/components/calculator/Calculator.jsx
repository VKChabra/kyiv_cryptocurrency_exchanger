import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Frame, Wrap, Label, Input, Form, Dropdown } from './calculator.styled';
import NeoButton from 'layouts/Button';
import options from 'shared/options';
import { notifyWarning, notifyError } from 'helpers/notifications';
import { PERCENT } from 'shared/shared';
import { storeCalculatorFormData } from 'redux/calculator/storeCalculatorForm';
import calculatorSelectors from 'redux/calculator/calculatorSelectors';
import authSelectors from 'redux/auth/authSelectors';

const Calculator = ({ showSubmitButton = true }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calcData = useSelector(calculatorSelectors.calcFormData);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

  const [receive, setReceive] = useState('');
  const [calculatorFormData, setCalculatorFormData] = useState({
    exchange: calcData?.exchange || '',
    exchangeCurr: calcData?.exchangeCurr || options[0].value,
    receiveCurr: calcData?.receiveCurr || options[1].value,
  });

  const swapOptions = () => {
    const { exchangeCurr, receiveCurr } = calculatorFormData;
    setCalculatorFormData({
      ...calculatorFormData,
      exchangeCurr: receiveCurr,
      receiveCurr: exchangeCurr,
    });
  };

  const countDecimalDigits = number => {
    const numberString = number.toString();
    if (numberString.includes('.')) {
      const decimalPart = numberString.split('.')[1];
      return decimalPart.length;
    } else {
      return 0;
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (
      (name === 'exchangeCurr' && value === calculatorFormData.receiveCurr) ||
      (name === 'receiveCurr' && value === calculatorFormData.exchangeCurr)
    ) {
      swapOptions();
    } else {
      setCalculatorFormData({
        ...calculatorFormData,
        [name]: value,
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!isLoggedIn) {
      notifyWarning(t('alert.loginFirst'));
      return;
    }
    if (
      !calculatorFormData.exchange ||
      isNaN(parseFloat(calculatorFormData.exchange)) ||
      parseFloat(calculatorFormData.exchange) === 0
    ) {
      notifyError(t('calc.inputEmptyError'));
      return;
    } else if (calculatorFormData.exchangeCurr === calculatorFormData.receiveCurr) {
      notifyError(t('calc.inputSameCurrency'));
      return;
    } else {
      dispatch(storeCalculatorFormData({ ...calculatorFormData, receive }));
      navigate('/exchange');
    }
  };

  useEffect(() => {
    const { exchange, exchangeCurr, receiveCurr } = calculatorFormData;
    const exchangeObj = options.find(option => option.value === exchangeCurr);
    const receiveObj = options.find(option => option.value === receiveCurr);

    if (exchangeObj && receiveObj && !isNaN(parseFloat(exchange))) {
      const rate = receiveObj.rate / exchangeObj.rate;
      let result = parseFloat(exchange) * rate;
      const decimalDigits = countDecimalDigits(result);
      decimalDigits === 0 ? result.toFixed(0) : result.toFixed(decimalDigits);
      const finalResult = result * (1 - PERCENT / 100);
      setReceive(finalResult);
    }
  }, [calculatorFormData, receive]);

  return (
    <Frame>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Wrap>
          <Label>
            <Input
              type="text"
              name="exchange"
              value={calculatorFormData.exchange}
              onChange={handleChange}
              placeholder={t('calc.inputGive')}
            />
            <Dropdown
              name="exchangeCurr"
              value={calculatorFormData.exchangeCurr}
              onChange={handleChange}
            >
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Dropdown>
          </Label>
        </Wrap>
        <Wrap>
          <Label>
            <Input
              type="text"
              name="receive"
              value={receive}
              onChange={handleChange}
              placeholder={t('calc.inputReceive')}
              readOnly
            />
            <Dropdown
              name="receiveCurr"
              value={calculatorFormData.receiveCurr}
              onChange={handleChange}
            >
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Dropdown>
          </Label>
        </Wrap>
        {showSubmitButton && <NeoButton type="submit" text={t('calc.submit')}></NeoButton>}
      </Form>
    </Frame>
  );
};

export default Calculator;
