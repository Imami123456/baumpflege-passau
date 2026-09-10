import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useLanguage } from '../context/useLanguage';
import { ChevronsLeftRight, Sparkles, MapPin, CheckCircle } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const { t, language } = useLanguage();
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(1000);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      updateSliderPosition(e.touches[0].clientX);
    }
  };

  return (
    <section id="vorher-nachher" className="py-20 bg-timber-100/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 text-forest-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-forest-600" />
            <span>{t.beforeAfter.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-timber-900 tracking-tight mb-4">
            {t.beforeAfter.title}
          </h2>
          <p className="text-timber-600 text-base sm:text-lg">
            {t.beforeAfter.subtitle}
          </p>
        </div>

        {/* Comparison Showcase Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-timber-200">
          
          {/* Slider Container */}
          <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[480px] md:h-[540px] w-full overflow-hidden select-none cursor-ew-resize bg-timber-900"
          >
            {/* After Image (Full background layer) */}
            <img
              src="https://images.unsplash.com/photo-1592417817098-8f3d69104a49?auto=format&fit=crop&w=1600&q=85"
              alt="Nachher: Gepflegter Garten und professionell geschnittene Bäume"
              className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />
            {/* After Label Badge */}
            <div className="absolute top-4 right-4 z-20 bg-forest-800/90 text-forest-100 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg backdrop-blur-md shadow-md flex items-center gap-1.5 border border-forest-600/40">
              <CheckCircle className="w-4 h-4 text-forest-300" />
              <span>{t.beforeAfter.labelAfter}</span>
            </div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85"
                alt="Vorher: Gefährlicher Überhang und Wildwuchs am Grundstück"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{
                  width: `${containerWidth}px`,
                }}
              />
              {/* Before Label Badge */}
              <div className="absolute top-4 left-4 z-20 bg-timber-900/90 text-amber-300 text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg backdrop-blur-md shadow-md flex items-center gap-1.5 border border-amber-500/40">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                <span>{t.beforeAfter.labelBefore}</span>
              </div>
            </div>

            {/* Draggable Divider Line & Knob */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Vertical line */}
              <div className="absolute inset-y-0 -ml-[2px] w-[4px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>

              {/* Center Handle Knob */}
              <div className="absolute top-1/2 -mt-6 -ml-6 w-12 h-12 rounded-full bg-forest-600 text-white flex items-center justify-center shadow-xl border-2 border-white ring-4 ring-forest-500/30 transform transition-transform hover:scale-110 active:scale-95">
                <ChevronsLeftRight className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Accessible Range Input (hidden overlay for keyboard and touch) */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40"
              aria-label={language === 'de' ? 'Vorher-Nachher Bildervergleich Schieberegler' : 'Before and after image comparison slider'}
              aria-valuenow={sliderPosition}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuetext={`${sliderPosition}%`}
            />
          </div>

          {/* Project Details Footer */}
          <div className="p-5 sm:p-6 bg-white border-t border-timber-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-forest-700 font-bold text-sm mb-1">
                <MapPin className="w-4 h-4" />
                <span>{t.beforeAfter.caseTitle}</span>
              </div>
              <p className="text-timber-600 text-sm max-w-2xl">
                {t.beforeAfter.caseDescription}
              </p>
            </div>

            <div className="flex items-center gap-2 bg-timber-100 text-timber-700 px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap self-stretch sm:self-auto justify-center">
              <ChevronsLeftRight className="w-4 h-4 text-forest-600" />
              <span>{t.beforeAfter.dragHint}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
