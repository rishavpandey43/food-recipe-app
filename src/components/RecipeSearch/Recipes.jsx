import React from "react";

export default function Recipes(props) {

  let recipe = props.recipe;
  return (
    <div className="item-card" onClick={props.openModal}>
      <div className="item-img-div">
        <figure>
          <img src={recipe.image} alt={recipe.label} width="100%" />
          <figcaption className="pl-2 text-left">{recipe.label}</figcaption>
        </figure>
      </div>
      <div className="item-desc-div">
        <div className="item-desc">
          <span className="custom">{recipe.calories.toFixed(2)}</span>
          <span>&nbsp;Calories</span>
        </div>
        <div className="item-desc">
          <span className="custom">{recipe.ingredients.length}</span>
          <span>&nbsp;Ingredients</span>
        </div>
      </div>
    </div>
  );
}
