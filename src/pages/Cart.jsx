import React from 'react'
import CartCard from '../components/CartCard'
import useTitle from '../hooks/useTitle'
import { useSelector } from 'react-redux';

export default function Cart() {
  
  useTitle("Cart");
  const cartList = useSelector(state => state.cartState.cartList);
  const total = useSelector(state => state.cartState.total);
  
 
  return (
    <section>
      <h1 className='text-center text-lg font-bold py-3'>Cart Items: {cartList.length} / ${total}</h1>
      {cartList.map((product) => (
        <CartCard key={product.id} product={product} />
      ))}
    </section>
  )
}
