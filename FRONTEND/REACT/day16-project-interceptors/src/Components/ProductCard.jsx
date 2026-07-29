import React from "react";

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200">

      {/* Product Image */}
      <div className="h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">

        {/* Category */}
        <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold mt-3 line-clamp-2 h-14">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500">⭐</span>
            <span className="font-semibold">{product.rating.rate}</span>
            <span className="text-gray-500">
              ({product.rating.count})
            </span>
          </div>

          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>

          <button className="px-4 border rounded-lg hover:bg-gray-100 transition">
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;