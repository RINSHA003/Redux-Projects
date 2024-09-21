import React from 'react'
import './CartButtons.css'
import { useDispatch } from 'react-redux'
import { decrementCount, incrementCount } from '../../../Redux/CartSlice'
import { useSelector } from 'react-redux'

const AfterCart = ({cartcount,productID}) => {
  // const {cartCount}=useSelector((state)=>state.cart)
  const dispatch=useDispatch()
  return (
    <div className='after-cart'>
        <button className='cart-count-button' onClick={()=>dispatch(incrementCount(productID))}>+</button>
        <div className='cart-count'>{cartcount}</div>
        <button className='cart-count-button' onClick={()=>dispatch(decrementCount(productID))}>-</button>
    </div>
  )
}

export default AfterCart
