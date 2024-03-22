import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/* Provides a wrapper function for twMerge and clsx */
export function cn(...args) {
  return twMerge(clsx(args));
}
