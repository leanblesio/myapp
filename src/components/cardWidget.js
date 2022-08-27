import cartLogo from '../img/cartLogo.png';
import React from 'react';
import '../style.css';

const cardWidget = () => {
  return (
    <div>
    <img src={cartLogo} alt="logoCarrito" />
    </div>
  )
}

export default cardWidget;