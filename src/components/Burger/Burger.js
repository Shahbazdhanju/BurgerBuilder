import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";

const burger = (props) => {
  const transfromedIngredients = Object.keys(props.ingredients)
        .map((igkey) => {
            return [...Array(props.ingredients[igkey])].map((_, i) => {

             return <BurgerIngredient key={igkey + i} type={igkey} />;
            });
  });

  return (
    <div className="burger">
      <BurgerIngredient type="bread-top" />
      {transfromedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
