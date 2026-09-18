import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Kahveleriniz ne zaman kavruluyor?',
    answer: 'Tüm kahvelerimiz sipariş üzerine taze kavrulmaktadır. Siparişinizi verdikten sonra 24 saat içinde kavrulup aynı gün kargoya verilir. Bu sayede kahvelerimiz en taze haliyle size ulaşır.',
  },
  {
    id: 2,
    question: 'Kargo süresi ne kadar?',
    answer: 'Siparişiniz kavrulduktan sonra 1-3 iş günü içinde adresinize teslim edilir. 150₺ üzeri siparişlerde kargo ücretsizdir. Ayrıca express kargo seçeneği de mevcuttur.',
  },
  {
    id: 3,
    question: 'Kahveleri nasıl saklamalıyım?',
    answer: 'Kahvelerinizi hava geçirmeyen bir kapta, oda sıcaklığında, güneş ışığından uzak ve kuru bir yerde saklayın. Buzdolabında saklamayın. Açtıktan sonra 2-3 hafta içinde tüketmenizi öneririz.',
  },
  {
    id: 4,
    question: 'Öğütülmüş kahve sipariş edebilir miyim?',
    answer: 'Evet! Sipariş sırasında kahvenizi istediğiniz öğütme boyutunda (espresso, filter, French press vb.) seçebilirsiniz. En iyi sonuç için çekirdek halinde alıp demlemeden önce öğütmenizi öneririz.',
  },
  {
    id: 5,
    question: 'İade politikanız nedir?',
    answer: 'Ürünlerimizden memnun kalmazsanız, teslimattan itibaren 14 gün içinde iade edebilirsiniz. Ürün açılmamış ve orijinal ambalajında olmalıdır. İade kargo ücreti bize aittir.',
  },
  {
    id: 6,
    question: 'Abonelik sistemi var mı?',
    answer: 'Evet! Aylık kahve aboneliği ile her ay farklı bir sürpriz kahve kapınıza gelsin. Abonelerimize özel %15 indirim ve ücretsiz kargo avantajı sunuyoruz. İstediğiniz zaman iptal edebilirsiniz.',
  },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-[#FDF8F3] py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-[#C8A96E] text-sm font-medium tracking-widest uppercase">
            SSS
          </span>
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-[#2C1810] mt-2">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-[#8B5E3C] mt-3">
            Merak ettiğiniz her şeyin cevabı burada
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-[#E8D5B0]/50 overflow-hidden transition-shadow duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer"
              >
                <span className="font-semibold text-[#2C1810] pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-[#C8A96E] flex-shrink-0 transition-transform duration-300 ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 pb-4 text-[#5C3D2E] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
