import React from "react";
import './itemDetail.css'
import ItemCount from "../../components/itemCount/itemCount";
import {useProducts} from "../../context/cartContext"

export const ItemDetail = ({ producto }) => {
  const {addToCart} = useProducts();
  if (!producto) return null;

  const handleAddToCart = (quantity,price) => {
    addToCart(producto, quantity,price);
}

  return (
    <div className="item-detail">
      <h1>{producto.title}</h1>
      <p>{producto.description}</p>
      <p>Price: ${producto.price}</p>
      <img src={producto.image} alt={producto.title} />
      <ItemCount onAddToCart={handleAddToCart} price={producto.price}/>
    </div>
  );
};
