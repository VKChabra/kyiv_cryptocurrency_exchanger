import { useState } from 'react';
import { DropdownMenu, InfoText, InfoImg, InfoBtn, LinkList, Link } from './info.styled';
import Dropdown from 'images/arrowDown.svg';
import { useTranslation } from 'react-i18next';

const Info = ({ footer = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu footer={footer}>
      <InfoBtn onClick={toggleDropdown}>
        <InfoText>{t('nav.information')}</InfoText>
        <InfoImg src={Dropdown} alt="dropdown"></InfoImg>
      </InfoBtn>
      {isOpen && (
        <LinkList>
          <Link to="/partnership">
            <span>{t('nav.partnership')}</span>
          </Link>
          <Link to="/reviews">
            <span>{t('nav.reviews')}</span>
          </Link>
          <Link to="/faq">
            <span>FAQ</span>
          </Link>
        </LinkList>
      )}
    </DropdownMenu>
  );
};

export default Info;
