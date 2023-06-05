import "./Checkout.css";
import { useState, useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { db } from "../../services/config";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, total, clear } = useContext(CartContext);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    setError("");
    setOrderId("");

    if (total === 0)
    {
      setError("No hay productos en el Carrito");
      return;
    }

    if (!name || !surname || !phone || !email || !emailConfirmation) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConfirmation) {
      setError("Los campos del email no coinciden");
      return;
    }

    const order = {
      name,
      surname,
      phone,
      email,
      items: cart.map(product => ({
        id: product.item.id,
        name: product.item.name,
        quantity: product.quantity
      })),
      total
    };

    addDoc(collection(db, "orders"), order)
      .then((docRef) => {
        setOrderId(docRef.id);
        clear();
      })
      .catch((error) => {
        console.log("Error al crear la orden", error);
        setError("Se produjo un error al crear la orden, por favor intente más tarde");
      })
  }

  return (
    <div>
      <h1>Checkout</h1>
      <div className="divCheckoutProducts">
        {cart.map(product => (
          <div key={product.item.id}>
            <p> - {product.item.name} x {product.quantity} - Precio: $ {product.item.price} </p>
          </div>
        ))}
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor=""> Nombre: </label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label htmlFor=""> Apellido: </label>
          <input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </div>
        <div>
          <label htmlFor=""> Telefono: </label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label htmlFor=""> Email: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor=""> Confirmación Email: </label>
          <input type="email" value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} />
        </div>
        {
          error && <p> {error} </p>
        }
        <button type="submit" className="btnFinishOrder"> Finalizar Orden </button>
        {
          orderId && <h2>¡Gracias por tu compra! Tu número de orden es: {orderId} </h2>
        }
      </form>
    </div>
  )
}

export default Checkout
