import React,{useRef,useState} from 'react'


const Form = () => {
    console.log("form rendering")        

    const formRef = useRef({})
    const [product, setProduct] = useState({})
    console.log(product);
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        let obj = {
            pName:formRef.current.productName.value,
            price:formRef.current.price.value,
            category:formRef.current.category.value,
            image:formRef.current.image.value,
        }
        setProduct(obj)
        
        
        

    }
return (
    
    <div className='w-80 h-screen'>
<form
onSubmit={handleSubmit}
className='flex flex-col p-6 rounded bg-white gap-4'>
    
    <input
    ref={(e)=>{
        formRef.current.productName = e
    }}
    className='p-2 border border-gray-400 rounded' type="text" placeholder='name' />
    <input
    ref={(e)=>{
        formRef.current.price = e
    }}
    className='p-2 border border-gray-400 rounded' type="text"  placeholder='Price'/>

    <span>Select category</span>
    <select
    ref={(e)=>{
        formRef.current.category = e
    }}
    className='p-2 border border-gray-400 rounded'>
    <option value="MENS">Mens</option>
    <option value="WOMEN">Women</option>
    <option value="KIDS">Kids</option>
    </select>
    <input
    ref={(e)=>{
        formRef.current.image = e
    }}
    className='p-2 border border-gray-400 rounded' type="text"  placeholder='image'/>
    <button className=' p-2 text-white bg-blue-600 rounded'>CREATE</button>
</form>
<h1>{product.pName}</h1>
<h1>{product.price}</h1>
<h1>{product.category}</h1>
<h1>{product.image}</h1>
    </div>
)
}

export default Form
