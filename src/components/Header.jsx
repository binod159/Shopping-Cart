import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { useSelector } from 'react-redux'


export default function Header() {
  const cartList = useSelector(state => state.cartState.cartList);

  return (
    <header>
        <nav className='w-full flex  border-b-2 p-2 border-gray-200 '>
  
                <Link to='/' className=' w-1/4 gap-2 flex items-center'>
                <img src={Logo} alt="ShopCart Logo" className=' h-8 sm:h-9' />
                <span className=' self-center font-bold  text-xl'>Shopping Cart</span>
                </Link>

            <nav className=' w-2/4 flex justify-center gap-10  items-center  '>
                    <NavLink to='/' className='hover:bg-gray-200  rounded-sm  ' end>Home</NavLink>  
                    <NavLink to='/cart' className='hover:bg-gray-200 rounded-sm '>Cart</NavLink>     
            </nav>
            
            <Link  className='w-1/4 flex items-center justify-center  '>
                <span>Cart: {cartList.length} </span>
            </Link>
        </nav>
    </header>
  )
}
