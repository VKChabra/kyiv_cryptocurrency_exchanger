import { useState } from 'react';
import {
  LangBox,
  Language,
  Text,
  DropdownLanguage,
  LanguageList,
  LanguageChosen,
  LanguageWrapper,
  DropdownWrapper,
} from './language.styled';
import LanguageIcon from 'images/nav/language.svg';
import Dropdown from 'images/arrowDown.svg';

const LanguageBtn = ({ language = 'UA' }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LanguageWrapper>
      <LangBox onClick={toggleDropdown}>
        <Language src={LanguageIcon} alt="language" />
        <Text>{language}</Text>
        <DropdownLanguage src={Dropdown} />
        {isOpen && (
          <DropdownWrapper>
            <LanguageList>
              <LanguageChosen>UA</LanguageChosen>
              <LanguageChosen>RU</LanguageChosen>
              <LanguageChosen>EN</LanguageChosen>
            </LanguageList>
          </DropdownWrapper>
        )}
      </LangBox>
    </LanguageWrapper>
  );
};

export default LanguageBtn;
