import {useState, useEffect} from "react";
import Product from "../data/product";
import ItemDetail from "./itemDetail";

const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(Product);
    }, 2000);
});


const ItemDetailContainer = ({value}) => {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
            setProduct(response);
            setLoading(false);
        });
    }, []);

    if (loading){
        return (
            <>
            <h1>Esperando...</h1>
            </>
        );
    }

    return(
        <>
        <ItemDetail Product={product}/>
        </>
    )
}

export default ItemDetailContainer

