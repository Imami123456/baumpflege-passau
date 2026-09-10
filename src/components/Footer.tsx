import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { TreePine, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (type: 'impressum' | 'datenschutz') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const { t } = useLanguage();

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-timber-950 text-timber-400 pt-16 pb-12 border-t border-forest-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-timber-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-forest-700 flex items-center justify-center text-forest-100 shadow-md">
                <TreePine className="w-6 h-6 text-forest-200" />
              </div>
              <div>
                <span className="text-white font-extrabold text-base tracking-tight block">
                  BAYERWALD <span className="text-forest-400">BAUMPFLEGE</span>
                </span>
                <span className="text-xs text-timber-400 uppercase tracking-wider font-semibold">
                  Gartenservice Passau
                </span>
              </div>
            </div>

            <p className="text-sm text-timber-400 leading-relaxed mb-6 max-w-sm">
              {t.footer.brandBio}
            </p>

            <div className="flex items-center gap-2 text-xs text-forest-300 font-semibold bg-forest-950/80 border border-forest-800/80 px-3.5 py-2 rounded-xl inline-flex">
              <ShieldCheck className="w-4 h-4 text-forest-400" />
              <span>Betriebshaftpflichtversichert bis 5.000.000 €</span>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNavClick('#leistungen')}
                  className="hover:text-forest-300 transition-colors"
                >
                  {t.nav.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#rechner')}
                  className="hover:text-forest-300 transition-colors"
                >
                  {t.nav.calculator}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#vorher-nachher')}
                  className="hover:text-forest-300 transition-colors"
                >
                  {t.nav.beforeAfter}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#einsatzgebiet')}
                  className="hover:text-forest-300 transition-colors"
                >
                  {t.nav.area}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#bewertungen')}
                  className="hover:text-forest-300 transition-colors"
                >
                  {t.nav.reviews}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('#faq')}
                  className="hover:text-forest-300 transition-colors"
                >
                  {t.nav.faq}
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Contact Col */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.nav.contact}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                <a href="tel:+491708924110" className="hover:text-white transition-colors">
                  0170 892 4110
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                <a href="mailto:info@baumpflege-passau.de" className="hover:text-white transition-colors">
                  info@baumpflege-passau.de
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-forest-400 shrink-0 mt-0.5" />
                <span>Innstraße 42, 94032 Passau</span>
              </li>
            </ul>
          </div>

          {/* Legal Compliance Col */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.legalTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onOpenLegal('impressum')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.footer.impressum}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal('datenschutz')}
                  className="hover:text-white transition-colors text-left"
                >
                  {t.footer.datenschutz}
                </button>
              </li>
              <li className="pt-2">
                <span className="inline-block text-[11px] px-2 py-1 rounded bg-timber-800 text-timber-300">
                  USt-IdNr: DE 349 812 754
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-timber-400">
          <div>
            © {new Date().getFullYear()} Bayerwald Baumpflege & Gartenservice Passau. {t.footer.rights}
          </div>
          <div className="flex items-center gap-1">
            <span>Hergestellt mit handwerklicher Sorgfalt für Passau & Umgebung</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
