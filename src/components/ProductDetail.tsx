import React, { useState, useEffect } from 'react';
import { Product, products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';
import StockIndicator from './StockIndicator';
import ShareButtons from './ShareButtons';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToRecentlyViewed } = useRecentlyViewed();
  const isFavorite = isInWishlist(product.id);
  const [quantity, setQuantity] = useState(1);
  const [isGift, setIsGift] = useState(false);

  // Get related products (same category, exclude current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Add to recently viewed when product opens
  useEffect(() => {
    addToRecentlyViewed(product);
  }, [product, addToRecentlyViewed]);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    onClose();
  };

  const handleWishlistClick = () => {
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#5C3D2E] hover:bg-[#F5E6D3] transition-colors shadow-md cursor-pointer"
          aria-label="Kapat"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="h-56 sm:h-72 bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B0] rounded-t-2xl sm:rounded-t-3xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className="text-sm text-[#C8A96E] font-medium uppercase tracking-wider">
                {product.category}
              </span>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#2C1810] mt-1">
                {product.name}
              </h2>
            </div>
            <div className="text-right">
              <span className="text-2xl sm:text-3xl font-bold text-[#2C1810]">
                ₺{product.price}
              </span>
              <p className="text-sm text-[#8B5E3C]">/ {product.weight}</p>
            </div>
          </div>

          {/* Stock Indicator */}
          <div className="mb-3">
            <StockIndicator stock={product.stock} />
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={`text-lg ${i < Math.floor(product.rating) ? 'text-[#C8A96E]' : 'text-[#E8D5B0]'}`}>
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-[#8B5E3C]">
              {product.rating} ({product.reviews} değerlendirme)
            </span>
          </div>

          {/* Description */}
          <p className="text-[#5C3D2E] leading-relaxed mb-6">
            {product.description}
          </p>

          {/* Details Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
            <div className="bg-[#FDF8F3] rounded-xl p-3 text-center">
              <p className="text-xs text-[#8B5E3C] uppercase tracking-wider">Menşei</p>
              <p className="font-semibold text-[#2C1810] mt-1">{product.origin}</p>
            </div>
            <div className="bg-[#FDF8F3] rounded-xl p-3 text-center">
              <p className="text-xs text-[#8B5E3C] uppercase tracking-wider">Kavrum</p>
              <p className="font-semibold text-[#2C1810] mt-1">{product.roast}</p>
            </div>
            <div className="bg-[#FDF8F3] rounded-xl p-3 text-center">
              <p className="text-xs text-[#8B5E3C] uppercase tracking-wider">Ağırlık</p>
              <p className="font-semibold text-[#2C1810] mt-1">{product.weight}</p>
            </div>
          </div>

          {/* Flavors */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-[#8B5E3C] uppercase tracking-wider mb-2">
              Tat Profili
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.flavor.map((f) => (
                <span
                  key={f}
                  className="bg-[#F5E6D3] text-[#5C3D2E] px-3 py-1.5 rounded-full text-sm font-medium"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>

          {/* Gift Option */}
          <div className="mb-6 bg-[#FDF8F3] rounded-xl p-4 border border-[#E8D5B0]/50">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isGift}
                onChange={(e) => setIsGift(e.target.checked)}
                className="w-5 h-5 rounded border-[#E8D5B0] text-[#5C3D2E] focus:ring-[#C8A96E]"
              />
              <div>
                <p className="font-medium text-[#2C1810]">🎁 Hediye Paketi</p>
                <p className="text-xs text-[#8B5E3C]">Özel hediye ambalajı ile gönderilsin</p>
              </div>
            </label>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <h4 className="text-sm font-medium text-[#8B5E3C] uppercase tracking-wider mb-2">
              Miktar
            </h4>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-xl border border-[#E8D5B0] flex items-center justify-center text-[#5C3D2E] hover:bg-[#F5E6D3] transition-colors cursor-pointer font-bold"
                aria-label="Azalt"
              >
                −
              </button>
              <span className="w-12 text-center text-lg font-semibold text-[#2C1810]">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="w-10 h-10 rounded-xl border border-[#E8D5B0] flex items-center justify-center text-[#5C3D2E] hover:bg-[#F5E6D3] transition-colors cursor-pointer font-bold"
                aria-label="Artır"
              >
                +
              </button>
              <span className="ml-auto text-lg font-bold text-[#2C1810]">
                ₺{product.price * quantity}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mb-6">
            <button
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1 bg-[#5C3D2E] hover:bg-[#2C1810] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {product.stock === 0 ? 'Stokta Yok' : 'Sepete Ekle'}
            </button>
            <button
              onClick={handleWishlistClick}
              className={`px-5 py-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                isFavorite
                  ? 'border-red-500 bg-red-50 text-red-500'
                  : 'border-[#E8D5B0] text-[#5C3D2E] hover:border-[#5C3D2E]'
              }`}
              aria-label={isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
            >
              <svg
                className="w-6 h-6"
                fill={isFavorite ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>

          {/* Share Buttons */}
          <div className="border-t border-[#E8D5B0] pt-4 mb-6">
            <ShareButtons product={product} />
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="border-t border-[#E8D5B0] pt-6">
              <h4 className="font-['Playfair_Display'] text-lg font-semibold text-[#2C1810] mb-4">
                Benzer Ürünler
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {relatedProducts.map((related) => (
                  <div
                    key={related.id}
                    className="bg-[#FDF8F3] rounded-xl p-3 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => {
                      onClose();
                      setTimeout(() => {
                        const event = new CustomEvent('openProductDetail', { detail: related });
                        window.dispatchEvent(event);
                      }, 300);
                    }}
                  >
                    <div className="aspect-square rounded-lg overflow-hidden mb-2">
                      <img
                        src={related.image}
                        alt={related.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-xs font-medium text-[#2C1810] truncate">
                      {related.name}
                    </p>
                    <p className="text-xs text-[#C8A96E] font-bold mt-1">
                      ₺{related.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
