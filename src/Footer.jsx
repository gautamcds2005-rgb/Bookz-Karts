import React from 'react';
import { BookOpen, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-yellow-400 py-12 px-4 md:px-8 mt-12 border-t border-yellow-500 relative">
      {/* Back to top */}
      <button
        onClick={scrollToTop}
        className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white rounded-full p-2 shadow-lg hover:bg-gray-800 transition-colors"
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <button onClick={scrollToTop} className="flex items-center gap-2 mb-4">
            <BookOpen className="h-5 w-5" />
            <span className="font-bold text-2xl tracking-tight text-black">Bookz</span>
          </button>
          <p className="text-sm text-gray-800 mb-4">
            Your one-stop destination for books, manga, games, and more. Share the joy of reading!
          </p>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors text-xs font-bold">f</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors text-xs font-bold">𝕏</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors text-xs font-bold">ig</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">Shop</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><button onClick={() => scrollTo('bestsellers')} className="hover:underline">Best Sellers</button></li>
            <li><button onClick={() => scrollTo('coming-soon')} className="hover:underline">New Arrivals</button></li>
            <li><button onClick={() => scrollTo('manga')} className="hover:underline">Manga</button></li>
            <li><button onClick={() => scrollTo('toys')} className="hover:underline">Toys & Games</button></li>
            <li><button onClick={() => alert('Gift Cards — Coming soon! 🎁')} className="hover:underline">Gift Cards</button></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">About Us</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><button onClick={() => alert('Our Story — Coming soon!')} className="hover:underline">Our Story</button></li>
            <li><button onClick={() => alert('Careers — Coming soon!')} className="hover:underline">Careers</button></li>
            <li><button onClick={() => alert('Blog — Coming soon!')} className="hover:underline">Blog</button></li>
            <li><button onClick={() => alert('Press — Coming soon!')} className="hover:underline">Press</button></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 text-lg">Support</h3>
          <ul className="space-y-2 text-sm text-gray-800">
            <li><button onClick={() => alert('Help Center — Coming soon!')} className="hover:underline">Help Center</button></li>
            <li><button onClick={() => alert('Track Order — Coming soon!')} className="hover:underline">Track Order</button></li>
            <li><button onClick={() => alert('Returns — Coming soon!')} className="hover:underline">Returns & Refunds</button></li>
            <li><button onClick={() => alert('Contact — Coming soon!')} className="hover:underline">Contact Us</button></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 pt-6 border-t border-yellow-500 flex flex-col md:flex-row items-center justify-between text-xs text-gray-700 gap-4">
        <p>&copy; 2026 Bookz. All rights reserved.</p>
        <div className="flex gap-4">
          <button onClick={() => alert('Terms of Service — Coming soon!')} className="hover:underline">Terms of Service</button>
          <button onClick={() => alert('Privacy Policy — Coming soon!')} className="hover:underline">Privacy Policy</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;