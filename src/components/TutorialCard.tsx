
import React from 'react';
import CodeBlock from './CodeBlock';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface TutorialCardProps {
  number: number;
  title: string;
  description: string;
  code?: string;
  image?: string;
}

const TutorialCard = ({ number, title, description, code, image }: TutorialCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="card mb-6">
      <div 
        className="flex justify-between items-center cursor-pointer" 
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <div className="bg-hack-green text-hack-dark w-10 h-10 rounded-full flex items-center justify-center mr-4 font-bold">
            {number}
          </div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-6 w-6 text-hack-green" />
        ) : (
          <ChevronDown className="h-6 w-6 text-hack-green" />
        )}
      </div>

      {isExpanded && (
        <div className="mt-6 space-y-4">
          <p className="text-gray-300">{description}</p>
          
          {code && (
            <CodeBlock code={code} />
          )}
          
          {image && (
            <div className="mt-4">
              <img src={image} alt={title} className="rounded-md w-full" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TutorialCard;
