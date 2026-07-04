import { Link } from "react-router-dom";

interface HeroBannerProps {
  title: string;
  subtitle?: string;
  description: string;
  cta: string;
  ctaLink: string;
  image?: string;
  imagePosition?: string;
  reverse?: boolean;
}

function HeroBanner({ title, subtitle, description, cta, ctaLink, image, imagePosition, reverse }: HeroBannerProps) {
  return (
    <section className={`hero-banner ${reverse ? "hero-reverse" : ""}`}>
      <div
        className="hero-banner-image"
        style={
          image
            ? {
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: imagePosition || "center",
                backgroundRepeat: "no-repeat",
              }
            : undefined
        }
      >
        {!image && <div className="hero-placeholder" />}
      </div>
      <div className="hero-banner-content">
        {subtitle && <span className="hero-subtitle">{subtitle}</span>}
        <h2 className="hero-title">{title}</h2>
        <p className="hero-description">{description}</p>
        <div className="hero-actions">
          <Link to={ctaLink} className="btn btn-primary">{cta}</Link>
          <Link to={ctaLink} className="btn btn-outline">Watch</Link>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
