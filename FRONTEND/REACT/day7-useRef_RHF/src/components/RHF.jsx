import React from 'react'
import { useForm } from 'react-hook-form';

const RHF = () => {
    let{register,handleSubmit,reset,formState :{errors},} = useForm()
    
return (
    
    <div className='w-80 h-screen'>
        <h1>react hook form rendering</h1>
<form
onSubmit={handleSubmit((data)=>{
console.log(data);
reset()


})}
className='flex flex-col p-6 rounded bg-white gap-4'>
    
    <input
    {...register("productName")}
    className='p-2 border border-gray-400 rounded' type="text" placeholder='name' />
    <input
    {...register("price")}
    className='p-2 border border-gray-400 rounded' type="text"  placeholder='Price'/>

<input
{...register("category")}
className='p-2 border border-gray-400 rounded'
type="text" placeholder='category'/>
    <input
    {...register("image")}

    className='p-2 border border-gray-400 rounded' type="text"  placeholder='image'/>

    <button className=' p-2 text-white bg-blue-600 rounded'>CREATE</button>
    
</form>
    
    </div>
)
}

export default RHF
