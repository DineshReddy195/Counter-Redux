import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
    const info=useSelector((storedata)=>{return storedata})
    const dispatch=useDispatch()
    const handleInc=()=>{
        dispatch({type:'increment'})
    }
    const handleDec=()=>{
        dispatch({type:'decrement'})
    }
    const handleReset=()=>{
        dispatch({type:'reset'})
    }
  return (
    <div>
      <h2>Count: {info}</h2>
      <button className='btn' onClick={handleInc}>Increment</button>
      <button className='btn' onClick={handleDec}>Decrement</button>
      <button className='btn' onClick={handleReset}>Reset</button>
      
    </div>
  )
}

export default Counter
