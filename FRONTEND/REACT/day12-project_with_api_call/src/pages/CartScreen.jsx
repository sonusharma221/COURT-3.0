import React, { useContext, useState } from 'react'
import CartCard from '../components/CartCard'
import { MyStore } from '../context/Mycontext'

const CartScreen = () => {
    let {cartItems} = useContext(MyStore)
  return (
    <div className='h-screen grid grid-cols-2 gap-4 ' >
      {
        cartItems.map((elem)=>{
            return <CartCard  key={elem.id} product={elem}/>
        })
      }
    </div>
  )
}

export default CartScreen
