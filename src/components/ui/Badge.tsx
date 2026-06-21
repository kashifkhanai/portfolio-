import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'ghost';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium tracking-wide transition-colors";
  
  const variants = {
    default: "bg-white/10 text-white hover:bg-white/20 border border-white/5",
    outline: "bg-transparent text-zinc-400 border border-zinc-700 hover:text-white hover:border-zinc-500",
    ghost: "bg-transparent text-zinc-400 hover:bg-white/5 hover:text-white"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
