import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/useLanguage';
import confetti from 'canvas-confetti';
import {
  Calculator,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  UploadCloud,
  X,
  Send,
  Mail,
  ShieldCheck,
  Check,
  Sparkles,
  TreePine,
  Scissors,
  Shovel,
  Truck,
  RotateCcw
} from 'lucide-react';

interface FormData {
  selectedServices: string[];
  treeHeight: string; // 'h1' | 'h2' | 'h3' | 'h4'
  accessibility: 'easy' | 'hard';
  photoUrl: string | null;
  photoFileName: string | null;
  name: string;
  phone: string;
  location: string;
  notes: string;
}

export const CostEstimator: React.FC = () => {
  const { t, language } = useLanguage();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    selectedServices: ['faellung'],
    treeHeight: 'h2', // default 5-10m
    accessibility: 'easy',
    photoUrl: null,
    photoFileName: null,
    name: '',
    phone: '',
    location: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Toggle service selection
  const toggleService = (id: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(id);
      let updated: string[];
      if (exists) {
        if (prev.selectedServices.length === 1) return prev; // Keep at least one
        updated = prev.selectedServices.filter((s) => s !== id);
      } else {
        updated = [...prev.selectedServices, id];
      }
      return { ...prev, selectedServices: updated };
    });
  };

  // Handle Photo upload / drop
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          photoUrl: reader.result as string,
          photoFileName: file.name,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const removePhoto = () => {
    setFormData((prev) => ({
      ...prev,
      photoUrl: null,
      photoFileName: null,
    }));
  };

  // Price Calculation Logic
  const priceRange = useMemo(() => {
    const serviceItems = t.calculator.serviceOptions.filter((opt) =>
      formData.selectedServices.includes(opt.id)
    );

    const baseSum = serviceItems.reduce((acc, curr) => acc + curr.basePrice, 0);

    const heightOption =
      t.calculator.heightOptions.find((h) => h.id === formData.treeHeight) ||
      t.calculator.heightOptions[1];
    const heightFactor = heightOption.factor;

    const accessFactor = formData.accessibility === 'hard' ? 1.35 : 1.0;

    const rawTotal = baseSum * heightFactor * accessFactor;

    // Build min and max rounded range
    const min = Math.round((rawTotal * 0.88) / 10) * 10;
    const max = Math.round((rawTotal * 1.22) / 10) * 10;

    return { min, max };
  }, [formData.selectedServices, formData.treeHeight, formData.accessibility, t.calculator]);

  const validateStep4 = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = language === 'de' ? 'Bitte Namen angeben' : 'Please provide your name';
    }
    if (!formData.phone.trim()) {
      errors.phone = language === 'de' ? 'Bitte Telefonnummer angeben' : 'Please provide a phone number';
    }
    if (!formData.location.trim()) {
      errors.location = language === 'de' ? 'Bitte PLZ / Ort angeben' : 'Please provide postal code or town';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2D6A4F', '#1B4332', '#D97706', '#52B788', '#B7E4C7'],
    });
  };

  const buildInquirySummary = () => {
    const serviceNames = t.calculator.serviceOptions
      .filter((opt) => formData.selectedServices.includes(opt.id))
      .map((s) => s.label)
      .join(', ');

    const heightName =
      t.calculator.heightOptions.find((h) => h.id === formData.treeHeight)?.label || '';

    const accessName =
      formData.accessibility === 'easy'
        ? t.calculator.accessEasy
        : t.calculator.accessHard;

    const text = language === 'de'
      ? `🌲 *Neue Anfrage über Website-Rechner (Passau)* 🌲\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📞 *Tel:* ${formData.phone}\n` +
        `📍 *Ort/PLZ:* ${formData.location}\n\n` +
        `🛠 *Gewählte Leistungen:* ${serviceNames}\n` +
        `📏 *Höhe:* ${heightName}\n` +
        `🚜 *Gelände:* ${accessName}\n` +
        `💶 *Geschätzte Richtpreisspanne:* ca. ${priceRange.min}€ – ${priceRange.max}€\n` +
        `${formData.photoFileName ? `📸 *Foto vorhanden:* Ja (${formData.photoFileName})\n` : ''}` +
        `${formData.notes ? `📝 *Notiz:* ${formData.notes}\n` : ''}\n` +
        `Bitte um zeitnahe Rückmeldung bzw. Termin für Besichtigung.`
      : `🌲 *New Inquiry from Website Calculator (Passau)* 🌲\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📞 *Phone:* ${formData.phone}\n` +
        `📍 *Location/ZIP:* ${formData.location}\n\n` +
        `🛠 *Services:* ${serviceNames}\n` +
        `📏 *Height:* ${heightName}\n` +
        `🚜 *Accessibility:* ${accessName}\n` +
        `💶 *Estimated Range:* ca. ${priceRange.min}€ – ${priceRange.max}€\n` +
        `${formData.photoFileName ? `📸 *Photo attached:* Yes (${formData.photoFileName})\n` : ''}` +
        `${formData.notes ? `📝 *Notes:* ${formData.notes}\n` : ''}\n` +
        `Please provide a prompt quote or survey appointment.`;

    return text;
  };

  const handleWhatsAppSubmit = () => {
    if (!validateStep4()) return;
    triggerConfetti();
    setIsSubmitted(true);

    const text = buildInquirySummary();
    const encoded = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/491708924110?text=${encoded}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailSubmit = () => {
    if (!validateStep4()) return;
    triggerConfetti();
    setIsSubmitted(true);

    const text = buildInquirySummary();
    const subject = encodeURIComponent(
      language === 'de'
        ? `Kostenvoranschlag Baumpflege Passau - ${formData.name} (${formData.location})`
        : `Tree Care Estimate Passau - ${formData.name} (${formData.location})`
    );
    const mailtoUrl = `mailto:info@baumpflege-passau.de?subject=${subject}&body=${encodeURIComponent(text)}`;
    window.location.href = mailtoUrl;
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    setFormData({
      selectedServices: ['faellung'],
      treeHeight: 'h2',
      accessibility: 'easy',
      photoUrl: null,
      photoFileName: null,
      name: '',
      phone: '',
      location: '',
      notes: '',
    });
  };

  // Helper icons for services
  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'faellung':
        return <TreePine className="w-5 h-5 text-forest-700" />;
      case 'pflege':
        return <Scissors className="w-5 h-5 text-forest-700" />;
      case 'hecke':
        return <Sparkles className="w-5 h-5 text-forest-700" />;
      case 'wurzel':
        return <Shovel className="w-5 h-5 text-amber-700" />;
      case 'entsorgung':
        return <Truck className="w-5 h-5 text-forest-700" />;
      default:
        return <TreePine className="w-5 h-5 text-forest-700" />;
    }
  };

  return (
    <section id="rechner" className="py-20 bg-forest-900 text-white relative overflow-hidden">
      {/* Background forestry accents */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-forest-800 text-forest-200 border border-forest-600/40 text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-forest-300" />
            <span>{t.calculator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            {t.calculator.title}
          </h2>
          <p className="text-timber-300 text-base sm:text-lg max-w-2xl mx-auto">
            {t.calculator.subtitle}
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="mb-8">
          <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
            {[1, 2, 3, 4].map((stepNum) => {
              const isPassed = currentStep > stepNum;
              const isCurrent = currentStep === stepNum;
              return (
                <button
                  key={stepNum}
                  onClick={() => !isSubmitted && setCurrentStep(stepNum)}
                  className={`flex flex-col items-center gap-1 py-2 px-1 rounded-xl transition-all ${
                    isCurrent
                      ? 'bg-forest-800/90 text-white border border-forest-500'
                      : isPassed
                      ? 'bg-forest-950/60 text-forest-300 border border-forest-800'
                      : 'bg-forest-950/30 text-timber-500 border border-transparent'
                  }`}
                >
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm ${
                      isCurrent
                        ? 'bg-forest-500 text-white shadow-md'
                        : isPassed
                        ? 'bg-forest-700 text-white'
                        : 'bg-timber-800 text-timber-400'
                    }`}
                  >
                    {isPassed ? <Check className="w-4 h-4" /> : stepNum}
                  </div>
                  <span className="text-[11px] sm:text-xs font-medium truncate max-w-full">
                    {stepNum === 1 && (language === 'de' ? 'Leistung' : 'Service')}
                    {stepNum === 2 && (language === 'de' ? 'Dimension' : 'Scale')}
                    {stepNum === 3 && (language === 'de' ? 'Foto' : 'Photo')}
                    {stepNum === 4 && (language === 'de' ? 'Angebot' : 'Estimate')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Card Container */}
        <div className="bg-timber-900 border border-timber-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-md">
          
          {/* STEP 1: Services Selection */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {t.calculator.step1Title}
                </h3>
                <p className="text-timber-300 text-sm">
                  {t.calculator.step1Desc}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.calculator.serviceOptions.map((option) => {
                  const isSelected = formData.selectedServices.includes(option.id);
                  return (
                    <div
                      key={option.id}
                      onClick={() => toggleService(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3.5 select-none ${
                        isSelected
                          ? 'bg-forest-800/60 border-forest-400 shadow-md ring-1 ring-forest-400/40'
                          : 'bg-timber-800/40 border-timber-700 hover:border-timber-500 hover:bg-timber-800/70'
                      }`}
                    >
                      <div
                        className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                          isSelected
                            ? 'bg-forest-500 border-forest-400 text-white'
                            : 'bg-timber-700 border-timber-600 text-transparent'
                        }`}
                      >
                        <Check className="w-4 h-4" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-bold text-white text-sm sm:text-base">
                            {option.label}
                          </span>
                          <span className="p-1 rounded bg-forest-950/60">
                            {getServiceIcon(option.id)}
                          </span>
                        </div>
                        <p className="text-xs text-timber-300 mt-1 leading-relaxed">
                          {option.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest-600 hover:bg-forest-500 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  <span>{t.calculator.btnNext}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Scale & Dimensions */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {t.calculator.step2Title}
                </h3>
                <p className="text-timber-300 text-sm">
                  {t.calculator.step2Desc}
                </p>
              </div>

              {/* Tree Height Selector */}
              <div>
                <label className="block text-sm font-semibold text-timber-200 mb-3">
                  {t.calculator.treeHeightLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.calculator.heightOptions.map((height) => {
                    const isSelected = formData.treeHeight === height.id;
                    return (
                      <button
                        key={height.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, treeHeight: height.id })}
                        className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-forest-800/80 border-forest-400 text-white ring-1 ring-forest-400/50'
                            : 'bg-timber-800/40 border-timber-700 text-timber-200 hover:border-timber-500'
                        }`}
                      >
                        <span className="font-semibold text-sm">{height.label}</span>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isSelected ? 'border-forest-400 bg-forest-500' : 'border-timber-500'
                          }`}
                        >
                          {isSelected && <span className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Accessibility Toggle */}
              <div>
                <label className="block text-sm font-semibold text-timber-200 mb-3">
                  {t.calculator.accessibilityLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, accessibility: 'easy' })}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      formData.accessibility === 'easy'
                        ? 'bg-forest-800/80 border-forest-400 text-white ring-1 ring-forest-400/50'
                        : 'bg-timber-800/40 border-timber-700 text-timber-200 hover:border-timber-500'
                    }`}
                  >
                    <div className="font-bold text-sm sm:text-base text-forest-200 mb-1">
                      {t.calculator.accessEasy}
                    </div>
                    <p className="text-xs text-timber-300">
                      {t.calculator.accessEasyDesc}
                    </p>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, accessibility: 'hard' })}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      formData.accessibility === 'hard'
                        ? 'bg-amber-950/60 border-amber-500 text-white ring-1 ring-amber-400/50'
                        : 'bg-timber-800/40 border-timber-700 text-timber-200 hover:border-timber-500'
                    }`}
                  >
                    <div className="font-bold text-sm sm:text-base text-amber-300 mb-1">
                      {t.calculator.accessHard}
                    </div>
                    <p className="text-xs text-timber-300">
                      {t.calculator.accessHardDesc}
                    </p>
                  </button>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-timber-800 hover:bg-timber-700 text-timber-200 font-semibold text-sm transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t.calculator.btnPrev}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest-600 hover:bg-forest-500 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  <span>{t.calculator.btnNext}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Photo Upload Preview */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {t.calculator.step3Title}
                </h3>
                <p className="text-timber-300 text-sm">
                  {t.calculator.step3Desc}
                </p>
              </div>

              {/* Trust Badge Reassurance */}
              <div className="bg-forest-950/80 border border-forest-600/40 rounded-xl p-3.5 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-forest-300 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-forest-200">
                  {t.calculator.photoUploadBadge}
                </span>
              </div>

              {/* Upload Dropzone */}
              {!formData.photoUrl ? (
                <label className="border-2 border-dashed border-timber-600 hover:border-forest-400 bg-timber-800/30 hover:bg-timber-800/60 rounded-2xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all group">
                  <div className="w-14 h-14 rounded-full bg-timber-700/80 group-hover:bg-forest-700 flex items-center justify-center text-timber-300 group-hover:text-white mb-3 transition-colors">
                    <UploadCloud className="w-7 h-7" />
                  </div>
                  <span className="font-bold text-white text-base mb-1">
                    {t.calculator.photoUploadTitle}
                  </span>
                  <span className="text-xs text-timber-400 max-w-sm">
                    {t.calculator.photoUploadHint}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              ) : (
                /* Instant Thumbnail Preview */
                <div className="bg-timber-800/60 border border-timber-600 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg overflow-hidden border-2 border-forest-500 shrink-0 relative">
                      <img
                        src={formData.photoUrl}
                        alt="Hochgeladene Baumansicht"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5 text-xs text-forest-400 font-bold mb-1">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>{t.calculator.photoUploaded}</span>
                      </div>
                      <span className="font-semibold text-white text-sm block truncate max-w-[200px]">
                        {formData.photoFileName}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={removePhoto}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-timber-700 hover:bg-red-900/50 text-timber-200 hover:text-red-300 text-xs font-semibold border border-timber-600 transition-colors"
                  >
                    <X className="w-4 h-4" />
                    <span>{t.calculator.removePhoto}</span>
                  </button>
                </div>
              )}

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-timber-800 hover:bg-timber-700 text-timber-200 font-semibold text-sm transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t.calculator.btnPrev}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-forest-600 hover:bg-forest-500 text-white font-bold text-sm shadow-md transition-all hover:scale-105"
                >
                  <span>{t.calculator.btnNext}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Estimate Range & Submission */}
          {currentStep === 4 && (
            <div className="space-y-6">
              {/* Dynamic Estimated Price Box */}
              <div className="bg-gradient-to-br from-forest-800 via-forest-900 to-timber-900 border-2 border-forest-500/60 rounded-2xl p-5 sm:p-6 text-center shadow-lg">
                <div className="inline-flex items-center gap-1.5 text-xs text-forest-300 font-semibold uppercase tracking-wider mb-1">
                  <Calculator className="w-3.5 h-3.5" />
                  <span>{t.calculator.estimatedRangeTitle}</span>
                </div>
                <div className="text-3xl sm:text-5xl font-black text-white tracking-tight my-2">
                  ca. {priceRange.min}€ – {priceRange.max}€
                </div>
                <p className="text-xs text-timber-300 max-w-lg mx-auto">
                  {t.calculator.estimatedRangeSubtitle}
                </p>
              </div>

              {!isSubmitted ? (
                /* Contact Intake Form */
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-timber-200 mb-1">
                        {t.calculator.nameLabel}
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                        }}
                        placeholder={t.calculator.namePlaceholder}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-timber-800 border text-white text-sm placeholder-timber-400 focus:outline-none focus:ring-2 focus:ring-forest-400 ${
                          formErrors.name ? 'border-red-500' : 'border-timber-700'
                        }`}
                      />
                      {formErrors.name && (
                        <span className="text-xs text-red-400 mt-1 block">{formErrors.name}</span>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-timber-200 mb-1">
                        {t.calculator.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (formErrors.phone) setFormErrors({ ...formErrors, phone: '' });
                        }}
                        placeholder={t.calculator.phonePlaceholder}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-timber-800 border text-white text-sm placeholder-timber-400 focus:outline-none focus:ring-2 focus:ring-forest-400 ${
                          formErrors.phone ? 'border-red-500' : 'border-timber-700'
                        }`}
                      />
                      {formErrors.phone && (
                        <span className="text-xs text-red-400 mt-1 block">{formErrors.phone}</span>
                      )}
                    </div>
                  </div>

                  {/* Location */}
                  <div>
                    <label className="block text-xs font-bold text-timber-200 mb-1">
                      {t.calculator.locationLabel}
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => {
                        setFormData({ ...formData, location: e.target.value });
                        if (formErrors.location) setFormErrors({ ...formErrors, location: '' });
                      }}
                      placeholder={t.calculator.locationPlaceholder}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-timber-800 border text-white text-sm placeholder-timber-400 focus:outline-none focus:ring-2 focus:ring-forest-400 ${
                        formErrors.location ? 'border-red-500' : 'border-timber-700'
                      }`}
                    />
                    {formErrors.location && (
                      <span className="text-xs text-red-400 mt-1 block">{formErrors.location}</span>
                    )}
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-xs font-bold text-timber-200 mb-1">
                      {t.calculator.notesLabel}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={t.calculator.notesPlaceholder}
                      className="w-full px-3.5 py-2 rounded-xl bg-timber-800 border border-timber-700 text-white text-sm placeholder-timber-400 focus:outline-none focus:ring-2 focus:ring-forest-400"
                    ></textarea>
                  </div>

                  {/* Disclaimer */}
                  <p className="text-[11px] text-timber-400 italic">
                    {t.calculator.disclaimer}
                  </p>

                  {/* Submission CTAs */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppSubmit}
                      className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Send className="w-4 h-4" />
                      <span>{t.calculator.btnSubmitWhatsApp}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleEmailSubmit}
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-timber-800 hover:bg-timber-700 text-white font-bold text-sm border border-timber-600 transition-all hover:scale-[1.02]"
                    >
                      <Mail className="w-4 h-4 text-forest-400" />
                      <span>{t.calculator.btnSubmitEmail}</span>
                    </button>
                  </div>

                  <div className="pt-2 flex justify-start">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="inline-flex items-center gap-1.5 text-xs text-timber-400 hover:text-timber-200"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>{t.calculator.btnPrev}</span>
                    </button>
                  </div>
                </div>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-forest-600 text-white mx-auto flex items-center justify-center shadow-lg animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {t.calculator.successMessage}
                  </h4>
                  <p className="text-sm text-timber-300 max-w-md mx-auto">
                    {language === 'de'
                      ? 'Wir prüfen Ihre Angaben und Fotos umgehend und melden uns innerhalb von 24 Stunden mit einem verbindlichen Angebot bei Ihnen.'
                      : 'We are reviewing your details and photo promptly. Expect our binding offer within 24 hours.'}
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-timber-800 hover:bg-timber-700 text-white text-xs font-semibold border border-timber-600 mt-2"
                  >
                    <RotateCcw className="w-4 h-4 text-forest-400" />
                    <span>{t.calculator.resetCalculator}</span>
                  </button>
                </div>
              )}

            </div>
          )}

        </div>

        {/* Security & Local Guarantee Footer */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-timber-400">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-forest-400" />
            <span>100% unverbindlich & DSGVO-konform</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-forest-400" />
            <span>Kostenlose Vor-Ort-Besichtigung in Passau</span>
          </div>
        </div>

      </div>
    </section>
  );
};
