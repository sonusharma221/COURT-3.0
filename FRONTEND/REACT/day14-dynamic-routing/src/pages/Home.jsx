import axios from "axios"
import React, { useContext, useEffect } from 'react'
import { MyStore } from "../Context/MyContext";
import ProductCard from "../components/ProductCard";

const Home = () => {

let {productData, setProductData} = useContext(MyStore)

        let getProductData = async ()=>{
        try {
            let res = await axios.get("https://fakestoreapi.com/products");
            setProductData(res.data)
        }catch(error){
            console.log("error in api", error);
        }
    };

    useEffect(()=>{getProductData()},[])

  return (
    <div className="grid grid-cols-4 p-2 gap-5">
      {
        productData.map((val)=>{
            return <ProductCard key={val.id} product={val} />
        })
      }
    </div>
  )
}

export default Home
