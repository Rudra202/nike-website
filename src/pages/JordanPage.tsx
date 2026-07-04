import { Link } from "react-router-dom";
import { IMAGES } from "../data/images";

function JordanPage() {
  return (
    <div className="page page-category">
      <section className="category-hero">
        <div
          className="category-hero-image"
          style={{
            backgroundImage: `url(${IMAGES.heroJordan})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "500px",
          }}
        />
        <div className="category-hero-content">
          <h1 style={{ fontStyle: "italic" }}>JUMPMAN</h1>
          <p>It's not just a brand. It's a legacy.</p>
          <Link to="/jordan/men" className="btn btn-primary">Shop Jordan</Link>
        </div>
      </section>

      <div className="category-banner">
        <h2>Jordan</h2>
        <div className="category-quick-links">
          <Link to="/jordan/men" className="quick-link">Men</Link>
          <Link to="/jordan/women" className="quick-link">Women</Link>
          <Link to="/jordan/kids" className="quick-link">Kids</Link>
          <Link to="/jordan/new-arrivals" className="quick-link">New Arrivals</Link>
        </div>
      </div>

      <section className="home-more">
        <h2 className="section-title">Shop by Category</h2>
        <div className="more-categories">
          <Link to="/jordan/men/shoes" className="more-category">
            <div
              className="more-category-image"
              style={{
                backgroundImage: `url(${IMAGES.product3})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span>Shoes</span>
          </Link>
          <Link to="/jordan/men/clothing" className="more-category">
            <div
              className="more-category-image"
              style={{
                backgroundImage: `url(${IMAGES.apparel})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span>Clothing</span>
          </Link>
          <Link to="/jordan/men/accessories" className="more-category">
            <div
              className="more-category-image"
              style={{
                backgroundImage: `url(${IMAGES.accessories})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span>Accessories</span>
          </Link>
        </div>
      </section>

      <section className="home-trending">
        <h2 className="section-title">Shop by Sport</h2>
        <div className="sport-categories">
          <Link to="/jordan/basketball" className="sport-category-card">
            <div
              className="sport-category-image"
              style={{
                backgroundImage: `url(${IMAGES.basketball})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span className="sport-category-label">Basketball</span>
          </Link>
          <Link to="/jordan/football" className="sport-category-card">
            <div
              className="sport-category-image"
              style={{
                backgroundImage: `url(${IMAGES.football})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span className="sport-category-label">Football</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default JordanPage;
