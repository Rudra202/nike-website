import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const products = [
  { id: "1", name: "Nike Vomero 18 SE", category: "Men's Road Running Shoes", subcategory: "running", gender: "men", brand: "nike", price: 14195, originalPrice: null, discount: null, rating: 4.5, reviews: 128, colors: 3, sizes: "7 sizes", isNew: true, isBestseller: true, tags: ["running", "new", "featured"], sport: "running", type: "shoes" },
  { id: "2", name: "Nike C1TY", category: "Shoes", subcategory: "lifestyle", gender: "men", brand: "nike", price: 6956, originalPrice: 8695, discount: 20, rating: 4.2, reviews: 85, colors: 4, sizes: "13 sizes", isNew: false, isBestseller: true, tags: ["lifestyle", "sale"], sport: "lifestyle", type: "shoes" },
  { id: "3", name: "Jordan Sixty Plus Low", category: "Men's Shoes", subcategory: "jordan", gender: "men", brand: "jordan", price: 15295, originalPrice: null, discount: null, rating: 4.8, reviews: 56, colors: 5, sizes: "13 sizes", isNew: true, isBestseller: false, tags: ["jordan", "new", "basketball"], sport: "basketball", type: "shoes" },
  { id: "4", name: "Nike Pegasus Premium", category: "Men's Road Running Shoes", subcategory: "running", gender: "men", brand: "nike", price: 19295, originalPrice: null, discount: null, rating: 4.6, reviews: 234, colors: 6, sizes: "14 sizes", isNew: true, isBestseller: true, tags: ["running", "new", "featured"], sport: "running", type: "shoes" },
  { id: "5", name: "Nike P-6000", category: "Shoes", subcategory: "lifestyle", gender: "men", brand: "nike", price: 6396, originalPrice: 7995, discount: 20, rating: 4.1, reviews: 67, colors: 7, sizes: "15 sizes", isNew: false, isBestseller: false, tags: ["lifestyle", "retro", "sale"], sport: "lifestyle", type: "shoes" },
  { id: "6", name: "Nike Pegasus 42", category: "Men's Road-Running Shoes", subcategory: "running", gender: "men", brand: "nike", price: 12995, originalPrice: null, discount: null, rating: 4.7, reviews: 312, colors: 4, sizes: "13 sizes", isNew: true, isBestseller: true, tags: ["running", "new"], sport: "running", type: "shoes" },
  { id: "7", name: "Nike V5 RNR", category: "Men's Shoes", subcategory: "lifestyle", gender: "men", brand: "nike", price: 7995, originalPrice: null, discount: null, rating: 4.0, reviews: 42, colors: 5, sizes: "8 sizes", isNew: false, isBestseller: false, tags: ["lifestyle"], sport: "lifestyle", type: "shoes" },
  { id: "8", name: "Nike Air Force 1 '07", category: "Men's Shoes", subcategory: "lifestyle", gender: "men", brand: "nike", price: 9695, originalPrice: null, discount: null, rating: 4.9, reviews: 1024, colors: 6, sizes: "8 sizes", isNew: false, isBestseller: true, tags: ["lifestyle", "iconic", "featured"], sport: "lifestyle", type: "shoes" },
  { id: "9", name: "Nike Free Metcon 7", category: "Men's Training Shoes", subcategory: "training", gender: "men", brand: "nike", price: 11995, originalPrice: null, discount: null, rating: 4.4, reviews: 189, colors: 4, sizes: "10 sizes", isNew: true, isBestseller: true, tags: ["training", "new", "featured"], sport: "training", type: "shoes" },
  { id: "10", name: "Nike Air Max 270", category: "Men's Shoes", subcategory: "lifestyle", gender: "men", brand: "nike", price: 11495, originalPrice: null, discount: null, rating: 4.6, reviews: 567, colors: 8, sizes: "12 sizes", isNew: false, isBestseller: true, tags: ["lifestyle", "air-max", "featured"], sport: "lifestyle", type: "shoes" },
  { id: "11", name: "Nike React Infinity Run", category: "Women's Running Shoes", subcategory: "running", gender: "women", brand: "nike", price: 13495, originalPrice: null, discount: null, rating: 4.5, reviews: 298, colors: 5, sizes: "11 sizes", isNew: true, isBestseller: true, tags: ["running", "new", "women"], sport: "running", type: "shoes" },
  { id: "12", name: "Nike Dri-FIT One Top", category: "Women's Training Top", subcategory: "tops", gender: "women", brand: "nike", price: 2495, originalPrice: null, discount: null, rating: 4.3, reviews: 156, colors: 6, sizes: "XS-XL", isNew: false, isBestseller: true, tags: ["training", "tops", "women"], sport: "training", type: "clothing" },
  { id: "13", name: "Nike Sportswear Club Fleece", category: "Men's Hoodie", subcategory: "hoodies", gender: "men", brand: "nike", price: 3495, originalPrice: null, discount: null, rating: 4.7, reviews: 892, colors: 8, sizes: "S-3XL", isNew: false, isBestseller: true, tags: ["sportswear", "hoodies", "featured"], sport: "sportswear", type: "clothing" },
  { id: "14", name: "Nike Pro Dri-FIT Shorts", category: "Men's Training Shorts", subcategory: "shorts", gender: "men", brand: "nike", price: 1995, originalPrice: null, discount: null, rating: 4.4, reviews: 445, colors: 5, sizes: "S-3XL", isNew: false, isBestseller: true, tags: ["training", "shorts", "featured"], sport: "training", type: "clothing" },
  { id: "15", name: "Nike Yoga Dri-FIT Top", category: "Women's Yoga Top", subcategory: "tops", gender: "women", brand: "nike", price: 2795, originalPrice: null, discount: null, rating: 4.2, reviews: 78, colors: 4, sizes: "XS-XL", isNew: true, isBestseller: false, tags: ["yoga", "tops", "new", "women"], sport: "yoga", type: "clothing" },
  { id: "16", name: "NikeCourt React Vapor NXT", category: "Men's Tennis Shoes", subcategory: "tennis", gender: "men", brand: "nike", price: 11495, originalPrice: null, discount: null, rating: 4.6, reviews: 134, colors: 3, sizes: "9 sizes", isNew: true, isBestseller: false, tags: ["tennis", "new"], sport: "tennis", type: "shoes" },
  { id: "17", name: "Nike Gym Club Bag", category: "Accessories", subcategory: "bags", gender: "unisex", brand: "nike", price: 3995, originalPrice: null, discount: null, rating: 4.1, reviews: 67, colors: 3, sizes: "One Size", isNew: false, isBestseller: false, tags: ["accessories", "bags", "training"], sport: "training", type: "accessories" },
  { id: "18", name: "Nike Everyday Cushion Socks", category: "Accessories", subcategory: "socks", gender: "unisex", brand: "nike", price: 995, originalPrice: null, discount: null, rating: 4.5, reviews: 1024, colors: 10, sizes: "S-XL", isNew: false, isBestseller: true, tags: ["accessories", "socks", "featured"], sport: "lifestyle", type: "accessories" },
  { id: "19", name: "Jordan Air 4 Retro", category: "Men's Shoes", subcategory: "jordan", gender: "men", brand: "jordan", price: 18295, originalPrice: null, discount: null, rating: 4.9, reviews: 723, colors: 4, sizes: "10 sizes", isNew: true, isBestseller: true, tags: ["jordan", "new", "basketball", "featured"], sport: "basketball", type: "shoes" },
  { id: "20", name: "Nike Phantom GX Elite", category: "Football Boots", subcategory: "football", gender: "men", brand: "nike", price: 16295, originalPrice: null, discount: null, rating: 4.7, reviews: 234, colors: 3, sizes: "9 sizes", isNew: true, isBestseller: true, tags: ["football", "new", "featured"], sport: "football", type: "shoes" },
  { id: "21", name: "Nike Strike Dri-FIT Jersey", category: "Men's Football Jersey", subcategory: "jerseys", gender: "men", brand: "nike", price: 3495, originalPrice: null, discount: null, rating: 4.3, reviews: 167, colors: 6, sizes: "S-3XL", isNew: true, isBestseller: false, tags: ["football", "jerseys", "new"], sport: "football", type: "clothing" },
  { id: "22", name: "Nike Legend Essential 2", category: "Men's Training Shoes", subcategory: "training", gender: "men", brand: "nike", price: 4995, originalPrice: null, discount: null, rating: 4.2, reviews: 345, colors: 5, sizes: "11 sizes", isNew: false, isBestseller: true, tags: ["training", "sale"], sport: "training", type: "shoes" },
  { id: "23", name: "Nike Windrunner Jacket", category: "Men's Jackets", subcategory: "jackets", gender: "men", brand: "nike", price: 5495, originalPrice: null, discount: null, rating: 4.6, reviews: 678, colors: 7, sizes: "S-3XL", isNew: false, isBestseller: true, tags: ["sportswear", "jackets", "featured"], sport: "sportswear", type: "clothing" },
  { id: "24", name: "Nike One Luxe Leggings", category: "Women's Leggings", subcategory: "pants", gender: "women", brand: "nike", price: 4495, originalPrice: null, discount: null, rating: 4.5, reviews: 456, colors: 4, sizes: "XS-XL", isNew: true, isBestseller: true, tags: ["training", "leggings", "new", "women"], sport: "training", type: "clothing" },
];

// API: Get all products with filtering
app.get("/api/products", (req, res) => {
  let result = [...products];
  const { gender, type, brand, sport, subcategory, sale, new: isNew, search, sort, minPrice, maxPrice } = req.query;

  if (gender) result = result.filter(p => p.gender === gender);
  if (type) result = result.filter(p => p.type === type);
  if (brand) result = result.filter(p => p.brand === brand);
  if (sport) result = result.filter(p => p.sport === sport);
  if (subcategory) result = result.filter(p => p.subcategory === subcategory);
  if (sale === "true") result = result.filter(p => p.discount);
  if (isNew === "true") result = result.filter(p => p.isNew);
  if (search) result = result.filter(p => p.name.toLowerCase().includes(String(search).toLowerCase()));
  if (minPrice) result = result.filter(p => p.price >= Number(minPrice));
  if (maxPrice) result = result.filter(p => p.price <= Number(maxPrice));

  if (sort === "price-low") result.sort((a, b) => a.price - b.price);
  else if (sort === "price-high") result.sort((a, b) => b.price - a.price);
  else if (sort === "rating") result.sort((a, b) => b.rating - a.rating);
  else if (sort === "newest") result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
  else result.sort((a, b) => (a.isBestseller === b.isBestseller ? 0 : a.isBestseller ? -1 : 1));

  res.json({ products: result, total: result.length });
});

// API: Get single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// API: Get categories
app.get("/api/categories", (_req, res) => {
  const categories = [...new Set(products.map(p => p.type))];
  const genders = [...new Set(products.map(p => p.gender))];
  const sports = [...new Set(products.map(p => p.sport))];
  res.json({ categories, genders, sports });
});

// In production, serve the built React app
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "dist")));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Nike API server running on http://localhost:${PORT}`);
});
