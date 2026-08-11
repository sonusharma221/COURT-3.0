import React from "react";

const ProductCard = ({ product}) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Product Image */}
      <div className="h-56 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain hover:scale-105 transition duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5 flex flex-col gap-3">

        {/* Brand & Category */}
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-blue-600">
            {product.brand}
          </span>

          <span className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full capitalize">
            {product.category}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-600">
            {product.rating}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            ${product.price}
          </span>

          <span className="text-sm text-green-600 font-medium">
            {product.availabilityStatus}
          </span>
        </div>

        {/* Add To Cart */}
        <button
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-200"
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
};

export default ProductCard;
