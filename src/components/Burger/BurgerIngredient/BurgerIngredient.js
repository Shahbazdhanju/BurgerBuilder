import React from "react";
import "./BurgerIngredient.css";

const BurgerIngredient = (props) => {
  let ingredrient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredrient = <div className="BreadBottom"></div>;
      break;
    case "bread-top":
      ingredrient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>;<div className="Seeds2"></div>;
        </div>
      );
      break;
    case "meat":
      ingredrient = <div className="Meat"></div>;
      break;
    case "cheese":
      ingredrient = <div className="Cheese"></div>;
      break;
    case "salad":
      ingredrient = <div className="Salad"></div>;
      break;
    case "Bacon":
      ingredrient = <div className="Bacon"></div>;
      break;

    default:
      ingredrient = null;
  }
  return ingredrient;
};

export default BurgerIngredient;
