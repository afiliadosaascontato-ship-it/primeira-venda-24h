import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ResilientImage } from './ResilientImage';

const TESTIMONIAL_SLIDES = [
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/GUu7OKqV6JR8z9he/depoimento2-DoJmCM1Kle6E5dqf.png',
    alt: 'Depoimento real de aluno faturando com assinaturas - Slide 1',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/GUu7OKqV6JR8z9he/depoimento3-74TFNUrReNgNwNs6.png',
    alt: 'Depoimento real de aluno faturando com assinaturas - Slide 2',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/GUu7OKqV6JR8z9he/depoimento4-R34lNeHMpsd2JRUt.png',
    alt: 'Depoimento real de aluno faturando com assinaturas - Slide 3',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/GUu7OKqV6JR8z9he/depoimento5-FkCmVEujgqJvPl2b.png',
    alt: 'Depoimento real de aluno faturando com assinaturas - Slide 4',
  },
];

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIAL_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + TESTIMONIAL_SLIDES.length) % TESTIMONIAL_SLIDES.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => {
      nextSlide();
    }, 4500);
    return () => window.clearInterval(timer);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 45) {
      if (delta < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    touchStartX.current = null;
  };

  return (
    <div
      className="relative mx-auto w-full max-w-5xl select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Depoimentos de alunos do Método P24"
    >
      {/* Carousel Viewport */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070b12]">
        <div
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ transform: `translate3d(-${currentIndex * 100}%, 0, 0)` }}
        >
          {TESTIMONIAL_SLIDES.map((slide, idx) => (
            <div key={slide.src} className="w-full shrink-0">
              <ResilientImage
                src={slide.src}
                alt={slide.alt}
                fallbackLabel={`Depoimento de Aluno ${idx + 1}`}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Left SVG Arrow */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Depoimento anterior"
          className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/75 text-white backdrop-blur-md transition-all duration-150 hover:scale-105 hover:border-[#127DFF] hover:bg-[#071529] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#127DFF] sm:left-5 sm:h-12 sm:w-12 cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M15 19L8 12L15 5"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Right SVG Arrow */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Próximo depoimento"
          className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/75 text-white backdrop-blur-md transition-all duration-150 hover:scale-105 hover:border-[#127DFF] hover:bg-[#071529] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#127DFF] sm:right-5 sm:h-12 sm:w-12 cursor-pointer"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="M9 5L16 12L9 19"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Dot Indicators */}
      <div
        className="mt-5 flex items-center justify-center gap-2.5"
        role="tablist"
        aria-label="Selecionar slide de depoimento"
      >
        {TESTIMONIAL_SLIDES.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Ir para depoimento ${idx + 1}`}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#127DFF] ${
                isActive
                  ? 'w-8 bg-[#127DFF]'
                  : 'w-2.5 bg-white/25 hover:bg-white/50'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};
