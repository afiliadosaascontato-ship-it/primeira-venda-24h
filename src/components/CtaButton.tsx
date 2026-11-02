import React, { useState } from 'react';

interface CtaButtonProps {
  href: string;
  variant?: 'default' | 'offer';
  className?: string;
  ariaLabel?: string;
}

const DEFAULT_BTN_IMG =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=295,fit=crop/GUu7OKqV6JR8z9he/botao-yc6GOm7DlEWcRldf.png';

const OFFER_BTN_IMG =
  'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=295,fit=crop/GUu7OKqV6JR8z9he/botaodecompra-RUxQEpXasfyK1yMw.png';

export const CtaButton: React.FC<CtaButtonProps> = ({
  href,
  variant = 'default',
  className = '',
  ariaLabel = 'Quero fazer minha primeira venda em 24h',
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const imgSrc = variant === 'offer' ? OFFER_BTN_IMG : DEFAULT_BTN_IMG;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`group inline-flex items-center justify-center rounded-2xl transition-transform duration-200 ease-out hover:scale-105 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black animate-pulse-btn ${className}`}
    >
      {!imgFailed ? (
        <img
          src={imgSrc}
          alt={ariaLabel}
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="h-auto w-full max-w-[360px] sm:max-w-[400px] select-none object-contain drop-shadow-[0_12px_32px_rgba(16,185,129,0.28)] transition-all duration-200 group-hover:drop-shadow-[0_16px_42px_rgba(16,185,129,0.45)]"
        />
      ) : (
        <span className="inline-flex w-full max-w-[380px] items-center justify-center rounded-2xl border border-emerald-300/40 bg-gradient-to-b from-emerald-400 to-emerald-600 px-8 py-4 font-display text-base font-bold text-black shadow-[0_10px_30px_rgba(16,185,129,0.4)] whitespace-nowrap">
          Quero minha primeira assinatura em 24h
        </span>
      )}
    </a>
  );
};
