// import { useState } from "react";
// import { iconMap } from "../../Utils/iconMap";

// const ProductCard = ({ product, handleAddToCart }) => {
//   const { name, description, price, period, tag, tagType, features, icon } = product;

//   const tagColor = {
//     best: "bg-orange-100 text-orange-500",
//     popular: "bg-purple-100 text-purple-500",
//     new: "bg-green-100 text-green-500"
//   };

//   const handleClick = () => {
//     if (handleAddToCart) {
//       handleAddToCart(product);
//       setAdded(true);
//     }
//   };
import { useState } from "react";
import { iconMap } from "../../Utils/iconMap";

const ProductCard = ({ product, handleAddToCart }) => {
  const [added, setAdded] = useState(false); // ✅ এটা missing ছিল

  const { name, description, price, period, tag, tagType, features, icon } = product;

  const tagColor = {
    best: "bg-orange-100 text-orange-500",
    popular: "bg-purple-100 text-purple-500",
    new: "bg-green-100 text-green-500"
  };

  const handleClick = () => {
    if (handleAddToCart) {
      handleAddToCart(product);
      setAdded(true);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 relative flex flex-col">
      {/* Tag */}
      <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${tagColor[tagType]}`}>
        {tag}
      </span>


      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mb-4">
        <img
          src={iconMap[icon]}
          alt={name}
          className="w-6 h-6 object-contain"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold mb-1">{name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-3">{description}</p>

      {/* Price */}
      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-xl text-black font-bold">${price}</span>
        <span className="text-sm text-gray-400">/{period}</span>
      </div>

      {/* Features */}
      <ul className="flex-1 space-y-1 text-sm text-gray-600 mb-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <span className="text-green-500">✔</span> {feature}
          </li>
        ))}
      </ul>

      {/* Button */}
      <button
        onClick={handleClick}
        disabled={!handleAddToCart}
        className={`mt-auto w-full py-2 rounded-full font-medium transition ${added
            ? "bg-green-500 text-white"
            : "bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:opacity-90"
          }`}
      >
        {added ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;