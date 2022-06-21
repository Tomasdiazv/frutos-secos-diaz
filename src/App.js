import NavBar from './components/nav';
import './App.css';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer value='Mensaje de preuba' />
    </>
  )
}

export default App;
