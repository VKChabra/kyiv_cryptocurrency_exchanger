import React, { useState, useEffect, useRef } from 'react';
import { getCryptoData } from 'services/API/whitebit-api';
import {
  Wrapper,
  Table,
  ListTitleItem,
  ListTitle,
  List,
  Item,
  Change,
  Button,
} from './CryptoItem.styled';
import { useTranslation } from 'react-i18next';

const CryptoItem = ({ onCryptoItemClick }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  const perPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCryptoData({ perPage });
        setCryptoData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const scrollToTop = useRef(null);

  const handleClick = item => {
    onCryptoItemClick(item);
    window.scrollTo({
      top: 200,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  const cryptoDataItem = cryptoData.map(item => (
    <Item key={item.id}>
      <p>{item.crypto}</p>
      <p>{item.priceInUSDT}</p>
      <p>
        <Change p={item.change24h}>{item.change24h}%</Change>
      </p>

      <p>{item.marketCap}</p>
      <Button key={item.id} onClick={() => handleClick(item)} ref={scrollToTop}>
        {t('button.exchange')}
      </Button>
    </Item>
  ));

  return (
    <Wrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <ListTitle>
            <ListTitleItem>{t('table.name')}</ListTitleItem>
            <ListTitleItem>{t('table.price')}</ListTitleItem>
            <ListTitleItem>{t('table.change')}</ListTitleItem>
            <ListTitleItem>{t('table.capital')}</ListTitleItem>
          </ListTitle>
          <List>{cryptoDataItem} </List>
        </Table>
      )}
    </Wrapper>
  );
};

export default CryptoItem;
