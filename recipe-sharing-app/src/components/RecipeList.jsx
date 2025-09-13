import React from "react";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  React.useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const displayRecipes =
    searchTerm.trim() !== "" ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {displayRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {displayRecipes.map((recipe, index) => (
            <li key={index}>{recipe.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
