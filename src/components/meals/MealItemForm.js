import React,{useContext,useRef} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";
import CartContext from "../../store/cart-contex";

const MealItemForm = (props) => {
  // const cartCtx = useContext(CartContext)
  const amountInputRef = useRef()

  
  
  const sumbitHandler= (e) => {
    e.preventDefault();

  const amount =  amountInputRef.current.value
   const numberAmount = +amount

    props.onAddToCart(numberAmount)
  }

  return (
    <form onSubmit={sumbitHandler} className={classes.form}>
       <Input 
       ref={ amountInputRef}
       lable = 'Amount'
       input={{
         id:props.id,
         type: 'number',
         min:'1',
         max:'5',
         step:'1',
         defaultValue: 1,

       }}
       
       />
      <button>+Add</button>
    </form>
  );
};

export default MealItemForm;
