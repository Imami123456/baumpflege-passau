import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { AlertTriangle, PhoneCall, Zap } from 'lucide-react';

export const EmergencyBanner: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 text-white shadow-md relative overflow-hidden">
      {/* Subtle diagonal background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          
          {/* Alert Message */}
          <div className="flex items-center gap-3">
            {/* Flashing Amber Pulse Dot */}
            <span className="relative flex h-4 w-4 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-amber-300 border-2 border-amber-800"></span>
            </span>

            <div className="flex flex-wrap items-center gap-2 justify-center md:justify-start">
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-xs font-black uppercase tracking-wider bg-black/30 text-amber-100 border border-amber-400/40">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
                {t.emergency.badge}
              </span>
              <span className="font-bold text-sm sm:text-base text-white">
                {t.emergency.title}
              </span>
              <span className="hidden lg:inline text-amber-100 text-sm">
                – {t.emergency.subtitle}
              </span>
            </div>
          </div>

          {/* Quick Hotline Action */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-amber-100 font-medium bg-amber-900/40 px-2.5 py-1 rounded-full border border-amber-500/30">
              <Zap className="w-3.5 h-3.5 text-amber-300" />
              {t.emergency.available247}
            </span>
            <a
              href="tel:+491708924110"
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-amber-900 hover:bg-amber-50 font-bold text-xs sm:text-sm shadow-sm transition-all hover:scale-105 active:scale-100 whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-700 animate-bounce" />
              <span>0170 892 4110</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
