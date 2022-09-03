import React from 'react'
import { useEffect, useState } from 'react'

export const ItemCount = ({stock, initial}) => { //falta añadir el onAdd.-
  const [counter, setCounter] = useState([])

  

  
  useEffect( () => {
    console.log('Efecto al montaje y cambio en counter');
    
  }, [counter])

  const handleClick = () => {
    console.log('hiciste click');
    setCounter( counter + 1 ) // counter++ -> counter = counter + 1
  }
  return (
    
      <button onClick={handleClick} className='btn my-5'>Click {counter}</button>

  )
}
