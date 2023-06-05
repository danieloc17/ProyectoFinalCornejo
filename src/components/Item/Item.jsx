import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, price, img }) => {
    return (
        <div className="divItem">
            <img className="imgItem" src={img} alt={name} />
            <h2> {name} </h2>
            <h3>Precio: $ {price} </h3>
            <br />
            <Link className="linkItem" to={`/item/${id}`}> Ver Detalles </Link>
        </div>
    )
}

export default Item
