# ☕ Artisan Coffee - Premium E-Ticaret Platformu

> ⚠️ **Bu bir template/demo projesidir.** Gerçek bir işletme değildir. Tüm içerikler, görseller ve veriler örnek amaçlıdır.

Dünyanın en seçkin kahve bölgelerinden özenle toplanan premium kahve çekirdekleri için modern, responsive ve tam özellikli bir e-ticaret web uygulaması.

![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.6-38bdf8?logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.0.3-purple?logo=vite)

## ✨ Özellikler

### 🛍️ E-Ticaret Özellikleri
- **6 Premium Kahve Ürünü** - AI ile oluşturulan benzersiz görseller
- **Gelişmiş Arama** - İsim, menşei, tat profiline göre arama
- **Kategori Filtreleme** - Single Origin, Blend, Espresso, Decaf
- **Ürün Sıralama** - Fiyat, puan, isim sıralaması
- **Ürün Detay Sayfası** - Detaylı bilgi, görseller, özellikler
- **Sepet Yönetimi** - Miktar güncelleme, ürün silme
- **Kupon Sistemi** - 3 test kuponu (HOŞGELDİN10, KAHVE20, İLK50)
- **2 Adımlı Ödeme** - Teslimat bilgileri + ödeme simülasyonu
- **Stok Takibi** - Gerçek zamanlı stok durumu göstergesi
- **Ürün Karşılaştırma** - 3 ürüne kadar yan yana karşılaştırma
- **Favoriler (Wishlist)** - Ürünleri favorilere ekleme
- **Son Görüntülenenler** - Otomatik ürün geçmişi
- **Hediye Paketi Seçeneği** - Özel ambalaj seçimi

### 🎨 Kullanıcı Deneyimi
- **Responsive Tasarım** - Mobil, tablet ve masaüstü uyumlu
- **Dark Mode** - Açık/koyu tema değiştirme
- **Smooth Animasyonlar** - Geçiş efektleri ve hover animasyonları
- **Toast Bildirimleri** - Sepete ekleme bildirimleri
- **Scroll to Top** - Sayfa başına dönüş butonu
- **Mobile Hamburger Menü** - Mobil navigasyon
- **Cookie Banner** - GDPR uyumlu çerez bildirimi

### 📚 İçerik Bölümleri
- **Hero Section** - Etkileyici açılış bölümü
- **Kahve Hazırlama Rehberi** - 4 demleme yöntemi
- **Müşteri Yorumları** - 3 gerçekçi testimonial
- **SSS Bölümü** - 6 sıkça sorulan soru
- **Newsletter Abonelik** - E-posta bülteni
- **Canlı Destek Chat** - Anahtar kelime tabanlı bot

### 🏷️ Ürün Özellikleri
- **Badge Sistemi** - YENİ, POPÜLER, İNDİRİM etiketleri
- **İndirimli Fiyatlar** - Eski/yeni fiyat gösterimi
- **Tat Profili** - Her ürün için özel tat notları
- **Sosyal Medya Paylaşım** - Twitter, Facebook, WhatsApp, Telegram
- **Benzer Ürünler** - Kategori bazlı öneriler

## 🛠️ Teknoloji Yığını

### Frontend
- **React 18.3.1** - UI kütüphanesi
- **TypeScript 5.6.2** - Tip güvenliği
- **Vite 6.0.3** - Build tool ve dev server
- **Tailwind CSS 4.0.6** - Utility-first CSS framework

### State Management
- **React Context API** - Global state yönetimi
- Custom hooks ile temiz kod yapısı

### Görseller
- **AI Generated Images** - 6 benzersiz kahve görseli
- **Responsive Images** - Tüm cihazlarda optimize

### Erişilebilirlik
- **ARIA Labels** - Ekran okuyucu desteği
- **Keyboard Navigation** - Klavye ile navigasyon
- **Semantic HTML** - Anlamlı HTML yapısı

## 📦 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone <repository-url>
cd artisan-coffee
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
```

4. **Tarayıcınızda açın**
```
http://localhost:5173
```

## 🚀 Build

Production build oluşturmak için:

```bash
npm run build
```

Build dosyaları `dist/` klasöründe oluşturulur.

Preview için:
```bash
npm run preview
```

## 📖 Kullanım Kılavuzu

### Ürün Arama ve Filtreleme
1. Arama çubuğuna ürün adı, menşei veya tat profili yazın
2. Kategori butonlarından birini seçerek filtreleyin
3. Sıralama dropdown'ından sıralama kriterini seçin

### Sepete Ürün Ekleme
1. Ürün kartındaki "Sepete Ekle" butonuna tıklayın
2. Veya ürün detay sayfasında miktar seçip ekleyin
3. Toast bildirimi ile onay alın

### Kupon Kullanma
1. Sepeti açın
2. Kupon kodu alanına kodu yazın (örn: HOŞGELDİN10)
3. "Uygula" butonuna tıklayın
4. İndirim otomatik hesaplanır

**Test Kuponları:**
- `HOŞGELDİN10` - %10 indirim
- `KAHVE20` - %20 indirim
- `İLK50` - ₺50 indirim

### Ürün Karşılaştırma
1. Ürün kartlarındaki bar grafik ikonuna tıklayın
2. Maksimum 3 ürün seçebilirsiniz
3. Sol alt köşedeki "Karşılaştır" butonuna tıklayın
4. Detaylı karşılaştırma tablosunu görüntüleyin

### Favorilere Ekleme
1. Ürün kartlarındaki kalp ikonuna tıklayın
2. Header'daki kalp ikonundan favorileri görüntüleyin
3. Tekrar tıklayarak favorilerden çıkarın

### Dark Mode
1. Header'daki güneş/ay ikonuna tıklayın
2. Tema otomatik değişir
3. Tercihiniz kaydedilir

### Canlı Destek
1. Sağ alt köşedeki chat butonuna tıklayın
2. Mesajınızı yazın
3. Bot otomatik yanıt verir

**Örnek Anahtar Kelimeler:**
- "kargo" - Kargo bilgileri
- "iade" - İade politikası
- "indirim" - Aktif kuponlar
- "kahve" - Ürün bilgileri

## 🏗️ Proje Yapısı

```
src/
├── components/           # React bileşenleri
│   ├── Header.tsx       # Ana header ve navigasyon
│   ├── Hero.tsx         # Hero section
│   ├── ProductCard.tsx  # Ürün kartı
│   ├── ProductDetail.tsx # Ürün detay modal
│   ├── Cart.tsx         # Sepet paneli
│   ├── Checkout.tsx     # Ödeme süreci
│   ├── CompareModal.tsx # Karşılaştırma modal
│   ├── LiveChat.tsx     # Canlı destek chat
│   ├── Testimonials.tsx # Müşteri yorumları
│   ├── BrewingGuide.tsx # Kahve hazırlama rehberi
│   ├── FAQ.tsx          # SSS bölümü
│   ├── Newsletter.tsx   # Bülten abonelik
│   ├── Footer.tsx       # Footer
│   ├── Toast.tsx        # Bildirim sistemi
│   ├── ScrollToTop.tsx  # Yukarı çık butonu
│   ├── MobileMenu.tsx   # Mobil menü
│   ├── CookieBanner.tsx # Çerez bildirimi
│   ├── StockIndicator.tsx # Stok göstergesi
│   ├── ShareButtons.tsx # Sosyal paylaşım
│   ├── RecentlyViewed.tsx # Son görüntülenenler
│   └── SortFilter.tsx   # Sıralama filtresi
├── context/             # Context providers
│   ├── CartContext.tsx       # Sepet state
│   ├── WishlistContext.tsx   # Favoriler state
│   ├── CouponContext.tsx     # Kupon state
│   ├── CompareContext.tsx    # Karşılaştırma state
│   ├── RecentlyViewedContext.tsx # Son görüntülenenler
│   └── ThemeContext.tsx      # Tema state
├── data/                # Statik veriler
│   └── products.ts      # Ürün verileri
├── App.tsx              # Ana uygulama bileşeni
├── main.tsx             # Entry point
└── index.css            # Global stiller
```

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Koyu Kahve**: `#2C1810`
- **Orta Kahve**: `#5C3D2E`
- **Açık Kahve**: `#8B5E3C`
- **Krem**: `#F5E6D3`
- **Açık Krem**: `#FDF8F3`
- **Altın**: `#C8A96E`
- **Açık Altın**: `#E8D5B0`

### Tipografi
- **Başlıklar**: Playfair Display (Serif)
- **Gövde**: Inter (Sans-serif)

### Bileşenler
- Border radius: `rounded-xl`, `rounded-2xl`
- Shadows: `shadow-sm`, `shadow-lg`, `shadow-2xl`
- Transitions: `transition-all duration-300`

## 🌐 Tarayıcı Desteği

- ✅ Chrome (son 2 sürüm)
- ✅ Firefox (son 2 sürüm)
- ✅ Safari (son 2 sürüm)
- ✅ Edge (son 2 sürüm)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Geliştirme

### Kod Stili
- ESLint ve Prettier yapılandırması
- TypeScript strict mode
- Functional components
- Custom hooks
- Context API pattern

### Performans
- React.memo optimizasyonları
- useMemo ve useCallback kullanımı
- Lazy loading hazır
- Code splitting

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen:

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 🙏 Teşekkürler

- React ekibine
- Tailwind CSS ekibine
- Vite ekibine
- Tüm açık kaynak katkıda bulunanlara

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](https://via.placeholder.com/800x400?text=Ana+Sayfa)

### Ürün Detay
![Ürün Detay](https://via.placeholder.com/800x400?text=Ürün+Detay)

### Sepet
![Sepet](https://via.placeholder.com/800x400?text=Sepet)

### Karşılaştırma
![Karşılaştırma](https://via.placeholder.com/800x400?text=Karşılaştırma)

### Dark Mode
![Dark Mode](https://via.placeholder.com/800x400?text=Dark+Mode)

---

## ⚠️ Yasal Uyarı

**Bu proje bir template/demo uygulamasıdır.** 

- Gerçek bir işletme veya marka değildir
- Tüm ürünler, fiyatlar ve içerikler örnek amaçlıdır
- AI ile oluşturulan görseller demo amaçlıdır
- Simüle edilmiş ödeme süreci gerçek işlem yapmaz
- İletişim bilgileri ve adresler tamamen kurgusaldır

Bu template'i kendi projeniz için kullanabilir, özelleştirebilir ve geliştirebilirsiniz.

---

**⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!**

Made with ☕ and ❤️
