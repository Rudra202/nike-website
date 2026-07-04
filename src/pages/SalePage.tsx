import { Link } from "react-router-dom";
import { IMAGES } from "../data/images";

function SalePage() {
  return (
    <div className="page page-category">
      <section className="category-hero">
        <div
          className="category-hero-image"
          style={{
            backgroundImage: `url(${IMAGES.heroSale})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "500px",
          }}
        />
        <div className="category-hero-content">
          <span className="hero-subtitle" style={{ color: "#e74c3c" }}>Sale</span>
          <h1>UP TO 40% OFF</h1>
          <p>Level up your game without breaking the bank.</p>
          <Link to="/sale/all" className="btn btn-primary">Shop All Sale</Link>
        </div>
      </section>

      <div className="category-banner">
        <h2>Sale & Offers</h2>
        <div className="category-quick-links">
          <Link to="/sale/men" className="quick-link">Men's Sale</Link>
          <Link to="/sale/women" className="quick-link">Women's Sale</Link>
          <Link to="/sale/kids" className="quick-link">Kids' Sale</Link>
          <Link to="/sale/all" className="quick-link">All Sale</Link>
        </div>
      </div>

      <section className="home-more">
        <h2 className="section-title">Shop by Category</h2>
        <div className="more-categories">
          <Link to="/sale/men/shoes" className="more-category">
            <div
              className="more-category-image"
              style={{
                backgroundImage: `url(${IMAGES.footwear})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span>Shoes</span>
          </Link>
          <Link to="/sale/men/clothing" className="more-category">
            <div
              className="more-category-image"
              style={{
                backgroundImage: `url(${IMAGES.apparel})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span>Apparel</span>
          </Link>
          <Link to="/sale/men/accessories" className="more-category">
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
        <h2 className="section-title">Shop by Sports</h2>
        <div className="sport-categories">
          <Link to="/sale/running" className="sport-category-card">
            <div
              className="sport-category-image"
              style={{
                backgroundImage: `url(${IMAGES.running})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span className="sport-category-label">Running</span>
          </Link>
          <Link to="/sale/gym-training" className="sport-category-card">
            <div
              className="sport-category-image"
              style={{
                backgroundImage: `url(${IMAGES.training})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span className="sport-category-label">Gym & Training</span>
          </Link>
          <Link to="/sale/basketball" className="sport-category-card">
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
          <Link to="/sale/football" className="sport-category-card">
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

export default SalePage;
