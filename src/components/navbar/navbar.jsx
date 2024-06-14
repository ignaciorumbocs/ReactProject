import { Link } from "react-router-dom"
import CartWidget from "../cartWidget/cartWidget"
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={'/'}>
      <h1>Key Bross</h1>
      </Link>
      <Link to={'/category/Electronica'}>
      <p>Electronica</p>
      </Link>
      <Link to={'/category/Joyeria'}>
      <p>Joyeria</p>
      </Link>
      <Link to={'/category/Ropa de hombre'}>
      <p>Ropa de hombre</p>
      </Link>
      <Link to={'/category/Ropa de Mujer'}>
      <p>Ropa de Mujer</p>
      </Link>

      <CartWidget/>
    </div>
  )
}

export default Navbar
