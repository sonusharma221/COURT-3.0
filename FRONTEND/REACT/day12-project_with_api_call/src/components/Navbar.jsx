import React, { useContext } from 'react'
import { MyStore } from '../context/Mycontext'


const Navbar = () => {
  let {setIsCartOpen} = useContext(MyStore)
  return (

    <div className='flex justify-between p-5 items-center bg-black rounded'>
      <div>logo</div>
      <div className='flex gap-10 text-xl'>
        <p onClick={()=>setIsCartOpen(false)}  className='cursor-pointer' >Home</p>
        <p onClick={()=>setIsCartOpen(true)} className='cursor-pointer'>Cart</p>

      </div>
      
      <button>Login</button>

    </div>
  )
}

export default Navbar
