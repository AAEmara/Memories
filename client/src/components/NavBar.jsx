import { useState } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";

function NavBar() {
  // State for toggling mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="w-full bg-gray-800 fixed text-white p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow justify-center">
          <input
            type="text"
            className="w-96 p-2 rounded-lg bg-gray-700 text-white focus:ring-2 border-none outline-none dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 focus:ring-gray-500"
            placeholder="Search Memories"
          />
        </div>

        {/* Sign Up Button, and Hamburger on Mobile) */}

        {/* profile image */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <img
              src={profile} // Replace with actual user image or placeholder
              alt="User"
              className="h-10 w-10 rounded-full"
            />
          </div>

          {/* Sign out */}
          <div className="hidden md:block">
            <button className="bg-transparent border-[#ffdc00] border px-4 py-2 rounded-lg text-white hover:bg-[#ffdc00] hover:text-gray-900 transition-all">
              Sign out
            </button>
          </div>

          {/* Mobile Menu */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full bg-gray-800 text-white p-4">
          <ul>
            <li>
              <a href="#" className="block p-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block p-2">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block p-2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default NavBar;
