import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [scrollY, setScrollY] = useState(null)

  let getProducts = async () => {
    let res = await axios.get("https://fakestoreapi.com/products");
    setProductsData(res.data);
    console.log(res.data);
  };

  let filteredData = ()=>{
    let result = productsData.filter((val)=>{
      return val.title.toLowerCase().includes(searchData.toLowerCase())
    })

    console.log(result);
    setProductsData(result)
  }

  //Debouncing 
  useEffect(()=>{
    if(!searchData) return; //minimum ek baar return kar raha tha| ek baar v return na kare uske liye

    let timeout = setTimeout(() => {
      filteredData()
    }, 700);
    return () => clearTimeout(timeout) //ye tab chalega jab new aayega and purana jaega
  },[searchData]) 

  // throttling
  let throttle = false
useEffect(()=>{

  let handScroll = ()=>{
    if(throttle) return;
    throttle = true
    console.log("scroll triggred");
    setScrollY(window.scrollY)
    
  
  setTimeout(() => {
    throttle = false
  }, 3000);
}
  window.addEventListener("scroll",handScroll )
  return ()=>window.removeEventListener("scroll",handScroll)

},[])

  useEffect(() => {
    getProducts();
    
  }, []);

  return (
    <div>
      <h1>debouncing...</h1>
      <input
        className="py-2 px-4 border"
        type="text"
        placeholder="Search Products.."
        onChange={(e) => setSearchData(e.target.value)} // binding
      />
      {productsData.map((val) => {
        return <h1 key={val.id}>{val.title}</h1>;
      })}
    </div>
  );
};

export default App;
