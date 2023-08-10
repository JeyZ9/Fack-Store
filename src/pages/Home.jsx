import React, { useContext } from 'react'
//import product context
import { ProductContext } from '../contexts/ProductContext'
//import component
import Product from '../Components/Product'
import Hero from '../Components/Hero'

const Home = () => {
  const { products } = useContext(ProductContext)
  // console.log(products)
  const fillteredProducts = products.filter(item => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    )
    })
  return ( 
    <div className="">
      <Hero />
      <section className='py-16'>
        <div className="container mx-auto">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]">
            {fillteredProducts.map(product => {
              return <Product  product={product} key={product.id} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home