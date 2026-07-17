import React from 'react'

const Usercard = ({ user,setToggle,delUser, setUpdatedData }) => {
 
  return (
    <div className='p-4 border bg-black border-white rounded flex flex-col gap-2'>
      <div className='h-40 w-40'>
        <img 
        className='object-cover h-full w-full rounded-xl'
        src={user.image} alt="" />
      </div>
      <div>
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.mobile}</p>
      </div>
      <div className='flex w-full justify-between gap-4'>
        <button 
        onClick={()=>{
          setUpdatedData(user)
          setToggle((prev) => !prev);
        }}
        className='bg-yellow-700 text-white py-2 px-3 rounded'>Update</button>
        <button 
        onClick={()=>delUser(user.id)}
        className='bg-red-700 text-white py-2 px-3 rounded'>Delete</button>
      </div>
    </div>
  )
}

export default Usercard
