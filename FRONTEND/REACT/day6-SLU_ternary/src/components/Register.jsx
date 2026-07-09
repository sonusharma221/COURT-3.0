import React, { useState } from 'react'

const Register = ({ setToggle,setUsers }) => {
    const [formData,setFormData] = useState({
        name:"aman",
        email:"aman@gmail.com",
        password:"jello",
    })
    console.log(formData);
    
    

    let handleChange = (e) => {
        let { name, value } = e.target;
        setFormData({...formData, [name]:value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setUsers((prev)=>[...prev,formData])
        setFormData({
            name:"",
            email:"",
            password:"",
            image:"",
        })

        
    }

  return (
    <div className='bg-white w-90 p-6 rounded-xl flex flex-col gap-4 justify-center items-center'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-60' action="">
        <input required value={formData.name} name='name' onChange={handleChange} className='p-2 border border-gray-400 rounded' type="text" placeholder='Name' />
        <input required value={formData.email} name='email' onChange={handleChange} className='p-2 border border-gray-400 rounded' type="text" placeholder='Email' />
        <input required value={formData.password} name='password'  onChange={handleChange}className='p-2 border border-gray-400 rounded' type="password" placeholder='Password' />
        <input required value={formData.image} name='image'  onChange={handleChange}className='p-2 border border-gray-400 rounded' type="url" placeholder='image' />
        <button className='bg-blue-600 p-2 rounded text-white'>Register</button>
        </form>
            <p>Already have Account?{" "}
                <span onClick={()=>{setToggle((prev)=>!prev);
                }} className='text-blue-600 cursor-pointer'>Login here</span></p>
    </div>
  )
}

export default Register
