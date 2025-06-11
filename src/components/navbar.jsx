import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg";
import "../styles/navbarStyle.css"; // Assuming you have a CSS file for additional styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      // Change background when scrollY is greater than a small threshold (e.g., 10px)
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle window resize to close mobile menu on large screens
  useEffect(() => {
    const handleResize = () => {
      // Close mobile menu when window width is >= 1024px (lg breakpoint)
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Call handler immediately to handle initial window size
    handleResize();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 font-inter transition-all ${
        isScrolled || isOpen ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 lg:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Left Section: Logo and Menu Items */}
          <div className="flex">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img className="h-6 w-auto" src={Logo} alt="Logo" />
            </div>
            {/* Menu Items */}
            <div className="hidden lg:ml-6 lg:flex lg:space-x-4">
              <Link
                to="/products"
                className="inline-flex items-center px-2 py-1 text-sm font-medium hover:bg-black/10 hover:rounded-full"
              >
                Products
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center px-2 py-1 text-sm font-medium hover:bg-black/10 hover:rounded-full"
              >
                Solutions
              </Link>
              <Link
                to="/resources"
                className="inline-flex items-center px-2 py-1 text-sm font-medium hover:bg-black/10 hover:rounded-full"
              >
                Resources
              </Link>
              <Link
                to="/prices"
                className="inline-flex items-center px-2 py-1 text-sm font-medium hover:bg-black/10 hover:rounded-full"
              >
                Prices
              </Link>
            </div>
          </div>

          {/* Right Section: CTA Buttons */}
          <div className="hidden lg:ml-6 lg:flex lg:items-center lg:space-x-4">
            <Link
              to="/demo"
              className="inline-flex items-center px-2 py-1 text-sm font-medium hover:bg-black/10 hover:rounded-full"
            >
              Get Demo
            </Link>
            <Link
              to="/login"
              className="inline-flex items-center px-2 py-1 text-sm font-medium hover:bg-black/10 hover:rounded-full"
            >
              Login
            </Link>
            <Link
              to="/try-free"
              className="inline-flex items-center px-4 py-1 border border-transparent text-sm font-medium rounded-full text-white bg-black hover:bg-transparent hover:text-black hover:border-black"
            >
              Try for Free
            </Link>
          </div>

          {/* Mobile Right Section */}
          <div className="lg:hidden flex items-center space-x-2">
            <Link
              to="/try-free"
              className={`inline-flex items-center justify-center px-4 py-1 text-sm font-medium rounded-full text-white bg-black hover:bg-transparent hover:text-black hover:border-black border border-transparent ${
                isOpen ? "invisible" : "visible"
              }`}
            >
              Try for Free
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black cursor-pointer focus:outline-none"
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
        <div className="lg:hidden bg-white h-lvh" id="mobile-menu">
          <div className="pt-2 pb-3 px-8 space-y-1">
            <Link
              to="/products"
              className="block px-4 py-1 text-2xl font-medium hover:bg-black/10 hover:rounded-full"
            >
              Products
            </Link>
            <Link
              to="/solutions"
              className="block px-4 py-1 text-2xl font-medium hover:bg-black/10 hover:rounded-full"
            >
              Solutions
            </Link>
            <Link
              to="/resources"
              className="block px-4 py-1 text-2xl font-medium hover:bg-black/10 hover:rounded-full"
            >
              Resources
            </Link>
            <Link
              to="/prices"
              className="block px-4 py-1 text-2xl font-medium hover:bg-black/10 hover:rounded-full"
            >
              Prices
            </Link>
            {/* Separator Line */}
            <div className="border-t border-gray-200 mx-3 py-1" />
            <Link
              to="/demo"
              className="block px-6 py-4 text-2xl font-medium hover:bg-black hover:text-white border border-black rounded-full mx-3 my-4 justify-center"
            >
              Get Demo
            </Link>
            <Link
              to="/login"
              className="block px-6 py-4 text-2xl font-medium hover:bg-black hover:text-white border border-black rounded-full mx-3 my-4 justify-center"
            >
              Login
            </Link>
            <Link
              to="/try-free"
              className="block px-6 py-4 text-2xl font-medium text-white bg-black hover:border-black border border-transparent rounded-full mx-3 my-4 justify-center"
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
