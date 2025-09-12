import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
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
          {/* Shield Background */}
          <defs>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#1e40af" />
            </linearGradient>
            <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <filter id="sparkle">
              <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Shield Border */}
          <path
            d="M50 5 L85 25 L85 65 L50 95 L15 65 L15 25 Z"
            fill="url(#borderGradient)"
            stroke="#64748b"
            strokeWidth="2"
          />
          
          {/* Shield Inner */}
          <path
            d="M50 8 L82 26 L82 64 L50 92 L18 64 L18 26 Z"
            fill="url(#shieldGradient)"
          />
          
          {/* Scroll/Parchment Background */}
          <ellipse
            cx="50"
            cy="50"
            rx="25"
            ry="35"
            fill="#f8fafc"
            stroke="#e2e8f0"
            strokeWidth="1"
            opacity="0.9"
          />
          
          {/* Scroll Lines */}
          <line x1="35" y1="40" x2="65" y2="40" stroke="#cbd5e1" strokeWidth="1"/>
          <line x1="35" y1="45" x2="65" y2="45" stroke="#cbd5e1" strokeWidth="1"/>
          <line x1="35" y1="50" x2="65" y2="50" stroke="#cbd5e1" strokeWidth="1"/>
          <line x1="35" y1="55" x2="65" y2="55" stroke="#cbd5e1" strokeWidth="1"/>
          <line x1="35" y1="60" x2="65" y2="60" stroke="#cbd5e1" strokeWidth="1"/>
          
          {/* Fountain Pen */}
          <g transform="rotate(-45 50 50)">
            {/* Pen Body */}
            <rect x="45" y="30" width="3" height="25" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5"/>
            {/* Pen Nib */}
            <polygon points="45,30 47,25 49,30" fill="#f1f5f9" stroke="#94a3b8" strokeWidth="0.5"/>
            {/* Pen Cap */}
            <rect x="44" y="50" width="5" height="8" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5"/>
            {/* Sparkle Effect on Nib */}
            <circle cx="47" cy="27" r="1" fill="#fbbf24" filter="url(#sparkle)"/>
            <path d="M47 25 L47 29 M45 27 L49 27" stroke="#fbbf24" strokeWidth="0.5" filter="url(#sparkle)"/>
          </g>
          
          {/* Assault Rifle */}
          <g transform="rotate(45 50 50)">
            {/* Rifle Body */}
            <rect x="40" y="45" width="20" height="3" fill="#374151" stroke="#1f2937" strokeWidth="0.5"/>
            {/* Barrel */}
            <rect x="60" y="46" width="8" height="1" fill="#374151" stroke="#1f2937" strokeWidth="0.5"/>
            {/* Magazine */}
            <rect x="42" y="48" width="4" height="6" fill="#374151" stroke="#1f2937" strokeWidth="0.5"/>
            {/* Trigger Guard */}
            <path d="M45 48 Q45 50 47 50 Q49 50 49 48" fill="none" stroke="#1f2937" strokeWidth="0.5"/>
            {/* Pistol Grip */}
            <rect x="44" y="50" width="3" height="8" fill="#374151" stroke="#1f2937" strokeWidth="0.5"/>
            {/* Stock */}
            <rect x="35" y="45" width="6" height="3" fill="#374151" stroke="#1f2937" strokeWidth="0.5"/>
            {/* Sparkle Effect on Muzzle */}
            <circle cx="68" cy="46.5" r="1" fill="#fbbf24" filter="url(#sparkle)"/>
            <path d="M68 44.5 L68 48.5 M66 46.5 L70 46.5" stroke="#fbbf24" strokeWidth="0.5" filter="url(#sparkle)"/>
          </g>
        </svg>
      </div>
      {showText && (
        <h1 className={`font-bold text-white ${currentSize.textSize}`}>
          Papiro Tático
        </h1>
      )}
    </div>
  );
};