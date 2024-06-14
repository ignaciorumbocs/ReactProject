import React from "react";
import {Item} from "../item/item"
export const ItemList = ({productos}) => {
    console.log(productos)
    return(
        <div className="contenedor">
             {productos.map((p) =>
                <Item key={p.id}
                id={p.id}
                category={p.category}
                description={p.description}
                img={p.image}
                name={p.title}
                price={p.price}
                stock={p.stock}/>

            )}
        </div>
    )
}