import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const [user,setUser] = useState({
    name:"aman"

  }) 

  return (
    <div>
      <h1>hello brother</h1>
      <h1>User is - {user.name}</h1>
      <h1>count- {count}</h1>
      <button onClick={()=>{
      setCount(count + 1)

      }}
        >increment</button>
      <button 
      onClick={
        ()=>{
          user.name = "piyush"
          console.log("rendering...");
          
        }
      }
      >change name</button>
    </div>
  )
}

export default App;
