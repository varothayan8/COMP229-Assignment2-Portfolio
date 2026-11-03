import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import { siteConfig } from "../data/siteConfig.js";

// All six required pages, in display order.
const NAV_ITEMS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Me" },
  { path: "/projects", label: "Projects" },
  { path: "/education", label: "Education" },
  { path: "/services", label: "Services" },
  { path: "/contact", label: "Contact Me" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setIsMenuOpen(false), [pathname]);

  // Add a subtle background once the page is scrolled.
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Keyboard support: Escape closes the open mobile menu.
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const handleKeyDown = (event) => event.key === "Escape" && setIsMenuOpen(false);
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  return (
    <header className={`navbar ${hasScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand" aria-label={`${siteConfig.displayName} — home`}>
          <Logo />
          <span>{siteConfig.displayName}</span>
        </NavLink>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <Icon name={isMenuOpen ? "close" : "menu"} size={22} />
        </button>

        <nav id="primary-navigation" aria-label="Primary" className={`navbar__nav ${isMenuOpen ? "is-open" : ""}`}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink to={item.path} end={item.path === "/"} className={({ isActive }) => (isActive ? "is-active" : undefined)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button href={siteConfig.resumePath} download icon="download" variant="secondary" aria-label="Download résumé (PDF)">
            Résumé
          </Button>
        </nav>
      </div>
    </header>
  );
}
