import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react';
import { Star, ShoppingCart, Heart } from "lucide-react";


const ProductDetail = () => {
    const [singleProductData, setSingleProductData] = useState({})
    console.log(singleProductData);
    
    let {id} = useParams();

    let getSingleProductData = async ()=>{
        try{
            let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setSingleProductData(res.data)
            

        }catch(error){
            console.log("detail api error",error);
            
        }
    }
    useEffect(()=>{
        getSingleProductData()
            
    },[])
  return (
    <div className="min-h-[90%] bg-gray-100 flex justify-center items-center p-10">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-6xl w-full grid md:grid-cols-2">

        {/* Left Side - Image */}
        <div className="bg-gray-100 flex justify-center items-center p-10">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
            className="h-96 object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* Right Side - Details */}
        <div className="p-8 flex flex-col justify-between">

          <div>
            {/* Category */}
            <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm capitalize">
              {singleProductData.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl font-bold mt-4">
              {singleProductData.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <Star
                className="fill-yellow-400 text-yellow-400"
                size={20}
              />
              <span className="font-semibold">
                {singleProductData.rating?.rate}
              </span>

              <span className="text-gray-500">
                ({singleProductData.rating?.count} Reviews)
              </span>
            </div>

            {/* Price */}
            <h2 className="text-4xl font-bold text-green-600 mt-6">
              ${singleProductData.price}
            </h2>

            {/* Description */}
            <h3 className="text-xl font-semibold mt-8">
              Description
            </h3>

            <p className="text-gray-600 leading-7 mt-2">
              {singleProductData.description}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-10">
            <button
              onClick={() => addToCart(singleProduct)}
              className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition"
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>

            <button className="border p-3 rounded-xl hover:bg-gray-100 transition">
              <Heart size={22} />
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProductDetail
