import React from 'react';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, onCheckout }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl animate-slide-in flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#E8D5B0]">
          <div>
            <h2 className="font-['Playfair_Display'] text-xl font-bold text-[#2C1810]">
              Sepetim
            </h2>
            <p className="text-sm text-[#8B5E3C]">{totalItems} ürün</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[#F5E6D3] flex items-center justify-center text-[#5C3D2E] hover:bg-[#E8D5B0] transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <span className="text-6xl mb-4">🛒</span>
              <h3 className="font-['Playfair_Display'] text-xl font-semibold text-[#2C1810] mb-2">
                Sepetiniz Boş
              </h3>
              <p className="text-[#8B5E3C] text-sm">
                Henüz sepetinize ürün eklemediniz. Kahve koleksiyonumuzu keşfedin!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 bg-[#FDF8F3] rounded-xl p-3 animate-fade-in"
                >
                  {/* Product Image */}
                  <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-[#2C1810] text-sm truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-xs text-[#8B5E3C] mt-0.5">
                      {item.product.weight} • {item.product.roast}
                    </p>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-7 h-7 rounded-md bg-white border border-[#E8D5B0] flex items-center justify-center text-[#5C3D2E] hover:bg-[#F5E6D3] transition-colors cursor-pointer text-sm font-bold"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm font-semibold text-[#2C1810]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-7 h-7 rounded-md bg-white border border-[#E8D5B0] flex items-center justify-center text-[#5C3D2E] hover:bg-[#F5E6D3] transition-colors cursor-pointer text-sm font-bold"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-bold text-[#2C1810] text-sm">
                        ₺{item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="self-start p-1 text-[#8B5E3C] hover:text-red-500 transition-colors cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-[#E8D5B0] p-5 space-y-4">
            {/* Summary */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-[#8B5E3C]">
                <span>Ara Toplam</span>
                <span>₺{totalPrice}</span>
              </div>
              <div className="flex justify-between text-sm text-[#8B5E3C]">
                <span>Kargo</span>
                <span className="text-green-600 font-medium">Ücretsiz</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-[#2C1810] pt-2 border-t border-[#E8D5B0]">
                <span>Toplam</span>
                <span>₺{totalPrice}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onCheckout}
              className="w-full bg-[#5C3D2E] hover:bg-[#2C1810] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl cursor-pointer active:scale-[0.98]"
            >
              Siparişi Tamamla
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
