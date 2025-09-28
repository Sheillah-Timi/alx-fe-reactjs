import React from "react";
import { useParams, Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes, favorites, addFavorite, removeFavorite } = useRecipeStore();

  const recipe = recipes.find((r) => r.id === id);
  if (!recipe) return <p>Recipe not found</p>;

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(recipe.id)}>Remove Favorite</button>
      ) : (
        <button onClick={() => addFavorite(recipe.id)}>Add to Favorites</button>
      )}

      <br />
      <Link to="/">Back to Recipes</Link>
    </div>
  );
};

export default RecipeDetails;
