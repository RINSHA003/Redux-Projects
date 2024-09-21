import React, { useState } from 'react'
import Product from '../../api/Product.json'
import '../../Components/ProductList/ProductList.css'
import './CartButtons/CartButtons.css'
import BeforeCart from './CartButtons/BeforeCart'
import AfterCart from './CartButtons/AfterCart'
import CartButtons from './CartButtons/cartButtons'
import { useSelector } from 'react-redux'

const ProductList = () => {
    
    const {cartCount,cartList}=useSelector((state)=>state.cart)
    console.log(cartList)
  return (
    <section class='container'>
      {Product.map((products,key)=>(
        <div class='product-Container' key={key}>
        <img src={products.img_url} alt={products.name} />
           <h3>{products.name}</h3>
           <h3>{products.Price}</h3>

           <CartButtons products={products}/>
            
        </div>
      ))}

    </section>
  )
}

export default ProductList
