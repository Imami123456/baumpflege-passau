import React, { useState } from 'react';
import { useLanguage } from '../context/useLanguage';
import { HelpCircle, ChevronDown, MessageCircle, PhoneCall } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const { t, language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 bg-timber-50 relative border-t border-timber-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-forest-700" />
            <span>{t.faq.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-timber-900 tracking-tight mb-4">
            {t.faq.title}
          </h2>
          <p className="text-timber-600 text-base sm:text-lg">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-forest-400 shadow-md ring-1 ring-forest-400/30'
                    : 'bg-white border-timber-200 hover:border-timber-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-forest-400 rounded-2xl"
                >
                  <span className="font-bold text-base sm:text-lg text-timber-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-forest-100 text-forest-700 rotate-180'
                        : 'bg-timber-100 text-timber-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-timber-600 text-sm sm:text-base leading-relaxed border-t border-timber-100 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Direct Contact Callout */}
        <div className="mt-12 bg-forest-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg border border-forest-700">
          <div>
            <h3 className="text-lg font-bold text-white mb-1">
              {language === 'de' ? 'Haben Sie eine spezielle Frage zu Ihrem Baum?' : 'Have a specific question about your tree?'}
            </h3>
            <p className="text-xs sm:text-sm text-timber-300">
              {language === 'de'
                ? 'Wir beraten Sie kostenlos und unverbindlich direkt am Telefon oder via WhatsApp.'
                : 'We advise you free of charge and without obligation directly via phone or WhatsApp.'}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+491708924110"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-forest-900 hover:bg-forest-50 font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              <PhoneCall className="w-4 h-4 text-forest-700" />
              <span>0170 892 4110</span>
            </a>
            <a
              href="https://wa.me/491708924110?text=Hallo,%20ich%20habe%20eine%20Frage%20zu%20Baumarbeiten%20in%20Passau."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
