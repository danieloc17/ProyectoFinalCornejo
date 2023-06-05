import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { getDoc, doc } from "firebase/firestore";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        const newDoc = doc(db, "products", id);

        getDoc(newDoc)
            .then(response => {
                const data = response.data();
                const newProduct = { id:response.id, ...data }
                setProduct(newProduct);
            })
            .catch(error => console.error(error))
    }, [id])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
