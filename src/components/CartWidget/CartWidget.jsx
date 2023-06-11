import "./CartWidget.css"
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    const imgCart = "/img/cart.jpg";
    return (
        <Link to="/cart">
            <div className="divCartWidget">
                <img className="imgCartWidget" src={imgCart} alt="Carrito" />
                {
                    totalQuantity > 0 && <span> { totalQuantity } </span>
                }
            </div>
        </Link>
    )
}

export default CartWidget
