import * as React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export function Button({ className, variant = 'default', ...props }: ButtonProps): JSX.Element {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium',
        variant === 'default' ? 'bg-brand text-white' : 'border border-[#D2C6B8] bg-[#BBA27E] text-slate-900',
        className
      )}
      {...props}
    />
  );
}
