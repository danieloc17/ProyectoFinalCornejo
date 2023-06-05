import "./ItemCount.css"
import { useState } from "react"

const ItemCount = ({initialValue, stock, functionAddItem}) => {
  const [counter, setCounter] = useState(initialValue);

  const increase = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }

  const decrease = () => {
    if (counter > initialValue) {
      setCounter(counter - 1);
    }
  }  

  return (
    <div>
        <button className="btnCounter" onClick={ decrease }> - </button>
        <p className="pCounter"> { counter } </p>
        <button className="btnCounter" onClick={ increase }> + </button>
        <br />
        <button id="btnAddToCart" onClick={ () => functionAddItem(counter) }> Agregar al Carrito </button>
    </div>
  )
}

export default ItemCount
