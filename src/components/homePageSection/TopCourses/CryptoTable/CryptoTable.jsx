import { CardWrapper, BackgroundImage, Image, ListTitle, Item } from './CryptoTable.styled';
import Line from 'images/homePage/Line.svg';
import BG from 'images/homePage/bg.svg';
import CryptoItem from './CryptoItem/CryptoItem';

const CryptoTable = () => {
  return (
    <CardWrapper>
      <ListTitle>
        <Item>Name</Item>
        <Item>Price</Item>
        <Item>Change</Item>
        <Item>Capital</Item>
      </ListTitle>
      <BackgroundImage src={BG} alt="top courses" />
      <Image src={Line} alt="top courses" />
      <CryptoItem />
    </CardWrapper>
  );
};

export default CryptoTable;
