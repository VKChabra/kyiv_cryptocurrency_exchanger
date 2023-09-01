import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Frame, Wrap, Label, Input, Form, Dropdown } from './calculator.styled';

const Calculator = () => {
  const { t } = useTranslation();

  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    { value: 'option4', label: 'Option 4' },
    { value: 'option5', label: 'Option 5' },
    { value: 'option6', label: 'Option 6' },
  ];

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
  };

  return (
    <Frame>
      <Form onSubmit={handleSubmit}>
        <Wrap>
          <Label>
            <Input type="text" name="exchange" value={formData.exchange} onChange={handleChange} />
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
            <Input type="text" name="receive" value={formData.receive} onChange={handleChange} />
            <Dropdown name="receiveCurr" value={formData.receiveCurr} onChange={handleChange}>
              {options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Dropdown>
          </Label>
        </Wrap>
        <button type="submit">{t('calc.submit')}</button>
      </Form>
    </Frame>
  );
};

export default Calculator;
