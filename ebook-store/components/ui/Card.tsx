import React from 'react';
import { cn } from '@/lib/utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = false }) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden',
        hover && 'card-hover cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};
