import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { navigationData } from "../data/navigation";

function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-top">
        <span>Nike Official Online Store India</span>
        <div className="header-top-links">
          <Link to="/help">Help</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/join">Join us</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      </div>

      <div className="header-main">
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        <Link to="/" className="logo">
          <img src="/nike.svg" alt="Nike" width="60" height="24" />
        </Link>

        <nav className="nav-main" onMouseLeave={handleMouseLeave}>
          {navigationData.map((item) => (
            <div
              key={item.label}
              className="nav-item-wrapper"
              onMouseEnter={() => handleMouseEnter(item.label)}
            >
              <Link
                to={item.href}
                className={`nav-link ${activeMenu === item.label ? "active" : ""}`}
              >
                {item.label}
              </Link>
              {activeMenu === item.label && (
                <div className="mega-menu" onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}>
                  <div className="mega-menu-inner">
                    {item.columns.map((col, idx) => (
                      <div key={idx} className="mega-menu-column">
                        {col.title && <h4 className="mega-menu-title">{col.title}</h4>}
                        <ul className="mega-menu-list">
                          {col.items.map((link) => (
                            <li key={link.label}>
                              <Link to={link.href} className="mega-menu-link">{link.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 16l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button className="icon-btn" aria-label="Wishlist">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button className="icon-btn" aria-label="Cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M3 6h18" stroke="currentColor" strokeWidth="1.5" />
              <path d="M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="search-overlay">
          <div className="search-bar">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#111" strokeWidth="1.5" />
              <path d="M16 16l5 5" stroke="#111" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <input type="text" placeholder="Search" autoFocus />
            <button className="icon-btn" onClick={() => setSearchOpen(false)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="#111" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="mobile-menu">
          {navigationData.map((item) => (
            <div key={item.label} className="mobile-nav-item">
              <Link to={item.href} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
