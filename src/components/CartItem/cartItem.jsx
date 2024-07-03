import React from "react";
import './cartItem.css'
const CartItem = ({ product, quantity,updateCartQuantity, removeFromCart}) => {

  const handleIncrease = () => {
    updateCartQuantity(product.id, 1);
  };
  const handleDecrease = () => {
    if (quantity > 1) {
      updateCartQuantity(product.id, -1);
    }
  };
  const handleRemove = () => {
    removeFromCart(product.id);
  };
  return (
    <div className="cart-item">
      <h3>{product.title}</h3>
      <img src={product.image} alt="" />
      <p>Cantidad: {quantity}</p>
      <p>Precio: ${product.price}</p>
      <button onClick={handleDecrease} disabled={quantity <= 1}>-</button>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleRemove}>Eliminar</button>
    </div>
  );
};
export default CartItem;