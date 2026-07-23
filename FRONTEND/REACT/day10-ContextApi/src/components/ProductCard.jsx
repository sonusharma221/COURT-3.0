import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const ProductCard = ({ product }) => {
  let {setCartItems} = useContext(MyShop)
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200">

      {/* Image */}
      <div className="h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3">

        {/* Category */}
        <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full w-fit capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold line-clamp-2 h-14">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            ⭐
            <span className="font-semibold">{product.rating.rate}</span>
            <span className="text-gray-500 text-sm">
              ({product.rating.count})
            </span>
          </div>

          <p className="text-2xl font-bold text-green-600">
            ${product.price}
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-3">
          <button onClick={()=>setCartItems((prev)=>[...prev,product])} className="flex-1 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>

          <button className="px-4 border border-black rounded-lg hover:bg-black hover:text-white transition">
            ❤️
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;
