import React, {useState, useEffect} from "react"
import ItemCount from "./ItemCount"
import Frutos from "../data/valores";
import ItemList from "./itemlist";


const promesa = new Promise((res, rej) => {
    setTimeout(() => {
      res(Frutos);
    }, 2000);
  });

export default function ItemListContainer({value}) {
    const [listaFrutos, setListaFrutos] = useState([]);
    const [loading, setLoading] = useState(false);

    const onAdd = () =>{    
        alert('Gracias por la compra')
    }

    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
          setLoading(false);
          setListaFrutos(response);
        });
      }, []);

      if (loading) {
        return (
          <>
            <h1>Cargando...</h1>
          </>
        );
      }

    return(
        <>
    <p>{value}</p>
    <ItemList Frutos={listaFrutos} />
    <ItemCount initial={0} stock={5} onAdd={onAdd} />
    </>
    )
}