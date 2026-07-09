import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import Usercard from './components/Usercard'

const App = () => {
  const [toggle, setToggle] = useState(false)
  const [users, setUsers] = useState([])
  
  return (
    <div className='bg-gray-300'>
      <Register setUsers={setUsers} setToggle={setToggle}/>
    
    <div className='flex gap-4 pt-5 justify-center items-center'>
      {users.map((elem) => (<Usercard  user={elem}/>))}
    </div>
    </div>
  )
}

export default App
