import React from "react";

const CartCard = ({ product }) => {
  return (
    <div className="h-72 flex gap-6 bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition">
      {/* Product Image */}
      <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center overflow-hidden">
  <img
    src={product.image}
    alt={product.title}
    className="w-36 h-36 object-contain"
  />
</div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="font-semibold text-lg line-clamp-2">
            {product.title}
          </h2>

          <p className="text-sm text-gray-500 capitalize mt-1">
            {product.category}
          </p>

          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-500">⭐</span>
            <span>{product.rating.rate}</span>
            <span className="text-gray-400">
              ({product.rating.count})
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

          <div className="flex items-center gap-3">
            {/* Quantity UI */}
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-lg font-bold">
                -
              </button>

              <span className="px-4 py-2 font-semibold">{product.quantity}</span>

              <button className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-lg font-bold">
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;