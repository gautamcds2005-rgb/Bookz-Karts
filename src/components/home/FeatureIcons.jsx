import React from 'react';

const FeatureIcons = ({ title, subtitle, items }) => {
  return (
    <div className="py-12 border-t border-b border-gray-100 my-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-1">{title}</h2>
        {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => alert(`Browsing "${item.label}" — Coming soon! 📖`)}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center text-3xl group-hover:shadow-md transition-all group-hover:scale-110 transform duration-200 group-hover:border-yellow-400">
              {item.icon}
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FeatureIcons;
