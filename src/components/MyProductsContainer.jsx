import React from 'react';
import { useState, useEffect } from 'react';
import productsJson from "../myProducts.json";

import {MyProductsList} from "./MyProductsList";




export const MyProductsContainer = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const getProducts = (data, time) =>
    new Promise((resolve, reject)=> {
       setTimeout(() => {
        if(data){
            resolve(data);
        }else{
            reject("Error")
        }
      }, time);
    });

    getProducts(productsJson, 3500)
    .then((res) =>{
        setProducts(res);
    })
    .catch((err) => console.log(err, "no se encontraron productos"));
  },[]);  

  return (
    <div>
      <h3>prueba</h3>
      <MyProductsList products={products} />

    </div>
  )
}

