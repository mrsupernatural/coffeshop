export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  origin: string;
  roast: string;
  flavor: string[];
  weight: string;
  image: string;
  rating: number;
  reviews: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export const categories = [
  'Tümü',
  'Single Origin',
  'Blend',
  'Espresso',
  'Decaf',
];

export const products: Product[] = [
  {
    id: 1,
    name: 'Ethiopian Yirgacheffe',
    description: 'Çiçeksi ve meyveli notalarla zenginleştirilmiş bu Etiyopya kahvesi, parlak asiditesi ve temiz bitimiyle damakta unutulmaz bir iz bırakır. Yüksek rakımlı Yirgacheffe bölgesinden özenle seçilmiş çekirdekler, her fincanda benzersiz bir deneyim sunar.',
    price: 189,
    category: 'Single Origin',
    origin: 'Etiyopya',
    roast: 'Açık Kavrulmuş',
    flavor: ['Çiçeksi', 'Meyveli', 'Narenciye'],
    weight: '250g',
    image: 'https://image.qwenlm.ai/generated-images/a44aa9be-8c40-463c-a741-3e6ac90af5a2/_result.png',
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: 'Colombian Supremo',
    description: 'Kolombiya\'nın verimli vadilerinden gelen bu seçkin kahve, dengeli gövdesi ve yumuşak karamel tatlarıyla öne çıkar. Orta kavrulmuş çekirdekler, çikolata ve fındık notalarıyla mükemmel bir harmoni oluşturur.',
    price: 159,
    category: 'Single Origin',
    origin: 'Kolombiya',
    roast: 'Orta Kavrulmuş',
    flavor: ['Karamel', 'Fındık', 'Çikolata'],
    weight: '250g',
    image: 'https://image.qwenlm.ai/generated-images/130b9960-cba3-4721-8219-c6a677cea5eb/_result.png',
    rating: 4.6,
    reviews: 98,
  },
  {
    id: 3,
    name: 'Artisan Morning Blend',
    description: 'Güne enerjik bir başlangıç için özel olarak harmanlanmış bu karışım, Brezilya ve Guatemala çekirdeklerinin mükemmel birleşimidir. Pürüzsüz gövdesi ve tatlı bitimiyle her sabahın vazgeçilmezi olacak.',
    price: 139,
    category: 'Blend',
    origin: 'Brezilya & Guatemala',
    roast: 'Orta Kavrulmuş',
    flavor: ['Tatlı', 'Pürüzsüz', 'Kakao'],
    weight: '250g',
    image: 'https://image.qwenlm.ai/generated-images/533222da-8c97-4dfd-b840-6af2946fd3df/_result.png',
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    name: 'Italian Espresso Roast',
    description: 'Geleneksel İtalyan espresso kültüründen ilham alan bu yoğun kavrulmuş harman, kremsi bir crema tabakası ve zengin, yoğun aromasıyla gerçek espresso severler için tasarlandı. Bitter çikolata ve baharat notaları damakta kalır.',
    price: 169,
    category: 'Espresso',
    origin: 'Brezilya & Endonezya',
    roast: 'Koyu Kavrulmuş',
    flavor: ['Bitter Çikolata', 'Baharat', 'Dumanlı'],
    weight: '250g',
    image: 'https://image.qwenlm.ai/generated-images/99d5aab7-fb0b-4f84-bd49-0d665af6f219/_result.png',
    rating: 4.9,
    reviews: 203,
  },
  {
    id: 5,
    name: 'Swiss Water Decaf',
    description: 'Kimyasal kullanılmadan, İsviçre Su Yöntemi ile kafeini arındırılmış bu özel kahve, lezzetten ödün vermeden hafif bir deneyim sunar. Akşam saatlerinde bile kahve keyfinizden vazgeçmeyin.',
    price: 179,
    category: 'Decaf',
    origin: 'Meksika',
    roast: 'Orta Kavrulmuş',
    flavor: ['Yumuşak', 'Fındık', 'Hafif Tatlı'],
    weight: '250g',
    image: 'https://image.qwenlm.ai/generated-images/fe21cbc3-4d73-44ed-ac51-62b2f6d01340/_result.png',
    rating: 4.5,
    reviews: 87,
  },
  {
    id: 6,
    name: 'Midnight Velvet Blend',
    description: 'Lüks ve zarafetin bir araya geldiği bu özel harman, Sumatra ve Kenya çekirdeklerinin cesur birleşimidir. Kadifemsi gövdesi, derin topraksı notaları ve uzun bitimiyle gece yarısı kahve ritüelleriniz için mükemmel bir eşlikçi.',
    price: 199,
    category: 'Blend',
    origin: 'Sumatra & Kenya',
    roast: 'Koyu Kavrulmuş',
    flavor: ['Topraksı', 'Kadifemsi', 'Baharatlı'],
    weight: '250g',
    image: 'https://image.qwenlm.ai/generated-images/178177db-85c1-4bb4-b0d2-7a489dd39c59/_result.png',
    rating: 4.8,
    reviews: 142,
  },
];
