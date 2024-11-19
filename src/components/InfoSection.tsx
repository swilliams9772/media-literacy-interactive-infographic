import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface InfoSectionProps {
  title: string;
  icon: React.ReactNode;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function InfoSection({ title, icon, content, isOpen, onToggle }: InfoSectionProps) {
  return (
    <div className="bg-secondary rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl">
      <button
        onClick={onToggle}
        className="w-full px-8 py-6 flex items-center justify-between bg-gradient-to-r from-primary to-red-700 text-white hover:from-red-700 hover:to-primary transition-all duration-300"
      >
        <div className="flex items-center gap-4">
          <div className="p-2 bg-white/10 rounded-lg">
            {icon}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="transform transition-transform duration-300">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </div>
      </button>

      <div
        className={`transform transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="p-8 text-textPrimary bg-secondary/95 backdrop-blur-sm">
          <article className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h1 className="text-2xl font-bold mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-xl font-semibold mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-lg font-medium mb-2">{children}</h3>,
                p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-6 mb-4">{children}</ul>,
                li: ({ children }) => <li className="mb-2">{children}</li>,
                strong: ({ children }) => <strong className="font-semibold text-accent">{children}</strong>,
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}