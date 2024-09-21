import React, { useContext } from 'react'
import {data} from '../App'

const ComC = ({name}) => {
    const context = useContext(data)
  return (
    <div>
      <h1>{context}</h1>
    </div>
  )
}  

export default ComC
