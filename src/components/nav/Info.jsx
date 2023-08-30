import { useState } from 'react';
import { Text } from './nav.styled';
import { DropdownMenu, InfoText, InfoImg, InfoBtn, LinkList, Link } from './info.styled';
import Dropdown from 'images/arrowDown.svg';

const Info = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu>
      <InfoBtn onClick={toggleDropdown}>
        <InfoText>Інформація</InfoText>
        <InfoImg src={Dropdown} alt="dropdown"></InfoImg>
      </InfoBtn>
      {isOpen && (
        <LinkList>
          <Link to="/partnership">
            {' '}
            <Text>Партнерська програма</Text>
          </Link>
          <Link to="/reviews">
            {' '}
            <Text>Відгуки</Text>{' '}
          </Link>
          <Link to="/faq">
            {' '}
            <Text>Часті запитання</Text>{' '}
          </Link>
          <Link to="#contacts">
            {' '}
            <Text>Контакти</Text>{' '}
          </Link>
        </LinkList>
      )}
    </DropdownMenu>
  );
};

export default Info;
