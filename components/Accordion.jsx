import React, { useState } from 'react';

const Accordion = ({ question, answer, defaultOpen = false }) => {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="relative border border-white/10 rounded-2xl overflow-hidden bg-white/6 backdrop-blur-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left glass-btn"
        aria-expanded={open}
      >
        <span className="font-semibold text-lg text-gray-900">{question}</span>
        <span className={`text-gray-600 transform transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div className={`px-5 pb-5 transition-all duration-350 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p className="text-gray-700 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
