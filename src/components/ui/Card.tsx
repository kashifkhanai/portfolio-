import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function Card({ children, className = '', hoverEffect = true, ...props }: CardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl bg-zinc-900/40 backdrop-blur-sm border border-white/5 ${
        hoverEffect ? 'hover:border-white/10 hover:bg-zinc-900/60 transition-all duration-300' : ''
      } ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
      {children}
    </motion.div>
  );
}
