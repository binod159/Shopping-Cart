import React from 'react'
import { useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice';
import { MdDelete } from "react-icons/md";


export default function CartCard({product}) {
  const dispatch = useDispatch();
 
  const {name,price,image} = product;

  return (
    <div className='w-full sm:w-[70%] mx-auto flex flex-row p-2 m-2 border rounded-lg justify-between items-center '>
      <img src={image} alt="" className='w-24 h-16 ' />
      <p className='font-bold sm:w-60'>{name}</p>
      <p className=''>${price}</p>
      <button onClick={() => dispatch(remove(product))} className=' text-3xl  text-red-700 cursor-pointer '><MdDelete /></button>
    </div>
    
  )
}
