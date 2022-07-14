import React, { useContext } from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { cartContext } from '../../Context/CartContext';


const CartWidget = () => {

  const { qtyProducts } = useContext(cartContext);

  return (
    <>
      <ShoppingBagIcon color="success" fontSize="large" />
      <p>{qtyProducts}</p>
    </>
  )
}

export default CartWidget
