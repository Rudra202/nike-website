import { useParams, useSearchParams, Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { filterProducts, categoryNames, parsePath, type SortOption, type Product } from "../data/navigation";
import { IMAGES } from "../data/images";

const productImages = [
  IMAGES.footwear, IMAGES.product2, IMAGES.product3, IMAGES.product4,
  IMAGES.product5, IMAGES.product6, IMAGES.product7, IMAGES.product8,
  IMAGES.running, IMAGES.training, IMAGES.basketball, IMAGES.football,
  IMAGES.apparel, IMAGES.sportswear, IMAGES.yoga, IMAGES.tennis,
  IMAGES.accessories, IMAGES.golf, IMAGES.heroJordan, IMAGES.heroRunning,
  IMAGES.heroFootball, IMAGES.sportswear, IMAGES.apparel, IMAGES.accessories,
];

function ProductCard({ product, imgIndex }: { product: Product; imgIndex: number }) {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image">
        <img
          src={productImages[imgIndex % productImages.length]}
          alt={product.name}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        {product.discount && (
          <span className="product-discount-badge">-{product.discount}%</span>
        )}
        {product.isNew && !product.discount && (
          <span className="product-new-badge">New</span>
        )}
      </div>
      <div className="product-info">
        <div className="product-rating">
          <span className="stars">{'★'.repeat(Math.round(product.rating))}{'☆'.repeat(5 - Math.round(product.rating))}</span>
          <span className="reviews">({product.reviews})</span>
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-sizes">{product.sizes}</p>
        <div className="product-pricing">
          {product.originalPrice ? (
            <>
              <span className="product-price">₹{product.price.toLocaleString()}</span>
              <span className="product-original-price">₹{product.originalPrice.toLocaleString()}</span>
              <span className="product-discount">{product.discount}% off</span>
            </>
          ) : (
            <span className="product-price">₹{product.price.toLocaleString()}</span>
          )}
        </div>
        <p className="product-colors">{product.colors} Colour{product.colors > 1 ? "s" : ""}</p>
      </div>
    </Link>
  );
}

const filters = [
  { label: "Shoes", key: "type", value: "shoes" },
  { label: "Clothing", key: "type", value: "clothing" },
  { label: "Accessories", key: "type", value: "accessories" },
  { label: "Men", key: "gender", value: "men" },
  { label: "Women", key: "gender", value: "women" },
  { label: "Kids", key: "gender", value: "kids" },
  { label: "Sale", key: "sale", value: "true" },
  { label: "New", key: "new", value: "true" },
];

function ShopPage() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const wildcard = params["*"] || "";
  const [sort, setSort] = useState<SortOption>("featured");

  const parsed = useMemo(() => parsePath("/" + wildcard), [wildcard]);

  const pageTitle = useMemo(() => {
    if (parsed.tag === "sale") return "Sale";
    if (parsed.tag === "new-arrivals") return "New Arrivals";
    if (parsed.tag === "bestsellers") return "Bestsellers";
    if (parsed.tag === "trending") return "Trending";
    if (parsed.category && categoryNames[parsed.category]) return categoryNames[parsed.category];
    if (parsed.gender) return parsed.gender.charAt(0).toUpperCase() + parsed.gender.slice(1);
    if (parsed.type) return parsed.type.charAt(0).toUpperCase() + parsed.type.slice(1);
    return "Shop";
  }, [parsed]);

  const displayedProducts = useMemo(() => {
    const opts: Record<string, string | boolean | SortOption> = {};
    if (parsed.gender) opts.gender = parsed.gender;
    if (parsed.type) opts.type = parsed.type;
    if (parsed.brand) opts.brand = parsed.brand;
    if (parsed.category) opts.subcategory = parsed.category;
    if (parsed.tag === "sale") opts.sale = true;
    if (parsed.tag === "new-arrivals") opts.new = true;
    if (parsed.tag === "bestsellers") opts.bestseller = true;
    if (parsed.tag === "trending") { opts.bestseller = true; opts.new = true; }
    opts.sort = sort;

    const brand = searchParams.get("brand");
    if (brand) opts.brand = brand;

    const genderFilter = searchParams.get("gender");
    if (genderFilter) opts.gender = genderFilter;

    const typeFilter = searchParams.get("type");
    if (typeFilter) opts.type = typeFilter;

    const saleFilter = searchParams.get("sale");
    if (saleFilter) opts.sale = true;

    return filterProducts(opts as any);
  }, [parsed, sort, searchParams]);

  const handleFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.get(key) === value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const getHeroImage = () => {
    if (parsed.gender === "women" || parsed.type === "clothing" && parsed.gender === "women") return IMAGES.heroWomen;
    if (parsed.gender === "kids") return IMAGES.heroKids;
    if (parsed.category === "football") return IMAGES.football;
    if (parsed.category === "training") return IMAGES.heroTraining;
    if (parsed.category === "basketball") return IMAGES.basketball;
    if (parsed.category === "jordan" || parsed.brand === "jordan") return IMAGES.heroJordan;
    if (parsed.tag === "sale") return IMAGES.heroSale;
    if (parsed.tag && ["new-arrivals", "bestsellers", "trending"].includes(parsed.tag)) return IMAGES.heroLanding;
    return IMAGES.heroRunning;
  };

  const getBreadcrumbs = () => {
    const crumbs: { label: string; href: string }[] = [{ label: "Home", href: "/" }];
    const parts = wildcard.split("/").filter(Boolean);
    let accum = "";
    for (const part of parts) {
      accum += "/" + part;
      const label = categoryNames[part] || part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, " ");
      if (part !== parts[parts.length - 1]) {
        crumbs.push({ label, href: accum });
      } else {
        crumbs.push({ label, href: accum });
      }
    }
    return crumbs;
  };

  return (
    <div className="page page-shop">
      <div
        className="shop-hero"
        style={{
          backgroundImage: `url(${getHeroImage()})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="shop-hero-title">{pageTitle}</h1>
      </div>

      <div className="breadcrumbs shop-breadcrumbs">
        {getBreadcrumbs().map((crumb, idx) => (
          <span key={crumb.href}>
            {idx > 0 && <span className="sep"> / </span>}
            {idx === getBreadcrumbs().length - 1 ? (
              <span className="current">{crumb.label}</span>
            ) : (
              <Link to={crumb.href}>{crumb.label}</Link>
            )}
          </span>
        ))}
      </div>

      <div className="shop-layout">
        <aside className="shop-sidebar">
          <h3>Filters</h3>
          <div className="filter-section">
            <h4>Category</h4>
            {filters.map((f) => (
              <label key={f.key + f.value} className="filter-label">
                <input
                  type="checkbox"
                  checked={searchParams.get(f.key) === f.value}
                  onChange={() => handleFilter(f.key, f.value)}
                />
                {f.label}
              </label>
            ))}
          </div>

          <div className="filter-section">
            <h4>Sort By</h4>
            <select value={sort} onChange={(e) => setSort(e.target.value as SortOption)} className="sort-select">
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </aside>

        <div className="shop-main">
          <div className="shop-header">
            <p className="shop-count">{displayedProducts.length} Results</p>
          </div>

          {displayedProducts.length === 0 ? (
            <div className="shop-empty">
              <h2>No products found</h2>
              <p>Try adjusting your filters or browse other categories.</p>
              <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
          ) : (
            <div className="product-grid shop-grid">
              {displayedProducts.map((product, idx) => (
                <ProductCard key={product.id} product={product} imgIndex={idx} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
