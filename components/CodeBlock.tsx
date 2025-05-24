
import React from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const C_KEYWORDS: readonly string[] = [
  'auto', 'break', 'case', 'char', 'const', 'continue', 'default', 'do',
  'double', 'else', 'enum', 'extern', 'float', 'for', 'goto', 'if',
  'int', 'long', 'register', 'return', 'short', 'signed', 'sizeof', 'static',
  'struct', 'switch', 'typedef', 'union', 'unsigned', 'void', 'volatile', 'while',
  '_Bool', '_Complex', '_Imaginary' // C99 keywords
];

const C_PREPROCESSOR: readonly string[] = [
  '#include', '#define', '#undef', '#if', '#ifdef', '#ifndef', '#else', '#elif', '#endif',
  '#error', '#pragma', '#line'
];

export const escapeHtml = (unsafe: string): string => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export const highlightSyntax = (code: string): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  const escapedCode = escapeHtml(code); 

  const tokenPatterns = [
    // Order matters: more specific or longer patterns first
    { type: 'comment-block', regex: /(\/\*[\s\S]*?\*\/)/g, className: 'text-green-400' }, // Multi-line comment
    { type: 'comment-line', regex: /(\/\/.*)/g, className: 'text-green-400' },           // Single-line comment
    { type: 'preprocessor', regex: new RegExp(`(^\\s*(?:${C_PREPROCESSOR.join('|').replace(/#/g, '\\#')}))\\b`, 'gm'), className: 'text-blue-400' },
    { type: 'include-path-angle', regex: /<[^>\n]+>/g, className: 'text-amber-300' }, 
    { type: 'string', regex: /("(?:\\[\s\S]|[^\\"])*")/g, className: 'text-amber-300' }, 
    { type: 'char', regex: /('(?:\\[\s\S]|[^\\'])*')/g, className: 'text-amber-300' },   
    { type: 'keyword', regex: new RegExp(`\\b(${C_KEYWORDS.join('|')})\\b`, 'g'), className: 'text-sky-400' }, // Using sky for keywords
    { type: 'number', regex: /\b(0x[0-9a-fA-F]+[ULuL]*|\d+\.?\d*(?:[eE][+-]?\d+)?[fFLulUL]*)\b/g, className: 'text-yellow-300' }, 
    { type: 'function', regex: /(\b[a-zA-Z_]\w*\b)(?=\s*\()/g, className: 'text-teal-300' }, // Using teal for functions
  ];
  
  const tokens: { index: number; length: number; type: string; className: string; text: string }[] = [];

  tokenPatterns.forEach(patternInfo => {
    let match;
    const regex = new RegExp(patternInfo.regex); 
    while((match = regex.exec(escapedCode)) !== null) {
      tokens.push({
        index: match.index,
        length: match[0].length,
        type: patternInfo.type,
        className: patternInfo.className,
        text: match[0]
      });
    }
  });

  tokens.sort((a, b) => {
    if (a.index !== b.index) {
      return a.index - b.index;
    }
    return b.length - a.length; 
  });
  
  const filteredTokens: typeof tokens = [];
  let lastCoveredIndex = 0;
  for (const token of tokens) {
    if (token.index >= lastCoveredIndex) {
      filteredTokens.push(token);
      lastCoveredIndex = token.index + token.length;
    }
  }

  let currentIndex = 0;
  filteredTokens.forEach((token, i) => {
    if (token.index > currentIndex) {
      parts.push(escapedCode.substring(currentIndex, token.index));
    }
    parts.push(<span key={`${token.type}-${token.index}-${i}`} className={token.className}>{token.text}</span>);
    currentIndex = token.index + token.length;
  });

  if (currentIndex < escapedCode.length) {
    parts.push(escapedCode.substring(currentIndex));
  }
  
  if (parts.length === 0 && escapedCode.length > 0 && code.trim() !== '') { 
     parts.push(escapedCode); 
  }

  return parts;
};


export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'c' }) => {
  const highlightedCode = highlightSyntax(code);

  return (
    <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden my-2">
      <div className="bg-gray-700 px-4 py-2 text-xs text-gray-200 font-mono flex justify-between items-center">
        <span>{language.toUpperCase()}</span>
        <button 
          onClick={() => navigator.clipboard.writeText(code)}
          className="text-xs bg-amber-500 hover:bg-amber-600 text-gray-900 px-2 py-1 rounded transition-colors"
          title="Copy code"
          aria-label="Copy code to clipboard"
        >
          Copy
        </button>
      </div>
      <pre className="p-4 text-sm text-gray-100 overflow-x-auto whitespace-pre-wrap">
        <code>{highlightedCode}</code>
      </pre>
    </div>
  );
};