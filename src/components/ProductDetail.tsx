import React from 'react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const isFavorite = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product);
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
          <div className="flex items-start justify-between mb-4">
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

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#5C3D2E] hover:bg-[#2C1810] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl cursor-pointer active:scale-[0.98]"
            >
              Sepete Ekle — ₺{product.price}
            </button>
            <button
              onClick={handleWishlistClick}
              className={`px-5 py-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                isFavorite
                  ? 'border-red-500 bg-red-50 text-red-500'
                  : 'border-[#E8D5B0] text-[#5C3D2E] hover:border-[#5C3D2E]'
              }`}
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
