"use client";

import { useEffect } from 'react';

export const PreloadResources = () => {
  useEffect(() => {
    // Preload de fontes críticas
    const preloadFonts = () => {
      const fontLinks = [
        { href: '/fonts/inter-regular.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
        { href: '/fonts/inter-semibold.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      ];

      fontLinks.forEach(({ href, as, type, crossOrigin }) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        link.type = type;
        link.crossOrigin = crossOrigin;
        document.head.appendChild(link);
      });
    };

    // Preload de imagens críticas
    const preloadImages = () => {
      const imageUrls = [
        '/favicon.svg',
        '/next.svg',
        '/vercel.svg',
      ];

      imageUrls.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = url;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Preload de rotas críticas
    const preloadRoutes = () => {
      const routes = ['/login', '/register', '/ajuda'];
      
      routes.forEach(route => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    };

    // Executar preloads
    preloadFonts();
    preloadImages();
    preloadRoutes();

    // DNS prefetch para domínios externos
    const dnsPrefetch = () => {
      const domains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
      ];

      domains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    };

    dnsPrefetch();
  }, []);

  return null;
};
