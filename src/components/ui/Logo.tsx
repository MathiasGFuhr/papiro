import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 64, height: 64 }
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <Image
        src="/imagens/logo-policia.png"
        alt="Logo Papiro Tático"
        width={currentSize.width}
        height={currentSize.height}
        className="object-contain"
        priority
        unoptimized
      />
      {showText && (
        <h1 className={`font-bold text-white ${textSizes[size]}`}>
          Papiro Tático
        </h1>
      )}
    </div>
  );
};
