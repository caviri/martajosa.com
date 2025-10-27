import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types/content';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'ca', label: 'CA' },
  ];

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
      <Globe className="w-4 h-4 text-green-700" />
      <div className="flex gap-1">
        {languages.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => setLanguage(code)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
              language === code
                ? 'bg-green-700 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            aria-label={`Switch to ${label}`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
