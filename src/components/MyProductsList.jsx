import React from 'react'
import {Product} from "./Product"


export const MyProductsList = ({products}) => {
  const flex = { display: "flex", justifyContent: "space-evenly" };

  return (
    <section style={flex}>      
      {products.length ? (
      products.map((product)=> <Product key={product.id} {...product} />)) 
      :
      (<h2>Pagina cargando...</h2>)
    }

    </section>
  );
};

