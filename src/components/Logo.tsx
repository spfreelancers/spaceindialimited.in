import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
}) => {
  const sizeClasses = {
    sm: 'h-9 sm:h-10',
    md: 'h-11 sm:h-12',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-24',
    hero: 'h-24 sm:h-32',
  }[size];

  return (
    <div className={`inline-flex items-center select-none group ${className}`}>
      <img
        src="/assets/space_png_logo-BemVkzw1.png"
        alt="SPACE India Limited - Pledge To Assist"
        className={`${sizeClasses} w-auto object-contain filter drop-shadow-[0_0_16px_rgba(245,158,11,0.35)] transition-transform duration-300 group-hover:scale-[1.03]`}
        loading="eager"
      />
    </div>
  );
};
