import React from "react";
import Item from "./item"

export default function ItemDetail({Product}) {
    return(
        <div>
            {Product.map((elem) => {
            return <Item elem={elem}/>
            })}
        </div>
    )
}