import React from "react";
import { Trash2 } from "lucide-react";
import { Navigate,useNavigate } from "react-router";


const ProductCard = ({ product }) => {
  let navigate = useNavigate()
  
  return (
    <div className="flex gap-5 bg-white rounded-2xl shadow-md border p-5 hover:shadow-xl transition-all duration-300">

      {/* Product Image */}
      <div onClick={()=> navigate(`/detail/${product.id}`)} className="w-36 h-36 bg-gray-100 rounded-xl flex items-center justify-center">
        <img 
          src={product.image}
          alt={product.title}
          className="h-28 object-contain hover:scale-105 transition"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">

        <div>
          <h2 className="text-xl font-semibold text-gray-800 line-clamp-2">
            {product.title}
          </h2>

          <p className="text-sm text-gray-500 capitalize mt-2">
            {product.category}
          </p>

          <div className="flex items-center gap-2 mt-3">
            <span className="text-yellow-500 text-lg">⭐</span>

            <span className="font-medium">
              {product.rating.rate}
            </span>

            <span className="text-gray-400">
              ({product.rating.count} Reviews)
            </span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-6">

          <div>
            <p className="text-3xl font-bold text-green-600">
              ${product.price}
            </p>
          </div>

          <button
            onClick={() => removeFromCart(product.id)}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
          >
            
            Remove
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;