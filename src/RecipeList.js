import React from "react";
import RecipeEntry from "./RecipeEntry.js"

function RecipeList({recipes, RecipeDelete}) {
  const rows = recipes.map((entry, index) => (
    <RecipeEntry
      key={index}
      recipe={entry}
      RecipeDelete={() => RecipeDelete(index)}/>
  ))


  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr className="tableHeader">
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="tableRow">
        {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
