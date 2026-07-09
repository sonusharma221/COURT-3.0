import React, { useState } from 'react'
const Web = () => {
    const [formData, setFormData] = useState({})
    console.log(formData);
    
    const handleChanges = (e)=>{
    let {name,value} = e.target
    setFormData({...formData,[name]:value})}

  return (
    <div className='flex flex-col w-60 gap-2'>
            <input name = 'name' onChange={handleChanges} className='border-2' type="text" placeholder='Name' />
            <input name = 'email' onChange={handleChanges} className='border-2' type="text" placeholder='Email' />
            <input name = 'password' onChange={handleChanges} className='border-2' type="text" placeholder='Password' /> 

            <h1>this is name - {formData.name}</h1>
            <h1>this is name - {formData.email}</h1>
            <h1>this is name - {formData.password}</h1>
    </div>
    
  )
}

export default Web
