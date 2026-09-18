import React, { useState, useMemo, useCallback } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { products, categories, Product } from './data/products';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Toast from './components/Toast';
import ScrollToTop from './components/ScrollToTop';

const AppContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);
  const { addToCart } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.flavor.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory =
        selectedCategory === 'Tümü' || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setIsToastVisible(true);
  }, []);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    showToast(`${product.name} sepete eklendi!`);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      <Header
        onCartClick={() => setIsCartOpen(true)}
        onLogoClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />

      <Hero />

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[#C8A96E] text-sm font-medium tracking-widest uppercase">
            Koleksiyonumuz
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#2C1810] mt-2">
            Özenle Seçilmiş Kahveler
          </h2>
          <p className="text-[#8B5E3C] mt-3 max-w-xl mx-auto">
            Her biri kendine özgü karakter ve lezzet profiline sahip, dünyanın dört bir yanından seçilmiş kahvelerimiz
          </p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-10">
          {/* Search */}
          <div className="relative flex-1">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B5E3C]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Kahve ara... (isim, menşei, tat)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#E8D5B0] bg-white text-[#2C1810] placeholder-[#8B5E3C]/60 focus:outline-none focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B5E3C] hover:text-[#2C1810] cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#5C3D2E] text-white shadow-md'
                    : 'bg-white text-[#5C3D2E] border border-[#E8D5B0] hover:bg-[#F5E6D3]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-[#8B5E3C]">
            {filteredProducts.length} ürün bulundu
            {searchQuery && (
              <span className="ml-1">
                — "<span className="font-medium text-[#5C3D2E]">{searchQuery}</span>"
              </span>
            )}
          </p>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedProduct}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <span className="text-5xl mb-4 block">🔍</span>
            <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#2C1810] mb-2">
              Sonuç Bulunamadı
            </h3>
            <p className="text-[#8B5E3C]">
              Arama kriterlerinize uygun ürün bulamadık. Farklı bir arama deneyin.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Tümü');
              }}
              className="mt-4 text-[#C8A96E] hover:text-[#5C3D2E] font-medium underline cursor-pointer"
            >
              Filtreleri Temizle
            </button>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="bg-white border-y border-[#E8D5B0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#F5E6D3] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h4 className="font-semibold text-[#2C1810] mb-1">Dünya Geneli Kaynak</h4>
              <p className="text-sm text-[#8B5E3C]">12+ ülkeden özenle seçilmiş çekirdekler</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#F5E6D3] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔥</span>
              </div>
              <h4 className="font-semibold text-[#2C1810] mb-1">Taze Kavrum</h4>
              <p className="text-sm text-[#8B5E3C]">Sipariş üzerine taze kavrulmuş kahveler</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#F5E6D3] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h4 className="font-semibold text-[#2C1810] mb-1">Ücretsiz Kargo</h4>
              <p className="text-sm text-[#8B5E3C]">150₺ üzeri siparişlerde ücretsiz teslimat</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-[#F5E6D3] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h4 className="font-semibold text-[#2C1810] mb-1">Kalite Garantisi</h4>
              <p className="text-sm text-[#8B5E3C]">Memnun kalmazsanız paranızı iade ediyoruz</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Newsletter */}
      <Newsletter />

      <Footer />

      {/* Modals & Overlays */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
      />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
};

export default App;
