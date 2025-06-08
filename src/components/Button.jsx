import { Link } from "react-router-dom";

function Button({ to, variant, children }) {
  const baseClasses =
    "block px-6 py-4 text-xl font-medium rounded-full mx-3 text-center ";
  const variantClasses =
    variant === "outline"
      ? "text-gray-900 hover:bg-black hover:text-white border border-black"
      : "text-white bg-black hover:border-black border border-transparent";

  return (
    <Link to={to} className={`${baseClasses} ${variantClasses} relative z-20`}>
      {children}
    </Link>
  );
}

export default Button;
