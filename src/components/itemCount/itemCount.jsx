import { useState } from "react"

const itemCount = ({onAddToCart,price}) => {
    const [contador, setContador] = useState(1)
    
    const suma = () => {
        setContador (contador + 1)
    }
    const resta = () => {
        if (contador > 1) setContador (contador - 1)
    }
    const handleAddToCartClick = ()=>{
        onAddToCart(contador,price);
        setContador(1);
    }

    return(
        <div>
            <p>{contador}</p>
            <button onClick={resta}>-</button>
            <button onClick={suma}>+</button>
            <button onClick={handleAddToCartClick}>Agregar al carrito</button>
        </div>
    )
}
export default itemCount 