import "./Cart.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, totalQuantity, total, clear } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <>
                <h1> No hay productos en el carrito </h1>
                <Link className="linkToHome" to="/"> Ver Productos </Link>
            </>
        )
    }
    return (
        <>
            <h1>Carrito</h1>
            <div className="divCart">
                {cart.map(product => <CartItem key={product.id} {...product} />)}
            </div>
            <div className="divCartFooter">
                <h3> Cantidad Total: {totalQuantity} </h3>
                <h3> Total: $ {total} </h3>
                <button className="btnClearCart" onClick={() => clear()}> Vaciar Carrito </button>
                <br />
                <Link className="linkToCheckout" to="/checkout"> Finalizar Compra </Link>
            </div>
        </>
    )
}

export default Cart
