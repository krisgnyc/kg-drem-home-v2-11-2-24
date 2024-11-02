/**
 * Utility functions for the NYC Real Estate platform
 * @module lib/utils
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes with proper precedence
 * Combines clsx for conditional classes with twMerge for Tailwind-specific merging
 * 
 * @param inputs - Array of class values or conditional class objects
 * @returns Merged className string
 * 
 * @example
 * ```ts
 * cn('px-4 py-2', { 'bg-blue-500': isPrimary }, 'hover:bg-blue-600')
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}