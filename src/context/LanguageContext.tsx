import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Content, Language } from '../types/content';
import enContent from '../content/en.json';
import esContent from '../content/es.json';
import caContent from '../content/ca.json';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: Content;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const contentMap: Record<Language, Content> = {
  en: enContent as Content,
  es: esContent as Content,
  ca: caContent as Content,
};

const detectBrowserLanguage = (): Language => {
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('es')) return 'es';
  if (browserLang.startsWith('ca')) return 'ca';
  return 'en';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang') as Language;
    if (urlLang && ['en', 'es', 'ca'].includes(urlLang)) {
      return urlLang;
    }
    const saved = localStorage.getItem('language') as Language;
    if (saved && ['en', 'es', 'ca'].includes(saved)) {
      return saved;
    }
    return detectBrowserLanguage();
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    const url = new URL(window.location.href);
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content: contentMap[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
