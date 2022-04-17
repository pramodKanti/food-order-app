import React, { useContext } from "react";
import CartIcon from "./CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../store/cart-contex";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const badge = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <button onClick={cartCtx.cartShowHandler} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{badge}</span>
    </button>
  );
};

export default CartButton;
