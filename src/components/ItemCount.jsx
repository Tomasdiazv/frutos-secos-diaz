import React, {useState} from "react";

const ItemCount = ({stock, onAdd}) => {
    const [Producto, setProducto] = useState(0)

    const sumar = () => {
        Producto < stock && setProducto (Producto + 1)
        Producto >= stock && alert('No hay stock')
    }
    
    const restar = () => {
        Producto > 0 && setProducto (Producto - 1)
    }

    
  return (
    <>
    <div style={style.div}>
        <button style={style.butTop} onClick={restar}>-</button>
        <p style={style.butMed}>{Producto}</p>
        <button style={style.butBot} onClick={sumar}>+</button>
    </div>
    <div>
        <button style={style.comp} onClick={onAdd}>Comprar</button>
    </div>
    </>
  )
}

export default ItemCount

const style = {
    div: {
        display: 'flex', 
        alignItems: 'center'
    },

    butTop: {
        
        marginLeft: '45%',
        
    },

    butMed: {
        
        marginLeft: '5%',
        
    },

    butBot: {
        
        marginLeft: '5%',
        
    },

    comp: {
        
        marginLeft: '50%',
        
    }
}