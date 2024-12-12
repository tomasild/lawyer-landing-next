import Image from "next/image";

export const Header = () => {
  return (
    <header className="container mx-auto py-4 z-50">
      <nav
        aria-label="Primary Navigation"
        role="navigation"
        className="bg-azul-600 shadow-md w-full z-50 rounded-lg"
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <a href="/" className="flex items-center" aria-label="Go to homepage">
            {/* <Image src="logo.svg" alt="Company Name Logo" width={120} height={40} /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-azul-50"
                d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z"
              />
            </svg>
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
