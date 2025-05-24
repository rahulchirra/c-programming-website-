import React from 'react';

// Define IconProps locally as it was removed from types.ts
interface IconProps {
  className?: string;
}

export const FunctionsIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-8 h-8 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h12A2.25 2.25 0 0 0 20.25 14.25V3M3.75 3H18a2.25 2.25 0 0 1 2.25 2.25v11.25A2.25 2.25 0 0 1 18 18.75h-2.25A2.25 2.25 0 0 1 13.5 21H10.5A2.25 2.25 0 0 1 8.25 18.75H6A2.25 2.25 0 0 1 3.75 16.5V3Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 12h3M12 10.5v3" />
  </svg>
);