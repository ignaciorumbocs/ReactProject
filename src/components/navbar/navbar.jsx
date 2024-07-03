import { Link } from "react-router-dom"
import CartWidget from "../cartWidget/cartWidget"
import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={'/'}>
      <h1>Key Bross</h1>
      </Link>
      <Link to={'/category/electronics'}>
      <p>Electronica</p>
      </Link>
      <Link to={'/category/jewelery'}>
      <p>Joyeria</p>
      </Link>
      <Link to={'/category/men\'s clothing'}>
      <p>Ropa de hombre</p>
      </Link>
      <Link to={'/category/women\'s clothing'}>
      <p>Ropa de Mujer</p>
      </Link>

      <CartWidget/>
    </div>
  )
}

export default Navbar
