import React, { useState } from 'react';
import { useCart } from '@/context/CartContext';
import BookCover from '@/components/shared/BookCover';
import { categoryMangaBooks } from '@/data/books';

const allCategories = [
  { name: 'Leadership', color: 'text-gray-400' },
  { name: 'Mystery', color: 'text-gray-400' },
  { name: 'Manga', color: 'text-black font-black' },
  { name: 'Crime', color: 'text-gray-400' },
  { name: 'Romance', color: 'text-gray-400' },
];

const CategoryBanner = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('Manga');

  return (
    <div className="py-8 bg-blue-50 rounded-xl px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 my-8">
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl mb-6 flex flex-col gap-2">
          {allCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat.name)}
              className={`text-left transition-all duration-300 hover:text-black ${
                activeCategory === cat.name ? 'text-black font-black scale-105 origin-left' : 'text-gray-400 font-medium hover:scale-[1.02] origin-left'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </h2>
      </div>
      <div className="flex-1 flex gap-4 overflow-x-auto pb-4 justify-center md:justify-end">
        {categoryMangaBooks.map((book) => (
          <div key={book.id} className="w-[130px] md:w-[155px] shrink-0 bg-white p-2 rounded-lg shadow-md border border-gray-100 flex flex-col items-center hover:shadow-lg transition-shadow">
            <div className="w-full h-[160px] md:h-[200px] mb-2 rounded overflow-hidden">
              <BookCover coverData={book.coverData} />
            </div>
            <p className="text-xs font-semibold mb-1 w-full text-center truncate">{book.title}</p>
            <p className="text-[10px] text-gray-500 mb-2">{book.author}</p>
            <button
              onClick={() => addToCart(book)}
              className="text-xs bg-yellow-400 w-full py-1.5 rounded-full font-bold hover:bg-yellow-500 transition-colors active:scale-95"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBanner;
