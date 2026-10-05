import React from 'react';

const authors = [
  { name: 'Sudha Murthy', initials: 'SM', color: '#e11d48' },
  { name: 'Amish Tripathi', initials: 'AT', color: '#7c3aed' },
  { name: 'Chetan Bhagat', initials: 'CB', color: '#2563eb' },
  { name: 'Ruskin Bond', initials: 'RB', color: '#059669' },
  { name: 'Ravinder Singh', initials: 'RS', color: '#d97706' },
  { name: 'Devdutt Pattanaik', initials: 'DP', color: '#dc2626' },
];

const AuthorsSection = () => {
  return (
    <div id="authors" className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Discover Great Authors</h2>
        <p className="text-gray-500">Find books from your favorite writers</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-12">
        {authors.map((author, index) => (
          <button
            key={index}
            onClick={() => alert(`Viewing books by ${author.name} — Coming soon! ✍️`)}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div className="rounded-full p-1 border-2 border-transparent group-hover:border-yellow-400 transition-all duration-300">
              <div
                className="h-20 w-20 md:h-24 md:w-24 rounded-full shadow-md flex items-center justify-center text-white font-bold text-xl md:text-2xl group-hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: author.color }}
              >
                {author.initials}
              </div>
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-black transition-colors">{author.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AuthorsSection;
