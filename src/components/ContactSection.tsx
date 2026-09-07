import React from 'react';
import { useLanguage } from '../context/useLanguage';
import { Phone, MessageCircle, Mail, MapPin, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="kontakt" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Phone className="w-3.5 h-3.5 text-forest-700" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-timber-900 tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-timber-600 text-base sm:text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 4 Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Card 1: Phone */}
          <a
            href="tel:+491708924110"
            className="group bg-timber-50 hover:bg-forest-800 rounded-2xl p-6 border border-timber-200 hover:border-forest-700 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-700 group-hover:bg-forest-700 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-timber-900 group-hover:text-white mb-1 transition-colors">
                {t.contact.phoneCardTitle}
              </h3>
              <p className="text-xs text-timber-500 group-hover:text-forest-200 transition-colors mb-4">
                {t.contact.phoneCardSub}
              </p>
            </div>
            <div className="text-sm font-black text-forest-700 group-hover:text-forest-300 flex items-center justify-between">
              <span>0170 892 4110</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 2: WhatsApp */}
          <a
            href="https://wa.me/491708924110?text=Hallo,%20ich%20brauche%20ein%20Angebot%20f%C3%BCr%20Baumarbeiten%20in%20Passau/Umgebung."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-timber-50 hover:bg-green-700 rounded-2xl p-6 border border-timber-200 hover:border-green-600 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 group-hover:bg-green-600 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-timber-900 group-hover:text-white mb-1 transition-colors">
                {t.contact.whatsappCardTitle}
              </h3>
              <p className="text-xs text-timber-500 group-hover:text-green-100 transition-colors mb-4">
                {t.contact.whatsappCardSub}
              </p>
            </div>
            <div className="text-sm font-black text-green-700 group-hover:text-green-200 flex items-center justify-between">
              <span>WhatsApp Chat</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 3: Email */}
          <a
            href="mailto:info@baumpflege-passau.de?subject=Anfrage%20Baumarbeiten%20Passau"
            className="group bg-timber-50 hover:bg-timber-800 rounded-2xl p-6 border border-timber-200 hover:border-timber-700 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-timber-200 text-timber-700 group-hover:bg-timber-700 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-timber-900 group-hover:text-white mb-1 transition-colors">
                {t.contact.emailCardTitle}
              </h3>
              <p className="text-xs text-timber-500 group-hover:text-timber-300 transition-colors mb-4">
                {t.contact.emailCardSub}
              </p>
            </div>
            <div className="text-xs font-bold text-timber-800 group-hover:text-white flex items-center justify-between truncate">
              <span>info@baumpflege-passau.de</span>
              <ArrowRight className="w-4 h-4 shrink-0 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Card 4: Location */}
          <div className="bg-timber-50 rounded-2xl p-6 border border-timber-200 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-forest-100 text-forest-700 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-timber-900 mb-1">
                {t.contact.addressCardTitle}
              </h3>
              <p className="text-xs text-timber-600 mb-4">
                {t.contact.addressCardSub}
              </p>
            </div>
            <div className="text-xs text-forest-700 font-semibold flex items-center gap-1.5">
              <Clock className="w-4 h-4 shrink-0" />
              <span>Mo–Sa: 07:00 – 19:00</span>
            </div>
          </div>

        </div>

        {/* Operating Hours Info Strip */}
        <div className="bg-timber-100 rounded-2xl p-5 border border-timber-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-forest-700 shrink-0" />
            <span className="text-sm font-semibold text-timber-800">
              {t.contact.businessHoursText}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-100/80 px-3 py-1.5 rounded-full border border-amber-300/60">
            <ShieldCheck className="w-4 h-4" />
            <span>24h Notfalleinsatz bei Windbruch & Unwettern</span>
          </div>
        </div>

      </div>
    </section>
  );
};
