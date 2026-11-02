import { useMemo } from 'react';

export const BASE_CHECKOUT_URL =
  'https://pay.cakto.com.br/p697s8x_984762?affiliate=3yuvr8DJ';

/**
 * Builds the official Cakto checkout URL while preserving `affiliate=3yuvr8DJ`
 * and forwarding all UTM and tracking parameters from the current page URL.
 */
export function buildCheckoutUrl(searchString?: string): string {
  try {
    const targetUrl = new URL(BASE_CHECKOUT_URL);
    const rawSearch =
      typeof searchString === 'string'
        ? searchString
        : typeof window !== 'undefined'
          ? window.location.search
          : '';

    if (rawSearch) {
      const currentParams = new URLSearchParams(rawSearch);
      currentParams.forEach((value, key) => {
        // Keep official affiliate ID intact while forwarding UTMs & tracking params
        if (key.toLowerCase() !== 'affiliate' && value.trim() !== '') {
          targetUrl.searchParams.set(key, value);
        }
      });
    }

    return targetUrl.toString();
  } catch {
    return BASE_CHECKOUT_URL;
  }
}

export function useCheckoutUrl(): string {
  return useMemo(() => {
    if (typeof window === 'undefined') {
      return BASE_CHECKOUT_URL;
    }
    return buildCheckoutUrl(window.location.search);
  }, []);
}
