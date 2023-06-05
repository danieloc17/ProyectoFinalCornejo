import "./ItemDetail.css";
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, description, price, stock, category, img }) => {
  const [quantity, setQuantity] = useState(0);

  const { totalQuantity, addItem } = useContext(CartContext);

  const quantityHandler = (quantity) => {
    setQuantity(quantity);

    const item = { id, name, price };
    addItem(item, quantity);
  }

  return (
    <>
      <div className="divItemDetail">
        <h2> {name} </h2>
        <img className="imgItemDetail" src={img} alt={name} />
        <h4> {description} </h4>
        <h3> Precio: $ {price}</h3>
        <h3> Stock: {stock}</h3>
      </div>
      {
        quantity > 0 ? (
          <div className="divItemDetailFooter">
            <Link className="linkItemDetail" to="/"> Seguir Comprando </Link>
            <br />
            <Link className="linkItemDetail" to="/cart"> Ver Carrito </Link>
          </div>
        ) : (
          <ItemCount initialValue={1} stock={stock} functionAddItem={quantityHandler} />
        )
      }
    </>
  )
}

export default ItemDetail
