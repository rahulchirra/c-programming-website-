
import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-32 text-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl shadow-2xl mb-16">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-tight">
          Comprehensive Roadmap to <br className="hidden sm:block" /> Master <span className="text-amber-400">C Programming</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto">
          Unlock the power of C with our structured learning path. Build a solid foundation and tackle advanced concepts with confidence, progressing from novice to expert.
        </p>
        <a
          href="#learning-path"
          className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-4 px-10 rounded-lg text-lg transition-transform transform hover:scale-105 shadow-lg hover:shadow-amber-500/50"
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
};
