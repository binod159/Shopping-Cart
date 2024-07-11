import React from 'react'
import ProductCard from '../components/ProductCard'
import useTitle from '../hooks/useTitle'


export default function Home() {
  useTitle("Home");
  const products = [
    {"id": 1, "name": "JBL Tune &20 BT", "price": 150, "image": "/assests/1001.jpg"},
    {"id": 2, "name": "Boat 1428 Headphone", "price": 120, "image": "/assests/1002.jpg"},
    {"id": 3, "name": "Apple airpods 1517", "price": 130, "image": "/assests/1003.webp"},
    {"id": 4, "name": "G733 LightSpeed Headset", "price": 170, "image": "/assests/1004.png"},
    {"id": 5, "name": "Sony Wireless Headphone", "price": 90, "image": "/assests/1005.avif"},
    {"id": 6, "name": "ZEVRONICS ZebThunder", "price": 105, "image": "/assests/1006.webp"}
  ]
  return (
    <main className='flex justify-center min-h-100vh  '>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </section>
      
    </main>
  )
}
