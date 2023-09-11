import { CardWrapper, BackgroundImage, Image } from './CryptoTable.styled';
import Line from 'images/homePage/Line.svg';
import BG from 'images/homePage/bg.svg';
import CryptoItem from './CryptoItem/CryptoItem';
// import { useTranslation } from 'react-i18next';

const CryptoTable = () => {
  // const { t } = useTranslation();
  return (
    <CardWrapper>
      <BackgroundImage src={BG} alt="top courses" />
      <Image src={Line} alt="top courses" />
      <CryptoItem />
    </CardWrapper>
  );
};

export default CryptoTable;
