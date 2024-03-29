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
  ChangeButton,
} from './CryptoItem.styled';
import { useTranslation } from 'react-i18next';
import Button from 'layouts/Button';
import { NavLink } from 'react-router-dom';
import Loader from 'components/loader';
import useMediaQueries from 'components/hooks/useMediaQueries';
import HoverableComponent from 'components/hoverText/HoverableComponent';

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

  const scrollToTop = useRef(null);

  const handleClick = item => {
    onCryptoItemClick(item);
    window.scrollTo({
      top: 200,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };

  const { isMobile } = useMediaQueries();

  const cryptoDataItem = cryptoData.map(item => (
    <Item key={item.id}>
      <p>{item.crypto}</p>
      <p>{item.priceInUSD.toFixed(2)}</p>
      <p>
        <Change p={item.change24h}>{item.change24h}%</Change>
      </p>
      {!isMobile && <p>{item.marketCap}</p>}
      <NavLink to="/">
        <ChangeButton key={item.id} onClick={() => handleClick(item)} ref={scrollToTop}>
          {t('button.exchange')}
        </ChangeButton>
      </NavLink>
    </Item>
  ));

  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Table>
            <ListTitle>
              <ListTitleItem>{t('table.name')}</ListTitleItem>
              <ListTitleItem>{t('table.price')}</ListTitleItem>
              <ListTitleItem>{t('table.change')}</ListTitleItem>
              {!isMobile && (
                <HoverableComponent
                  Component={ListTitleItem}
                  text={t('table.capital')}
                  explanation={t('table.capital-explanation')}
                />
              )}
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
