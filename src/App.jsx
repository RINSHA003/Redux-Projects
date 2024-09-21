import { createContext, useState } from 'react'
import './App.css'
import './index.css'

// import Header from './Components/Header/Header'
// import ProductList from './Components/ProductList/ProductList'
import {ProductList,Header} from './Components'
// import CompB from './Components/CompB'


//  export const data= createContext()
 

function App() {
  // const welcome='welcome to the context api'
  return (
    <>
     <Header />
     <ProductList />
      {/* <data.Provider value={welcome}>
          <CompB/>
      </data.Provider> */}
    </>
  )
}

export default App

