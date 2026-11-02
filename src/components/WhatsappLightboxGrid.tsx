import React, { useCallback, useEffect, useState } from 'react';
import { ZoomIn, ZoomOut, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

const WHATSAPP_PRINTS = [
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/GUu7OKqV6JR8z9he/img_3165-2uOyeNt1rfdYALNw.PNG',
    alt: 'Print real de venda aprovada e assinatura na Cakto - Resultado 1',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/GUu7OKqV6JR8z9he/img_3168-xNGqBZJ1kwGTPsdr.PNG',
    alt: 'Print real de notificações de assinaturas recorrentes - Resultado 2',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/GUu7OKqV6JR8z9he/img_3175-7GsVoX7dqAyhh3Ki.PNG',
    alt: 'Print real de aluno comemorando primeira venda em 24h - Resultado 3',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/GUu7OKqV6JR8z9he/img_3177-P7reQgMd3C9THpIZ.PNG',
    alt: 'Print real de vendas recorrentes no celular - Resultado 4',
  },
  {
    src: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,fit=crop/GUu7OKqV6JR8z9he/img_3178-17tuDFoG3rDyVgmi.PNG',
    alt: 'Print real de faturamento de assinaturas na Cakto - Resultado 5',
  },
];

export const WhatsappLightboxGrid: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    setIsZoomed(false);
  }, []);

  const showPrev = useCallback(() => {
    setIsZoomed(false);
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + WHATSAPP_PRINTS.length) % WHATSAPP_PRINTS.length
    );
  }, []);

  const showNext = useCallback(() => {
    setIsZoomed(false);
    setSelectedIndex((prev) =>
      prev === null ? null : (prev + 1) % WHATSAPP_PRINTS.length
    );
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-5">
        {WHATSAPP_PRINTS.map((item, idx) => (
          <button
            key={item.src}
            type="button"
            onClick={() => {
              setSelectedIndex(idx);
              setIsZoomed(false);
            }}
            aria-label={`Ampliar comprovante de resultado ${idx + 1}`}
            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-[#080d16] text-left transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-[#127DFF]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#127DFF] cursor-pointer ${
              idx === 4 ? 'col-span-2 sm:col-span-1 max-w-[260px] mx-auto sm:max-w-none w-full' : ''
            }`}
          >
            <ResilientImage
              src={item.src}
              alt={item.alt}
              fallbackLabel={`Resultado Real ${idx + 1}`}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/70 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <span className="inline-flex items-center gap-1.5 rounded-lg bg-black/80 px-2.5 py-1.5 text-xs font-medium text-white border border-white/15">
                <ZoomIn className="h-3.5 w-3.5 text-[#AED3FF]" />
                Ampliar
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada do resultado"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 p-4 backdrop-blur-md"
          onClick={closeLightbox}
        >
          {/* Top Action Controls */}
          <div
            className="fixed right-4 top-4 z-50 flex items-center gap-2 sm:right-6 sm:top-6"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="mr-2 font-mono text-xs text-neutral-400 tabular-nums">
              {selectedIndex + 1} / {WHATSAPP_PRINTS.length}
            </span>
            <button
              type="button"
              onClick={() => setIsZoomed((z) => !z)}
              aria-label={isZoomed ? 'Reduzir zoom' : 'Aumentar zoom'}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-neutral-900/90 text-white transition-colors hover:border-[#127DFF] hover:bg-neutral-800 cursor-pointer"
            >
              {isZoomed ? (
                <ZoomOut className="h-5 w-5" />
              ) : (
                <ZoomIn className="h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              onClick={closeLightbox}
              aria-label="Fechar visualização"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-neutral-900/90 text-white transition-colors hover:border-white/40 hover:bg-neutral-800 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Prev Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Resultado anterior"
            className="fixed left-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-neutral-900/85 text-white transition-transform hover:scale-105 hover:border-[#127DFF] sm:left-6 cursor-pointer"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-h-[86vh] max-w-full overflow-auto rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <ResilientImage
              src={WHATSAPP_PRINTS[selectedIndex].src}
              alt={WHATSAPP_PRINTS[selectedIndex].alt}
              onClick={() => setIsZoomed((z) => !z)}
              className={`mx-auto rounded-xl object-contain transition-transform duration-200 ${
                isZoomed
                  ? 'max-h-none w-[580px] max-w-none cursor-zoom-out scale-110'
                  : 'max-h-[84vh] w-auto max-w-[90vw] cursor-zoom-in'
              }`}
            />
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Próximo resultado"
            className="fixed right-3 top-1/2 z-50 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-neutral-900/85 text-white transition-transform hover:scale-105 hover:border-[#127DFF] sm:right-6 cursor-pointer"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
};
