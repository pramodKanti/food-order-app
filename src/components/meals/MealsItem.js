import React,{useContext} from "react";
import CartContext from "../../store/cart-contex";

import MealItemForm from "./MealItemForm";
import classes from "./MealsItem.module.css";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext)

const onAddToCart = (amount) => {
  
  cartCtx.addItem({
    name: props.name,
    price: props.price,
    amount: amount,
    id: props.id,
  })
}

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
    <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={onAddToCart}/>
      </div>
    </li>
  );
};

export default MealsItem;
