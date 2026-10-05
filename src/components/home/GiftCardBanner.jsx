import React from 'react';

const GiftCardBanner = () => {
  return (
    <div className="py-8">
      <div
        className="w-full rounded-xl overflow-hidden h-[150px] md:h-[250px] lg:h-[300px] bg-cover bg-center shadow-md cursor-pointer hover:shadow-lg transition-shadow relative group"
        style={{ backgroundImage: "url('/gift_card_banner.jpg')" }}
        onClick={() => alert('Gift Cards — Coming soon! 🎁')}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm shadow-lg">
            Get Gift Card →
          </span>
        </div>
      </div>
    </div>
  );
};

export default GiftCardBanner;
