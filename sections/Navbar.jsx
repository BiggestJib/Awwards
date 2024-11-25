import React, { useState } from "react";
import { navLinks } from "./constants";

const NavItems = ({ setIsOpen }) => {
  return (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <a
          href={`${item.href}`}
          onClick={() => setIsOpen(false)}
          key={item.id}
          className="nav-li"
        >
          <a
            onClick={() => setIsOpen(false)} // Close the menu when an item is clicked
            href={`${item.href}`}
            className="nav-li_a"
          >
            {item.name}
          </a>
        </a>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Olaosebikan Ajibola Peter
          </a>
          <button
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle Menu"
            onClick={toggleMenu}
            aria-expanded={isOpen} // Add this for accessibility
          >
            <img
              alt="toggle"
              className="w-6 h-6"
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems setIsOpen={setIsOpen} />
          </nav>
        </div>
        <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
          <nav className="p-5">
            <NavItems setIsOpen={setIsOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
