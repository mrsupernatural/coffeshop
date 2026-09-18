import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { useCoupon } from '../context/CouponContext';

// Her ürün için özel gradient renkler
const getGradient = (id: number) => {
  const gradients: Record<number, { from: string; to: string }> = {
    1: { from: '#F5E6D3', to: '#E8D5B0' },
    2: { from: '#E8D5B0', to: '#D4C4A8' },
    3: { from: '#FFE4B5', to: '#FFD700' },
    4: { from: '#4A3728', to: '#2C1810' },
    5: { from: '#E6E6FA', to: '#D8BFD8' },
    6: { from: '#2C1810', to: '#1a0f0a' },
  };
  return gradients[id] || { from: '#F5E6D3', to: '#E8D5B0' };
};

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, onCheckout }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  const { appliedCoupon, applyCoupon, removeCoupon, discountAmount, setDiscountBase } = useCoupon();
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  useEffect(() => {
    setDiscountBase(totalPrice);
  }, [totalPrice, setDiscountBase]);

  if (!isOpen) return null;

  const handleApplyCoupon = () => {
    setCouponError('');
    setCouponSuccess('');
    if (!couponCode.trim()) {
      setCouponError('Lütfen bir kupon kodu girin.');
      return;
    }
    const success = applyCoupon(couponCode);
    if (success) {
      setCouponSuccess('Kupon başarıyla uygulandı!');
      setCouponCode('');
    } else {
      setCouponError('Geçersiz kupon kodu.');
    }
  };

  const handleRemoveCoupon = () => {
    removeCoupon();
    setCouponSuccess('');
  };

  const finalTotal = totalPrice - discountAmount;

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
                  <div
                    className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${getGradient(item.product.id).from}, ${getGradient(item.product.id).to})`,
                    }}
                  >
                    <span className="text-2xl">{item.product.image}</span>
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
            {/* Coupon Section */}
            <div className="bg-[#FDF8F3] rounded-xl p-3">
              {appliedCoupon ? (
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-green-700">✓ {appliedCoupon.description}</p>
                    <p className="text-xs text-[#8B5E3C]">-₺{discountAmount} indirim</p>
                  </div>
                  <button
                    onClick={handleRemoveCoupon}
                    className="text-xs text-red-500 hover:text-red-700 font-medium cursor-pointer"
                  >
                    Kaldır
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => {
                        setCouponCode(e.target.value.toUpperCase());
                        setCouponError('');
                      }}
                      placeholder="Kupon kodu"
                      className="flex-1 px-3 py-2 rounded-lg border border-[#E8D5B0] bg-white text-sm text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C8A96E]"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      className="px-4 py-2 bg-[#5C3D2E] text-white rounded-lg text-sm font-medium hover:bg-[#2C1810] transition-colors cursor-pointer"
                    >
                      Uygula
                    </button>
                  </div>
                  {couponError && (
                    <p className="text-xs text-red-500">{couponError}</p>
                  )}
                  {couponSuccess && (
                    <p className="text-xs text-green-600">{couponSuccess}</p>
                  )}
                  <p className="text-xs text-[#8B5E3C]">
                    Test kodları: HOŞGELDİN10, KAHVE20, İLK50
                  </p>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-[#8B5E3C]">
                <span>Ara Toplam</span>
                <span>₺{totalPrice}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>İndirim</span>
                  <span>-₺{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between text-sm text-[#8B5E3C]">
                <span>Kargo</span>
                <span className="text-green-600 font-medium">Ücretsiz</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-[#2C1810] pt-2 border-t border-[#E8D5B0]">
                <span>Toplam</span>
                <span>₺{finalTotal}</span>
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
