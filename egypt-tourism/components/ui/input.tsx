import * as React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn('w-full rounded-md border border-slate-300 px-3 py-2 text-sm', className)}
    {...props}
  />
));
Input.displayName = 'Input';
