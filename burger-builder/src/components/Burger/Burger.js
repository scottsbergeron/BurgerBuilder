import React from "react";
import classes from './Burger.module.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = (props) => {
    // Parse object into array of BurgerIngredients
    let ingredients = Object.keys(props.ingredients).map(
        // For each ingredient name, return an array of BurgerIngredients equal to the count
        (ingredientName) => {
            return [...Array(props.ingredients[ingredientName])].map(
                (_, index) => {
                    return <BurgerIngredient key={ingredientName + index} type={ingredientName} />
                }
            );
        }
    ).reduce(
        // Flattens the 2d array into a 1d array
        (arr, el) => {
            return arr.concat(el);
        }, []
    );

    if (ingredients.length === 0) {
        ingredients = <p>Please start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;
