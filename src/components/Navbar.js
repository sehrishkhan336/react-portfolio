import { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled,       setScrolled]  = useState(false);
  const [menuOpen,       setMenuOpen]  = useState(false);
  const [activeSection,  setActive]    = useState('');

  // Add glass background once user scrolls past 20px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight nav link matching the section currently in view
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.35 }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">

          {/* Logo */}
          <a href="#hero" className="navbar__logo" onClick={closeMenu}>
            Sehrish <span className="gradient-text">Khan</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className={`navbar__link${activeSection === href.slice(1) ? ' navbar__link--active' : ''}`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right-side controls */}
          <div className="navbar__actions">
            <a
              href="/Resume/Sehrish-Khan.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__resume-btn"
            >
              Resume
            </a>
            <button className="navbar__icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
            <button
              className="navbar__icon-btn navbar__hamburger"
              onClick={() => setMenuOpen(p => !p)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile slide-in drawer */}
      <aside className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="mobile-menu__links">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={`mobile-menu__link${activeSection === href.slice(1) ? ' mobile-menu__link--active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Resume/Sehrish-Khan.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu__link mobile-menu__link--resume"
              onClick={closeMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </aside>

      {/* Backdrop — closes drawer on outside tap */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu} aria-hidden="true" />}
    </>
  );
}
