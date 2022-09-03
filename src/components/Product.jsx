import React from "react";
import { useState } from "react";



export const Product = ({tittle, img, price}) => {


return(
    <article>
        <h3>{tittle}</h3>
        <img src={img} alt="" style={{ width: "15rem" }} />
        <h3>{price}</h3>
    </article>

);
};
