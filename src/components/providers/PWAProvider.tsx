"use client";

import { usePWA } from '@/hooks/usePWA';

interface PWAProviderProps {
  children: React.ReactNode;
}

export const PWAProvider = ({ children }: PWAProviderProps) => {
  usePWA();
  
  return <>{children}</>;
};
