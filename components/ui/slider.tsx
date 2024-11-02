'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/10 dark:bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primary dark:bg-primary" />
    </SliderPrimitive.Track>
    {props.defaultValue?.map((_, i) => (
      <SliderPrimitive.Thumb
        key={i}
        className={cn(
          "block h-4 w-4 rounded-full",
          "border border-primary/50",
          "bg-white dark:bg-white", // Changed to white in both light and dark modes
          "shadow-sm dark:shadow-primary/25",
          "transition-all duration-100",
          "focus-visible:outline-none",
          "focus-visible:ring-2",
          "focus-visible:ring-primary",
          "focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "hover:scale-110",
          "hover:shadow-md",
          "active:scale-95"
        )}
      />
    ))}
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };