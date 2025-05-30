
import React from 'react';

interface IconProps {
  className?: string;
}

export const ChevronUpIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth="2.5" // Made slightly bolder
    stroke="currentColor" 
    className={`w-6 h-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
);
    