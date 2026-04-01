
import { useState } from "react";
import { toast } from "react-toastify";
import { iconMap } from "../../Utils/iconMap";
import productsData from "../../data/ProductData.json";
import ProductCard from "./ProductCard";
import shoppingImg from "../../assets/products/shopping-cart.png";

const Products = ({ cartItems, setCartItems }) => {
  const [activeTab, setActiveTab] = useState("Products");

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    toast.success(`${product.name} added to cart!`);
  };

  const handleRemove = (index) => {
    const updated = cartItems.filter((item, i) => i !== index);
    setCartItems(updated);
    toast.error("Item removed!");
  };

  const handleCheckout = () => {
    setCartItems([]);
    toast.success("Checkout complete!");
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div className="py-10 px-4 bg-white">
      <h2 className="text-4xl text-black font-bold text-center mb-2">
        Premium Digital Tools
      </h2>

      <p className="text-center text-gray-400 mb-6 text-sm">
        Choose from our curated collection of premium digital products
        designed <br />
        to boost your productivity and creativity.
      </p>

      
      <div className="flex justify-center mb-8 bg-white rounded-full p-1 border border-gray-200 w-max mx-auto shadow-sm">
        <button
          className={`px-6 py-2 rounded-full ${activeTab === "Products"
            ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
            : "text-gray-600"
            }`}
          onClick={() => setActiveTab("Products")}
        >
          Products
        </button>

        <button
          className={`px-6 py-2 rounded-full ${activeTab === "Cart"
            ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
            : "text-gray-600"
            }`}
          onClick={() => setActiveTab("Cart")}
        >
          Cart ({cartItems.length})
        </button>
      </div>

     
      {activeTab === "Products" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}

      
      {activeTab === "Cart" && (
        <div className="max-w-5xl mx-auto">
          {cartItems.length === 0 ? (
            <div className="flex items-center justify-center w-full py-24 text-center">
              <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-16 text-center max-w-2xl w-full mx-auto">

                <img
                  src={shoppingImg}
                  alt="Empty Cart"
                  className="w-24 mx-auto mb-4  "
                />
                <h3 className="text-xl font-semibold text-gray-700">
                  Your cart is empty
                </h3>
                <p className="text-gray-400 text-sm">
                  Add some products to see them here
                </p>
              </div>
            </div>
          ) : (

            <>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center p-4 shadow rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={iconMap[item.icon]}
                        className="w-10"
                        alt={item.name}
                      />
                      <div>
                        <h3 className="font-semibold text-black">{item.name}</h3>
                        <p className="text-gray-400">${item.price}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(index)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              
              <div className="mt-6 flex justify-between items-center">
                <span className="text-gray-500">Total:</span>
                <span className="text-xl font-bold text-black">
                  ${totalPrice}
                </span>
              </div>

              <button
                onClick={handleCheckout}
                className="mt-4 w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-full"
              >
                Proceed To Checkout
              </button>
            </>
          )}
        </div>
      )
      }
    </div >
  );
};

export default Products;