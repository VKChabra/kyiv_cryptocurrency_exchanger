import { useState } from 'react';
import { Text } from './nav.styled';
import { DropdownMenu, InfoText, InfoImg, InfoBtn, LinkList, Link } from './info.styled';
import Dropdown from 'images/arrowDown.svg';
import { useTranslation } from 'react-i18next';
import '../../layouts/i18n/i18next';

const Info = () => {
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
          <Link to="/partnership">
            <Text>{t('nav.partnership')}</Text>
          </Link>
          <Link to="/reviews">
            <Text>{t('nav.reviews')}</Text>
          </Link>
          <Link to="/faq">
            <Text>FAQ</Text>
          </Link>
          <Link to="#contacts">
            <Text>{t('nav.contacts')}</Text>
          </Link>
        </LinkList>
      )}
    </DropdownMenu>
  );
};

export default Info;
