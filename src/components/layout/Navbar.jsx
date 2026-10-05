import React, { useState } from 'react';
import { Search, ShoppingCart, User, BookOpen, Menu, X, LogOut } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { cartCount, toggleCart } = useCart();
  const { user, isLoggedIn, navigateTo, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const scrollTo = (id) => {
    navigateTo('home');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
    setMobileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: "${searchQuery}" — Feature coming soon! 🔍`);
    }
  };

  return (
    <header className="bg-yellow-400 py-3 px-4 md:px-8 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <button onClick={() => { navigateTo('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <BookOpen className="h-6 w-6 text-black" />
          <span className="font-bold text-xl tracking-tight text-black">Bookz</span>
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <button onClick={() => scrollTo('manga')} className="hover:text-black/70 transition-colors uppercase">Manga</button>
          <button onClick={() => scrollTo('bestsellers')} className="hover:text-black/70 transition-colors uppercase">Best Sellers</button>
          <button onClick={() => scrollTo('coming-soon')} className="hover:text-black/70 transition-colors uppercase">Coming Soon</button>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-xl hidden md:flex items-center relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Title, Author, Publisher or ISBN"
            className="w-full bg-white border-none rounded-full pr-10 pl-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
          />
          <button type="submit" className="absolute right-3 text-gray-400 hover:text-gray-600 transition-colors">
            <Search className="h-4 w-4" />
          </button>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 hover:bg-yellow-500 rounded-full transition-colors">
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          {/* User / Login */}
          {isLoggedIn ? (
            <div className="hidden md:flex items-center gap-2">
              <div className="flex items-center gap-2 bg-yellow-300 px-3 py-1.5 rounded-full">
                <div className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-bold">
                  {user.name.charAt(0)}
                </div>
                <span className="text-sm font-medium">{user.name}</span>
              </div>
              <button onClick={logout} className="p-2 hover:bg-yellow-500 rounded-full transition-colors" title="Logout">
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigateTo('login')}
              className="hidden md:flex items-center gap-1.5 bg-black text-white px-4 py-1.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              <User className="h-4 w-4" />
              Login
            </button>
          )}

          {/* Cart */}
          <button onClick={toggleCart} className="p-2 hover:bg-yellow-500 rounded-full transition-colors relative">
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center animate-bounce-once">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 bg-yellow-300 rounded-lg p-4 space-y-3 animate-fade-in">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search books..."
              className="w-full bg-white border-none rounded-full pr-10 pl-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/20"
            />
            <button type="submit" className="absolute right-3 top-2.5 text-gray-400">
              <Search className="h-4 w-4" />
            </button>
          </form>
          <div className="flex flex-col gap-2">
            <button onClick={() => scrollTo('manga')} className="text-left py-2 px-3 rounded-lg hover:bg-yellow-400 font-medium transition-colors">📚 Manga</button>
            <button onClick={() => scrollTo('bestsellers')} className="text-left py-2 px-3 rounded-lg hover:bg-yellow-400 font-medium transition-colors">⭐ Best Sellers</button>
            <button onClick={() => scrollTo('coming-soon')} className="text-left py-2 px-3 rounded-lg hover:bg-yellow-400 font-medium transition-colors">🆕 Coming Soon</button>
            {isLoggedIn ? (
              <>
                <div className="flex items-center gap-2 py-2 px-3 bg-yellow-400 rounded-lg">
                  <div className="w-6 h-6 rounded-full bg-black text-white text-xs flex items-center justify-center font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <span className="font-medium">{user.name}</span>
                </div>
                <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="text-left py-2 px-3 rounded-lg hover:bg-red-100 text-red-600 font-medium transition-colors">🚪 Logout</button>
              </>
            ) : (
              <button onClick={() => { navigateTo('login'); setMobileMenuOpen(false); }} className="text-left py-2 px-3 rounded-lg hover:bg-yellow-400 font-medium transition-colors">👤 Login / Sign Up</button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
