import { memo, useState } from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo = memo(({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const [imageError, setImageError] = useState(false);
  
  const sizeClasses = {
    sm: { width: 32, height: 32, textSize: 'text-lg' },
    md: { width: 48, height: 48, textSize: 'text-xl' },
    lg: { width: 64, height: 64, textSize: 'text-2xl' }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="flex items-center justify-center">
        {!imageError ? (
          <Image
            src="/imagens/Logo3d.png"
            alt="Papiro Tático Logo"
            width={currentSize.width}
            height={currentSize.height}
            className="object-contain"
            priority
            quality={100}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="bg-red-600 text-white font-bold rounded-lg flex items-center justify-center" 
               style={{ width: currentSize.width, height: currentSize.height }}>
            PT
          </div>
        )}
      </div>
      {showText && (
        <h1 className={`font-bold text-white ${currentSize.textSize} tracking-tight`}>
          Papiro Tático
        </h1>
      )}
    </div>
  );
});

Logo.displayName = 'Logo';