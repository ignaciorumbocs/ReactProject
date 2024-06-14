import { Link } from 'react-router-dom'
import './item.css'
export const Item = ({id, img, name, price})=>{
    return(
        <>
        <div className="item">
            <div>{name}</div>
            <img src={img}  />
            <div>${price}</div>
            <Link to={`/item/${id}`}>
            <button>Detalles</button>
            
            </Link>
        </div>
        </>
    )
}