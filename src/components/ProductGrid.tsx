import { Link } from "react-router-dom";
import type { Product } from "../data/navigation";
import { IMAGES } from "../data/images";

const productImages = [
  IMAGES.product1, IMAGES.product2, IMAGES.product3, IMAGES.product4,
  IMAGES.product5, IMAGES.product6, IMAGES.product7, IMAGES.product8,
];

interface ProductGridProps {
  products: Product[];
  title?: string;
}

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
      </div>
      <div className="product-info">
        {product.rating === 0 && (
          <div className="product-rating">
            <span className="stars">★ 0.0</span>
            <span className="reviews">({product.reviews})</span>
          </div>
        )}
        <h3 className="product-name">{product.name}</h3>
        <p className="product-category">{product.category}</p>
        {product.sizes && <p className="product-sizes">{product.sizes}</p>}
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
        {product.discount && <span className="product-discount-tag">Sale</span>}
      </div>
    </Link>
  );
}

function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <section className="product-grid-section">
      {title && <h2 className="section-title">{title}</h2>}
      <div className="product-grid">
        {products.map((product, idx) => (
          <ProductCard key={product.id} product={product} imgIndex={idx} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
