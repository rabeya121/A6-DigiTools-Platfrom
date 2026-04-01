import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import cartImg from "../../assets/products/shopping-cart.png";

const Navbar = ({ cartItems }) => {
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "Products", "Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-4 shadow-md bg-white">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold text-purple-600">
          DigiTools
        </h1>


        {/* <ul className={`md:flex lg:flex gap-8 font-medium text-gray-700 ${open ? "flex flex-col mt-4" : "hidden md:flex"}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="hover:text-purple-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul> */}
        <ul
          className={`
                lg:flex gap-8 font-medium text-gray-700
                ${open ? "flex" : "hidden"}
                flex-col lg:flex-row
                absolute lg:static
                top-16 left-0 w-full lg:w-auto
                bg-white lg:bg-transparent
                px-6 lg:px-0 py-4 lg:py-0
                shadow-md lg:shadow-none
                z-50
              `}
            >
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setOpen(false)} 
              className="hover:text-purple-600 cursor-pointer py-2 md:py-0"
            >
              {item}
            </li>
          ))}
        </ul>

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

          <div className="text-2xl cursor-pointer text-black lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </div>

        </div>
      </div>

    </div>
  );
};

export default Navbar;