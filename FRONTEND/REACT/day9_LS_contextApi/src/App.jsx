import React from 'react'
import Navbar from './components/Navbar'
import Usercard from './components/Usercard'
import Form from './components/Form'
import { useState } from 'react'

const App = () => {
  
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])

  const [updatedData, setUpdatedData] = useState(null)
  console.log(updatedData);
  

   const delUser = (id)=>{
    let filterUser = users.filter((val,id)=>{
      return id !== id
    })
    
    
    console.log(filterUser);
    setUsers(filterUser)
    localStorage.setItem("users", JSON.stringify(filterUser))
  }
  
  return (
    <div className='p-3 h-screen flex flex-col gap-4'>
    <Navbar setToggle={setToggle}/>
    {
      toggle?(<div className='flex gap-4 flex-wrap'>
        
        {
          users.map((elem)=>{
            return <Usercard
             setToggle={setToggle}
              setUpdatedData = {setUpdatedData}
               delUser={delUser}
                key={elem.id}
                 user={elem} />
          })
        }</div>):<div><Form updatedData={updatedData} users={users} setUsers={setUsers} setToggle={setToggle}/></div>
    }
    
    
    </div>
  )
}

export default App
