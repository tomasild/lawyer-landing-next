"use client";

import { useState } from "react";
import Link from "next/link";
import { GiArtificialHive } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent shadow-md m-2 md:mx-0">
      <nav
        aria-label="Primary Navigation"
        className="container mx-auto bg-otis-950 bg-opacity-70"
      >
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to homepage"
            className="text-2xl md:text-5xl"
          >
            <GiArtificialHive />
          </Link>

          {/* Hamburger Button for Mobile */}
          <button
            className="flex md:hidden text-white text-2xl"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Navigation Menu */}
          <ul
            id="primary-menu"
            className={`${
              menuOpen ? "flex" : "hidden"
            } flex-col  space-y-4 py-4 md:py-0 md:space-y-0 md:flex md:flex-row items-center md:space-x-6 text-lg text-white font-bold bg-otis-950 bg-opacity-70 md:bg-transparent w-full md:w-auto absolute md:relative top-full left-0 md:top-0 md:left-auto shadow-lg md:shadow-none`}
            role="menu"
          >
            <li role="none">
              <Link
                href="#services"
                role="menuitem"
                className="px-4 py-3 hover:bg-otis-700 w-full text-center md:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li role="none" className="hidden md:block">
              <span className="text-2xl font-bold">·</span>
            </li>
            <li role="none">
              <Link
                href="#about"
                role="menuitem"
                className="px-4 py-3 hover:bg-otis-700 w-full text-center md:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Sobre mí
              </Link>
            </li>
            <li role="none" className="hidden md:block">
              <span className="text-2xl font-bold">·</span>
            </li>
            <li role="none">
              <Link
                href="#quote"
                role="menuitem"
                className="px-4 py-3 hover:bg-otis-700 w-full text-center md:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Misión
              </Link>
            </li>
            <li role="none" className="hidden md:block">
              <span className="text-2xl font-bold">·</span>
            </li>
            <li role="none">
              <Link
                href="#faq"
                role="menuitem"
                className="px-4 py-3 hover:bg-otis-700 w-full text-center md:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li role="none" className="hidden md:block">
              <span className="text-2xl font-bold">·</span>
            </li>
            <li role="none">
              <Link
                href="#contact"
                role="menuitem"
                className="px-4 py-3 hover:bg-otis-700 w-full text-center md:w-auto"
                onClick={() => setMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
