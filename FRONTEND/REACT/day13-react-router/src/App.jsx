import React from 'react'
import { useState } from 'react'
import AppRoutes from './routes/AppRoutes'
import Navbar from './components/Navbar'

const App = () => {
  const [toggle, setToggle] = useState("home")
  return (
    
    <div className='h-screen'>

      <Navbar />
      <AppRoutes />

        
      

    </div>
      
  )
}

export default App
