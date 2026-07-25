import React from 'react'
import Navbar from './components/Navbar'
import { Routes } from 'react-router'
import AppRoutes from './routes/AppRoutes'
import ProductCard from './components/ProductCard'


const App = () => {
  return (
    <div className='flex flex-col gap-4'>
      <Navbar />
      <AppRoutes />
      

      
    </div>
  )
}

export default App
