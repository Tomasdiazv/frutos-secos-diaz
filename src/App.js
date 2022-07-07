import NavBar from './components/nav';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer';

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer value='Mensaje de prueba' />
    <ItemDetailContainer/>
    </>
  )
}

export default App;
