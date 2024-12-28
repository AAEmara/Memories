import { useState } from "react";

function NavBar() {
  // State for toggling mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="w-full bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/src/assets/logo.png" alt="Logo" className="h-8" />
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow justify-center">
          <input
            type="text"
            className="w-96 p-2 rounded-lg bg-gray-700 text-white focus:ring-green-600 border-none"
            placeholder="Search..."
          />
        </div>

        {/* Sign Up Button, and Hamburger on Mobile) */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:block">
            <img
              src="/src/assets/profile.png" // Replace with actual user image or placeholder
              alt="User"
              className="h-8 w-8 rounded-full border-2 border-gray-300"
            />
          </div>

          {/* Sign out */}
          <div className="hidden md:block">
            <button className="bg-transparent border-green-600 border px-4 py-2 rounded-lg text-white hover:bg-green-500">
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
