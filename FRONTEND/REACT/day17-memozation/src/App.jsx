import React from 'react'
import Home from './components/Home'
import About from './components/About'
import { useState } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'

const App = () => {
  console.log("App is rendering");
  let [count, setCount] = useState(0)
  const [user, setUser] = useState({name:"raghav", id:789})
  
  let calculation = useMemo(() => {
    console.log("calculating running....");
    let sum = 0;
    for(let i = 0; i<10000000000; i++){
      sum += i
    }
    return sum;
    
  }, [])

  

  let greet = useCallback(()=>{
    console.log("good morning everyone");
    
  },[])


  return (
    <div>
      <h1>app </h1>
      <h1>Counter: {count}</h1>
      <h1>Name: {user.name}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={()=>setUser({...user,name:'rangeet'})}>ChangeName</button>
      <Home user={user} greet={greet} />
      <About />
    </div>
  )
}

export default App
