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
            className="bg-transparent text-gray-900 dark:text-gray-100 sm:block"
    >
      <option value="en">English</option>
      <option value="ko">한국어</option>
      <option value="ja">日本語</option>
    </select>
  );
};

export default LanguageSelector;
