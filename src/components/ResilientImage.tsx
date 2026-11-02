import React, { useState } from 'react';

interface ResilientImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackLabel?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt = '',
  className = '',
  fallbackLabel,
  loading = 'lazy',
  ...rest
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt || fallbackLabel || 'Imagem ilustrativa'}
        className={`flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#071426] via-[#050b14] to-black p-6 text-center ${className}`}
      >
        <span className="font-display text-sm font-semibold tracking-tight text-[#AED3FF]">
          {fallbackLabel || alt || 'Método P24'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
      {...rest}
    />
  );
};
