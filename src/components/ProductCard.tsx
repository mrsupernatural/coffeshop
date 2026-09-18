import React from 'react';
import { Product } from '../data/products';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, onAddToCart }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { addToCompare, removeFromCompare, isInCompare, compareCount } = useCompare();
  const isFavorite = isInWishlist(product.id);
  const isComparing = isInCompare(product.id);

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleCompareClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isComparing) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product);
    }
  };

  return (
    <div className="product-card bg-white rounded-2xl overflow-hidden border border-[#E8D5B0]/50 animate-fade-in">
      {/* Image Area */}
      <div
        className="relative h-48 sm:h-56 bg-gradient-to-br from-[#F5E6D3] to-[#E8D5B0] flex items-center justify-center cursor-pointer group overflow-hidden"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="bg-white/90 backdrop-blur-sm text-[#5C3D2E] text-xs font-medium px-3 py-1 rounded-full">
            {product.category}
          </span>
          {product.badge === 'new' && (
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              YENİ
            </span>
          )}
          {product.badge === 'popular' && (
            <span className="bg-[#C8A96E] text-white text-xs font-bold px-3 py-1 rounded-full">
              POPÜLER
            </span>
          )}
          {product.badge === 'sale' && (
            <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
              İNDİRİM
            </span>
          )}
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            onClick={handleWishlistClick}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
              isFavorite
                ? 'bg-red-500 text-white'
                : 'bg-white/90 backdrop-blur-sm text-[#5C3D2E] hover:bg-white'
            }`}
            aria-label={isFavorite ? 'Favorilerden çıkar' : 'Favorilere ekle'}
          >
            <svg className="w-4 h-4" fill={isFavorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button
            onClick={handleCompareClick}
            disabled={compareCount >= 3 && !isComparing}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
              isComparing
                ? 'bg-[#5C3D2E] text-white'
                : 'bg-white/90 backdrop-blur-sm text-[#5C3D2E] hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
            aria-label={isComparing ? 'Karşılaştırmadan çıkar' : 'Karşılaştırmaya ekle'}
            title={compareCount >= 3 && !isComparing ? 'Maksimum 3 ürün karşılaştırabilirsiniz' : ''}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </button>
          <span className="bg-[#C8A96E] text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            ★ {product.rating}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <h3
          className="font-['Playfair_Display'] text-lg sm:text-xl font-semibold text-[#2C1810] mb-1 cursor-pointer hover:text-[#5C3D2E] transition-colors"
          onClick={() => onViewDetails(product)}
        >
          {product.name}
        </h3>
        <p className="text-sm text-[#8B5E3C] mb-1">
          {product.origin} • {product.roast}
        </p>
        {product.stock <= 5 && product.stock > 0 && (
          <p className="text-xs text-orange-600 font-medium mb-1">
            ⚡ Son {product.stock} adet!
          </p>
        )}
        {product.stock === 0 && (
          <p className="text-xs text-red-600 font-medium mb-1">
            Stokta Yok
          </p>
        )}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.flavor.map((f) => (
            <span
              key={f}
              className="text-xs bg-[#F5E6D3] text-[#5C3D2E] px-2 py-0.5 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between mt-3">
          <div>
            {product.originalPrice && (
              <span className="text-sm text-[#8B5E3C] line-through mr-2">
                ₺{product.originalPrice}
              </span>
            )}
            <span className="text-xl sm:text-2xl font-bold text-[#2C1810]">
              ₺{product.price}
            </span>
            <span className="text-xs text-[#8B5E3C] ml-1">/ {product.weight}</span>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-[#5C3D2E] hover:bg-[#2C1810] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg cursor-pointer active:scale-95"
          >
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
