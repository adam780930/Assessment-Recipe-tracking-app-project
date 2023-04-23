import React from "react";


function RecipeEntry({recipe, RecipeDelete}) {
  return (
        <tr>
          <td>{recipe.name}</td>
          <td>{recipe.cuisine}</td>
          <td>
            <img src={recipe.photo} alt="" className="photo"/>
          </td>
          <td ClassName="content_td"><p>{(recipe.ingredients)}</p></td>
          <td ClassName="content_td"><p>{(recipe.preparation)}</p></td>
          <td>
            <button name="delete" onClick={RecipeDelete}>Delete</button>
          </td>
        </tr>
  )
}

export default RecipeEntry;