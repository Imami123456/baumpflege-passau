import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { Star, MessageSquareQuote, CheckCircle2, ShieldCheck } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="bewertungen" className="py-20 bg-timber-100/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5 text-forest-700" />
            <span>{t.reviews.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-timber-900 tracking-tight mb-4">
            {t.reviews.title}
          </h2>
          <p className="text-timber-600 text-base sm:text-lg mb-6">
            {t.reviews.subtitle}
          </p>

          {/* Rating Summary Pill */}
          <div className="inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-timber-200 shadow-sm">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-timber-800">
              {t.reviews.averageRating}
            </span>
            <span className="text-xs text-timber-400 hidden sm:inline">•</span>
            <span className="text-xs text-timber-500 hidden sm:inline">
              {t.reviews.basedOn}
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {t.reviews.items.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-timber-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Stars and Service Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-forest-50 text-forest-800 border border-forest-100">
                    {review.service}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-timber-700 text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Reviewer Profile */}
              <div className="pt-4 border-t border-timber-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-timber-900 flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-4 h-4 text-forest-600" />
                  </div>
                  <span className="text-xs text-timber-500 font-medium">
                    {review.location}
                  </span>
                </div>

                <span className="text-xs text-timber-400">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Endorsement */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-timber-500">
            <ShieldCheck className="w-4 h-4 text-forest-600" />
            <span>Alle Bewertungen stammen von echten Kunden aus dem Raum Passau & Niederbayern.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
