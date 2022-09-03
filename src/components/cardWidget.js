import cartLogo from '../img/cartLogo.png';
import React from 'react';
import '../style.css';
import ItemListContainer from './ItemListContainer'

const CardWidget = () => {
  return (
    <div>
    <img className='logoCart' src={cartLogo} alt="logoCarrito" />
    {/* <ItemListContainer greeting={'1'}/> */}
    </div>
  )
}

export default CardWidget;