import './App.css'
import Navbar from './components/navbar/navbar'
import ItemListContainer from './containers/itemListContainer/itemListContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './containers/itemDetailContainer/itemDetailContainer'
function App() {
  
return (
<div>
  <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path='/' element = {<ItemListContainer/>}/>
      <Route path='/category/:idCategory' element = {<ItemListContainer/>}/>
      <Route path='/item/:id'element = {<ItemDetailContainer/>}/>
      
      
    </Routes>
  </BrowserRouter>
</div>
)
 
}

export default App
