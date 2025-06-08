import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import "../styles/navbarStyle.css"; // Assuming you have a CSS file for additional styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#f7f3ef] font-inter">
      <div className="max-w-[1500px] mx-auto px-8 lg:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left Section: Logo and Menu Items */}
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={Logo} alt="Logo" />
            </div>
            {/* Menu Items */}
            <div className="hidden lg:ml-6 lg:flex lg:space-x-4">
              <Link
                to="/products"
                className="inline-flex items-center px-3 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:rounded-full"
              >
                Products
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center px-3 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:rounded-full"
              >
                Solutions
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center px-3 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:rounded-full"
              >
                Resources
              </Link>
              <Link
                to="/prices"
                className="inline-flex items-center px-3 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:rounded-full"
              >
                Prices
              </Link>
            </div>
          </div>

          {/* Right Section: CTA Buttons */}
          <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
            <Link
              to="/demo"
              className="inline-flex items-center px-3 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:rounded-full"
            >
              Get Demo
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center px-3 py-2 text-lg font-medium text-gray-900 hover:bg-gray-100 hover:rounded-full"
            >
              Login
            </Link>
            <Link
              to="/try-free"
              className="inline-flex items-center px-4 py-2 border border-transparent text-lg font-medium rounded-full text-white bg-black hover:bg-transparent hover:text-black hover:border-black"
            >
              Try for Free
            </Link>
          </div>

          {/* Mobile Right Section */}
          <div className="lg:hidden flex items-center space-x-2">
            {!isOpen && (
              <Link
                to="/try-free"
                className="inline-flex items-center justify-center px-4 py-2 text-lg font-medium rounded-full text-white bg-black hover:bg-transparent hover:text-black hover:border-black border border-transparent"
              >
                Try for Free
              </Link>
            )}
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 px-8 space-y-1">
            <Link
              to="/products"
              className="block px-4 py-2 text-xl font-medium text-gray-900 hover:bg-gray-100 hover:rounded-full"
            >
              Products
            </Link>
            <Link
              to="/solutions"
              className="block px-4 py-2 text-xl font-medium text-gray-900 hover:bg-gray-100 hover:rounded-full"
            >
              Solutions
            </Link>
            <Link
              to="/resources"
              className="block px-4 py-2 text-xl font-medium text-gray-900 hover:bg-gray-100 hover:rounded-full"
            >
              Resources
            </Link>
            <Link
              to="/prices"
              className="block px-4 py-2 text-xl font-medium text-gray-900 hover:bg-gray-100 hover:rounded-full"
            >
              Prices
            </Link>
            {/* Separator Line */}
            <div className="border-t border-gray-200 mx-3 py-2" />
            <Link
              to="/demo"
              className="block px-4 py-3 text-xl font-medium text-gray-900 hover:bg-black hover:text-white border border-black rounded-full mx-3 justify-center"
            >
              Get Demo
            </Link>
            <Link
              to="/login"
              className="block px-4 py-3 text-xl font-medium text-gray-900 hover:bg-black hover:text-white border border-black rounded-full mx-3 justify-center"
            >
              Login
            </Link>
            <Link
              to="/try-free"
              className="block px-4 py-3 text-xl font-medium text-white bg-black hover:border-black border border-transparent rounded-full mx-3 justify-center"
            >
              Try for Free
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
