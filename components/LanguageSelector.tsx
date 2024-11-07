'use client'

import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;

    i18n.changeLanguage(selectedLanguage);
  };
  
  return (
    <select onChange={changeLanguage} 
            value={i18n.language}
            className="font-extrabold bg-transparent text-gray-900 dark:text-gray-100 sm:block border-none"
    >
      <option value="en">ENG</option>
      <option value="ko">KOR</option>
      <option value="ja">JAP</option>
    </select>
  );
};

export default LanguageSelector;
