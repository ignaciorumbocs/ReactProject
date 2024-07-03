import React from "react";
import { useProducts } from "../../context/cartContext";
import CartItem from "../CartItem/cartItem";
import { Link } from "react-router-dom";

const cartView = () => {
  const { cart, loading, updateCartQuantity, removeFromCart } = useProducts();
  console.log(cart);
  if (loading) {
    return <div>Cargando carrito...</div>;
  }

  if (cart.length === 0) {
    return <div>El carrito esta vacio.</div>;
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map((item, index) => (
        <CartItem
          key={index}
          product={item.product}
          quantity={item.quantity}
          updateCartQuantity={updateCartQuantity}
          removeFromCart={removeFromCart}
        />
      ))}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <Link to={"/order"}>
        <button>Comprar</button>
      </Link>
    </div>
  );
};

export default cartView;

