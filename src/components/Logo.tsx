import React from 'react';

type LogoProps = {
  size?: 'small' | 'medium' | 'large';
  className?: string;
};

const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '' }) => {
  const sizes = {
    small: 'w-14 h-14',
    medium: 'w-20 h-20',
    large: 'w-32 h-32',
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <img 
        src="https://mcospapas.com.br/wp-content/uploads/2020/06/Logo-OsPapas-282x300.png" 
        alt="Os Papas Motorcycle Club" 
        className="w-full h-full object-contain" 
      />
    </div>
  );
};

export default Logo;