import React from "react";


const CartContext = React.createContext({
    items: [],
    showCart: false,
    addItem: (item) => {},
    removeItem: (id) => {}
})



export default CartContext