import React from 'react'
import classes from './Header.module.css'
import mealImage from '../asset/meals.jpg';
import CartButton from '../cart/CartButton';
import Search from './Search';

const Header = (props) => {
    return (
    <React.Fragment>
        <header className={classes.header}>
            <h1>React Meal</h1>
            <Search/>
            <CartButton />
        </header>
        <div className={classes['main-image']}>
        <img src = {mealImage} alt= 'no mael found'/>
        </div>
        </React.Fragment>
    )
}

export default Header
