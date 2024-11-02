import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-2 hover:opacity-90 transition-all duration-300 group">
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary transform group-hover:scale-105 transition-transform duration-300"
        >
          {/* Modern building shape */}
          <path
            d="M20 4L4 16H8V34H32V16H36L20 4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-draw"
          />
          {/* Decorative windows */}
          <path
            d="M16 34V22H24V34"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Luxury detail */}
          <circle
            cx="20"
            cy="16"
            r="2"
            fill="currentColor"
            className="animate-pulse"
          />
        </svg>
        <div className="absolute -inset-1 bg-primary/20 blur-lg group-hover:bg-primary/30 transition-colors duration-300 rounded-full" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          Dream Home
        </span>
        <span className="text-xs text-muted-foreground tracking-wider">NYC LUXURY REAL ESTATE</span>
      </div>
    </Link>
  );
}