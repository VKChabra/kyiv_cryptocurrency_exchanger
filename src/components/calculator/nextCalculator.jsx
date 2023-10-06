import { useState, useEffect, useCallback, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Wrap, Label, Input, Form, DropdownSelect } from './calculator.styled';
import NeoButton from 'layouts/Button';
import { notifyWarning, notifyError } from 'helpers/notifications';
import { storeCalculatorData } from 'redux/calculator/storeCalculatorForm';
import calculatorSelectors from 'redux/calculator/calculatorSelectors';
import authSelectors from 'redux/auth/authSelectors';
import { getMarketActivity } from 'services/API/whitebit-api';
import { PERCENT, rates } from 'shared/options';

const Calculator = ({ showSubmitButton = true }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const calcData = useSelector(calculatorSelectors.calcData);
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const [marketData, setMarketData] = useState({});

  const options = useMemo(
    () => [
      { value: 'uah', label: 'UAH', rate: rates.uahRate },
      { value: 'usd', label: 'USD (Kyiv)', rate: 1 },
      { value: 'eur', label: 'EUR', rate: rates.eurRate },
      { value: 'btc', label: 'BTC', rate: 'dynamic' },
      { value: 'eth', label: 'ETH', rate: 'dynamic' },
      { value: 'trx', label: 'TRON', rate: 'dynamic' },
      { value: 'matic', label: 'MATIC', rate: 'dynamic' },
      { value: 'usdt trc20', label: 'USDT (TRC20)', rate: 'dynamic' },
      { value: 'usdt bep20', label: 'USDT (BEP20)', rate: 'dynamic' },
      { value: 'usdt erc20', label: 'USDT (ERC20)', rate: 'dynamic' },
      { value: 'usdc trc20', label: 'USDC (TRC20)', rate: 'dynamic' },
      { value: 'usdc bep20', label: 'USDC (BEP20)', rate: 'dynamic' },
      { value: 'usdc erc20', label: 'USDC (ERC20)', rate: 'dynamic' },
    ],
    []
  );

  const [receive, setReceive] = useState('');
  const [calculatorFormData, setCalculatorFormData] = useState({
    exchange: calcData?.exchange || '',
    exchangeCurr: calcData?.exchangeCurr || options[0].value,
    receiveCurr: calcData?.receiveCurr || options[3].value,
  });
  const exchangeAmount = calculatorFormData.exchange;
  const toExchange = calculatorFormData.exchangeCurr;
  const toReceive = calculatorFormData.receiveCurr;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const apiData = await getMarketActivity();
        setMarketData(apiData);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }, []);

  const swapOptions = () => {
    setCalculatorFormData({
      ...calculatorFormData,
      exchangeCurr: toReceive,
      receiveCurr: toExchange,
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
      (name === 'exchangeCurr' && value === toReceive) ||
      (name === 'receiveCurr' && value === toExchange)
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
    if (!exchangeAmount || isNaN(parseFloat(exchangeAmount)) || parseFloat(exchangeAmount) === 0) {
      notifyError(t('calc.inputEmptyError'));
      return;
    } else if (toExchange === toReceive) {
      notifyError(t('calc.inputSameCurrency'));
      return;
    } else {
      dispatch(storeCalculatorData({ ...calculatorFormData, receive }));
      navigate('/exchange');
    }
  };

  const formatCurrency = currency =>
    currency.split(' ').length === 2
      ? currency.split(' ')[0].toUpperCase()
      : currency.toUpperCase();

  const lastPrice = useCallback(
    pair => {
      console.log(pair);
      const usdUsdtPrice = marketData['USDT_USD']?.last_price;
      if (marketData[pair] && !pair.includes('USDT')) {
        console.log(parseFloat(marketData[pair].last_price));
        return parseFloat(marketData[pair].last_price);
      } else if (pair.includes('USDT')) {
        console.log(parseFloat(usdUsdtPrice * marketData[pair].last_price));
        return parseFloat(usdUsdtPrice * marketData[pair].last_price);
      }
    },
    [marketData]
  );

  const countRate = useCallback((rate, exchangeNumber) => {
    const result = exchangeNumber * rate;
    const decimalDigits = countDecimalDigits(result);
    decimalDigits === 0 ? result.toFixed(0) : result.toFixed(decimalDigits);
    const finalResult = result * (1 - PERCENT / 100);
    return finalResult;
  }, []);

  useEffect(() => {
    const { exchange } = calculatorFormData;
    const toExchangeUpdated = formatCurrency(toExchange);
    const toReceiveUpdated = formatCurrency(toReceive);
    let exactPair = `${toReceiveUpdated}_${toExchangeUpdated}`;
    let reversePair = `${toExchangeUpdated}_${toReceiveUpdated}`;

    // Check for USD-based pairs first
    if (toExchangeUpdated === 'USD') {
      if (!marketData[exactPair] && !marketData[reversePair]) {
        // If USD-based pairs are not available, try USDT-based pairs
        exactPair = `${toReceiveUpdated}_USDT`;
        reversePair = `USDT_${toReceiveUpdated}`;
      }
    } else if (toReceiveUpdated === 'USD') {
      if (!marketData[exactPair] && !marketData[reversePair]) {
        // If USD-based pairs are not available, try USDT-based pairs
        exactPair = `USDT_${toExchangeUpdated}`;
        reversePair = `${toExchangeUpdated}_USDT`;
      }
    }

    let calculatedRate = null;
    const exchangeNumber = parseFloat(exchange);
    if (marketData[exactPair]) {
      calculatedRate = 1 / lastPrice(exactPair);
      console.log('exact: ', calculatedRate);
    } else if (marketData[reversePair]) {
      calculatedRate = lastPrice(reversePair);
      console.log('reverse: ', calculatedRate);
    } else if (toExchange && toReceive && !isNaN(exchangeNumber)) {
      const exchangeObj = options.find(option => option.value === toExchange);
      const receiveObj = options.find(option => option.value === toReceive);
      calculatedRate = exchangeObj.rate / receiveObj.rate;
      console.log('calc: ', calculatedRate);
    }
    const finalRate = countRate(calculatedRate, exchangeNumber);
    setReceive(finalRate);
  }, [
    calculatorFormData,
    marketData,
    lastPrice,
    receive,
    toExchange,
    toReceive,
    countRate,
    options,
  ]);

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <Wrap>
          <Label>
            <Input
              type="text"
              name="exchange"
              value={exchangeAmount}
              onChange={handleChange}
              placeholder={t('calc.inputGive')}
            />
            <DropdownSelect name="exchangeCurr" value={toExchange} onChange={handleChange}>
              {options.map(option => (
                <option key={`${option.value}_exchange`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </DropdownSelect>
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
            <DropdownSelect name="receiveCurr" value={toReceive} onChange={handleChange}>
              {options.map(option => (
                <option key={`${option.value}_receive`} value={option.value}>
                  {option.label}
                </option>
              ))}
            </DropdownSelect>
          </Label>
        </Wrap>
      </div>
      {showSubmitButton && <NeoButton type="submit" text={t('button.exchange')}></NeoButton>}
    </Form>
  );
};

export default Calculator;
