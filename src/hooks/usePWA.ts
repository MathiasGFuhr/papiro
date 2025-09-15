"use client";

import { useEffect } from 'react';

export const usePWA = () => {
  useEffect(() => {
    // Registrar Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registrado com sucesso:', registration.scope);
          })
          .catch((registrationError) => {
            console.log('Falha no registro do SW:', registrationError);
          });
      });
    }

    // Verificar se está instalado
    const checkIfInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches || 
          (window.navigator as any).standalone === true) {
        console.log('PWA está instalado');
        return true;
      }
      return false;
    };

    checkIfInstalled();
  }, []);
};
