interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
}

export const Logo = ({ size = 'md', showText = true, className = '' }: LogoProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img
        src="/imgens/logo-policia.png"
        alt="Logo Papiro Tático"
        className={`${sizeClasses[size]} object-contain`}
      />
      {showText && (
        <h1 className={`font-bold text-white ${textSizes[size]}`}>
          Papiro Tático
        </h1>
      )}
    </div>
  );
};
