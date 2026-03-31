import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import cartImg from "../../assets/products/shopping-cart.png";

const Navbar = ({ cartItems }) => {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <div className="px-6 md:px-10 py-4 shadow-md bg-white">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>

        {/* Menu (only one place) */}
        <ul className={`md:flex lg:flex gap-8 font-medium text-gray-700 ${open ? "flex flex-col mt-4" : "hidden md:flex"}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-purple-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <div className="relative">
            <img src={cartImg} alt="cart" className="w-6 h-6" />
            {cartItems?.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-purple-600 text-white text-xs px-2 rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>

          <button className="hidden md:block text-black hover:text-purple-600">
            Login
          </button>

          <button className="hidden md:block btn btn-primary rounded-full px-5 py-2 bg-purple-600 border-none hover:bg-purple-700 text-white">
            Get Started
          </button>

          {/* Toggle */}
          <div className="text-2xl cursor-pointer text-black" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;