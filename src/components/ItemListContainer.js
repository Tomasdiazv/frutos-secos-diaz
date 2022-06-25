import ItemCount from "./ItemCount"

const ItemListContainer = ({value}) => {

    const onAdd = () => {
        alert('Gracias por tu compra.')
    }
    
    return (
        <>
        <p>{value}</p>
        <ItemCount stock={7} onAdd={onAdd}/>
        </>
    )
}
export default ItemListContainer