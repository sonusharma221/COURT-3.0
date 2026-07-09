import React, { useState } from 'react'

const Counter = () => {
    console.log("counter is rendring");
let [count,setCount] = useState(0)

  return (
    <div>
        <h1>count is {count}</h1>
        <button className='bg-red-700 text-white p-3 m-3 rounded-xl'
        onClick={()=>{
            setCount((prev) => prev + 1)
            setCount((prev) => prev + 1)
            setCount((prev) => prev + 1)

        }}>
            increment
        </button>
    </div>
  )
}

export default Counter;
