# Nike India Website Clone

A full-stack clone of [nike.in](https://www.nike.in/) built with React, TypeScript, Vite, and Express.

## Features

- Full navigation with mega menus (New & Featured, Men, Women, Kids, Jordan, Sale)
- Homepage with hero banners, featured sections, trending sports, product grid
- Dynamic category/shop pages for every navigation link
- Product detail pages with images, sizes, colors, and pricing
- Express API backend with product filtering and search
- Responsive design (desktop + mobile)
- Nike swoosh branding and Unsplash imagery

## Tech Stack

- **Frontend:** React 19, TypeScript, Vite, React Router
- **Backend:** Express.js, TypeScript
- **Styling:** CSS (Nike-inspired black & white minimal design)

## Live Demo

<!-- Add your live demo link here -->
**Deployed URL:** https://nike-website-tau-sand.vercel.app/

*(Replace the placeholder above with your actual deployment URL)*

## Getting Started

```bash
# Install dependencies
npm install

# Start frontend dev server (port 5173)
npm run dev

# Start backend API server (port 3001)
npm run dev:server

# Start both together
npm run dev:all
```

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── components/     # Header, Footer, HeroBanner, ProductGrid, Layout
├── pages/          # Home, CategoryPages, ShopPage, ProductDetail, JordanPage, SalePage
├── data/           # Navigation data, products, images config
├── App.tsx         # Routes
├── App.css         # All styles
└── main.tsx        # Entry point

server.ts           # Express API server
```

## API Endpoints

- `GET /api/products` — List products (filters: gender, type, brand, sale, search, sort)
- `GET /api/products/:id` — Single product
- `GET /api/categories` — Available categories

---

Made with ❤️ by Rudy
