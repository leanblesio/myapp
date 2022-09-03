import React from 'react'
import { MyProductsContainer } from '../MyProductsContainer';
import {Product} from "./Product"

export const MyProductList = ({products}) => {  
  const flex = { display: "flex", justifyContent: "space-evenly" };
  return (
    <section style={flex}>
     {products.lenght ? (
      products.map((product)=> <Product key={product.id} {...product} />)
     ) : (
      <h2>Pagina cargando...</h2>
     )}
    
    </section>
  );
};
