import "./ItemListContainer.css";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = () => {
    const [product, setProduct] = useState([]);

    const {category} = useParams();

    useEffect(() => {

        const myProducts = category ? query(collection(db, "products"), where("category", "==", category)) : collection(db, "products");

        getDocs(myProducts)
            .then(response => {
                const newProducts = response.docs.map(doc => {
                    const data = doc.data()
                    return {id:doc.id, ...data}
                })
                setProduct(newProducts);
            })
          .catch(error => console.error(error))
    }, [category])

    return (
        <div className="divItemListContainer">
            <ItemList products={product} />
        </div>
    )
}

export default ItemListContainer
