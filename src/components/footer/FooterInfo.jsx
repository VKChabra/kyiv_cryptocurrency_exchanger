import { useState } from 'react';
// import { Text } from './FooterNav.styled';
import {
  DropdownMenu,
  InfoText,
  InfoImg,
  InfoBtn,
  LinkList,
  Link,
  Text,
} from './FooterInfo.styled';
import Dropdown from 'images/arrowDown.svg';
import { useTranslation } from 'react-i18next';

const FooterInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu>
      <InfoBtn onClick={toggleDropdown}>
        <InfoText>{t('nav.information')}</InfoText>
        <InfoImg src={Dropdown} alt="dropdown"></InfoImg>
      </InfoBtn>
      {isOpen && (
        <LinkList>
          <Link to="/exchangerates">
            <Text>{t('nav.exchangeRates')}</Text>
          </Link>
          <Link to="/faq">
            <Text>F.A.Q</Text>
          </Link>
          <Link to="/reviews">
            <Text>{t('nav.reviews')}</Text>
          </Link>
        </LinkList>
      )}
    </DropdownMenu>
  );
};

export default FooterInfo;
