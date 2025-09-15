"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const usePageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    // Simular loading para navegação entre páginas
    handleStart();
    
    const timer = setTimeout(() => {
      handleComplete();
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return { isLoading, setIsLoading };
};
