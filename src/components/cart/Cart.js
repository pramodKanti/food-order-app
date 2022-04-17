import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import CartContext from "../../store/cart-contex";
import ErrorModal from "../UI/ErrorModal"

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isSubmit , setIsSubmit] = useState(false)

  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const cartOrderHandler = () => {
    setIsCheckout(true)
  }

  const cartHasItems = cartCtx.items.length > 0

  const cartItem = cartCtx.items.map((item) => (
    <ul className={classes["cart-items"]} key={item.id}>
      <CartItem
        id={item.id}
        name={item.name}
        price={item.price}
        amount={item.amount}
      />
    </ul>
  ));

  const orderSumbitHandler = (userData) => {
    setIsSubmiting(true)
    fetch('https://meals-item-ed275-default-rtdb.firebaseio.com/odered.json',{
   method: 'POST',
   body: JSON.stringify({
     user: userData,
     otderedItem:cartCtx.items

   }),
   headers: {'Content-Type': 'application/json'}
  })

  setIsSubmiting(false)
setIsSubmit(true)
cartCtx.clearCart()
  }

  const modalContent = <React.Fragment>
     {cartItem}
      <div className={classes.total}>
        <span>TotalAmount </span>
        <span>${totalAmount}</span>
      </div>
      {isCheckout && <Checkout onConfirm= {orderSumbitHandler} onCancel={cartCtx.cartCloseHandler} />}
      <div className={classes.actions}>
        {!isCheckout &&
          <button
            onClick={cartCtx.cartCloseHandler}
            className={classes["btn--alt"]}
          >
            Close
          </button>
        }
        {cartHasItems && !isCheckout &&
          <button onClick={cartOrderHandler} className={classes.button}>
            order
          </button>
        }
      </div>
  </React.Fragment>

  const sumbitingContent = <p>Sending.....</p>
  
  
  const submitContent =<ErrorModal heading ={'order Placed Succesfully'} message={'Thanks You being a valuble costumer'} onClose={cartCtx.cartCloseHandler}/>



  
  return (
    <Modal>
    {!isSubmiting && !isSubmit && modalContent}
    {isSubmiting && !isSubmit && sumbitingContent}
    {isSubmit && submitContent}
    </Modal>
  );
};

export default Cart;
