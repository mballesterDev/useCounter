import { useState } from 'react'
import './App.css'
import { useCounter } from './useCounter'
function App() {
 
  const {counter, increment, discrement, reset} = useCounter(5); //desestructuramos el counter xq sino habría qeu hacer useCounter.counter
  return (
    <>
      <h1 className='m-3'>Counter Custom Hook {counter}</h1>
       <hr />

       <button onClick={increment} className='btn btn-primary mx-3'>+1</button>
       <button onClick={reset} className='btn btn-primary mx-3'>Reset</button>
       <button onClick={discrement}className='btn btn-primary mx-3'>-1</button>
    </>
  )
}

export default App
