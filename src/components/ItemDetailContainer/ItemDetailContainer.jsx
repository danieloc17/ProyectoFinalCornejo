import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";
import { CartContext } from "../../context/cartContext";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [addedQuantity, setAddedQuantity] = useState(0);    

    const { id } = useParams();

    const { cart } = useContext(CartContext);    

    useEffect(() => {
        const newDoc = doc(db, "products", id);

        getDoc(newDoc)
            .then(response => {
                const data = response.data();
                const newProduct = { id: response.id, ...data }
                setProduct(newProduct);

                const currentProduct = cart.find(prod => prod.item.id === response.id);

                if (currentProduct !== undefined)
                {        
                    setAddedQuantity(currentProduct.quantity);
                }
            })
            .catch(error => console.error(error))
    }, [id])

    return (
        <div>
            {
                product === null ? (<></>) : (<ItemDetail {...product} addedQuantity={addedQuantity} />)
            }
        </div>
    )
}

export default ItemDetailContainer
