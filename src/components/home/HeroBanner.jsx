import React from 'react';

const HeroBanner = () => {
  return (
    <div className="w-full relative overflow-hidden">
      <div
        className="w-full h-[250px] md:h-[400px] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Bookz-main/Bookz/public/manga_scratch_banner.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <button
            onClick={() => {
              const el = document.getElementById('manga');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm md:text-lg px-6 md:px-8 py-2.5 md:py-3 rounded-full border-2 border-white uppercase transition-all hover:scale-105 shadow-lg active:scale-95"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
