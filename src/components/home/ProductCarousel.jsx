import React from 'react';
import { useCart } from '@/context/CartContext';
import BookCover from '@/components/shared/BookCover';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ProductCarousel = ({ title, books, id }) => {
  const { addToCart } = useCart();

  return (
    <section id={id} className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button
          onClick={() => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
        >
          View All →
        </button>
      </div>

      <Carousel opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent>
          {books.map((book, index) => (
            <CarouselItem key={book.id} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="p-1">
                <div className="group relative flex flex-col items-center rounded-lg p-3 hover:shadow-lg transition-shadow duration-300 bg-white border border-transparent hover:border-gray-100">
                  {book.badge && (
                    <span className={`absolute top-2 left-2 z-10 text-[10px] font-bold px-2 py-0.5 rounded-full text-white ${
                      book.badge === 'Bestseller' ? 'bg-green-500' :
                      book.badge === 'Trending' ? 'bg-orange-500' :
                      book.badge === 'New' ? 'bg-blue-500' :
                      book.badge === 'Pre-order' ? 'bg-purple-500' : 'bg-gray-500'
                    }`}>
                      {book.badge}
                    </span>
                  )}
                  <div className="w-[130px] h-[185px] mb-3 rounded overflow-hidden transform group-hover:scale-105 transition-transform duration-300">
                    <BookCover coverData={book.coverData} />
                  </div>
                  <div className="text-center w-full">
                    <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-blue-600 transition-colors cursor-pointer" title={book.title}>
                      {book.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-2">{book.author}</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="font-bold text-lg">₹{book.price}</span>
                      {book.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">₹{book.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => addToCart(book)}
                    className="w-full mt-3 py-2 bg-yellow-400 text-black hover:bg-yellow-500 border border-yellow-500 rounded-full font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-95"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-3 hidden md:flex h-10 w-10 shadow-md" />
        <CarouselNext className="-right-3 hidden md:flex h-10 w-10 shadow-md" />
      </Carousel>
    </section>
  );
};

export default ProductCarousel;
