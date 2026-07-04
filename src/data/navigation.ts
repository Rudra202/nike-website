export interface SubMenuColumn {
  title: string;
  items: { label: string; href: string }[];
}

export interface NavItem {
  label: string;
  href: string;
  columns: SubMenuColumn[];
}

export const navigationData: NavItem[] = [
  {
    label: "New & Featured",
    href: "/new-featured",
    columns: [
      {
        title: "Featured",
        items: [
          { label: "Rip The Script", href: "/rip-the-script" },
          { label: "New Arrivals", href: "/new-arrivals" },
          { label: "Bestsellers", href: "/bestsellers" },
          { label: "Top Picks Under ₹4999", href: "/under-4999" },
          { label: "Trending", href: "/trending" },
        ],
      },
      {
        title: "",
        items: [
          { label: "Just Do The Work", href: "/just-do-the-work" },
          { label: "Retro Running", href: "/retro-running" },
          { label: "AF1 Unmistakable", href: "/af1-unmistakable" },
          { label: "Nike Mind", href: "/nike-mind" },
        ],
      },
      {
        title: "Shop Icons",
        items: [
          { label: "Air Force 1", href: "/shop/air-force-1" },
          { label: "Air Jordan 1", href: "/shop/air-jordan-1" },
          { label: "Air Max", href: "/shop/air-max" },
          { label: "Dunk", href: "/shop/dunk" },
          { label: "Pegasus", href: "/shop/pegasus" },
          { label: "Vomero", href: "/shop/vomero" },
        ],
      },
      {
        title: "Sport",
        items: [
          { label: "Running", href: "/shop/running" },
          { label: "Gym & Training", href: "/shop/gym-training" },
          { label: "Sportswear", href: "/shop/sportswear" },
          { label: "Football", href: "/shop/football" },
          { label: "Basketball", href: "/shop/basketball" },
        ],
      },
    ],
  },
  {
    label: "Men",
    href: "/men",
    columns: [
      {
        title: "Featured",
        items: [
          { label: "New Arrivals", href: "/new-arrivals" },
          { label: "Bestsellers", href: "/bestsellers" },
          { label: "Shop All Sale", href: "/sale" },
          { label: "All Conditions Gear", href: "/shop/acg" },
        ],
      },
      {
        title: "Shoes",
        items: [
          { label: "All Shoes", href: "/men/shoes" },
          { label: "Lifestyle", href: "/men/shoes/lifestyle" },
          { label: "Jordan", href: "/men/shoes/jordan" },
          { label: "Running", href: "/men/shoes/running" },
          { label: "Basketball", href: "/men/shoes/basketball" },
          { label: "Gym & Training", href: "/men/shoes/gym-training" },
          { label: "Tennis", href: "/men/shoes/tennis" },
          { label: "Skateboarding", href: "/men/shoes/skateboarding" },
          { label: "Sandals & Slides", href: "/men/shoes/sandals-slides" },
        ],
      },
      {
        title: "Clothing",
        items: [
          { label: "All Clothing", href: "/men/clothing" },
          { label: "Tops & T-Shirts", href: "/men/clothing/tops" },
          { label: "Shorts", href: "/men/clothing/shorts" },
          { label: "Pants & Leggings", href: "/men/clothing/pants" },
          { label: "Hoodies & Sweatshirts", href: "/men/clothing/hoodies" },
          { label: "Jackets & Gilets", href: "/men/clothing/jackets" },
          { label: "Jerseys & Kits", href: "/men/clothing/jerseys" },
          { label: "Jordan", href: "/men/clothing/jordan" },
        ],
      },
      {
        title: "Shop By Sport",
        items: [
          { label: "Running", href: "/shop/running" },
          { label: "Basketball", href: "/shop/basketball" },
          { label: "Football", href: "/shop/football" },
          { label: "Golf", href: "/shop/golf" },
          { label: "Tennis", href: "/shop/tennis" },
          { label: "Gym & Training", href: "/shop/gym-training" },
          { label: "Yoga", href: "/shop/yoga" },
          { label: "Skateboarding", href: "/shop/skateboarding" },
        ],
      },
      {
        title: "Accessories & Equipment",
        items: [
          { label: "All Accessories", href: "/men/accessories" },
          { label: "Bags & Backpacks", href: "/men/accessories/bags" },
          { label: "Socks", href: "/men/accessories/socks" },
          { label: "Hats & Headwear", href: "/men/accessories/hats" },
        ],
      },
    ],
  },
  {
    label: "Women",
    href: "/women",
    columns: [
      {
        title: "Featured",
        items: [
          { label: "New Arrivals", href: "/new-arrivals" },
          { label: "Bestsellers", href: "/bestsellers" },
          { label: "Shop All Sale", href: "/sale" },
        ],
      },
      {
        title: "Shoes",
        items: [
          { label: "All Shoes", href: "/women/shoes" },
          { label: "Lifestyle", href: "/women/shoes/lifestyle" },
          { label: "Running", href: "/women/shoes/running" },
          { label: "Jordan", href: "/women/shoes/jordan" },
          { label: "Gym & Training", href: "/women/shoes/gym-training" },
          { label: "Sandals & Slides", href: "/women/shoes/sandals-slides" },
        ],
      },
      {
        title: "Clothing",
        items: [
          { label: "All Clothing", href: "/women/clothing" },
          { label: "Tops & T-Shirts", href: "/women/clothing/tops" },
          { label: "Sports Bras", href: "/women/clothing/sports-bras" },
          { label: "Pants & Leggings", href: "/women/clothing/pants" },
          { label: "Shorts", href: "/women/clothing/shorts" },
          { label: "Hoodies & Sweatshirts", href: "/women/clothing/hoodies" },
          { label: "Jackets & Gilets", href: "/women/clothing/jackets" },
          { label: "Skirts & Dresses", href: "/women/clothing/skirts" },
          { label: "Modest Wear", href: "/women/clothing/modest-wear" },
          { label: "Plus Size", href: "/women/clothing/plus-size" },
        ],
      },
      {
        title: "Shop By Sport",
        items: [
          { label: "Yoga", href: "/shop/yoga" },
          { label: "Running", href: "/shop/running" },
          { label: "Gym & Training", href: "/shop/gym-training" },
          { label: "Basketball", href: "/shop/basketball" },
          { label: "Tennis", href: "/shop/tennis" },
          { label: "Golf", href: "/shop/golf" },
          { label: "Football", href: "/shop/football" },
        ],
      },
      {
        title: "Accessories",
        items: [
          { label: "All Accessories", href: "/women/accessories" },
          { label: "Bags & Backpacks", href: "/women/accessories/bags" },
          { label: "Socks", href: "/women/accessories/socks" },
          { label: "Hats & Headwear", href: "/women/accessories/hats" },
        ],
      },
    ],
  },
  {
    label: "Kids",
    href: "/kids",
    columns: [
      {
        title: "Featured",
        items: [
          { label: "New Arrivals", href: "/new-arrivals" },
          { label: "Bestsellers", href: "/bestsellers" },
          { label: "Back to School", href: "/shop/back-to-school" },
          { label: "Lifestyle Looks", href: "/kids/lifestyle" },
        ],
      },
      {
        title: "Shoes",
        items: [
          { label: "All Shoes", href: "/kids/shoes" },
          { label: "Lifestyle", href: "/kids/shoes/lifestyle" },
          { label: "Running", href: "/kids/shoes/running" },
          { label: "Jordan", href: "/kids/shoes/jordan" },
        ],
      },
      {
        title: "Clothing",
        items: [
          { label: "All Clothing", href: "/kids/clothing" },
          { label: "Tops & T-Shirts", href: "/kids/clothing/tops" },
          { label: "Pants & Leggings", href: "/kids/clothing/pants" },
          { label: "Shorts", href: "/kids/clothing/shorts" },
        ],
      },
      {
        title: "Kids By Age",
        items: [
          { label: "Older Kids (7-14)", href: "/kids/older" },
          { label: "Younger Kids (4-7)", href: "/kids/younger" },
          { label: "Babies & Toddlers (0-4)", href: "/kids/babies" },
        ],
      },
      {
        title: "Shop By Sports",
        items: [
          { label: "Running", href: "/shop/running" },
          { label: "Gym & Training", href: "/shop/gym-training" },
        ],
      },
      {
        title: "Accessories",
        items: [
          { label: "All Accessories", href: "/kids/accessories" },
          { label: "Bags & Backpacks", href: "/kids/accessories/bags" },
          { label: "Hats & Headwear", href: "/kids/accessories/hats" },
        ],
      },
    ],
  },
  {
    label: "Jordan",
    href: "/jordan",
    columns: [
      {
        title: "New & Featured",
        items: [
          { label: "New Arrivals", href: "/new-arrivals" },
          { label: "Bestsellers", href: "/bestsellers" },
        ],
      },
      {
        title: "Men",
        items: [
          { label: "Shop All", href: "/jordan/men" },
          { label: "New Arrivals", href: "/jordan/men/new-arrivals" },
          { label: "Clothing", href: "/jordan/men/clothing" },
          { label: "Shoes", href: "/jordan/men/shoes" },
          { label: "Accessories", href: "/jordan/men/accessories" },
        ],
      },
      {
        title: "Women",
        items: [
          { label: "Shop All", href: "/jordan/women" },
          { label: "New Arrivals", href: "/jordan/women/new-arrivals" },
          { label: "Clothing", href: "/jordan/women/clothing" },
          { label: "Shoes", href: "/jordan/women/shoes" },
          { label: "Accessories", href: "/jordan/women/accessories" },
        ],
      },
      {
        title: "Sport",
        items: [
          { label: "Jordan Basketball", href: "/shop/basketball?brand=jordan" },
          { label: "Jordan Football", href: "/shop/football?brand=jordan" },
        ],
      },
    ],
  },
  {
    label: "Sale",
    href: "/sale",
    columns: [
      {
        title: "Sale & Offers",
        items: [
          { label: "Shop All Sale", href: "/sale/all" },
        ],
      },
      {
        title: "Men's Sale",
        items: [
          { label: "Shoes", href: "/sale/men/shoes" },
          { label: "Clothing", href: "/sale/men/clothing" },
          { label: "Accessories", href: "/sale/men/accessories" },
        ],
      },
      {
        title: "Women's Sale",
        items: [
          { label: "Shoes", href: "/sale/women/shoes" },
          { label: "Clothing", href: "/sale/women/clothing" },
          { label: "Accessories", href: "/sale/women/accessories" },
        ],
      },
      {
        title: "Shop by Sports",
        items: [
          { label: "Running", href: "/sale/running" },
          { label: "Gym & Training", href: "/sale/gym-training" },
          { label: "Basketball", href: "/sale/basketball" },
          { label: "Football", href: "/sale/football" },
        ],
      },
    ],
  },
];

export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  gender: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviews: number;
  colors: number;
  sizes: string;
  isNew: boolean;
  isBestseller: boolean;
  tags: string[];
  image: string;
  sport: string;
  type: string;
}

const IMG = (n: number) =>
  `https://images.unsplash.com/photo-${n}?w=600&q=80`;

export const products: Product[] = [
  { id: "1", name: "Nike Vomero 18 SE", category: "Men's Road Running Shoes", subcategory: "running", gender: "men", brand: "nike", price: 14195, rating: 4.5, reviews: 128, colors: 3, sizes: "7 sizes", isNew: true, isBestseller: true, tags: ["running", "new", "featured"], image: IMG(1542291026), sport: "running", type: "shoes" },
  { id: "2", name: "Nike C1TY", category: "Shoes", subcategory: "lifestyle", gender: "men", brand: "nike", price: 6956, originalPrice: 8695, discount: 20, rating: 4.2, reviews: 85, colors: 4, sizes: "13 sizes", isNew: false, isBestseller: true, tags: ["lifestyle", "sale"], image: IMG(1606107557), sport: "lifestyle", type: "shoes" },
  { id: "3", name: "Jordan Sixty Plus Low", category: "Men's Shoes", subcategory: "jordan", gender: "men", brand: "jordan", price: 15295, rating: 4.8, reviews: 56, colors: 5, sizes: "13 sizes", isNew: true, isBestseller: false, tags: ["jordan", "new", "basketball"], image: IMG(1595950653), sport: "basketball", type: "shoes" },
  { id: "4", name: "Nike Pegasus Premium", category: "Men's Road Running Shoes", subcategory: "running", gender: "men", brand: "nike", price: 19295, rating: 4.6, reviews: 234, colors: 6, sizes: "14 sizes", isNew: true, isBestseller: true, tags: ["running", "new", "featured"], image: IMG(1579338559), sport: "running", type: "shoes" },
  { id: "5", name: "Nike P-6000", category: "Shoes", subcategory: "lifestyle", gender: "men", brand: "nike", price: 6396, originalPrice: 7995, discount: 20, rating: 4.1, reviews: 67, colors: 7, sizes: "15 sizes", isNew: false, isBestseller: false, tags: ["lifestyle", "retro", "sale"], image: IMG(1608231387), sport: "lifestyle", type: "shoes" },
  { id: "6", name: "Nike Pegasus 42", category: "Men's Road-Running Shoes", subcategory: "running", gender: "men", brand: "nike", price: 12995, rating: 4.7, reviews: 312, colors: 4, sizes: "13 sizes", isNew: true, isBestseller: true, tags: ["running", "new"], image: IMG(1587563871), sport: "running", type: "shoes" },
  { id: "7", name: "Nike V5 RNR", category: "Men's Shoes", subcategory: "lifestyle", gender: "men", brand: "nike", price: 7995, rating: 4.0, reviews: 42, colors: 5, sizes: "8 sizes", isNew: false, isBestseller: false, tags: ["lifestyle"], image: IMG(1560343090), sport: "lifestyle", type: "shoes" },
  { id: "8", name: "Nike Air Force 1 '07", category: "Men's Shoes", subcategory: "lifestyle", gender: "men", brand: "nike", price: 9695, rating: 4.9, reviews: 1024, colors: 6, sizes: "8 sizes", isNew: false, isBestseller: true, tags: ["lifestyle", "iconic", "featured"], image: IMG(1491553895), sport: "lifestyle", type: "shoes" },
  { id: "9", name: "Nike Free Metcon 7", category: "Men's Training Shoes", subcategory: "training", gender: "men", brand: "nike", price: 11995, rating: 4.4, reviews: 189, colors: 4, sizes: "10 sizes", isNew: true, isBestseller: true, tags: ["training", "new", "featured"], image: IMG(1534438327), sport: "training", type: "shoes" },
  { id: "10", name: "Nike Air Max 270", category: "Men's Shoes", subcategory: "lifestyle", gender: "men", brand: "nike", price: 11495, rating: 4.6, reviews: 567, colors: 8, sizes: "12 sizes", isNew: false, isBestseller: true, tags: ["lifestyle", "air-max", "featured"], image: IMG(1571752499), sport: "lifestyle", type: "shoes" },
  { id: "11", name: "Nike React Infinity Run", category: "Women's Running Shoes", subcategory: "running", gender: "women", brand: "nike", price: 13495, rating: 4.5, reviews: 298, colors: 5, sizes: "11 sizes", isNew: true, isBestseller: true, tags: ["running", "new", "women"], image: IMG(1552674605), sport: "running", type: "shoes" },
  { id: "12", name: "Nike Dri-FIT One Top", category: "Women's Training Top", subcategory: "tops", gender: "women", brand: "nike", price: 2495, rating: 4.3, reviews: 156, colors: 6, sizes: "XS-XL", isNew: false, isBestseller: true, tags: ["training", "tops", "women"], image: IMG(1489987707), sport: "training", type: "clothing" },
  { id: "13", name: "Nike Sportswear Club Fleece", category: "Men's Hoodie", subcategory: "hoodies", gender: "men", brand: "nike", price: 3495, rating: 4.7, reviews: 892, colors: 8, sizes: "S-3XL", isNew: false, isBestseller: true, tags: ["sportswear", "hoodies", "featured"], image: IMG(1556902524), sport: "sportswear", type: "clothing" },
  { id: "14", name: "Nike Pro Dri-FIT Shorts", category: "Men's Training Shorts", subcategory: "shorts", gender: "men", brand: "nike", price: 1995, rating: 4.4, reviews: 445, colors: 5, sizes: "S-3XL", isNew: false, isBestseller: true, tags: ["training", "shorts", "featured"], image: IMG(1571902943), sport: "training", type: "clothing" },
  { id: "15", name: "Nike Yoga Dri-FIT Top", category: "Women's Yoga Top", subcategory: "tops", gender: "women", brand: "nike", price: 2795, rating: 4.2, reviews: 78, colors: 4, sizes: "XS-XL", isNew: true, isBestseller: false, tags: ["yoga", "tops", "new", "women"], image: IMG(1544367567), sport: "yoga", type: "clothing" },
  { id: "16", name: "NikeCourt React Vapor NXT", category: "Men's Tennis Shoes", subcategory: "tennis", gender: "men", brand: "nike", price: 11495, rating: 4.6, reviews: 134, colors: 3, sizes: "9 sizes", isNew: true, isBestseller: false, tags: ["tennis", "new"], image: IMG(1595435934), sport: "tennis", type: "shoes" },
  { id: "17", name: "Nike Gym Club Bag", category: "Accessories", subcategory: "bags", gender: "unisex", brand: "nike", price: 3995, rating: 4.1, reviews: 67, colors: 3, sizes: "One Size", isNew: false, isBestseller: false, tags: ["accessories", "bags", "training"], image: IMG(1606761568), sport: "training", type: "accessories" },
  { id: "18", name: "Nike Everyday Cushion Socks", category: "Accessories", subcategory: "socks", gender: "unisex", brand: "nike", price: 995, rating: 4.5, reviews: 1024, colors: 10, sizes: "S-XL", isNew: false, isBestseller: true, tags: ["accessories", "socks", "featured"], image: IMG(1605326529), sport: "lifestyle", type: "accessories" },
  { id: "19", name: "Jordan Air 4 Retro", category: "Men's Shoes", subcategory: "jordan", gender: "men", brand: "jordan", price: 18295, rating: 4.9, reviews: 723, colors: 4, sizes: "10 sizes", isNew: true, isBestseller: true, tags: ["jordan", "new", "basketball", "featured"], image: IMG(1595950653), sport: "basketball", type: "shoes" },
  { id: "20", name: "Nike Phantom GX Elite", category: "Football Boots", subcategory: "football", gender: "men", brand: "nike", price: 16295, rating: 4.7, reviews: 234, colors: 3, sizes: "9 sizes", isNew: true, isBestseller: true, tags: ["football", "new", "featured"], image: IMG(1431324155), sport: "football", type: "shoes" },
  { id: "21", name: "Nike Strike Dri-FIT Jersey", category: "Men's Football Jersey", subcategory: "jerseys", gender: "men", brand: "nike", price: 3495, rating: 4.3, reviews: 167, colors: 6, sizes: "S-3XL", isNew: true, isBestseller: false, tags: ["football", "jerseys", "new"], image: IMG(1486210389), sport: "football", type: "clothing" },
  { id: "22", name: "Nike Legend Essential 2", category: "Men's Training Shoes", subcategory: "training", gender: "men", brand: "nike", price: 4995, rating: 4.2, reviews: 345, colors: 5, sizes: "11 sizes", isNew: false, isBestseller: true, tags: ["training", "sale"], image: IMG(1534438327), sport: "training", type: "shoes" },
  { id: "23", name: "Nike Windrunner Jacket", category: "Men's Jackets", subcategory: "jackets", gender: "men", brand: "nike", price: 5495, rating: 4.6, reviews: 678, colors: 7, sizes: "S-3XL", isNew: false, isBestseller: true, tags: ["sportswear", "jackets", "featured"], image: IMG(1489987707), sport: "sportswear", type: "clothing" },
  { id: "24", name: "Nike One Luxe Leggings", category: "Women's Leggings", subcategory: "pants", gender: "women", brand: "nike", price: 4495, rating: 4.5, reviews: 456, colors: 4, sizes: "XS-XL", isNew: true, isBestseller: true, tags: ["training", "leggings", "new", "women"], image: IMG(1486210389), sport: "training", type: "clothing" },
];

export const allCategories = [
  "shoes", "clothing", "accessories",
  "lifestyle", "running", "training", "basketball", "football",
  "tennis", "golf", "yoga", "skateboarding",
  "tops", "shorts", "pants", "hoodies", "jackets", "jerseys",
  "socks", "bags", "hats",
  "jordan", "air-max", "air-force-1", "dunk", "pegasus",
];

export const categoryNames: Record<string, string> = {
  shoes: "Shoes", clothing: "Clothing", accessories: "Accessories & Equipment",
  lifestyle: "Lifestyle", running: "Running", training: "Gym & Training",
  basketball: "Basketball", football: "Football", tennis: "Tennis",
  golf: "Golf", yoga: "Yoga", skateboarding: "Skateboarding",
  tops: "Tops & T-Shirts", shorts: "Shorts", pants: "Pants & Leggings",
  hoodies: "Hoodies & Sweatshirts", jackets: "Jackets & Gilets",
  jerseys: "Jerseys & Kits", socks: "Socks", bags: "Bags & Backpacks",
  hats: "Hats & Headwear", jordan: "Jordan",
  "air-max": "Air Max", "air-force-1": "Air Force 1",
  dunk: "Dunk", pegasus: "Pegasus",
  acg: "All Conditions Gear",
  "back-to-school": "Back to School",
};

export type SortOption = "featured" | "newest" | "price-low" | "price-high" | "rating";

export function filterProducts(opts: {
  gender?: string;
  category?: string;
  subcategory?: string;
  brand?: string;
  sport?: string;
  type?: string;
  search?: string;
  sale?: boolean;
  new?: boolean;
  bestseller?: boolean;
  tag?: string;
  sort?: SortOption;
  minPrice?: number;
  maxPrice?: number;
}): Product[] {
  let result = [...products];

  if (opts.gender) result = result.filter(p => p.gender === opts.gender);
  if (opts.category) result = result.filter(p => p.category.toLowerCase().includes(opts.category!));
  if (opts.subcategory) result = result.filter(p => p.subcategory === opts.subcategory);
  if (opts.brand) result = result.filter(p => p.brand === opts.brand);
  if (opts.sport) result = result.filter(p => p.sport === opts.sport);
  if (opts.type) result = result.filter(p => p.type === opts.type);
  if (opts.search) result = result.filter(p => p.name.toLowerCase().includes(opts.search!.toLowerCase()));
  if (opts.sale !== undefined) {
    if (opts.sale) result = result.filter(p => p.discount);
    else result = result.filter(p => !p.discount);
  }
  if (opts.new) result = result.filter(p => p.isNew);
  if (opts.bestseller) result = result.filter(p => p.isBestseller);
  if (opts.tag) result = result.filter(p => p.tags.includes(opts.tag!));
  if (opts.minPrice) result = result.filter(p => p.price >= opts.minPrice!);
  if (opts.maxPrice) result = result.filter(p => p.price <= opts.maxPrice!);

  if (opts.sort) {
    switch (opts.sort) {
      case "newest": result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1)); break;
      case "price-low": result.sort((a, b) => a.price - b.price); break;
      case "price-high": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      default: result.sort((a, b) => (a.isBestseller === b.isBestseller ? 0 : a.isBestseller ? -1 : 1));
    }
  }

  return result;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function parsePath(path: string): {
  gender?: string;
  category?: string;
  subcategory?: string;
  type?: string;
  brand?: string;
  tag?: string;
} {
  const parts = path.split("/").filter(Boolean);
  const result: Record<string, string> = {};

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (["men", "women", "kids"].includes(part)) result.gender = part;
    else if (["shoes", "clothing", "accessories"].includes(part)) result.type = part;
    else if (["nike", "jordan"].includes(part)) result.brand = part;
    else if (["new-arrivals", "bestsellers", "trending"].includes(part)) result.tag = part;
    else if (["sale"].includes(part)) result.tag = "sale";
    else if (allCategories.includes(part)) result.category = part;
  }

  return result;
}

export interface HeroBanner {
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  ctaLink: string;
}

export const heroBanners: HeroBanner[] = [
  {
    title: "DON'T PLAY BY THE BOOK",
    subtitle: "",
    description: "Some overthink. The rest make history.",
    cta: "Shop",
    ctaLink: "/new-featured",
  },
  {
    title: "FORGED UNDER PRESSURE",
    subtitle: "Nike Football",
    description: "Keep doubting England. It only fuels their fire.",
    cta: "Shop Team Collections",
    ctaLink: "/football",
  },
  {
    title: "TRAIN RIGHT",
    subtitle: "Nike Training",
    description: "Just do the work in the Free Metcon 7.",
    cta: "Shop",
    ctaLink: "/men/shoes/gym-training",
  },
];
