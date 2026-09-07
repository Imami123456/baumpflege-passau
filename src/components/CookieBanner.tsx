import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/useLanguage';
import { ShieldCheck, Check } from 'lucide-react';

interface CookieBannerProps {
  onOpenPrivacy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenPrivacy }) => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('baumpflege_passau_cookie_consent');
    if (!consent) {
      // Delay display slightly for smooth page load
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('baumpflege_passau_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-timber-900/95 border border-timber-700 text-white p-4 rounded-2xl shadow-2xl backdrop-blur-md animate-fadeIn">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-forest-800 text-forest-200 shrink-0">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-sm text-white mb-1">
            {language === 'de' ? 'Privatsphäre & Funktionalität' : 'Privacy & Site Experience'}
          </h4>
          <p className="text-xs text-timber-300 leading-relaxed mb-3">
            {language === 'de'
              ? 'Wir nutzen lokalen Browserspeicher für Ihre Spracheinstellungen und den Kostenrechner. Keine Tracking-Cookies von Drittanbietern.'
              : 'We use local browser storage to persist language preferences and calculator calculations. No third-party tracking.'}
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handleAccept}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-forest-600 hover:bg-forest-500 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <Check className="w-3.5 h-3.5" />
              <span>{language === 'de' ? 'Einverstanden' : 'Accept'}</span>
            </button>
            <button
              onClick={onOpenPrivacy}
              className="text-xs text-timber-400 hover:text-white underline underline-offset-2 transition-colors"
            >
              {language === 'de' ? 'Datenschutzerklärung' : 'Privacy Policy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
