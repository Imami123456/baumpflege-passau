import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { Shield, Award, Sparkles, CheckCircle2, Trees, HardHat } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-timber-900 text-white relative overflow-hidden">
      {/* Subtle texture background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2D6A4F_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Philosophy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 text-forest-200 border border-forest-600/40 text-xs font-bold uppercase tracking-wider mb-4">
              <HardHat className="w-3.5 h-3.5 text-forest-300" />
              <span>{t.about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {t.about.title}
            </h2>

            <p className="text-timber-300 text-base leading-relaxed mb-4">
              {t.about.description1}
            </p>

            <p className="text-timber-300 text-base leading-relaxed mb-8">
              {t.about.description2}
            </p>

            {/* Safety Pledge Card */}
            <div className="bg-forest-950/80 border border-forest-600/50 rounded-2xl p-5 mb-8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-forest-700/80 flex items-center justify-center shrink-0 text-forest-200">
                <Shield className="w-5 h-5 text-forest-300" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base mb-1">
                  {t.about.safetyFirstTitle}
                </h3>
                <p className="text-xs sm:text-sm text-timber-300 leading-relaxed">
                  {t.about.safetyFirstDesc}
                </p>
              </div>
            </div>

            {/* Badges row */}
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-timber-800 text-timber-200 text-xs font-semibold border border-timber-700">
                <CheckCircle2 className="w-4 h-4 text-forest-400" />
                SKT-A & SKT-B Zertifiziert
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-timber-800 text-timber-200 text-xs font-semibold border border-timber-700">
                <CheckCircle2 className="w-4 h-4 text-forest-400" />
                ZTV-Baumpflege konform
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-timber-800 text-timber-200 text-xs font-semibold border border-timber-700">
                <CheckCircle2 className="w-4 h-4 text-forest-400" />
                Umweltgerechte Verwertung
              </span>
            </div>
          </div>

          {/* Right Statistics & Visual Showcase */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Top Stat Card */}
            <div className="bg-gradient-to-br from-forest-800 to-forest-900 border border-forest-600/50 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  {t.about.stat1Number}
                </span>
                <Trees className="w-8 h-8 text-forest-300 opacity-80" />
              </div>
              <p className="text-sm font-medium text-forest-100">
                {t.about.stat1Label}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Stat 2 */}
              <div className="bg-timber-800/80 border border-timber-700 rounded-2xl p-5 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-3xl font-black text-forest-400">
                    {t.about.stat2Number}
                  </span>
                  <Sparkles className="w-5 h-5 text-forest-400" />
                </div>
                <p className="text-xs font-medium text-timber-300">
                  {t.about.stat2Label}
                </p>
              </div>

              {/* Stat 3 */}
              <div className="bg-timber-800/80 border border-timber-700 rounded-2xl p-5 shadow-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-3xl font-black text-amber-400">
                    {t.about.stat3Number}
                  </span>
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <p className="text-xs font-medium text-timber-300">
                  {t.about.stat3Label}
                </p>
              </div>
            </div>

            {/* Forestry Gear Image Preview */}
            <div className="rounded-2xl overflow-hidden border border-timber-700 relative h-48">
              <img
                src="https://images.unsplash.com/photo-1516214104703-d870798883c5?auto=format&fit=crop&w=800&q=80"
                alt="Motorsägenarbeiten und Präzisionsfällung"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-timber-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-xs font-semibold text-timber-200">
                Präzisions-Kettensägen & professionelle Rigging-Bremsgeräte
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
