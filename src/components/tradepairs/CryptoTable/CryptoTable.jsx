import { CardWrapper } from './CryptoTable.styled';
import CryptoItem from './CryptoItem/CryptoItem';
// import { useTranslation } from 'react-i18next';

const CryptoTable = () => {
  // const { t } = useTranslation();
  return (
    <CardWrapper>
      <CryptoItem />
    </CardWrapper>
  );
};

export default CryptoTable;
