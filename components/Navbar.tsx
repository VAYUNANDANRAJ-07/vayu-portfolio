"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Journey",
    href: "#journey",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full px-4 transition-all duration-300 sm:px-6 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-white/10 bg-black/70 shadow-2xl backdrop-blur-xl"
            : "border-white/10 bg-white/[0.03] backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center"
          aria-label="Vayu Home"
        >
          <span className="text-2xl font-bold tracking-tight text-white">
            V
          </span>

          <span className="text-2xl font-bold text-purple-400 transition-colors duration-300 group-hover:text-blue-400">
            .
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Let's Talk */}
        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:scale-105 hover:bg-zinc-200"
        >
          Let&apos;s Talk
        </a>
      </nav>
    </header>
  );
}