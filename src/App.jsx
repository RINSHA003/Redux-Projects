import { createContext, useEffect, useRef, useState } from 'react'
import './App.css'
import './index.css'

// import Header from './Components/Header/Header'
// import ProductList from './Components/ProductList/ProductList'
import {ProductList,Header} from './Components'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './Redux/CartSlice'
// import CompB from './Components/CompB'


//  export const data= createContext()
 

function App() {


  const dispatch=useDispatch()
  const counterRef=useRef(1)
  const {userDetail}=useSelector((state)=>state.cart)
  useEffect(()=>{
        dispatch(fetchUser(counterRef.current))
  },[])

  const adduser=()=>{
    dispatch(fetchUser(++counterRef.current))
  }
  // const welcome='welcome to the context api'

  console.log(userDetail)
  return (
    <>
     <Header />
     <ProductList />
      {/* <data.Provider value={welcome}>
          <CompB/>
      </data.Provider> */}
      <button onClick={adduser}>add user</button>
      
      <pre style={{color:'black'}}>{JSON.stringify(userDetail,undefined,4)}</pre>
    </>
  )
}

export default App

