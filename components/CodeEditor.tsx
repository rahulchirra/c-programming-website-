
import React, { useState, useEffect, useRef } from 'react';
import { highlightSyntax, escapeHtml } from './CodeBlock'; // Assuming CodeBlock exports these

interface CodeEditorProps {
  initialCode: string;
  originalOutput?: string;
  exampleTitle?: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ initialCode, originalOutput, exampleTitle }) => {
  const [editedCode, setEditedCode] = useState(initialCode);
  const [simulatedOutput, setSimulatedOutput] = useState<string>('');
  const [highlightedJsx, setHighlightedJsx] = useState<React.ReactNode[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setEditedCode(initialCode);
    setSimulatedOutput(''); 
    setHighlightedJsx(highlightSyntax(initialCode));
  }, [initialCode]);

  useEffect(() => {
    setHighlightedJsx(highlightSyntax(editedCode));
  }, [editedCode]);

  const handleRun = () => {
    const isCodeUnchanged = editedCode.trim().replace(/\r\n/g, '\n') === initialCode.trim().replace(/\r\n/g, '\n');

    if (isCodeUnchanged && originalOutput) {
      setSimulatedOutput(originalOutput);
    } else if (isCodeUnchanged && !originalOutput) {
      setSimulatedOutput(`Simulated run for: ${exampleTitle || 'Your Code'}\n--- Code ---\n${editedCode}\n--- End of Code ---\n(No specific output provided for this example, but your code matches the original example.)`);
    } else {
      setSimulatedOutput(`Simulated run for: ${exampleTitle || 'Your Custom Code'}\n--- Your Code ---\n${editedCode}\n--- End of Your Code ---\n(Full C code execution in the browser is not supported. This is a practice area. If your code matched the original example, its output would be shown here if available.)`);
    }
  };

  const handleScroll = () => {
    if (textareaRef.current && backdropRef.current) {
      backdropRef.current.scrollTop = textareaRef.current.scrollTop;
      backdropRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };
  
  const sharedTextStyles = "p-3 font-mono text-sm whitespace-pre-wrap break-words";

  return (
    <div className="bg-gray-200 rounded-lg p-4 shadow-inner h-full flex flex-col">
      <div className="relative w-full flex-grow border border-gray-400 rounded-md bg-gray-800"> {/* Editor wrapper */}
        <div 
          ref={backdropRef} 
          className={`absolute top-0 left-0 w-full h-full text-gray-100 ${sharedTextStyles} overflow-auto pointer-events-none select-none rounded-md`}
          aria-hidden="true"
        >
          <pre className="!m-0 !p-0 bg-transparent"><code className="!m-0 !p-0 bg-transparent">{highlightedJsx}</code></pre>
        </div>
        <textarea
          ref={textareaRef}
          value={editedCode}
          onChange={(e) => setEditedCode(e.target.value)}
          onScroll={handleScroll}
          className={`absolute top-0 left-0 w-full h-full bg-transparent text-transparent ${sharedTextStyles} caret-gray-100 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 resize-none outline-none z-10 rounded-md border border-transparent`}
          spellCheck="false"
          aria-label={`Practice code editor for ${exampleTitle || 'C code example'}`}
          placeholder="Write your C code here..."
        />
      </div>
      <button
        onClick={handleRun}
        className="mt-3 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded text-sm transition-colors w-full sm:w-auto"
        aria-label="Run simulated code"
      >
        Run (Simulated)
      </button>
      {simulatedOutput && (
        <div className="mt-3">
          <p className="text-sm font-semibold text-gray-700 mb-1">Simulated Output:</p>
          <pre className="bg-gray-700 text-gray-200 p-3 rounded-md text-sm whitespace-pre-wrap max-h-40 overflow-y-auto border border-gray-500">
            {simulatedOutput}
          </pre>
        </div>
      )}
    </div>
  );
};