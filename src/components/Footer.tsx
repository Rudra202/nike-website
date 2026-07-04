import { Link } from "react-router-dom";

const footerLinks = [
  {
    title: "Resources",
    links: [
      { label: "Get Help", href: "/help" },
      { label: "Order Status", href: "/orders" },
      { label: "Delivery", href: "/delivery" },
      { label: "Returns", href: "/returns" },
      { label: "Payment Options", href: "/payment" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "About Nike",
    links: [
      { label: "News", href: "/news" },
      { label: "Careers", href: "/careers" },
      { label: "Investors", href: "/investors" },
      { label: "Sustainability", href: "/sustainability" },
    ],
  },
  {
    title: "Promotions & Discounts",
    links: [
      { label: "Student", href: "/student" },
      { label: "Military", href: "/military" },
      { label: "Teachers", href: "/teachers" },
      { label: "Nike Member Promotions", href: "/member-promotions" },
    ],
  },
];

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com/nike" },
  { label: "Facebook", href: "https://facebook.com/nike" },
  { label: "YouTube", href: "https://youtube.com/nike" },
  { label: "Instagram", href: "https://instagram.com/nike" },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <button className="footer-back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Back to top
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="footer-content">
          <div className="footer-logo">
            <img src="/nike.svg" alt="Nike" width="60" height="24" style={{ filter: "invert(1)" }} />
          </div>

          <div className="footer-links">
            {footerLinks.map((section) => (
              <div key={section.title} className="footer-link-section">
                <h4>{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer-social">
            {socialLinks.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="social-link">
                {social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              <circle cx="12" cy="9" r="2.5" />
            </svg>
            India
          </div>
          <div className="footer-legal">
            <span>&copy; 2026 Nike, Inc. All rights reserved</span>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/privacy">Nike Privacy Policy</Link>
            <Link to="/store-policy">Store Claim Policy</Link>
          </div>
        </div>

        <div className="footer-credit">
          <span>Made with <span className="red-heart">❤</span> by Rudy</span>
          <a href="https://github.com/rudra202" target="_blank" rel="noopener noreferrer" className="github-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            rudra202
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
