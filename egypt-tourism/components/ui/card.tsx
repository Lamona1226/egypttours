import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps): JSX.Element {
  return <div className={cn('rounded-lg border border-[#D2C6B8] bg-[#BBA27E] p-4 shadow-sm', className)}>{children}</div>;
}
