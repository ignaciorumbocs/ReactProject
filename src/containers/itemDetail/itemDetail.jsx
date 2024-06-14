import React from "react";
import './itemDetail.css'
export const ItemDetail = ({ producto }) => {
  if (!producto) return null;

  return (
    <div className="item-detail">
      <h1>{producto.title}</h1>
      <p>{producto.description}</p>
      <p>Price: ${producto.price}</p>
      <img src={producto.image} alt={producto.title} />
    </div>
  );
};
