
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-800 text-blue-200 py-8 text-center border-t border-blue-700">
      <div className="container mx-auto px-6">
        <p>&copy; {new Date().getFullYear()} C Language Masterclass. All rights reserved.</p>
        <p className="text-sm mt-1">Designed to empower your C programming journey.</p>
        <p className="text-sm mt-2">Made with ❤️ by Rahul Chirra</p>
        {/* Placeholder for social links or other footer content */}
        {/* <div className="mt-4">
          <a href="#" className="text-blue-200 hover:text-amber-400 mx-2">Privacy Policy</a>
          <a href="#" className="text-blue-200 hover:text-amber-400 mx-2">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
};
