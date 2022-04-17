import React,{useContext} from 'react';
import Header from './components/layout/Header';
import Meals from './components/meals/Meals';
import MealsSummary from './components/meals/MealsSummary';
import Cart from './components/cart/Cart'
import CartContext from './store/cart-contex';


const App = () => {
 const cartCtx = useContext(CartContext)
 

  return (
    <React.Fragment>
      <Header/>
     {cartCtx.showCart && <Cart/>}
      <MealsSummary/>
      <Meals/>

      
      </React.Fragment> )
}

export default App
