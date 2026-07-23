import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { useState } from 'react'
import CartScreen from './pages/CartScreen'
import { MyStore } from './context/Mycontext'

const App = () => {
  let {isCartOpen,setIsCartOpen,cartItems} = useContext(MyStore);

  const [productData, setProductData] = useState([])
  console.log(productData);
  

  const getProductData = async () => {

        try{
      let res = await axios("https://fakestoreapi.com/products")
      setProductData(res.data)


    }catch(error){
      console.log("error in api" - error);

    }
  }

useEffect(()=>{  getProductData()
},[])

  return (
    <div className='h-screen p-2'>


      <Navbar setIsCartOpen={setIsCartOpen} />

      {
        isCartOpen? (<div className='h-screen'>
        <CartScreen />
      </div>) :(<div className='grid grid-cols-4 gap-4'>
        {productData.map((elem)=>{

        let isInCart = cartItems.find((val)=>val.id === elem.id)
        
          return <ProductCard key={elem.id} product={elem} isInCart={isInCart}/>
        })}
      </div>)
      }


    </div>
  )
}

export default App
