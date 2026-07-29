import React, { useEffect } from 'react'
import { useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { axiosInstance } from '../config/axiosInstance'


const ProductPage = () => {
  const [productsData, setProductsData] = useState([])
  const [isloading, setIsloading] = useState(true)
  let GetProductData = async ()=>{
    try {
      const res = await axiosInstance.get('/products')
      console.log(res);
      setIsloading(false)
      setProductsData(res.data)
      
      
    } catch (error) {
      console.log("error in productData" ,error);
      
    }
  }
useEffect(()=>{
  GetProductData()

},[])

if(isloading) return <h1 className="text-3xl">Loading productdata</h1>

  return (
    <div className="grid grid-cols-4 gap-5">

      {

      productsData.map((val)=> <ProductCard key={val.id} product={val} />)
      }
    </div>
  )
}

export default ProductPage
