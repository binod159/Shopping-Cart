import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import CartCard from '../components/CartCard'
import Header from '../components/Header'


export default function AllRoutes() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/cart/:id' element={<CartCard />} /> */}

    </Routes>
    </BrowserRouter>
    
  )
}
