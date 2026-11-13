"use client";

import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "ABOUT", href: "#about" },
    { label: "WORK", href: "#work" },
    { label: "SKILLS", href: "#skills" },
    { label: "JOURNEY", href: "#journey" },
    { label: "CREDENTIALS", href: "#credentials" },
    { label: "VAYUVERSE", href: "#vayuverse" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-symbol">V</span>
          <span className="brand-name">
            VAYU
            <small>// SIGNAL 28</small>
          </span>
        </a>

        <div className={`nav-menu ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-right">
          <a
            href="/Vayu-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-link"
          >
            RESUME <span>↗</span>
          </a>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
