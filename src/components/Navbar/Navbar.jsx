import { useState } from "react";
import { navLinks, personal } from "../../data";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setMenuOpen((v) => {
      document.body.style.overflow = !v ? "hidden" : "";
      return !v;
    });
  };
  const close = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav id="mainNav">
        <div className="nav-logo">
          <span className="nav-logo-bracket">{`{`}</span>
          <span className="nav-logo-text">YP</span>
          <span className="nav-logo-bracket">{`}`}</span>
        </div>

        <div className="nav-links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>

        <a href="#contact" className="nav-cta">
          Hire Me
        </a>

        <button
          className={`nav-hamburger${menuOpen ? " open" : ""}`}
          id="hamburger"
          onClick={toggle}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobileMenu"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a href="#contact" className="mob-cta" onClick={close}>
          Hire Me
        </a>
      </div>
    </>
  );
}
