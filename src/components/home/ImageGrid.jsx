import React from 'react';

const ImageGrid = ({ title, subtitle, items }) => {
  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => alert(`Exploring "${item.label}" — Coming soon! 🎮`)}
            className="flex flex-col group cursor-pointer text-left"
          >
            <div className="rounded-lg overflow-hidden h-[140px] md:h-[180px] mb-3 relative" style={{ backgroundColor: item.bgColor || '#f3f4f6' }}>
              <div className="absolute inset-0 flex items-center justify-center text-5xl">
                {item.emoji}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">{item.label}</span>
              <span className="text-xs bg-yellow-400 text-black hover:bg-yellow-500 rounded-full font-bold px-3 py-1 transition-colors group-hover:scale-105">
                Explore
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
