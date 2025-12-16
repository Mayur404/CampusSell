import { useState } from "react";
import { Link } from "react-router-dom";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import logo from "../assets/logo_1.png"; // Adjust the filename if needed

const LINKS = [
  { name: "Home", link: "/" },
  { name: "Buy", link: "/buy" },
  { name: "Sell", link: "/login" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 bg-[#FFFDF2]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="CampusSell Logo" 
            className="h-12 sm:h-12 lg:h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 lg:space-x-8">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              className="uppercase text-sm lg:text-base font-semibold text-[#1A1A1A] hover:text-[#444444] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#111111] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl sm:text-3xl text-[#1A1A1A] hover:text-[#444444] transition-colors z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
        >
          {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-[#FFFDF2] shadow-2xl border-l border-black/10 transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-5 py-5 border-b border-black/10">
          <h2 className="text-xl font-bold text-[#1A1A1A]">Menu</h2>
          <button
            className="text-3xl text-[#1A1A1A] hover:text-[#444444] transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            <RiCloseLine />
          </button>
        </div>

        <div className="flex flex-col px-6 py-8 space-y-6">
          {LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.link}
              onClick={() => setIsOpen(false)}
              className="uppercase text-base font-semibold text-[#1A1A1A] hover:text-[#444444] transition-colors duration-200 py-2 border-b border-black/10"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div className="absolute bottom-8 left-6 right-6">
          <p className="text-sm text-black/60 text-center">
            ©CampusSell
          </p>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;