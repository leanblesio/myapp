import React from "react";
import { useState } from "react";



export const Product = ({title, img, price}) => {


return( 
    <div>        
        <h3 className="card-title">{title}</h3>

        <img src={img} alt="Pasteleria" class="rounded-xl" style={{ width: "20vw", height: "400px" }}/>
        <h3>{price}</h3>


    </div>    
    
);
};
