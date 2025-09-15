"use client";

import { useEffect } from 'react';

export const PreloadResources = () => {
  useEffect(() => {
    // Preload de fontes críticas (removido - usando Google Fonts)
    const preloadFonts = () => {
      // Fontes são carregadas via Google Fonts no layout.tsx
      // Não precisamos preload manual
    };

    // Preload de imagens críticas
    const preloadImages = () => {
      const imageUrls = [
        '/imagens/Logo3d.png',
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
