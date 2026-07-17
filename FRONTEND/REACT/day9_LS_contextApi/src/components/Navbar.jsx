import React from 'react'

const Navbar = ({setToggle}) => {
  return (
    <div className='flex rounded p-4 items-center bg-black justify-between'>
        <div className='object-contain '>
            <img className='w-10' src="https://imgs.search.brave.com/cMLbYkI4pPLTNAHJW25HQoGbBiCU4aXacgCZxvN2mew/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vQzJVS0Ev/TUFHODhiQzJVS0Ev/MS90bC9jYW52YS0z/ZC11c2VyLU1BRzg4/YkMyVUtBLnBuZw" alt="user logo" />
        </div>
        <div className='flex gap-6 font-semibold'>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>
        <button onClick={()=>setToggle((prev)=>!prev)} className='p-2 bg-blue-700 text-white cursor-pointer rounded'>Create user</button>
    </div>
  )
}

export default Navbar
