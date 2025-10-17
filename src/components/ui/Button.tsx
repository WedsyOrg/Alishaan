// components/ui/Button.tsx
'use client';

import { ButtonHTMLAttributes, memo } from 'react';
import Image from 'next/image';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  bg?: string;
  textColor?: string;
  showArrow?: boolean;
  hover?: string;
}

const Button = memo(function Button({
  text,
  bg = 'bg-[#44008a]',
  textColor = 'text-white',
  showArrow = false,
  hover = 'hover:bg-[#380073]',
  className = '',
  ...props
}: ButtonProps) {
  // Base responsive styles
  const baseStyles = [
    'inline-flex items-center justify-center gap-2',
    'px-8 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4',
    'text-sm md:text-base lg:text-lg',
    'font-medium font-Cinzel',
    'rounded-2xl',
    'transition-all duration-200',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'cursor-pointer',
    'min-h-[44px]', // Touch-friendly minimum height
  ].join(' ');

  // Dynamic styles
  const dynamicStyles = [
    bg,
    textColor,
    hover,
  ].join(' ');

  return (
    <button 
      className={`${baseStyles} ${dynamicStyles} ${className}`} 
      {...props}
    >
      <span className="whitespace-nowrap">{text}</span>
      {showArrow && (
        <Image
          src="/assets/icons/Right.png"
          alt="Arrow"
          width={16}
          height={16}
          className="w-4 h-4 md:w-5 md:h-5"
        />
      )}
    </button>
  );
});

export default Button;