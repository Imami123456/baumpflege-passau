import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/useLanguage';
import { Phone, TreePine, Menu, X, ShieldCheck, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#leistungen', label: t.nav.services },
    { href: '#rechner', label: t.nav.calculator },
    { href: '#vorher-nachher', label: t.nav.beforeAfter },
    { href: '#einsatzgebiet', label: t.nav.area },
    { href: '#bewertungen', label: t.nav.reviews },
    { href: '#faq', label: t.nav.faq },
    { href: '#kontakt', label: t.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-timber-900/95 backdrop-blur-md shadow-lg border-b border-forest-800/40 py-2.5'
          : 'bg-timber-900/85 backdrop-blur-sm border-b border-white/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-forest-400 rounded-lg p-1"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center text-forest-100 shadow-md border border-forest-500/30 group-hover:scale-105 transition-transform">
              <TreePine className="w-6 h-6 text-forest-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-base sm:text-lg tracking-tight leading-tight flex items-center gap-1.5">
                BAYERWALD <span className="text-forest-400 font-extrabold">BAUMPFLEGE</span>
              </span>
              <span className="text-xs text-timber-300 font-medium tracking-wider uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-400"></span>
                Gartenservice Passau
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-timber-200 hover:text-white font-medium text-sm transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-400 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-timber-800/80 rounded-lg p-1 border border-timber-700">
              <button
                onClick={() => setLanguage('de')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                  language === 'de'
                    ? 'bg-forest-700 text-white shadow-sm'
                    : 'text-timber-300 hover:text-white'
                }`}
                title="Deutsch"
              >
                <span>🇩🇪</span> DE
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all flex items-center gap-1.5 ${
                  language === 'en'
                    ? 'bg-forest-700 text-white shadow-sm'
                    : 'text-timber-300 hover:text-white'
                }`}
                title="English"
              >
                <span>🇬🇧</span> EN
              </button>
            </div>

            {/* Direct Phone Call Button */}
            <a
              href="tel:+491708924110"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-timber-800 hover:bg-timber-700 text-white border border-timber-600/50 text-sm font-semibold transition-all hover:border-forest-500/50"
            >
              <Phone className="w-4 h-4 text-forest-400" />
              <span className="hidden xl:inline">{t.nav.emergencyCall}</span>
              <span className="xl:hidden">Anrufen</span>
            </a>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('#rechner')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-forest-600 hover:bg-forest-500 text-white text-sm font-semibold shadow-forest-glow transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.nav.getQuote}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Actions: Language & Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            {/* Mini Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'de' ? 'en' : 'de')}
              className="px-2 py-1.5 rounded-md bg-timber-800 text-white text-xs font-semibold border border-timber-700 flex items-center gap-1"
            >
              <span>{language === 'de' ? '🇩🇪 DE' : '🇬🇧 EN'}</span>
            </button>

            {/* Mobile Call Icon */}
            <a
              href="tel:+491708924110"
              aria-label="Call emergency hotline"
              className="p-2 rounded-md bg-forest-700 text-white border border-forest-600"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-timber-200 hover:text-white hover:bg-timber-800 focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-timber-900 border-b border-timber-700 px-4 pt-3 pb-6 animate-fadeIn">
          <div className="space-y-1.5 pb-4 border-b border-timber-800">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-3 py-2.5 rounded-lg text-timber-100 hover:bg-timber-800 font-medium text-base transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-timber-400" />
              </button>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => handleNavClick('#rechner')}
              className="w-full py-3 rounded-lg bg-forest-600 hover:bg-forest-500 text-white text-center font-semibold shadow-md flex items-center justify-center gap-2"
            >
              <span>{t.nav.getQuote}</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href="tel:+491708924110"
              className="w-full py-2.5 rounded-lg bg-timber-800 hover:bg-timber-700 text-white text-center font-medium border border-timber-700 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-forest-400" />
              <span>{t.nav.emergencyCall}</span>
            </a>

            <div className="flex items-center justify-center gap-2 text-xs text-timber-400 pt-1">
              <ShieldCheck className="w-4 h-4 text-forest-400" />
              <span>Betriebshaftpflicht bis 5 Mio. €</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
