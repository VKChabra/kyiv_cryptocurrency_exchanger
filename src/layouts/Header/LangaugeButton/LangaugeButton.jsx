import { useState } from 'react';
import cookies from 'js-cookie';
import i18next from 'i18next';

const LanguageFlags = () => {
  const [language, setLanguage] = useState(cookies.get('i18next') || 'en');

  const languages = [
    {
      code: 'en',
      country_code: 'gb',
      name: 'Eng',
    },
    {
      code: 'ru',
      country_code: 'ru',
      name: 'Ru',
    },
    {
      code: 'ua',
      country_code: 'ua',
      name: 'Ukr',
    },
  ];

  const handleLanguageChange = event => {
    const selectedLanguageCode = event.target.value;
    i18next.changeLanguage(selectedLanguageCode);
    cookies.set('i18next', selectedLanguageCode);
    setLanguage(selectedLanguageCode);
  };

  return (
    <div className="flags">
      <select value={language} onChange={handleLanguageChange} className="language-select">
        {languages.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageFlags;
