import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Frame, Wrap, Label, Input, Form, Dropdown } from './calculator.styled';
import NeoButton from 'layouts/Button';
import options from 'shared/options';

const Calculator = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    exchange: '',
    receive: '',
    exchangeCurr: options[0].value,
    receiveCurr: options[3].value,
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Data:', formData);
    navigate('/exchange');
  };

  return (
    <Frame>
      <Form onSubmit={handleSubmit}>
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
              value={formData.receive}
              onChange={handleChange}
              placeholder={t('calc.inputReceive')}
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
