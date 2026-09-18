import React from 'react';
import { useRecentlyViewed } from '../context/RecentlyViewedContext';

interface RecentlyViewedProps {
  onProductClick: (productId: number) => void;
}

const RecentlyViewed: React.FC<RecentlyViewedProps> = ({ onProductClick }) => {
  const { recentlyViewed, clearRecentlyViewed } = useRecentlyViewed();

  if (recentlyViewed.length === 0) return null;

  return (
    <section className="bg-white border-t border-[#E8D5B0] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#2C1810]">
              Son Görüntülenenler
            </h2>
            <p className="text-sm text-[#8B5E3C] mt-1">En son baktığınız ürünler</p>
          </div>
          <button
            onClick={clearRecentlyViewed}
            className="text-sm text-[#8B5E3C] hover:text-[#2C1810] transition-colors cursor-pointer"
          >
            Temizle
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {recentlyViewed.map((product) => (
            <div
              key={product.id}
              onClick={() => onProductClick(product.id)}
              className="bg-[#FDF8F3] rounded-xl p-3 cursor-pointer hover:shadow-md transition-all duration-300 group"
            >
              <div className="aspect-square rounded-lg overflow-hidden mb-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-xs font-medium text-[#2C1810] truncate">
                {product.name}
              </p>
              <p className="text-xs text-[#C8A96E] font-bold mt-1">
                ₺{product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
