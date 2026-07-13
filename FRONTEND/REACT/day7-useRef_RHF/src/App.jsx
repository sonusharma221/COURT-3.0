import React, { useRef } from 'react'
import Form from './components/Form'
import RHF from './components/RHF'
const App = () => {
  let inpref = useRef()
  console.log("app rerendering")
  
  return (
    
    <div className='h-screen w-full bg-gray-300'>
      {/* <Form/> */}
      <RHF/>
    </div>
  )
}

export default App
