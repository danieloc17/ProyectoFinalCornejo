import "./CartItem.css";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartItem = ({item, quantity}) => {
    const {deleteItem} = useContext(CartContext);

  return (
    <div className="divCartItem">
      <h2> {item.name} </h2>
      <h3> Cantidad: {quantity} </h3>
      <h3> Precio: $ {item.price} </h3>
      <button className="btnDelete" onClick={() => deleteItem(item.id)}> Eliminar </button>
    </div>
  )
}

export default CartItem
