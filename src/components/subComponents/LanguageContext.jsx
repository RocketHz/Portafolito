import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');
  const [languageData, setLanguageData] = useState({});

  useEffect(() => {
    fetchLanguageData();
  }, [language]);

  const fetchLanguageData = () => {
    const dataUrl = `../utils/${language}.json`;
    fetch(dataUrl)
      .then((response) => response.json())
      .then((data) => setLanguageData(data))
      .catch((error) => console.error('Error fetching language data:', error));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, languageData }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Define y exporta el hook useLanguage
export const useLanguage = () => useContext(LanguageContext);

export { LanguageContext, LanguageProvider };
