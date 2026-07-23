import React, { useContext } from "react";
import { MyStore } from "../context/Mycontext";

const ProductCard = ({ product,isInCart }) => {
    let {setCartItems,increamentQuantity,decrementQuantity} = useContext(MyStore)
    const addToCart = () => {
        setCartItems((prev) => [...prev,{...product, quantity:1}])
        alert("Product added into cart")

    }
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 group">

      {/* Product Image */}
      <div className="h-60 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Card Body */}
      <div className="p-5 flex flex-col gap-3">

        {/* Category */}
        <span className="bg-indigo-100 text-indigo-600 text-xs px-3 py-1 rounded-full w-fit capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 line-clamp-2 h-14">
          {product.title}
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-500 line-clamp-3">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-600">
              ({product.rating.count})
            </span>
          </div>

          <span className="text-sm font-semibold text-gray-700">
            {product.rating.rate}/5
          </span>
        </div>

        {/* Price */}
        <div className="flex justify-between items-center gap-3">
          <h3 className="text-2xl font-bold text-green-600">
            ${product.price}
          </h3>

         {
          isInCart ? <button className="bg-black p-2 w-30 h-13 rounded-2xl flex items-center justify-center gap-5">
            <span
            onClick={()=>decrementQuantity(product.id)}
            className="text-4xl">-</span>
            <span className="text-2xl">{isInCart.quantity}</span>
            <span 
            onClick={()=>increamentQuantity(product.id)}

            className="text-3xl">+</span>
            </button>  : <button
            onClick={addToCart}
            className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Add Cart
          </button>
          
         }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
