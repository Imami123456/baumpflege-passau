import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { ShieldCheck, Calculator, PhoneCall, CheckCircle2, Award, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToCalculator = () => {
    const el = document.querySelector('#rechner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-timber-950 text-white">
      {/* High-Impact Arborism Background Image with Clean Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=85"
          alt="Professioneller Baumkletterer bei der Baumpflege in Passau"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-none"
        />
        {/* Layered Gradient Overlays for Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-timber-950/95 via-timber-950/80 to-timber-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-timber-950 via-transparent to-timber-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28 w-full">
        <div className="max-w-3xl">
          
          {/* Top Passau Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-forest-500/40 text-forest-200 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md shadow-sm">
            <MapPin className="w-4 h-4 text-forest-400" />
            <span>Passau (Dreiflüssestadt) & 35 km Umkreis</span>
            <span className="w-1.5 h-1.5 rounded-full bg-forest-400"></span>
            <span className="text-amber-300 font-bold">{t.hero.badgeEmergency}</span>
          </div>

          {/* Catchy Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-6">
            {t.hero.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-300 via-forest-400 to-forest-200 underline decoration-forest-500/50 decoration-wavy decoration-2">
              {t.hero.highlight}
            </span>
          </h1>

          {/* Descriptive Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-timber-200 mb-8 leading-relaxed max-w-2xl font-normal">
            {t.hero.subtitle}
          </p>

          {/* Trust Badges - User Requirement */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 pb-2">
            <div className="flex items-center gap-2.5 bg-timber-900/70 backdrop-blur-md border border-white/10 px-3.5 py-2.5 rounded-xl shadow-sm">
              <ShieldCheck className="w-5 h-5 text-forest-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-timber-100">
                {t.hero.trust1}
              </span>
            </div>

            <div className="flex items-center gap-2.5 bg-timber-900/70 backdrop-blur-md border border-white/10 px-3.5 py-2.5 rounded-xl shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-forest-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-timber-100">
                {t.hero.trust2}
              </span>
            </div>

            <div className="flex items-center gap-2.5 bg-timber-900/70 backdrop-blur-md border border-white/10 px-3.5 py-2.5 rounded-xl shadow-sm">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-timber-100">
                {t.hero.trust3}
              </span>
            </div>
          </div>

          {/* Two Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={scrollToCalculator}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-forest-600 hover:bg-forest-500 text-white font-bold text-base shadow-forest-glow transition-all hover:scale-[1.02] active:scale-[0.98] border border-forest-400/30"
            >
              <Calculator className="w-5 h-5 text-forest-200" />
              <span>{t.hero.ctaCalculate}</span>
            </button>

            <a
              href="tel:+491708924110"
              className="inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-timber-900/90 hover:bg-timber-800 text-white font-bold text-base border border-timber-600/80 transition-all hover:border-forest-400 hover:scale-[1.02] active:scale-[0.98]"
            >
              <PhoneCall className="w-5 h-5 text-forest-400" />
              <span>{t.hero.ctaCall}</span>
            </a>
          </div>

          {/* Micro-credential footer */}
          <div className="mt-8 flex items-center gap-3 text-xs text-timber-300">
            <span className="flex h-2.5 w-2.5 rounded-full bg-forest-400"></span>
            <span className="font-semibold text-timber-100">{t.hero.experienceBadge}</span>
            <span>–</span>
            <span>{t.hero.experienceText}</span>
          </div>

        </div>
      </div>

      {/* Subtle bottom curve separator */}
      <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-timber-50 to-transparent pointer-events-none"></div>
    </section>
  );
};
