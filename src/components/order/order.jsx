import React,{useState,useEffect} from 'react'
import { useProducts } from '../../context/cartContext'
import OrderItem from '../orderItem/orderItem'
import { postData } from '../../firebase/client'

const order = () => {
  const {cart,setCart} = useProducts();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cemail, setcEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'phone') setPhone(value);
    if (name === 'cemail') setcEmail(value);
  };
  useEffect(() => {
    setIsFormValid(name !== '' && email !== '' && phone !== '' && email === cemail);
  }, [name, email,cemail, phone]);

  const handleFinalizePurchase = async () => {
    const order = {
      name,
      email,
      phone,
      items: cart,
      total: cart.reduce((total, item) => total + item.product.price * item.quantity, 0),
      date: new Date()
    };
    try {
      const id = await postData(order, 'Orders');
      setCart([]);
      setOrderId(id)
      alert(`Compra finalizada! Tu ID de orden es: ${id}`);
    } catch (error) {
      console.error("Error finalizando la compra: ", error);
      alert("Hubo un error finalizando la compra. Inténtalo de nuevo.");
    } 
  };

  if (cart.length === 0) {
    return <div>El carrito esta vacio.</div>;
  }
  const totalPrice = cart.reduce((total,item)=>total + item.product.price * item.quantity,0)

  return (
    <div>
      <h2>Resumen de compra</h2>
      {cart.map((item, index) => (
        <OrderItem key={index} product={item.product} quantity={item.quantity} />
      ))}
      <h2>Total: ${totalPrice.toFixed(2)}</h2>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Confirmar Email:
          <input
            type="email"
            name="cemail"
            value={cemail}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Teléfono:
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <button onClick={handleFinalizePurchase} disabled={!isFormValid}>{'Finalizar Compra'}</button>
    </div>
  )
}
export default order;
