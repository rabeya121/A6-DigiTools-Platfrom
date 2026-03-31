import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-4 shadow-md bg-white">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-purple-600">
        DigiTools
      </h1>

      {/* Menu */}
      <ul className="flex gap-8 font-medium text-gray-700">
        <li className="hover:text-purple-600 cursor-pointer">Home</li>
        <li className="hover:text-purple-600 cursor-pointer">Products</li>
        <li className="hover:text-purple-600 cursor-pointer">Features</li>
        <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
        <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
        <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
      </ul>


      {/* Right side: Cart + Login Button */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray-700 cursor-pointer">
          <FaShoppingCart size={20} />
        </div>
        <button className="text-black cursor-pointer hover:text-purple-600 transition">
          Login
        </button>
        <button className="btn btn-primary rounded-full px-5 py-2 bg-purple-600 border-none hover:bg-purple-700 text-white">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;