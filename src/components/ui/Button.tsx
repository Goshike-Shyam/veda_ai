import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  href?: string;
  type?: 'button' | 'submit';
  ariaLabel?: string;
};

export function Button({ children, variant = 'primary', className = '', href, type = 'button', ariaLabel }: ButtonProps) {
  const shared = 'inline-flex min-h-11 items-center justify-center rounded-full px-6 font-semibold transition duration-200 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#35BFC8] disabled:cursor-not-allowed disabled:opacity-60';
  const variantClasses = {
    primary: 'button-primary bg-[#F58220] text-[#141A45] hover:bg-[#D96300] hover:text-[#141A45] focus-visible:bg-[#D96300] focus-visible:text-[#141A45] active:bg-[#C85A00] active:text-[#141A45] disabled:bg-[#F58220] disabled:text-[#141A45]',
    secondary: 'button-secondary-on-dark border-2 border-[#5B67B0] bg-transparent text-[#F4F5FF] hover:border-[#7C86D8] hover:bg-[#1d275d] hover:text-[#F4F5FF] focus-visible:border-[#35BFC8] focus-visible:bg-[#1d275d] focus-visible:text-[#F4F5FF] active:border-[#3645AA] active:bg-[#121B4B] active:text-[#F4F5FF] disabled:border-[#5B67B0] disabled:bg-transparent disabled:text-[#F4F5FF]',
    ghost: 'bg-transparent text-[#F4F5FF] hover:bg-[#1d275d] hover:text-[#F4F5FF] focus-visible:bg-[#1d275d] focus-visible:text-[#F4F5FF] active:bg-[#121B4B] active:text-[#F4F5FF] disabled:bg-transparent disabled:text-[#F4F5FF]',
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${shared} ${variantClasses[variant]} ${className}`}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={cn(shared, variantClasses[variant], className)} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
