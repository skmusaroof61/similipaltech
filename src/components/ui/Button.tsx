import React, { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-accent hover:bg-accent/90 text-white focus:ring-accent',
    secondary: 'bg-secondary hover:bg-secondary/90 text-text focus:ring-secondary',
    outline: 'border border-accent text-accent hover:bg-accent/10 focus:ring-accent',
    text: 'text-accent hover:bg-accent/10 focus:ring-accent',
  };
  
  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-6 py-3',
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;