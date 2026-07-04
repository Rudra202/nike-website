import { useParams, Link } from "react-router-dom";
import { products } from "../data/navigation";
import { IMAGES } from "../data/images";

const productImages = [
  IMAGES.product1, IMAGES.product2, IMAGES.product3, IMAGES.product4,
  IMAGES.product5, IMAGES.product6, IMAGES.product7, IMAGES.product8,
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const imgIndex = product ? parseInt(product.id) - 1 : 0;

  if (!product) {
    return (
      <div className="page page-product">
        <div className="product-not-found">
          <h1>Product not found</h1>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page page-product">
      <div className="breadcrumbs">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/men/shoes">Shoes</Link>
        <span>/</span>
        <span className="current">{product.name}</span>
      </div>

      <div className="product-detail">
        <div className="product-detail-images">
          <div className="product-detail-main-image">
            <img
              src={productImages[imgIndex % productImages.length]}
              alt={product.name}
              style={{ width: "100%", height: "auto", aspectRatio: "0.8", objectFit: "cover", background: "#f5f5f5" }}
            />
          </div>
          <div className="product-thumbnails">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="product-thumbnail">
                <img
                  src={productImages[(imgIndex + i) % productImages.length]}
                  alt={`${product.name} view ${i + 1}`}
                  style={{ width: "100%", aspectRatio: "0.8", objectFit: "cover", background: "#f5f5f5" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="product-detail-info">
          <p className="product-detail-category">{product.category}</p>
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-price">
            {product.originalPrice ? (
              <>
                <span className="sale-price">₹{product.price.toLocaleString()}</span>
                <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
                <span className="discount-badge">{product.discount}% off</span>
              </>
            ) : (
              <>₹{product.price.toLocaleString()}</>
            )}
          </p>
          <p className="product-detail-tax">incl. of taxes and duties</p>

          <div className="product-colors-info">
            <p><strong>{product.colors} Colour</strong></p>
            <div className="color-swatches">
              {Array.from({ length: product.colors }).map((_, i) => (
                <button key={i} className={`color-swatch color-${i}`} aria-label={`Color ${i + 1}`} />
              ))}
            </div>
          </div>

          <div className="product-size-selector">
            <div className="size-header">
              <span>Select Size</span>
              <button className="size-guide-btn">Size Guide</button>
            </div>
            <div className="size-options">
              {["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11", "UK 12"].map((size) => (
                <button key={size} className="size-option">{size}</button>
              ))}
            </div>
          </div>

          <div className="product-actions">
            <button className="btn btn-primary btn-lg add-to-bag">Add to Bag</button>
            <button className="btn btn-outline btn-lg favourite-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          </div>

          <div className="product-detail-description">
            <p>This product is excluded from site promotions and discounts.</p>
            <p>Colour Shown: {product.colors > 1 ? "Multiple Colours" : "Black/White"}</p>
            <p>Style: {product.id.padStart(6, "0")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
