import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, Translation, translations } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
  showModal: boolean;
  closeModal: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('pl');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('ks_contractor_lang') as Language;
    if (savedLang) {
      setLanguageState(savedLang);
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('ks_contractor_lang', lang);
    setShowModal(false);
  };

  const closeModal = () => setShowModal(false);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, showModal, closeModal }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
