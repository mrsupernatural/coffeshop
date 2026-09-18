import React, { useState } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Merhaba! 👋 Artisan Coffee destek ekibine hoş geldiniz. Size nasıl yardımcı olabilirim?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const botResponses: Record<string, string> = {
    'kargo': 'Kargo süremiz 1-3 iş günüdür. 150₺ üzeri siparişlerde kargo ücretsizdir! 🚚',
    'iade': 'Ürünlerimizden memnun kalmazsanız 14 gün içinde iade edebilirsiniz. İade kargo ücreti bize aittir. 💯',
    'indirim': 'Şu an aktif kuponlarımız: HOŞGELDİN10 (%10), KAHVE20 (%20), İLK50 (₺50 indirim). 🎉',
    'kahve': 'Tüm kahvelerimiz sipariş üzerine taze kavrulmaktadır. 12+ ülkeden özenle seçilmiş çekirdekler kullanıyoruz. ☕',
    'merhaba': 'Merhaba! Size yardımcı olmaktan mutluluk duyarım. Kahve seçimi, kargo, iade veya başka bir konuda sorunuz var mı? 😊',
    'teşekkür': 'Rica ederim! Başka bir sorunuz olursa her zaman buradayız. İyi günler dileriz! ☕✨',
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Bot response
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase();
      let botResponse = 'Anladım. Bu konuda size en iyi şekilde yardımcı olmak istiyorum. Detaylı bilgi için info@artisancoffee.com adresine e-posta gönderebilir veya bizi +90 212 555 0000 numarasından arayabilirsiniz. 📞';

      for (const [key, response] of Object.entries(botResponses)) {
        if (lowerInput.includes(key)) {
          botResponse = response;
          break;
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#5C3D2E] hover:bg-[#2C1810] text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-110 cursor-pointer"
        aria-label="Canlı Destek"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-[#E8D5B0] animate-fade-in overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#5C3D2E] to-[#8B5E3C] p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">☕</span>
              </div>
              <div>
                <h3 className="font-semibold">Canlı Destek</h3>
                <p className="text-xs text-white/80">Genellikle birkaç dakika içinde yanıt verir</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-[#FDF8F3]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-2 rounded-2xl text-sm ${
                    message.sender === 'user'
                      ? 'bg-[#5C3D2E] text-white rounded-br-sm'
                      : 'bg-white text-[#2C1810] border border-[#E8D5B0] rounded-bl-sm'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t border-[#E8D5B0] bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Mesajınızı yazın..."
                className="flex-1 px-4 py-2 rounded-xl border border-[#E8D5B0] bg-[#FDF8F3] text-[#2C1810] text-sm focus:outline-none focus:ring-2 focus:ring-[#C8A96E]"
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="px-4 py-2 bg-[#5C3D2E] hover:bg-[#2C1810] text-white rounded-xl transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Gönder"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChat;
