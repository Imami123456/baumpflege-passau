import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { passauDistricts, passauSurroundings } from '../i18n/translations';
import { MapPin, Navigation, Compass, CheckCircle2, PhoneCall } from 'lucide-react';

export const ServiceAreaPassau: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="einsatzgebiet" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5 text-forest-700" />
            <span>{t.coverage.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-timber-900 tracking-tight mb-4">
            {t.coverage.title}
          </h2>
          <p className="text-timber-600 text-base sm:text-lg">
            {t.coverage.subtitle}
          </p>
        </div>

        {/* 35km Radius Highlight Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-r from-forest-800 to-forest-900 rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6 border border-forest-700">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-forest-700/70 border border-forest-500/40 flex items-center justify-center shrink-0">
              <Navigation className="w-7 h-7 text-forest-200" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-black text-xl text-white tracking-tight">
                  {t.coverage.radiusTag}
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500 text-timber-950">
                  Niederbayern
                </span>
              </div>
              <p className="text-sm text-forest-200">
                {t.coverage.noTravelFee}
              </p>
            </div>
          </div>

          <a
            href="tel:+491708924110"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-forest-900 hover:bg-forest-50 font-bold text-sm shadow-md transition-transform hover:scale-105 whitespace-nowrap"
          >
            <PhoneCall className="w-4 h-4 text-forest-700" />
            <span>0170 892 4110</span>
          </a>
        </div>

        {/* Districts & Surroundings Columns */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Column 1: Passau City Districts */}
          <div className="bg-timber-50 rounded-2xl p-6 sm:p-7 border border-timber-200">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-timber-200">
              <MapPin className="w-5 h-5 text-forest-600" />
              <h3 className="text-lg font-bold text-timber-900">
                {t.coverage.districtsTitle}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {passauDistricts.map((district) => (
                <div
                  key={district.name}
                  className="bg-white p-3 rounded-xl border border-timber-200/80 flex items-center justify-between hover:border-forest-500/60 transition-colors shadow-sm"
                >
                  <span className="font-semibold text-xs sm:text-sm text-timber-800">
                    {district.name}
                  </span>
                  <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-timber-100 text-timber-600">
                    {district.zip}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Surrounding Towns */}
          <div className="bg-timber-50 rounded-2xl p-6 sm:p-7 border border-timber-200">
            <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-timber-200">
              <CheckCircle2 className="w-5 h-5 text-forest-600" />
              <h3 className="text-lg font-bold text-timber-900">
                {t.coverage.surroundingsTitle}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {passauSurroundings.map((town) => (
                <span
                  key={town}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-timber-200/80 text-xs sm:text-sm font-medium text-timber-800 hover:border-forest-400 transition-colors shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-500"></span>
                  {town}
                </span>
              ))}
            </div>

            <p className="text-xs text-timber-500 mt-6 italic">
              {t.coverage.callToBook}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
