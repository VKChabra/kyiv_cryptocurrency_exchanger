import { useState } from 'react';
import cookies from 'js-cookie';
import i18next from 'i18next';
import { Language, LanguageChosen, LanguageWrapper } from './language.styled';

const LanguageButton = () => {
  const [language, setLanguage] = useState(cookies.get('i18next') || 'en');

  const languages = [
    {
      code: 'en',
      country_code: 'gb',
      name: 'EN',
    },
    {
      code: 'ru',
      country_code: 'ru',
      name: 'RU',
    },
    {
      code: 'ua',
      country_code: 'ua',
      name: 'UA',
    },
  ];

  const handleLanguageChange = event => {
    const selectedLanguageCode = event.target.value;
    i18next.changeLanguage(selectedLanguageCode);
    cookies.set('i18next', selectedLanguageCode);
    setLanguage(selectedLanguageCode);
  };

  return (
    <LanguageWrapper>
      <Language alt="language" />
      <LanguageChosen value={language} onChange={handleLanguageChange} className="language-select">
        {languages.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </LanguageChosen>
    </LanguageWrapper>
  );
};

export default LanguageButton;
