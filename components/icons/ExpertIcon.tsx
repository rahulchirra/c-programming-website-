import React from 'react';

// Define IconProps locally as it was removed from types.ts
interface IconProps {
  className?: string;
}

export const ExpertIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-8 h-8 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 0 0-5.84 0m5.84 0a11.953 11.953 0 0 0-1.62-.287l-2.036.011A11.953 11.953 0 0 0 8.41 14.083m7.18-2.56a11.953 11.953 0 0 0 .287-1.62l-.01-2.036a11.953 11.953 0 0 0-1.407-5.572m1.407 5.572L15.59 14.37M9.63 8.41A11.953 11.953 0 0 0 4.057 6.974L2.45 7.797A11.953 11.953 0 0 0 .943 12.37l1.507.823A11.953 11.953 0 0 0 8.41 15.59m1.22-7.18a11.953 11.953 0 0 0-5.572-1.407L2.45 8.41A11.953 11.953 0 0 0 6.974 19.95l.823 1.506A11.953 11.953 0 0 0 12.37 23.06l.823-1.507A11.953 11.953 0 0 0 15.59 15.59m-5.96-7.18a11.953 11.953 0 0 0-1.407 5.572l.01 2.036a11.953 11.953 0 0 0 1.62.287m0 0l-2.225 2.51m2.225-2.51a11.953 11.953 0 0 0 5.572 1.407l2.036-.01a11.953 11.953 0 0 0 1.407-5.572m-5.572-1.407a12.022 12.022 0 0 1 5.84 0" />
  </svg>
);