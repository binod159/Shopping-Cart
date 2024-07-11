import React, { useEffect, useState } from 'react'
import { add, remove } from '../store/cartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export default function ProductCart({product}) {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);
  
  const {id,name,price,image} = product ;

  useEffect(() => {
    const productInCart = cartList.find(item => item.id === id);

    if(productInCart){
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }

  },[cartList, id]);

  

  return (
    <div>
    
      <div className='flex flex-col gap-2 p-3 m-5 border '>
      
      <img src={image} alt="" className='border w-68 h-48 object-fit bg-slate-400' />
  
      <p className='font-bold p-3'>{name}</p>
      <div className='flex items-center w-full'>
        <p className='font-semibold w-3/4'>${price}</p>
        {isInCart ? <button onClick={() => dispatch(remove(product))}  className='border  w-2/4 rounded-lg p-2 bg-red-700 hover:bg-red-500 cursor-pointer text-white '>Remove</button>
         : <button onClick={() => dispatch(add(product))} className='border w-2/4 rounded-md p-2 bg-blue-700 hover:bg-blue-500 cursor-pointer text-white'>Add To Cart</button>}
        
         
        
      </div>
      </div>
    

</div>
  )
}
