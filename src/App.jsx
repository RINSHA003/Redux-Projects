import { createContext, useEffect, useRef, useState } from 'react'
import './App.css'
import './index.css'

// import Header from './Components/Header/Header'
// import ProductList from './Components/ProductList/ProductList'
import {ProductList,Header} from './Components'
import { useDispatch, useSelector } from 'react-redux'
import {  updateUser } from './Redux/CartSlice'
import axios from 'axios'
// import CompB from './Components/CompB'


//  export const data= createContext()
 

function App() {

    const fetchUser =  async (id) => {
    const response = await axios.get(`https://jsonplaceholder.org/posts/${id}`);
    dispatch(updateUser( response.data))
};


  const dispatch=useDispatch()
  const counterRef=useRef(1)
  const {userDetail}=useSelector((state)=>state.cart)
  useEffect(()=>{
        fetchUser(counterRef.current)
  },[])

  const adduser=()=>{
    fetchUser(++counterRef.current)
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

