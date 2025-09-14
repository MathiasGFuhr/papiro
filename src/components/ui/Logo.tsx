import { memo } from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo = memo(({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: { width: 32, height: 32, textSize: 'text-lg' },
    md: { width: 48, height: 48, textSize: 'text-xl' },
    lg: { width: 64, height: 64, textSize: 'text-2xl' }
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`${currentSize.textSize} flex items-center justify-center`}>
        <svg
          width={currentSize.width}
          height={currentSize.height}
          viewBox="0 0 100 100"
          className="object-contain"
        >
          <defs>
            {/* Gradientes modernos */}
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#dc2626" />
              <stop offset="100%" stopColor="#b91c1c" />
            </linearGradient>
            <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
            
            {/* Filtros para efeitos */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            
            <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* Círculo de fundo com gradiente */}
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="url(#primaryGradient)"
            filter="url(#shadow)"
          />
          
          {/* Círculo interno */}
          <circle
            cx="50"
            cy="50"
            r="38"
            fill="url(#secondaryGradient)"
          />
          
          {/* Ícone de documento/papel estilizado */}
          <g transform="translate(25, 20)">
            {/* Documento principal */}
            <rect
              x="0"
              y="0"
              width="30"
              height="40"
              rx="3"
              fill="white"
              stroke="#e5e7eb"
              strokeWidth="1"
              filter="url(#shadow)"
            />
            
            {/* Linhas do texto */}
            <line x1="5" y1="8" x2="25" y2="8" stroke="#dc2626" strokeWidth="1.5"/>
            <line x1="5" y1="12" x2="20" y2="12" stroke="#dc2626" strokeWidth="1.5"/>
            <line x1="5" y1="16" x2="22" y2="16" stroke="#dc2626" strokeWidth="1.5"/>
            <line x1="5" y1="20" x2="18" y2="20" stroke="#dc2626" strokeWidth="1.5"/>
            <line x1="5" y1="24" x2="25" y2="24" stroke="#dc2626" strokeWidth="1.5"/>
            <line x1="5" y1="28" x2="15" y2="28" stroke="#dc2626" strokeWidth="1.5"/>
            
            {/* Símbolo de check/checkmark */}
            <path
              d="M8 32 L12 36 L22 26"
              stroke="url(#accentGradient)"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
            />
          </g>
          
          {/* Elementos decorativos */}
          <circle cx="20" cy="20" r="2" fill="url(#accentGradient)" opacity="0.8"/>
          <circle cx="80" cy="25" r="1.5" fill="url(#accentGradient)" opacity="0.6"/>
          <circle cx="75" cy="75" r="1" fill="url(#accentGradient)" opacity="0.7"/>
          <circle cx="25" cy="80" r="1.5" fill="url(#accentGradient)" opacity="0.5"/>
        </svg>
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