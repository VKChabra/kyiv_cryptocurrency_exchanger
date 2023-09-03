import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Frame, Wrap, Label, Input, Form, Dropdown } from './calculator.styled';
import NeoButton from 'layouts/Button';
import options from 'shared/options';
import { notifyError } from 'helpers/notifications';
import { PERCENT } from 'shared/shared';

const Calculator = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [receive, setReceive] = useState('');
  const [formData, setFormData] = useState({
    exchange: '',
    exchangeCurr: options[0].value,
    receiveCurr: options[1].value,
  });

  const swapOptions = () => {
    const { exchangeCurr, receiveCurr } = formData;
    setFormData({
      ...formData,
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
    if (name === 'exchangeCurr' && value === formData.receiveCurr) {
      swapOptions();
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      !formData.exchange ||
      isNaN(parseFloat(formData.exchange)) ||
      parseFloat(formData.exchange) === 0
    ) {
      notifyError(t('calc.inputEmptyError'));
      return;
    }
    navigate('/exchange');
  };

  useEffect(() => {
    const { exchange, exchangeCurr, receiveCurr } = formData;
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
  }, [formData]);

  return (
    <Frame>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Wrap>
          <Label>
            <Input
              type="text"
              name="exchange"
              value={formData.exchange}
              onChange={handleChange}
              placeholder={t('calc.inputGive')}
            />
            <Dropdown name="exchangeCurr" value={formData.exchangeCurr} onChange={handleChange}>
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
            <Dropdown name="receiveCurr" value={formData.receiveCurr} onChange={handleChange}>
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Dropdown>
          </Label>
        </Wrap>
        <NeoButton type="submit" text={t('calc.submit')}></NeoButton>
      </Form>
    </Frame>
  );
};

export default Calculator;
