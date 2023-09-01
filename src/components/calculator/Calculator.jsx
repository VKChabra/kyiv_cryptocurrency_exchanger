import { useTranslation } from 'react-i18next';
import { Frame, Wrap, Input, Form, Dropdown, Item } from './calculator.styled';

const Calculator = () => {
  const { t } = useTranslation();

  return (
    <Frame>
      <Form>
        <Wrap>
          <Input name="amount" label={t('calc.inputGive')} variant="outlined" />
          <Dropdown label="Currency">
            <Item value="BTC">BTC</Item>
            <Item value="USDT">USDT</Item>
            <Item value="BUSD">BUSD</Item>
            <Item value="ARC">ARC</Item>
            <Item value="FUB">FUB</Item>
          </Dropdown>
        </Wrap>
        <Wrap>
          <Input name="amount" label={t('calc.inputTake')} variant="outlined" />
          <Dropdown label="Currency">
            <Item value="USD">USD</Item>
            <Item value="EUR">EUR</Item>
            <Item value="UAH">UAH</Item>
          </Dropdown>
        </Wrap>
      </Form>
    </Frame>
  );
};

export default Calculator;
