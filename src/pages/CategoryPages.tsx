import { Link } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { products } from "../data/navigation";
import { IMAGES } from "../data/images";

interface CategoryConfig {
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  slug: string;
  heroImage: string;
}

const categoryPages: CategoryConfig[] = [
  {
    title: "Men",
    description: "Training in the wrong shoes is a crime against your progress. Just do the work in the Free Metcon 7.",
    heroTitle: "TRAIN RIGHT",
    heroSubtitle: "Nike Training",
    slug: "men",
    heroImage: IMAGES.heroTraining,
  },
  {
    title: "Women",
    description: "Instinct over everything.",
    heroTitle: "RIP THE SCRIPT",
    heroSubtitle: "",
    slug: "women",
    heroImage: IMAGES.heroWomen,
  },
  {
    title: "Kids",
    description: "A collection for those who turn every day into matchday.",
    heroTitle: "YOUR GAME. YOUR RULES.",
    heroSubtitle: "",
    slug: "kids",
    heroImage: IMAGES.heroKids,
  },
];

const activityLinks = [
  { label: "Running", href: "/running", image: IMAGES.running },
  { label: "Training", href: "/gym-training", image: IMAGES.training },
  { label: "Sportswear", href: "/sportswear", image: IMAGES.sportswear },
  { label: "Basketball", href: "/basketball", image: IMAGES.basketball },
];

function CategoryPage({ title, description, heroTitle, heroSubtitle, slug, heroImage }: CategoryConfig) {
  return (
    <div className="page page-category">
      <section className="category-hero">
        <div
          className="category-hero-image"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="category-hero-content">
          {heroSubtitle && <span className="hero-subtitle">{heroSubtitle}</span>}
          <h1>{heroTitle}</h1>
          <p>{description}</p>
          <Link to={`/${slug}/shoes`} className="btn btn-primary">Shop</Link>
          <Link to={`/${slug}`} className="btn btn-outline">Watch</Link>
        </div>
      </section>

      <section className="category-banner">
        <h2>{title}</h2>
        <div className="category-quick-links">
          <Link to={`/${slug}/shoes`} className="quick-link">Shoes</Link>
          <Link to={`/${slug}/clothing`} className="quick-link">Clothing</Link>
          <Link to={`/${slug}/accessories`} className="quick-link">Accessories</Link>
          <Link to={`/${slug}`} className="quick-link">Shop All</Link>
        </div>
      </section>

      <section className="featured-banner">
        <div
          className="category-hero-image"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "500px",
          }}
        />
        <div className="banner-overlay">
          {heroSubtitle && <p className="banner-subtitle">{heroSubtitle}</p>}
          <h2>{heroTitle}</h2>
          <p>{description}</p>
          <Link to={`/${slug}`} className="btn btn-primary" style={{ marginTop: 16 }}>Shop</Link>
          <Link to={`/${slug}`} className="btn btn-outline" style={{ marginTop: 16, marginLeft: 8 }}>Watch</Link>
        </div>
      </section>

      <ProductGrid products={products} title="Best Sellers" />

      <section className="home-trending">
        <h2 className="section-title">Shop by Activity</h2>
        <div className="sport-categories">
          {activityLinks.map((cat) => (
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

      <section className="home-more">
        <h2 className="section-title">More to Explore</h2>
        <div className="more-categories">
          <Link to={`/${slug}/shoes`} className="more-category">
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
          <Link to={`/${slug}/clothing`} className="more-category">
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
          <Link to={`/${slug}/accessories`} className="more-category">
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

function PageMen() {
  return <CategoryPage {...categoryPages[0]} />;
}
function PageWomen() {
  return <CategoryPage {...categoryPages[1]} />;
}
function PageKids() {
  return <CategoryPage {...categoryPages[2]} />;
}

export { PageMen, PageWomen, PageKids };
