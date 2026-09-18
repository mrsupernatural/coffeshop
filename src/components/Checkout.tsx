import React, { useState } from 'react';
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

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
}

type CheckoutStep = 'info' | 'payment' | 'success';

const Checkout: React.FC<CheckoutProps> = ({ isOpen, onClose }) => {
  const { cart, totalPrice, clearCart } = useCart();
  const { appliedCoupon, discountAmount } = useCoupon();
  const finalTotal = totalPrice - discountAmount;
  const [step, setStep] = useState<CheckoutStep>('info');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    cardExpiry: '',
    cardCvv: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      clearCart();
    }, 2000);
  };

  const handleClose = () => {
    setStep('info');
    setFormData({
      name: '',
      email: '',
      address: '',
      city: '',
      zip: '',
      cardNumber: '',
      cardExpiry: '',
      cardCvv: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={step !== 'success' ? undefined : handleClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-fade-in">
        {/* Close Button */}
        {step !== 'success' && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#5C3D2E] hover:bg-[#F5E6D3] transition-colors shadow-md cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <div className="p-6 sm:p-8">
          {/* Progress Steps */}
          {step !== 'success' && (
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 'info' ? 'bg-[#5C3D2E] text-white' : 'bg-[#C8A96E] text-white'}`}>
                  1
                </div>
                <div className="w-12 h-0.5 bg-[#E8D5B0]">
                  <div className={`h-full bg-[#C8A96E] transition-all duration-500 ${step === 'payment' ? 'w-full' : 'w-0'}`} />
                </div>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === 'payment' ? 'bg-[#5C3D2E] text-white' : 'bg-[#E8D5B0] text-[#8B5E3C]'}`}>
                  2
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Shipping Info */}
          {step === 'info' && (
            <form onSubmit={handleInfoSubmit} className="space-y-5">
              <div className="text-center mb-6">
                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#2C1810]">
                  Teslimat Bilgileri
                </h2>
                <p className="text-sm text-[#8B5E3C] mt-1">Siparişinizi tamamlamak için bilgilerinizi girin</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C3D2E] mb-1">Ad Soyad</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5B0] bg-[#FDF8F3] text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent transition-all"
                  placeholder="Adınız Soyadınız"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C3D2E] mb-1">E-posta</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5B0] bg-[#FDF8F3] text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent transition-all"
                  placeholder="ornek@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C3D2E] mb-1">Adres</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5B0] bg-[#FDF8F3] text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent transition-all"
                  placeholder="Sokak, Mahalle, Bina No"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#5C3D2E] mb-1">Şehir</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E8D5B0] bg-[#FDF8F3] text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent transition-all"
                    placeholder="İstanbul"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5C3D2E] mb-1">Posta Kodu</label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E8D5B0] bg-[#FDF8F3] text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent transition-all"
                    placeholder="34000"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#5C3D2E] hover:bg-[#2C1810] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl cursor-pointer active:scale-[0.98] mt-6"
              >
                Ödemeye Geç
              </button>
            </form>
          )}

          {/* Step 2: Payment */}
          {step === 'payment' && (
            <form onSubmit={handlePaymentSubmit} className="space-y-5">
              <div className="text-center mb-6">
                <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#2C1810]">
                  Ödeme Bilgileri
                </h2>
                <p className="text-sm text-[#8B5E3C] mt-1">Kart bilgilerinizi girin</p>
              </div>

              {/* Order Summary */}
              <div className="bg-[#FDF8F3] rounded-xl p-4 mb-4">
                <h4 className="font-semibold text-[#2C1810] text-sm mb-2">Sipariş Özeti</h4>
                {cart.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-2 text-sm text-[#5C3D2E] py-1">
                    <div
                      className="w-8 h-8 rounded flex items-center justify-center text-sm"
                      style={{
                        background: `linear-gradient(135deg, ${getGradient(item.product.id).from}, ${getGradient(item.product.id).to})`,
                      }}
                    >
                      {item.product.image}
                    </div>
                    <span className="flex-1 truncate">{item.product.name} x{item.quantity}</span>
                    <span className="font-medium">₺{item.product.price * item.quantity}</span>
                  </div>
                ))}
                {discountAmount > 0 && (
                  <div className="flex justify-between text-sm text-green-600 py-1">
                    <span>{appliedCoupon?.description}</span>
                    <span>-₺{discountAmount}</span>
                  </div>
                )}
                <div className="border-t border-[#E8D5B0] mt-2 pt-2 flex justify-between font-bold text-[#2C1810]">
                  <span>Toplam</span>
                  <span>₺{finalTotal}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#5C3D2E] mb-1">Kart Numarası</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[#E8D5B0] bg-[#FDF8F3] text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent transition-all"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#5C3D2E] mb-1">Son Kullanma</label>
                  <input
                    type="text"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E8D5B0] bg-[#FDF8F3] text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent transition-all"
                    placeholder="AA/YY"
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#5C3D2E] mb-1">CVV</label>
                  <input
                    type="text"
                    name="cardCvv"
                    value={formData.cardCvv}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-[#E8D5B0] bg-[#FDF8F3] text-[#2C1810] focus:outline-none focus:ring-2 focus:ring-[#C8A96E] focus:border-transparent transition-all"
                    placeholder="123"
                    maxLength={3}
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => setStep('info')}
                  className="flex-1 border-2 border-[#5C3D2E] text-[#5C3D2E] py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#F5E6D3] cursor-pointer"
                >
                  Geri
                </button>
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="flex-[2] bg-[#5C3D2E] hover:bg-[#2C1810] text-white py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-xl cursor-pointer active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      İşleniyor...
                    </>
                  ) : (
                    `₺${finalTotal} Öde`
                  )}
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Success */}
          {step === 'success' && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-['Playfair_Display'] text-2xl font-bold text-[#2C1810] mb-2">
                Siparişiniz Alındı!
              </h2>
              <p className="text-[#8B5E3C] mb-2">
                Kahveniz özenle hazırlanıyor ve en kısa sürede adresinize ulaştırılacak.
              </p>
              <p className="text-sm text-[#8B5E3C] mb-8">
                Sipariş numaranız: <span className="font-bold text-[#2C1810]">#AC-{Math.floor(Math.random() * 90000 + 10000)}</span>
              </p>
              <button
                onClick={handleClose}
                className="bg-[#5C3D2E] hover:bg-[#2C1810] text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                Alışverişe Devam Et
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
