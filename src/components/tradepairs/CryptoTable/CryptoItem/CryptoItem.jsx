import React, { useState, useEffect } from 'react';
import { getCryptoData } from 'services/API/whitebit-api';
import {
  Wrapper,
  Table,
  ListTitleItem,
  ListTitle,
  List,
  Item,
  Change,
  ChangeButton,
} from './CryptoItem.styled';
import { useTranslation } from 'react-i18next';
import Button from 'layouts/Button';
import { NavLink } from 'react-router-dom';

const CryptoItem = ({ onCryptoItemClick }) => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [perPage, setPerPage] = useState(30);
  const { t } = useTranslation();

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
  }, [perPage]);

  const loadMore = () => {
    setPerPage(perPage + 30);
  };

  const showLess = () => {
    setPerPage(30);
  };

  const handleClick = item => {
    onCryptoItemClick(item);
  };

  const cryptoDataItem = cryptoData.map(item => (
    <Item key={item.id}>
      <p>{item.crypto}</p>
      <p>{item.priceInUSDT}</p>
      <p>
        <Change p={item.change24h}>{item.change24h}%</Change>
      </p>

      <p>{item.marketCap}</p>
      <NavLink to="/">
        {' '}
        <ChangeButton key={item.id} onClick={() => handleClick(item)}>
          {t('button.exchange')}
        </ChangeButton>
      </NavLink>
    </Item>
  ));

  return (
    <Wrapper>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Table>
            <ListTitle>
              <ListTitleItem>{t('table.name')}</ListTitleItem>
              <ListTitleItem>{t('table.price')}</ListTitleItem>
              <ListTitleItem>{t('table.change')}</ListTitleItem>
              <ListTitleItem>{t('table.capital')}</ListTitleItem>
            </ListTitle>
            <List>{cryptoDataItem}</List>
          </Table>
          {perPage > 259 || <Button text={t('button.showMore')} onClick={loadMore}></Button>}
          {perPage > 259 && <Button text={t('button.showLess')} onClick={showLess}></Button>}
        </>
      )}
    </Wrapper>
  );
};

export default CryptoItem;
