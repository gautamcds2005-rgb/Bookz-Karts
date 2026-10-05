import React from 'react';
import { CartProvider } from './context/CartContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './Footer';
import HeroBanner from './components/home/HeroBanner';
import ProductCarousel from './components/home/ProductCarousel';
import PromoBanners from './components/home/PromoBanners';
import CategoryBanner from './components/home/CategoryBanner';
import FeatureIcons from './components/home/FeatureIcons';
import ImageGrid from './components/home/ImageGrid';
import GiftCardBanner from './components/home/GiftCardBanner';
import CartDrawer from './components/shared/CartDrawer';
import Toast from './components/shared/Toast';
import LoginPage from './components/pages/LoginPage';
import CheckoutPage from './components/pages/CheckoutPage';
import { mangaBooks, bestSellers, comingSoon } from './data/books';

const ageItems = [
  { label: "0-2 Yrs", icon: "👶" },
  { label: "3-5 Yrs", icon: "🧒" },
  { label: "6-8 Yrs", icon: "👦" },
  { label: "9-12 Yrs", icon: "👧" },
  { label: "Teens", icon: "👱" },
];

const languageItems = [
  { label: "Hindi", icon: "ह" },
  { label: "Gujarati", icon: "ગુ" },
  { label: "Marathi", icon: "म" },
  { label: "Tamil", icon: "த" },
  { label: "Telugu", icon: "తె" },
  { label: "Punjabi", icon: "ਪ" },
];

const toysItems = [
  { label: "Lego & Blocks", emoji: "🧱", bgColor: "#fef3c7" },
  { label: "Board Games", emoji: "🎲", bgColor: "#dbeafe" },
  { label: "Educational", emoji: "🔬", bgColor: "#dcfce7" },
  { label: "Soft Toys", emoji: "🧸", bgColor: "#fce7f3" },
];

const smartFunItems = [
  { label: "Activity Kits", emoji: "🎨", bgColor: "#fef9c3" },
  { label: "Puzzle Books", emoji: "🧩", bgColor: "#e0e7ff" },
  { label: "Creative Art", emoji: "🖌️", bgColor: "#fae8ff" },
  { label: "Story Books", emoji: "📖", bgColor: "#ccfbf1" },
];

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <main className="container mx-auto px-4 md:px-8">
        <ProductCarousel id="manga" title="Manga Mania" books={mangaBooks} />
        <ProductCarousel id="bestsellers" title="Best Sellers" books={bestSellers} />
        <PromoBanners />
        <ProductCarousel id="coming-soon" title="Coming Soon" books={comingSoon} />
        <CategoryBanner />
        <FeatureIcons
          title="Books by Age, Stories for All"
          subtitle="Find perfect books matching your child's reading level"
          items={ageItems}
        />
        <ImageGrid
          title="Toys, Games & Endless Fun!"
          subtitle="Explore our wide range of entertaining and educational games"
          items={toysItems}
        />
        <FeatureIcons
          title="The Indian Bookshelf"
          subtitle="Explore stories in your regional language"
          items={languageItems}
        />
        <ImageGrid
          title="Smart Fun for Little Minds"
          subtitle="Engaging activities to spark creativity"
          items={smartFunItems}
        />
        <GiftCardBanner />
      </main>
      <Footer />
    </>
  );
}

function AppRouter() {
  const { currentPage } = useAuth();

  return (
    <div className="font-sans min-h-screen bg-white">
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'checkout' && (
        <>
          <CheckoutPage />
        </>
      )}
      {(currentPage === 'home' || currentPage === 'order-success') && <HomePage />}

      {/* These overlays show on all pages */}
      <CartDrawer />
      <Toast />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;