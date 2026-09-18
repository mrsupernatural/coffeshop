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
  stock: number;
  badge?: 'new' | 'popular' | 'sale';
  originalPrice?: number;
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
    image: 'https://image.qwenlm.ai/generated-images/d32f7f1a-f36b-46fd-bd62-4cb4cd8cfa6c/_result.png',
    rating: 4.8,
    reviews: 124,
    stock: 15,
    badge: 'popular',
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
    image: 'https://image.qwenlm.ai/generated-images/54b6d24e-1131-4189-a189-62d2bc17602f/_result.png',
    rating: 4.6,
    reviews: 98,
    stock: 23,
    badge: 'sale',
    originalPrice: 199,
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
    image: 'https://image.qwenlm.ai/generated-images/c71d6a7e-0f2d-45a8-bff2-cf4bb8d3cd5b/_result.png',
    rating: 4.7,
    reviews: 156,
    stock: 42,
    badge: 'new',
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
    image: 'https://image.qwenlm.ai/generated-images/454e1016-d90e-45d9-9523-db0643d27617/_result.png',
    rating: 4.9,
    reviews: 203,
    stock: 8,
    badge: 'popular',
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
    image: 'https://image.qwenlm.ai/generated-images/481f88d1-eac3-4250-828e-245f93bd89e7/_result.png',
    rating: 4.5,
    reviews: 87,
    stock: 31,
    badge: 'new',
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
    image: 'https://image.qwenlm.ai/generated-images/a105c15d-fe23-4fe1-81e8-2accfa5b0fe5/_result.png',
    rating: 4.8,
    reviews: 142,
    stock: 3,
    badge: 'sale',
    originalPrice: 249,
  },
];
