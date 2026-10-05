import React from 'react';

const BookCover = ({ coverData, className = '' }) => {
  if (!coverData) return null;
  
  const lines = coverData.title.split('\n');
  
  return (
    <div
      className={`w-full h-full rounded shadow-md flex flex-col items-center justify-center p-3 relative overflow-hidden select-none ${className}`}
      style={{ backgroundColor: coverData.bg, color: coverData.text }}
    >
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-16 h-16 opacity-10 rounded-bl-full" style={{ backgroundColor: coverData.text }} />
      <div className="absolute bottom-0 left-0 w-12 h-12 opacity-10 rounded-tr-full" style={{ backgroundColor: coverData.text }} />
      
      {/* Spine line */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] opacity-20" style={{ backgroundColor: coverData.text }} />
      
      <div className="flex flex-col items-center justify-center gap-1 z-10 text-center">
        {lines.map((line, i) => (
          <span key={i} className="font-black text-sm leading-tight tracking-tight">{line}</span>
        ))}
      </div>
      <div className="absolute bottom-3 text-center z-10">
        <span className="text-[9px] font-medium opacity-70 uppercase tracking-wider">{coverData.subtitle}</span>
      </div>
    </div>
  );
};

export default BookCover;
