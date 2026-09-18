import React from 'react';
import { useCompare } from '../context/CompareContext';
import { useCart } from '../context/CartContext';

interface CompareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CompareModal: React.FC<CompareModalProps> = ({ isOpen, onClose }) => {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();

  if (!isOpen) return null;

  const handleAddToCart = (product: typeof compareList[0]) => {
    addToCart(product);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
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

        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-[#2C1810]">
                Ürün Karşılaştırma
              </h2>
              <p className="text-sm text-[#8B5E3C] mt-1">
                {compareList.length} ürün karşılaştırılıyor (maksimum 3)
              </p>
            </div>
            {compareList.length > 0 && (
              <button
                onClick={clearCompare}
                className="text-sm text-red-500 hover:text-red-700 font-medium cursor-pointer"
              >
                Tümünü Temizle
              </button>
            )}
          </div>

          {compareList.length === 0 ? (
            <div className="text-center py-12">
              <span className="text-5xl mb-4 block">📊</span>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#2C1810] mb-2">
                Karşılaştırma Listesi Boş
              </h3>
              <p className="text-[#8B5E3C]">
                Karşılaştırmak için ürünlere göz atın ve "Karşılaştır" butonuna tıklayın.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left p-3 text-sm font-medium text-[#8B5E3C]">Özellik</th>
                    {compareList.map((product) => (
                      <th key={product.id} className="p-3 min-w-[200px]">
                        <div className="relative">
                          <button
                            onClick={() => removeFromCompare(product.id)}
                            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 transition-colors cursor-pointer"
                            aria-label="Kaldır"
                          >
                            ×
                          </button>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-32 object-cover rounded-lg mb-2"
                          />
                          <h4 className="font-semibold text-[#2C1810] text-sm">
                            {product.name}
                          </h4>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E8D5B0]">
                  <tr>
                    <td className="p-3 text-sm font-medium text-[#8B5E3C]">Fiyat</td>
                    {compareList.map((product) => (
                      <td key={product.id} className="p-3 text-center">
                        {product.originalPrice && (
                          <span className="text-sm text-[#8B5E3C] line-through mr-2">
                            ₺{product.originalPrice}
                          </span>
                        )}
                        <span className="font-bold text-[#2C1810]">₺{product.price}</span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-sm font-medium text-[#8B5E3C]">Kategori</td>
                    {compareList.map((product) => (
                      <td key={product.id} className="p-3 text-center text-sm text-[#5C3D2E]">
                        {product.category}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-sm font-medium text-[#8B5E3C]">Menşei</td>
                    {compareList.map((product) => (
                      <td key={product.id} className="p-3 text-center text-sm text-[#5C3D2E]">
                        {product.origin}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-sm font-medium text-[#8B5E3C]">Kavrum</td>
                    {compareList.map((product) => (
                      <td key={product.id} className="p-3 text-center text-sm text-[#5C3D2E]">
                        {product.roast}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-sm font-medium text-[#8B5E3C]">Tat Profili</td>
                    {compareList.map((product) => (
                      <td key={product.id} className="p-3 text-center">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {product.flavor.map((f) => (
                            <span
                              key={f}
                              className="text-xs bg-[#F5E6D3] text-[#5C3D2E] px-2 py-0.5 rounded-full"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-sm font-medium text-[#8B5E3C]">Puan</td>
                    {compareList.map((product) => (
                      <td key={product.id} className="p-3 text-center">
                        <span className="text-[#C8A96E] font-bold">
                          ★ {product.rating}
                        </span>
                        <span className="text-xs text-[#8B5E3C] ml-1">
                          ({product.reviews})
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-sm font-medium text-[#8B5E3C]">Stok</td>
                    {compareList.map((product) => (
                      <td key={product.id} className="p-3 text-center text-sm">
                        {product.stock === 0 ? (
                          <span className="text-red-600 font-medium">Stokta Yok</span>
                        ) : product.stock <= 5 ? (
                          <span className="text-orange-600 font-medium">Son {product.stock}</span>
                        ) : (
                          <span className="text-green-600 font-medium">Mevcut</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-sm font-medium text-[#8B5E3C]">İşlem</td>
                    {compareList.map((product) => (
                      <td key={product.id} className="p-3 text-center">
                        <button
                          onClick={() => handleAddToCart(product)}
                          disabled={product.stock === 0}
                          className="bg-[#5C3D2E] hover:bg-[#2C1810] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Sepete Ekle
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompareModal;
