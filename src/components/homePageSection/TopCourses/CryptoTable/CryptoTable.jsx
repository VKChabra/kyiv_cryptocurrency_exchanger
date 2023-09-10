import { CardWrapper, BackgroundImage, Image, ListTitle, Item } from './CryptoTable.styled';
import Line from 'images/homePage/Line.svg';
import BG from 'images/homePage/bg.svg';
import CryptoItem from './CryptoItem/CryptoItem';
import { useTranslation } from 'react-i18next';

const CryptoTable = () => {
  const { t } = useTranslation();
  return (
    <CardWrapper>
      <ListTitle>
        <Item>{t('table.name')}</Item>
        <Item>{t('table.price')}</Item>
        <Item>{t('table.change')}</Item>
        <Item>{t('table.capital')}</Item>
      </ListTitle>
      <BackgroundImage src={BG} alt="top courses" />
      <Image src={Line} alt="top courses" />
      <CryptoItem />
    </CardWrapper>
  );
};

export default CryptoTable;
