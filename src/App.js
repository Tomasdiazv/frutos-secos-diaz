import NavBar from './components/nav';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';
import Cart from './components/Cart'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CartWidget from './components/CartWidget';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<ItemListContainer value='Bienvenido'/>} />
      <Route path="/category/:categoryId" element={<ItemListContainer value='Bienvenido'/>} />
      <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
    {/* <ItemListContainer value='Mensaje de prueba' />
    <ItemDetailContainer/> */}
    </BrowserRouter>
  )
}

export default App;
