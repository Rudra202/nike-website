import { Link } from "react-router-dom";
import HeroBanner from "../components/HeroBanner";
import ProductGrid from "../components/ProductGrid";
import { heroBanners, products } from "../data/navigation";
import { IMAGES } from "../data/images";

const sportCategories = [
  { label: "Running", href: "/running", image: IMAGES.running },
  { label: "Training", href: "/gym-training", image: IMAGES.training },
  { label: "Sportswear", href: "/sportswear", image: IMAGES.sportswear },
  { label: "Basketball", href: "/basketball", image: IMAGES.basketball },
  { label: "Football", href: "/football", image: IMAGES.football },
];

const featureLinks = [
  { label: "Best Sellers", href: "/bestsellers" },
  { label: "New Releases", href: "/new-arrivals" },
  { label: "Member Exclusive", href: "/members" },
];

function Home() {
  return (
    <div className="page page-home">
      <div className="home-hero">
        <div
          className="home-hero-image"
          style={{
            backgroundImage: `url(${IMAGES.heroLanding})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="home-hero-content">
          <p className="home-hero-sport">Nike Running</p>
          <h1>YOUR STRIDE, YOUR STORY</h1>
          <p className="home-hero-desc">
            Every run is a new chapter. Lace up and make it count.
          </p>
          <Link to="/men/shoes/running" className="btn btn-primary">Shop</Link>
        </div>
      </div>

      <section className="home-features">
        <h2 className="section-title">Featured</h2>
        <div className="feature-links">
          {featureLinks.map((link) => (
            <Link key={link.label} to={link.href} className="feature-link">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {heroBanners.map((banner, idx) => (
        <HeroBanner
          key={idx}
          {...banner}
          image={banner.title.includes("FORGED") ? IMAGES.heroFootball : banner.title.includes("TRAIN") ? IMAGES.heroTraining : IMAGES.heroRunning}
          imagePosition="center"
          reverse={idx % 2 === 1}
        />
      ))}

      <section className="home-trending">
        <h2 className="section-title">Trending</h2>
        <div className="sport-categories">
          {sportCategories.map((cat) => (
            <Link key={cat.label} to={cat.href} className="sport-category-card">
              <div
                className="sport-category-image"
                style={{
                  backgroundImage: `url(${cat.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <span className="sport-category-label">{cat.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-bestsellers">
        <ProductGrid products={products.slice(0, 4)} title="Best Sellers" />
      </section>

      <section className="home-app-promo">
        <div className="app-promo-content">
          <h2>Nike App</h2>
          <p>Enjoy 10% Off On The Nike App. Use: APP10</p>
          <Link to="/app" className="btn btn-primary">Download Now</Link>
          <p className="app-promo-tc">T&Cs</p>
        </div>
      </section>

      <section className="home-more">
        <h2 className="section-title">More to Explore</h2>
        <div className="more-categories">
          <Link to="/men" className="more-category">
            <div
              className="more-category-image"
              style={{
                backgroundImage: `url(${IMAGES.footwear})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <span>Footwear</span>
          </Link>
          <Link to="/men/clothing" className="more-category">
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
          <Link to="/men/accessories" className="more-category">
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
    </div>
  );
}

export default Home;
