import React, { useState, useEffect, useRef } from 'react';
import { PlayIcon } from './icons/PlayIcon';
import { PauseIcon } from './icons/PauseIcon';
import { ResetIcon } from './icons/ResetIcon';
import { CloseIcon } from './icons/CloseIcon';

interface StopwatchWidgetProps {
  onClose: () => void;
  isVisible: boolean;
}

export const StopwatchWidget: React.FC<StopwatchWidgetProps> = ({ onClose, isVisible }) => {
  const [time, setTime] = useState(0); // Time in seconds
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = window.setInterval(() => { // Explicitly use window.setInterval
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const pad = (num: number) => num.toString().padStart(2, '0');
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  };

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const timeParts = formatTime(time).split(':');

  return (
    <div 
      className={`study-timer-widget ${isVisible ? 'visible' : ''}`}
      role="timer" 
      aria-live="off" // Time updates are visual, direct announcement might be noisy
      aria-labelledby="stopwatch-widget-title"
    >
      {/* Removed onClick from this div as it's no longer a backdrop */}
      <div className="relative"> {/* Added relative container for absolute positioning of close button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 text-gray-400 hover:text-amber-400 transition-colors stopwatch-button p-1 bg-gray-800 rounded-full"
          aria-label="Close timer widget"
        >
          <CloseIcon className="w-6 h-6" />
        </button>
        <h2 id="stopwatch-widget-title" className="text-2xl font-semibold text-amber-400 mb-4">Study Timer</h2>
        
        <div className="font-orbitron text-5xl my-6 tracking-normal" aria-label={`Current time: ${formatTime(time)}`}>
          <span>{timeParts[0]}</span>
          <span className={isRunning ? 'blinking-colon' : ''}>:</span>
          <span>{timeParts[1]}</span>
          <span className={isRunning ? 'blinking-colon' : ''}>:</span>
          <span>{timeParts[2]}</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3 mt-6">
          <button
            onClick={handleStartPause}
            className="flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-2.5 px-6 rounded-lg text-md stopwatch-button w-full sm:w-auto"
            aria-label={isRunning ? 'Pause timer' : time > 0 ? 'Resume timer' : 'Start timer'}
          >
            {isRunning ? <PauseIcon className="w-5 h-5 mr-2" /> : <PlayIcon className="w-5 h-5 mr-2" />}
            {isRunning ? 'Pause' : time > 0 ? 'Resume' : 'Start'}
          </button>
          <button
            onClick={handleReset}
            disabled={time === 0 && !isRunning}
            className="flex items-center justify-center bg-gray-600 hover:bg-gray-500 disabled:bg-gray-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-2.5 px-6 rounded-lg text-md stopwatch-button w-full sm:w-auto"
            aria-label="Reset timer"
          >
            <ResetIcon className="w-5 h-5 mr-2" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};