import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/My-Logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between py-4 px-8 bg-gray-800 text-white relative z-50">
      <section className="text-xl font-bold">
        <img src={Logo} alt="Logo" className="w-12 inline-block rounded" />
      </section>

      <section className="hidden md:flex space-x-4 text-lg">
        <NavLink to="/" className="hover:text-gray-400">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-gray-400">
          About
        </NavLink>
        <NavLink to="/projects" className="hover:text-gray-400">
          Projects
        </NavLink>
        <NavLink to="/contact" className="hover:text-gray-400">
          Contact
        </NavLink>
      </section>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden focus:outline-none z-20"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <section className="absolute top-full left-0 w-full flex flex-col bg-gray-700 text-center md:hidden">
          <NavLink
            to="/"
            className="py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 hover:bg-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </section>
      )}
    </nav>
  );
}

export default Navbar;
