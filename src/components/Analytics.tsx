"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function Analytics() {
  useEffect(() => {
    // Google Analytics 4
    const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Substitua pelo seu ID do GA4
    
    // Carregar Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    // Configurar gtag
    window.gtag = function(...args: unknown[]) {
      const gtag = window.gtag as any;
      gtag.q = gtag.q || [];
      gtag.q.push(args);
    };

    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID, {
      page_title: 'Papiro Tático - Sistema de Controle de Estudos',
      page_location: window.location.href,
    });

    return () => {
      // Cleanup se necessário
    };
  }, []);

  return null;
}

// Função para trackear eventos
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Funções específicas para o Papiro Tático
export const trackButtonClick = (buttonName: string) => {
  trackEvent('click', 'button', buttonName);
};

export const trackFormSubmit = (formName: string) => {
  trackEvent('submit', 'form', formName);
};

export const trackPageView = (pageName: string) => {
  trackEvent('page_view', 'navigation', pageName);
};
