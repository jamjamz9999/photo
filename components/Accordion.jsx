import React, { useState } from 'react';

const Accordion = ({ question, answer, defaultOpen = false }) => {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-5 text-left"
        aria-expanded={open}
      >
        <span className="font-semibold text-lg text-gray-900">{question}</span>
        <span className="text-gray-600">{open ? '−' : '+'}</span>
      </button>
      <div className={`px-5 pb-5 transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p className="text-gray-700 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
