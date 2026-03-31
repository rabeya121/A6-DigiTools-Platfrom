import React, { useState } from "react";
import products from "../../data/Products";

const ProductCard = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // remove
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // checkout
  const handleCheckout = () => {
    setCart([]);
  };

  return (
    <section className="max-w-7xl mx-auto px-10 py-20">

      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "products"
              ? "bg-purple-600 text-white"
              : "bg-gray-100"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("cart")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "cart"
              ? "bg-purple-600 text-white"
              : "bg-gray-100"
          }`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {/* PRODUCTS */}
      {activeTab === "products" && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="p-6 border rounded-xl shadow-sm"
            >
              <div className="text-3xl mb-3">{item.icon}</div>

              <h3 className="font-bold text-lg">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-3">
                {item.description}
              </p>

              <span className="text-xs bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                {item.tag}
              </span>

              <h4 className="mt-4 font-bold">
                ${item.price} / {item.period}
              </h4>

              <ul className="mt-3 text-sm text-gray-600 space-y-1">
                {item.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              <button
                onClick={() => addToCart(item)}
                className="mt-4 w-full bg-purple-600 text-white py-2 rounded-full"
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}

      {/* CART */}
      {activeTab === "cart" && (
        <div>
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">
              Your cart is empty 🛒
            </p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center border p-4 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <span>{item.icon}</span>
                    <span>{item.name}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <span>${item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={handleCheckout}
                className="w-full bg-purple-600 text-white py-3 rounded-full"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default ProductCard ;