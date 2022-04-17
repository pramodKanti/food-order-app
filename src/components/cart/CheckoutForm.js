import React,{useRef} from 'react'
import classes from './Checkout.module.css';


const CheckoutForm = () => {
    const inputNameRef = useRef()
const inputCityRef = useRef()
const inputPostalRef = useRef()
const inputStreetRef = useRef()


const orderSubmitHandler = (e) => {
    e.preventDefault();
  
  }
  
  
    return (
    
        <form onSubmit={orderSubmitHandler}  className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' ref={inputNameRef}  />
        </div>
        <div className={classes.control}>
          <label htmlFor='street'>Street</label>
          <input type='text' id='street' ref={inputStreetRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='postal'>Postal Code</label>
          <input type='text' id='postal' ref={inputPostalRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='city'>City</label>
          <input type='text' id='city' ref={inputCityRef} />
        </div>
        <div className={classes.actions}>
        </div>
    </form>
    )
}

export default CheckoutForm
