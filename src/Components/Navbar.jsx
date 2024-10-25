import { RiCloseLine, RiMenuLine } from "@remixicon/react";
import { useState } from "react";

const NAVIGATION_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#projects", label: "My Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact Me" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 px-16 lg:top-4">
        {/* For large screens */}
        <div className="items-center justify-center hidden max-w-xl py-2 mx-auto border rounded-full backdrop-blur-lg bg-white/20 border-white/30 lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="/">
                <span className="text-xl font-bold uppercase">Rabab Qasim</span>
              </a>
            </div>

            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-stone-300"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* For mobile screens */}
        <div className="py-2 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <span className="pl-2 uppercase">Rabab Qasim</span>
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
                aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
              >
                {isMobileMenuOpen ? (
                  <RiCloseLine className="w-5 h-6 m-2" />
                ) : (
                  <RiMenuLine className="w-5 h-6 m-2" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="flex flex-col gap-6 my-4 ml-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
