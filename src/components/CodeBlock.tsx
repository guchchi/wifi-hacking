
import React from 'react';

interface CodeBlockProps {
  code: string;
  className?: string;
}

const CodeBlock = ({ code, className = '' }: CodeBlockProps) => {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-circle bg-red-500"></div>
        <div className="terminal-circle bg-yellow-500"></div>
        <div className="terminal-circle bg-green-500"></div>
      </div>
      <pre className={`terminal-body ${className}`}>
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
