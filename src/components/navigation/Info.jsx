import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DropdownMenu, InfoText, InfoImg, InfoBtn, LinkList, Link } from './info.styled';
import Dropdown from 'images/arrowDown.svg';
import { useTranslation } from 'react-i18next';
import { bp } from 'styles/breakpoints';

const Info = ({ footer = false }) => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: bp.desktop });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu footer={footer}>
      {isDesktop && (
        <InfoBtn onClick={toggleDropdown}>
          <InfoText>{t('nav.information')}</InfoText>
          <InfoImg src={Dropdown} alt="dropdown"></InfoImg>
        </InfoBtn>
      )}
      {(isOpen || !isDesktop) && (
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
