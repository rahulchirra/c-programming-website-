import React from 'react';

// Define IconProps locally as it was removed from types.ts
interface IconProps {
  className?: string;
}

export const ArraysStringsIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-8 h-8 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.75h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9.75h.008v.008h-.008V9.75Zm-.753.002h.007v.007h-.007v-.007Zm.752.751h.008v.008h-.008v-.008Zm-.753.002h.007v.007h-.007v-.007Zm0 .75h.008v.008h-.008v-.008Zm-.753.002h.007v.007h-.007v-.007Zm.752.751h.008v.008h-.008v-.008Zm-.753.002h.007v.007h-.007v-.007Zm1.505-3.002h.008v.008h-.008V7.5Zm-.753.002h.007v.007h-.007V7.502Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h.008v.008H8.25V7.5Zm-.753.002h.007v.007h-.007V7.502Zm.752.751h.008v.008h-.008v-.008Zm-.753.002h.007v.007h-.007v-.007Zm0 .75h.008v.008h-.008v-.008Zm-.753.002h.007v.007h-.007v-.007Zm.752.751h.008v.008h-.008v-.008Zm-.753.002h.007v.007h-.007v-.007Z" />
  </svg>
);