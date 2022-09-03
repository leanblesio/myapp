import React from 'react'
import { useEffect, useState } from 'react'

export const ItemCount = ({stock, initial}) => { //falta añadir el onAdd.-
  
  const [counter, setCounter] = useState(0)
  

  
  useEffect( () => {
    console.log('Efecto al montaje y cambio en counter');
    
  }, [counter])

  const handleClick = () => {
    
    setCounter(counter + 1 ) // counter++ -> counter = counter + 1
  }
  return (
    <div>
      <div className='my-5'>
        <strong>Counter = {counter}</strong>
       </div> 
      
      <button onClick={handleClick} className='btn-primary' >Click</button>
      
    </div>
     
  )
}
