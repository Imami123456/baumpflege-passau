import React, { useEffect } from 'react';
import { useLanguage } from '../context/useLanguage';
import { X, ShieldAlert, FileText } from 'lucide-react';

interface LegalModalsProps {
  activeModal: 'impressum' | 'datenschutz' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  const { t } = useLanguage();

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Modal Container */}
      <div
        className="bg-white w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-timber-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 border-b border-timber-200 flex items-center justify-between bg-timber-50">
          <div className="flex items-center gap-2.5 text-forest-800 font-bold text-lg">
            {activeModal === 'impressum' ? (
              <FileText className="w-5 h-5 text-forest-600" />
            ) : (
              <ShieldAlert className="w-5 h-5 text-forest-600" />
            )}
            <span>
              {activeModal === 'impressum'
                ? t.legal.impressumTitle
                : t.legal.datenschutzTitle}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-timber-500 hover:text-timber-800 hover:bg-timber-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-timber-700 leading-relaxed">
          
          {/* IMPRESSUM CONTENT */}
          {activeModal === 'impressum' && (
            <div className="space-y-4">
              <section>
                <h4 className="font-bold text-base text-timber-900 mb-1">
                  Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
                </h4>
                <p>
                  <strong>Bayerwald Baumpflege & Gartenservice Passau</strong><br />
                  Inhaber: Markus Huber (Forstwirt & SKT-Baumpfleger)<br />
                  Innstraße 42<br />
                  94032 Passau<br />
                  Deutschland
                </p>
              </section>

              <section>
                <h4 className="font-bold text-base text-timber-900 mb-1">
                  Kontakt
                </h4>
                <p>
                  Telefon: 0170 892 4110<br />
                  E-Mail: info@baumpflege-passau.de<br />
                  Website: https://www.baumpflege-passau.de
                </p>
              </section>

              <section>
                <h4 className="font-bold text-base text-timber-900 mb-1">
                  Umsatzsteuer-ID
                </h4>
                <p>
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE 349 812 754 (Finanzamt Passau)
                </p>
              </section>

              <section>
                <h4 className="font-bold text-base text-timber-900 mb-1">
                  Betriebshaftpflichtversicherung
                </h4>
                <p>
                  Versicherer: Bayerische Landesbrandversicherung AG / Versicherungskammer Bayern<br />
                  Maximilianstraße 53, 80530 München<br />
                  Deckungssumme: 5.000.000 EUR pauschal für Personen- und Sachschäden<br />
                  Geltungsbereich: Bundesrepublik Deutschland & grenznahes Österreich
                </p>
              </section>

              <section>
                <h4 className="font-bold text-base text-timber-900 mb-1">
                  Verbraucherstreitbeilegung / Universalschlichtungsstelle
                </h4>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen. Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr.
                </p>
              </section>

              <section>
                <h4 className="font-bold text-base text-timber-900 mb-1">
                  Haftung für Inhalte und Links
                </h4>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den
                  allgemeinen Gesetzen verantwortlich. Für externe Links übernehmen wir keine Haftung, da auf deren
                  Inhalte kein Einfluss besteht.
                </p>
              </section>
            </div>
          )}

          {/* DATENSCHUTZ CONTENT */}
          {activeModal === 'datenschutz' && (
            <div className="space-y-4">
              <section>
                <h4 className="font-bold text-base text-timber-900 mb-1">
                  1. Datenschutz auf einen Blick
                </h4>
                <p>
                  Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer persönlichen Daten ist uns ein
                  wichtiges Anliegen. Nachfolgend informieren wir Sie über den Umgang mit Ihren Daten gemäß Art. 13 DSGVO.
                </p>
              </section>

              <section>
                <h4 className="font-bold text-base text-timber-900 mb-1">
                  2. Verantwortliche Stelle
                </h4>
                <p>
                  Bayerwald Baumpflege & Gartenservice Passau<br />
                  Innstraße 42, 94032 Passau<br />
                  E-Mail: datenschutz@baumpflege-passau.de<br />
                  Telefon: 0170 892 4110
                </p>
              </section>

              <section>
                <h4 className="font-bold text-base text-timber-900 mb-1">
                  3. Datenerfassung über unseren Kostenrechner & Kontaktformular
                </h4>
                <p>
                  Wenn Sie unseren Online-Kostenrechner nutzen, werden Ihre freiwillig eingegebenen Daten (Name,
                  Telefonnummer, PLZ / Ort, Arbeitsumfang und optionale Fotos) verarbeitet, um ein konkretes
                  Preisangebot zu kalkulieren und mit Ihnen in Kontakt zu treten (Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO –
                  vorvertragliche Maßnahmen).
                </p>
              </section>

              <section>
                <h4 className="font-bold text-base text-timber-900 mb-1">
                  4. Kontaktaufnahme via WhatsApp
                </h4>
                <p>
                  Sofern Sie die Schaltfläche "Per WhatsApp anfragen" wählen, wird eine verschlüsselte Nachricht an
                  unsere Mobilfunknummer über die Plattform WhatsApp (WhatsApp Ireland Limited) initiiert. Es gelten die
                  Datenschutzrichtlinien von WhatsApp.
                </p>
              </section>

              <section>
                <h4 className="font-bold text-base text-timber-900 mb-1">
                  5. Lokale Speicherung (LocalStorage)
                </h4>
                <p>
                  Unsere Website speichert Ihre gewählte Spracheinstellung (Deutsch/Englisch) in Ihrem lokalen Browserspeicher
                  (LocalStorage). Hierbei werden keine personenbezogenen Tracking-Profile erstellt.
                </p>
              </section>

              <section>
                <h4 className="font-bold text-base text-timber-900 mb-1">
                  6. Ihre Rechte (Auskunft, Berichtigung, Löschung)
                </h4>
                <p>
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten,
                  deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung,
                  Sperrung oder Löschung dieser Daten.
                </p>
              </section>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-timber-200 bg-timber-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-forest-700 hover:bg-forest-600 text-white font-semibold text-xs transition-colors"
          >
            {t.legal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
