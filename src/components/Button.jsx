import { Link } from "react-router-dom";

function Button({ to, variant, children }) {
  const baseClasses =
    "block px-6 py-4 text-xl font-medium rounded-full mx-3 text-center transition-all duration-300";

  const variantClasses =
    {
      outline:
        "text-gray-900 hover:bg-black hover:text-white border border-black",
      filled:
        "text-white bg-black hover:border-black border border-transparent",
      white:
        "text-black bg-white hover:bg-transparent hover:text-white hover:border-white border border-transparent",
      black:
        "text-white bg-black border-white border hover:bg-white   hover:text-black "
    }[variant] || variantClasses.filled; // Default to filled if variant is undefined

  return (
    <Link to={to} className={`${baseClasses} ${variantClasses} relative z-20`}>
      {children}
    </Link>
  );
}

export default Button;
