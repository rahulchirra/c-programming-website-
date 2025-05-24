
import React from 'react';
import { learningModules } from '../constants';
import { LearningModule, ModuleLevel } from '../types';
// Removed icon imports: GettingStartedIcon, ControlFlowIcon, PointersIcon, ExpertIcon

interface Stage {
  level: ModuleLevel;
  title: string;
  description: string;
  modules: LearningModule[];
  color: string;
  // icon: React.FC<{ className?: string }>; // Removed icon from Stage interface
}

export const RoadmapSection: React.FC = () => {
  const levelsOrder: ModuleLevel[] = [
    ModuleLevel.BEGINNER,
    ModuleLevel.INTERMEDIATE,
    ModuleLevel.ADVANCED,
    ModuleLevel.EXPERT,
  ];

  const stageDetails: Record<ModuleLevel, { title: string; description: string; color: string; /* icon: React.FC<{ className?: string }> */ }> = {
    [ModuleLevel.BEGINNER]: {
      title: "Phase 1: Foundations",
      description: "Start your C journey with the fundamental concepts, syntax, and basic programming constructs.",
      color: "text-green-600 border-green-500",
      // icon: GettingStartedIcon, // Removed
    },
    [ModuleLevel.INTERMEDIATE]: {
      title: "Phase 2: Building Blocks",
      description: "Move on to more complex topics like functions, arrays, strings, and structured programming techniques.",
      color: "text-blue-700 border-blue-600",
      // icon: ControlFlowIcon, // Removed
    },
    [ModuleLevel.ADVANCED]: {
      title: "Phase 3: Deep Dive",
      description: "Explore C's powerful features including pointers, memory management, and advanced data structures.",
      color: "text-amber-600 border-amber-500", 
      // icon: PointersIcon, // Removed
    },
    [ModuleLevel.EXPERT]: {
      title: "Phase 4: Mastery & Beyond",
      description: "Delve into system-level programming, advanced algorithms, and contribute to real-world C projects.",
      color: "text-blue-800 border-blue-700",
      // icon: ExpertIcon, // Removed
    },
  };

  const stages: Stage[] = levelsOrder.map(level => {
    const details = stageDetails[level];
    return {
      level,
      title: details.title,
      description: details.description,
      modules: learningModules.filter(module => module.level === level),
      color: details.color,
      // icon: details.icon, // Removed
    };
  }).filter(stage => stage.modules.length > 0);

  return (
    <section id="roadmap" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-4">Your Comprehensive Roadmap to C Mastery</h2>
        <p className="text-center text-gray-700 mb-12 text-lg max-w-3xl mx-auto">
          Follow this structured roadmap to systematically progress through the C language, from basic principles to expert-level application. Each phase builds upon the previous, ensuring a solid and comprehensive understanding.
        </p>
        <div className="space-y-10">
          {stages.map((stage, index) => (
            <div key={stage.level} className={`bg-white p-6 md:p-8 rounded-xl shadow-xl border-t-4 ${stage.color.split(' ')[1]}`}>
              <div className="flex items-start space-x-4 mb-4">
                {/* <stage.icon className={`w-10 h-10 flex-shrink-0 ${stage.color.split(' ')[0]}`} /> Removed icon rendering */}
                <div className={!stageDetails[stage.level] /* Removed .icon check */ ? 'pl-0' : 'pl-0'}> {/* Adjusted padding logic if needed, or remove conditional padding */}
                  <h3 className={`text-2xl font-semibold ${stage.color.split(' ')[0]}`}>{stage.title} - {stage.level}</h3>
                  <p className="text-gray-600 text-sm mt-1">{stage.description}</p>
                </div>
              </div>
              
              {stage.modules.length > 0 ? (
                <ul className="space-y-3 list-inside pl-2">
                  {stage.modules.map(module => (
                    <li key={module.id} className="text-gray-800">
                      <a 
                        href={`#${module.id}`} 
                        className="group inline-flex items-center text-lg hover:text-blue-600 transition-colors duration-200"
                        aria-label={`Go to module: ${module.title}`}
                      >
                        <span className="font-medium group-hover:underline">{module.title}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                        </svg>
                      </a>
                      {module.tagline && <p className="text-xs text-gray-500 ml-1">{module.tagline}</p>}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600">No modules currently listed for this stage.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
