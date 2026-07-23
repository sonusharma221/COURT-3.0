import React, { useContext } from "react";
import { MyShop } from "../context/MyWebsite";

const Cart = () => {
    const {cartItems} = useContext(MyShop)
    
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex gap-5">
      <h1 className="text-3xl font-bold mb-6">🛒 My Cart</h1>

      {cartItems.length === 0 ? (
        <div className="h-[70vh] flex justify-center items-center">
          <h2 className="text-2xl font-semibold text-gray-500">
            Your Cart is Empty 😔
          </h2>
        </div>
      ) : (
        <>
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md p-4 flex gap-4"
              >
                {/* Product Image */}
                <div className="w-24 h-24 flex items-center justify-center bg-gray-100 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="font-semibold text-lg line-clamp-2">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-500 capitalize mt-1">
                    {item.category}
                  </p>

                  <div className="flex justify-between items-center mt-4">
                    <span className="text-green-600 font-bold text-xl">
                      ${item.price}
                    </span>

                    <div className="flex items-center gap-1 ">
                      ⭐ {item.rating.rate}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-xl shadow-md mt-8 p-5 h-fit">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between text-2xl font-bold mt-3">
              <span>Total Price</span>
              <span className="text-green-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-lg mt-6 hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
