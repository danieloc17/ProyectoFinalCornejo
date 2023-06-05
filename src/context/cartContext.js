import { useState, createContext } from "react";

export const CartContext = createContext({ 
    cart: [],
    totalQuantity: 0,
    total: 0
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [total, setTotal] = useState(0);

    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart(prev => [...prev, { item, quantity }]);
            setTotalQuantity(prev => prev + quantity);
            setTotal(prev => prev + (item.price * quantity));             
        }
        else {
            console.log("El producto ya está agregado!!!")
        }        
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.item.id === id);
    }

    const deleteItem = (id) => {
        const deleteProduct = cart.find(prod => prod.item.id === id);
        const updatedCart = cart.filter(prod => prod.item.id !== id);

        setCart(updatedCart);
        setTotalQuantity(prev => prev - deleteProduct.quantity);
        setTotal(prev => prev - (deleteProduct.item.price * deleteProduct.quantity));
    }

    const clear = () => {
        setCart([]);
        setTotalQuantity(0);
        setTotal(0);
    }

    return (
        <CartContext.Provider value={{ cart, totalQuantity, total, addItem, deleteItem, clear }}>
            {children}
        </CartContext.Provider>
    )
}
