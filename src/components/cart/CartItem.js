import classes from './CartItem.module.css';
import {useContext} from 'react'
import CartContext from "../../store/cart-contex";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext)
const removeFromCart = () => {
  cartCtx.removeItem(props.id)
  console.log(props.id)
}

  const addToCart = () => {
     cartCtx.addItem({
         name: props.name,
         price: props.price,
         amount: props.amount,
         id: props.id
     })
  }

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={removeFromCart} >−</button>
        <button onClick={addToCart} >+</button>
      </div>
    </li>
  );
};

export default CartItem;
