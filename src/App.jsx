import './App.css'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './containers/itemListContainer/itemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer'
import { CartComponentContext } from "./context/cartContext"
import CartView from './components/CartView/cartView'
import Order from './components/order/order'
function App() {
  
return (
<div>
  <CartComponentContext>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        
        <Route path='/' element = {<ItemListContainer/>}/>
        <Route path='/category/:idCategory' element = {<ItemListContainer/>}/>
        <Route path='/item/:id' element = {<ItemDetailContainer/>}/>
        <Route path='/cart' element = {<CartView/>}/>
        <Route path='/order' element = {<Order/>}/>
        
      </Routes>
    </BrowserRouter>
  </CartComponentContext>
</div>
);
}

export default App
