import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent shadow-md">
      <nav
        aria-label="Primary Navigation"
        role="navigation"
        className="w-full rounded-lg bg-azul-500 bg-opacity-80 "
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="/" className="flex items-center text-2xl" aria-label="Go to homepage">
            {/* <Image src="logo.svg" alt="Company Name Logo" width={120} height={40} /> */}
            AIE
          </a>

          <ul
            id="primary-menu"
            className="hidden md:flex space-x-6 text-azul-50"
            role="menu"
          >
            <li role="none">
              <a
                href="/about"
                role="menuitem"
                className="px-2 py-3 rounded-lg hover:bg-azul-500"
              >
                Sobre mi
              </a>
            </li>
            <li role="none">
              <a
                href="/services"
                role="menuitem"
                className="px-2 py-3 rounded-lg hover:bg-azul-500"
              >
                Servicios
              </a>
            </li>
            <li role="none">
              <a
                href="/contact"
                role="menuitem"
                className="px-2 py-3 rounded-lg hover:bg-azul-500"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
