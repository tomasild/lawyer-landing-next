import Image from "next/image";
import { GiArtificialHive } from "react-icons/gi";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-6 bg-transparent shadow-md">
      <nav
        aria-label="Primary Navigation"
        role="navigation"
        className="container mx-auto rounded-full bg-otis-950 bg-opacity-70"
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <a
            href="/"
            className="flex items-center ml-2"
            aria-label="Go to homepage"
          >
            <GiArtificialHive size={48} />
          </a>

          <ul
            id="primary-menu"
            className="hidden md:flex text-2xl items-center space-x-6 text-white font-bold"
            role="menu"
          >
            <li role="none">
              <a
                href="/about"
                role="menuitem"
                className="px-4 py-3 rounded-full hover:bg-otis-700"
              >
                Sobre mi
              </a>
            </li>
            <li role="none">
              <span className="text-2xl font-bold">·</span>
            </li>
            <li role="none">
              <a
                href="/services"
                role="menuitem"
                className="px-4 py-3 rounded-full hover:bg-otis-700"
              >
                Servicios
              </a>
            </li>
            <li role="none">
              <span className="text-2xl font-bold">·</span>
            </li>
            <li role="none">
              <a
                href="/contact"
                role="menuitem"
                className="px-4 py-3 rounded-full hover:bg-otis-700"
              >
                Contacto
              </a>
            </li>
          </ul>
          <a
            href="/"
            className="flex items-center mr-2"
            aria-label="Go to homepage"
          >
            <GiArtificialHive size={48} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
