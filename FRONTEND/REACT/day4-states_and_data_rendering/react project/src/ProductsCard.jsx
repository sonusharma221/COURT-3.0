import React from 'react'

const ProductsCard = ({product,del}) => {

    
  return (
    
    <div className='p-4 border-2 rounded-xl flex flex-col gap-4 h-90 w-80'>
      <div className='h-[60%] w-full overflow-hidden'><img className='object-contain h-full w-full rounded-xl' src={product.image} alt="there is image" /></div>

      <div className='m-auto' >
        <h2 className='font-semibold '>{product.title}</h2>
        <p className='text-xs'>{product.category}</p>
        <p className='text-green-600'>{product.price}</p>
      <div onClick={()=>del(product.id)} className='p-2 bg-red-500 text-center rounded-md w-60'>Delete</div>
      </div>
    </div>
  )
}

export default ProductsCard
