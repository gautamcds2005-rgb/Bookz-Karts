import React from 'react';

const PromoBanners = () => {
  return (
    <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Gift a Bookz */}
      <button
        onClick={() => alert('#GiftABookz — Coming soon! 🎁📚')}
        className="rounded-lg overflow-hidden h-[250px] bg-cover bg-center shadow-sm hover:shadow-lg transition-all cursor-pointer relative group text-left"
        style={{ backgroundImage: "url('/gift_a_bookz_banner.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
      </button>

      {/* Grid of smaller banners */}
      <div className="grid grid-cols-1 gap-4 h-[250px]">
        <button
          onClick={() => alert('Book Bundle: Script to Screen — Coming soon! 🎬')}
          className="rounded-lg overflow-hidden h-[115px] bg-cover bg-center shadow-sm hover:shadow-lg transition-all cursor-pointer relative group text-left"
          style={{ backgroundImage: "url('/book_bundle_banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </button>
        <button
          onClick={() => alert('Mystery Box — Coming soon! 📦✨')}
          className="rounded-lg overflow-hidden h-[115px] bg-cover bg-center shadow-sm hover:shadow-lg transition-all cursor-pointer relative group text-left"
          style={{ backgroundImage: "url('/mystery_box_banner.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanners;
