import { createContext } from 'react';
import type { Language, TranslationDictionary } from '../i18n/translations';

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
