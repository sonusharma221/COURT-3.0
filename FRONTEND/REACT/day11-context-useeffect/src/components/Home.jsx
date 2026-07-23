import { useContext } from 'react'
import { MyStore } from '../context/MyStore';
import { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";


const Home = () => {
  const [apiData, setApiData] = useState(null)
  const [toggle, setToggle] = useState(false)

  let getData = async()=>{
   let res =  await axios.get("https://fakestoreapi.com/products")
   console.log(res.data);
   setApiData(res.data)
   
  }
useEffect(()=>{
  
},[])
  


  
    useEffect(()=>{
    console.log("home rendering");
    },[toggle
    ])
let { count, setCount } = useContext(MyStore)
    
  return (
    <div className=''>
      <h1>home</h1>
      <h1>hello - {count}</h1>
      <button onClick={()=>setCount(count + 1 )}>increament</button>
      <button onClick={()=>setToggle((prev)=> !prev)} className='p-4'>toggle</button>
    </div>
  )
}

export default Home
