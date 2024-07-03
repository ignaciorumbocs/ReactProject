import React from 'react'

const orderItem = ({product,quantity}) => {
  return (
    <div className='orden'>
      <h3>{product.title}</h3>
      <img src={product.image} alt="" />
      <p>Cantidad: {quantity}</p>
      <p>Precio: ${product.price}</p>
      
    </div>
  )
}
export default orderItem
