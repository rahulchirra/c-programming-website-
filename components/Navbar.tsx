
import React from 'react';
import { TimerIcon } from './icons/TimerIcon'; // Import TimerIcon

interface NavbarProps {
  onToggleStopwatch: () => void; // Prop to toggle stopwatch
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleStopwatch }) => {
  return (
    <nav className="bg-blue-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-amber-400 hover:text-amber-300 transition-colors">
          C Masterclass
        </a>
        <div className="flex items-center space-x-4">
          <a href="#learning-path" className="text-blue-100 hover:text-amber-400 transition-colors">Learning Path</a>
          <a href="#why-c" className="text-blue-100 hover:text-amber-400 transition-colors">Why C?</a>
          {/* <a href="#contact" className="text-blue-100 hover:text-amber-400 transition-colors">Contact</a> */}
          <button
            onClick={onToggleStopwatch}
            className="flex items-center text-blue-100 hover:text-amber-400 transition-colors focus:outline-none"
            aria-label="Open Study Timer"
            title="Study Timer"
          >
            <TimerIcon className="w-6 h-6 mr-1" />
            Study Timer
          </button>
        </div>
      </div>
    </nav>
  );
};