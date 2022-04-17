import React, { useState } from "react";
import CartContext from "./cart-contex";

const CartProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const cartShowHandler = () => {
    setShowCart(true);
  };
  const cartCloseHandler = () => {
    setShowCart(false);
  };

  const addItem = (item) => {
    setTotalAmount((preAmount) => {
      return preAmount + item.price * item.amount;
    });
    const existingItemIndex = cartItem.findIndex((i) => i.id === item.id);

    const existingItem = cartItem[existingItemIndex];

    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + 1,
      };

      const updatedItemsa = [...cartItem];

      updatedItemsa[existingItemIndex] = updatedItem;
      updatedItems = updatedItemsa;
    } else {
      updatedItems = cartItem.concat(item);
    }
    setCartItem(updatedItems);
  };

  const removeItem = (id) => {
 

    const existingItemIndex = cartItem.findIndex((item) => id === item.id);
   console.log(existingItemIndex)
    const existingItem = cartItem[existingItemIndex];
    setTotalAmount(preAmount => {
        return preAmount - existingItem.price
    })  

    let updatedItems;
    
    if (existingItem.amount === 1) {

     updatedItems = cartItem.filter(item => item.id !== id)


   
    } else {   const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };

    updatedItems = [...cartItem]
   
         updatedItems[existingItemIndex] = updatedItem
    }
    setCartItem(updatedItems);
  };

  const clearCart = () => {
    setCartItem([])
  }

  const cartContext = {
    items: cartItem,
    showCart,
    cartShowHandler,
    cartCloseHandler,
    addItem,
    removeItem,
    clearCart,
    totalAmount,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
