import { HTMLAttributes, forwardRef } from 'react';
import { cn } from './Button';

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden', className)}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6 sm:p-8', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';
