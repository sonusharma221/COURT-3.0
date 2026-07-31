import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counterSlice';

const App = () => {
  const dispatch = useDispatch()
  let {count} = useSelector((store)=>store.counter);
  console.log(count);
  
  return (
    <div>
      <h1>My count is {count}</h1>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <button onClick={()=>dispatch(increment())}>increment</button>
    </div>
  )
}

export default App
