import React,{useMemo} from 'react'
import AfterCart from './AfterCart'
import BeforeCart from './BeforeCart'
import { useSelector ,} from 'react-redux'

const CartButtons = ({products}) => {
  const {cartList}=useSelector((state)=>state.cart)

  // useMemo used for large dataset here is optional
  const cartcount= useMemo(()=>{
   return cartList.find((item)=>item.id===products.id)?.count  
  },[cartList])
 
  console.log(cartcount?.count)
  return (
    <>
       {cartcount >0 ?  (<AfterCart productID={products.id}  cartcount={cartcount}/> ) : (<BeforeCart products={products} />) }  
    </>
  )
}

export default  CartButtons
