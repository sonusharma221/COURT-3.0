import React from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard'
import Form from './components/Form'
import { useState } from 'react'

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState([])
  return (
    <div className='p-3 h-screen flex flex-col gap-4'>
    <Navbar setToggle={setToggle}/>
    {
      toggle?(<div className='flex gap-4'>
        
        {
          users.map((elem)=>{
            return <Usercard user={elem} />
          })
        }</div>):<div><Form setUsers={setUsers} setToggle={setToggle}/></div>
    }
    
    
    </div>
  )
}

export default App
