import React, { useState } from 'react'
import CompC from './ComC'

const CompB = () => {
    const [show ,setShow]=useState(false)
  return (
    <div>
      {show ?  <CompC/> : null}
      <button onClick={()=>setShow(!show)}>clickme</button>
    </div>
  )
}

export default CompB