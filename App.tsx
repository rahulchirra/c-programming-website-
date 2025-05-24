
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ModuleCard } from './components/ModuleCard';
import { Footer } from './components/Footer';
import { RoadmapSection } from './components/RoadmapSection';
import { StopwatchWidget } from './components/StopwatchWidget'; // Import StopwatchWidget
import { learningModules } from './constants';
import { LearningModule } from './types';

const App: React.FC = () => {
  const [isStopwatchVisible, setIsStopwatchVisible] = useState(false);

  const toggleStopwatch = () => {
    setIsStopwatchVisible(!isStopwatchVisible);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onToggleStopwatch={toggleStopwatch} /> {/* Pass toggle function */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <HeroSection />

        <section id="learning-path" className="py-12">
          {/* Made with love */}
          <p className="text-center text-slate-600 font-semibold my-4 md:my-6 text-lg">
            Made with ❤️ by Rahul Chirra
          </p>

          {/* Connect With Me Section */}
          <div className="text-center my-8 md:my-10">
            <h3 className="text-3xl font-bold text-slate-700 mb-6">
              Connect with me
            </h3>
            <div className="flex justify-center items-center space-x-6">
              <a href="https://www.linkedin.com/in/rahul-c-457657225/" target="_blank" rel="noopener noreferrer" aria-label="Rahul Chirra on LinkedIn" title="LinkedIn Profile">
                <img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" alt="LinkedIn" className="w-10 h-10 transition-transform hover:scale-110" />
              </a>
              <a href="https://github.com/rahulchirra" target="_blank" rel="noopener noreferrer" aria-label="Rahul Chirra on GitHub" title="GitHub Profile">
                <img src="https://img.icons8.com/ios-filled/100/000000/github.png" alt="GitHub" className="w-10 h-10 transition-transform hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/rahullchirra/" target="_blank" rel="noopener noreferrer" aria-label="Rahul Chirra on Instagram" title="Instagram Profile">
                <img src="https://img.icons8.com/fluency/100/instagram-new.png" alt="Instagram" className="w-10 h-10 transition-transform hover:scale-110" />
              </a>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-center text-blue-700 mb-2">Your Path to C Mastery</h2>
          <p className="text-center text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
            Embark on a structured journey from the fundamentals to advanced C programming. Each module builds upon the last, ensuring a solid understanding.
          </p>
          <div className="space-y-8">
            {learningModules.map((module: LearningModule) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </section>

        <section id="why-c" className="py-16 bg-white rounded-xl shadow-2xl my-16 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-blue-700 mb-8">Why Invest Your Time in C?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-800">
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Unmatched Performance</h3>
              <p>C provides low-level memory manipulation and minimal runtime overhead, making it ideal for performance-critical applications like operating systems, game engines, and embedded systems.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Foundation of Modern Computing</h3>
              <p>Many modern languages (C++, Java, Python, JavaScript) and operating systems (Windows, Linux, macOS) are built using C or have C-like syntax. Understanding C gives you a deeper insight into how computers work.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-green-600 mb-3">Versatility & Portability</h3>
              <p>C compilers are available for almost every platform, making C code highly portable. It's used in a vast range of applications, from microcontrollers to supercomputers.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-shadow duration-300 md:col-span-2 lg:col-span-1 lg:col-start-2">
               <h3 className="text-xl font-semibold text-green-600 mb-3">Career Opportunities</h3>
              <p>Proficiency in C is highly valued in fields like system programming, embedded systems, game development, and high-performance computing, opening up diverse career paths.</p>
            </div>
          </div>
        </section>

        <RoadmapSection />

      </main>
      <Footer />
      {/* Render StopwatchWidget and pass isVisible prop */}
      <StopwatchWidget onClose={toggleStopwatch} isVisible={isStopwatchVisible} />
    </div>
  );
};

export default App;