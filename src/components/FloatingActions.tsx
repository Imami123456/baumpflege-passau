import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

export const FloatingActions: React.FC = () => {
  const { language } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prefilledMessage =
    language === 'de'
      ? 'Hallo, ich brauche ein Angebot für Baumarbeiten in Passau/Umgebung.'
      : 'Hello, I need an estimate for tree care services in Passau/surrounding area.';

  const whatsappUrl = `https://wa.me/491708924110?text=${encodeURIComponent(prefilledMessage)}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Scroll to top button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label={language === 'de' ? 'Nach oben scrollen' : 'Scroll back to top'}
          className="w-10 h-10 rounded-full bg-timber-800/80 hover:bg-timber-800 text-white shadow-md flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 active:scale-95 border border-timber-700"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Instant Phone Call FAB (Mobile focused) */}
      <a
        href="tel:+491708924110"
        aria-label={language === 'de' ? 'Notfall-Hotline anrufen' : 'Call emergency hotline'}
        className="flex sm:hidden w-13 h-13 p-3.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white shadow-xl items-center justify-center transition-all hover:scale-110 active:scale-95 border-2 border-white"
      >
        <Phone className="w-6 h-6 animate-pulse" />
      </a>

      {/* Instant WhatsApp FAB */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={language === 'de' ? 'WhatsApp Nachricht senden' : 'Send WhatsApp message'}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-green-600 hover:bg-green-500 text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs sm:text-sm font-bold tracking-tight">
          {language === 'de' ? 'WhatsApp Chat' : 'Chat on WhatsApp'}
        </span>
      </a>
    </div>
  );
};
