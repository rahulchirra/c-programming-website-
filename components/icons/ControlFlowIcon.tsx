import React from 'react';

// Define IconProps locally as it was removed from types.ts
interface IconProps {
  className?: string;
}

export const ControlFlowIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-8 h-8 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m7.5-13.5L12 7.5m0 0L7.5 12m4.5-4.5v7.5m0-7.5h3.75M12 12.75h3.75m-3.75 0L12 16.5m0 0h3.75m-3.75 0L12 21m0 0L16.5 16.5m0 0h3.75" />
  </svg>
);