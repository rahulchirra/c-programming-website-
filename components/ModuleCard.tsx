
import React, { useState } from 'react';
import { LearningModule, Topic, CodeExample, ModuleLevel } from '../types';
import { CodeBlock } from './CodeBlock';
import { CodeEditor } from './CodeEditor'; 
// Removed ChevronDownIcon, ChevronUpIcon, CodeIcon imports

interface ModuleCardProps {
  module: LearningModule;
}

const getLevelColor = (level: ModuleLevel): string => {
  switch (level) {
    case ModuleLevel.BEGINNER:
      return 'bg-green-500 text-white';
    case ModuleLevel.INTERMEDIATE:
      return 'bg-green-400 text-green-900';
    case ModuleLevel.ADVANCED:
      return 'bg-blue-500 text-white';
    case ModuleLevel.EXPERT:
      return 'bg-amber-500 text-white';
    default:
      return 'bg-gray-400 text-gray-800';
  }
};

export const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const ModuleIcon = module.icon; // Removed icon usage

  return (
    <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-blue-500/20 focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center space-x-4 focus:outline-none"
        aria-expanded={isOpen}
        aria-controls={`module-content-${module.id}`}
      >
        {/* {ModuleIcon && <ModuleIcon className="text-blue-600 flex-shrink-0 w-10 h-10" />} Removed ModuleIcon rendering */}
        <div className="flex-grow">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-2xl font-semibold text-blue-700">{module.title}</h3>
            <span className={`mt-1 sm:mt-0 px-3 py-1 text-xs font-semibold rounded-full self-start sm:self-center ${getLevelColor(module.level)}`}>
              {module.level}
            </span>
          </div>
          {module.tagline && <p className="text-sm text-blue-500 mt-1">{module.tagline}</p>}
          <p className="text-gray-700 mt-2 text-sm">{module.description}</p>
        </div>
        {/* Removed ChevronUpIcon and ChevronDownIcon */}
        <span className="ml-2 text-sm text-blue-600">{isOpen ? 'Collapse' : 'Expand'}</span>
      </button>

      {isOpen && (
        <div id={`module-content-${module.id}`} className="px-6 pb-6 pt-0 bg-gray-50 border-t border-gray-300">
          {module.expertInsight && (
            <div className="my-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm font-semibold text-blue-700 mb-1">Expert Insight:</p>
              <p className="text-gray-700 italic text-sm">{module.expertInsight}</p>
            </div>
          )}
          {module.topics.map((topic: Topic) => (
            <div key={topic.id} className="py-4 border-b border-gray-300 last:border-b-0">
              <h4 className="text-xl font-medium text-green-700 mb-3 flex items-center">
                {/* <CodeIcon className="mr-2 h-5 w-5 text-green-600"/> Removed CodeIcon */}
                {topic.name}
              </h4>
              <p className="text-gray-700 mb-4 whitespace-pre-line">{topic.explanation}</p>
              
              {topic.codeExamples.map((example: CodeExample, index: number) => (
                <div key={index} className="my-6 p-4 bg-white rounded-lg shadow-lg"> {/* Container for one example + editor */}
                  {example.title && <h5 className="text-lg font-semibold text-gray-800 mb-3">{example.title}</h5>}
                  <div className="md:flex md:space-x-6">
                    <div className="md:w-1/2 mb-6 md:mb-0">
                      <h6 className="text-sm font-semibold text-gray-600 mb-1">Example Code:</h6>
                      <CodeBlock code={example.code} language="c" />
                      {example.explanation && <p className="text-sm text-gray-600 mt-2 italic">{example.explanation}</p>}
                      {example.output && (
                        <div className="mt-3">
                          <p className="text-sm font-semibold text-gray-700">Expected Output:</p>
                          <pre className="bg-gray-800 text-gray-200 p-3 rounded-md text-sm whitespace-pre-wrap max-h-40 overflow-y-auto">{example.output}</pre>
                        </div>
                      )}
                    </div>
                    <div className="md:w-1/2">
                       <h6 className="text-sm font-semibold text-gray-600 mb-1">Practice Area:</h6>
                      <CodeEditor 
                        initialCode={example.code} 
                        originalOutput={example.output}
                        exampleTitle={example.title}
                      />
                    </div>
                  </div>
                </div>
              ))}

              {topic.furtherReading && topic.furtherReading.length > 0 && (
                <div className="mt-4">
                  <h6 className="text-sm font-semibold text-gray-700 mb-1">Further Reading:</h6>
                  <ul className="list-disc list-inside pl-2">
                    {topic.furtherReading.map((link, idx) => (
                      <li key={idx} className="text-sm">
                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
