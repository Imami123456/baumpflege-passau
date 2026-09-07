import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { Check, ArrowUpRight, TreePine, Wrench } from 'lucide-react';

export const ServicesGrid: React.FC = () => {
  const { t } = useLanguage();

  const handleSelectService = () => {
    const el = document.querySelector('#rechner');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="leistungen" className="py-20 bg-timber-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <TreePine className="w-3.5 h-3.5 text-forest-700" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-timber-900 tracking-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-timber-600 text-base sm:text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-timber-200/90 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Container with Zoom on Hover */}
              <div className="relative h-56 w-full overflow-hidden bg-timber-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-timber-950/80 via-transparent to-black/20" />
                
                {/* Category Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold shadow-sm ${
                    service.id === 'sturm'
                      ? 'bg-amber-500 text-white animate-pulse'
                      : 'bg-forest-800/90 text-forest-100 border border-forest-600/40 backdrop-blur-sm'
                  }`}>
                    {service.tag}
                  </span>
                </div>

                {/* Subtitle pill */}
                <div className="absolute bottom-3 left-3 right-3 text-xs text-timber-200 font-medium truncate">
                  {service.subtitle}
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-timber-900 mb-2.5 group-hover:text-forest-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-timber-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Perks Checklist */}
                <div>
                  <div className="text-xs font-bold text-timber-800 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <Wrench className="w-3.5 h-3.5 text-forest-600" />
                    <span>{t.services.perkTitle}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.perks.map((perk, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-timber-700">
                        <span className="w-4 h-4 rounded-full bg-forest-100 text-forest-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Bottom Action */}
                  <button
                    onClick={handleSelectService}
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-forest-50 hover:bg-forest-600 text-forest-800 hover:text-white font-semibold text-xs transition-all duration-200 border border-forest-200 hover:border-forest-600 group/btn"
                  >
                    <span>{t.services.ctaCard}</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
