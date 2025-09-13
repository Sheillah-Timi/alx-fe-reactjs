// src/components/RecipeList.jsx
import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  if (filteredRecipes.length === 0) {
    return <p>No recipes found. Try another search.</p>;
  }

  return (
    <div>
      {filteredRecipes.map((recipe, index) => (
        <div key={index} style={{ border: '1px solid #ddd', padding: '12px', marginBottom: '10px', borderRadius: '6px' }}>
          <h3>{recipe.title}</h3>
          <p><strong>Ingredients:</strong> {recipe.ingredients?.join(', ')}</p>
          <p><strong>Preparation Time:</strong> {recipe.prepTime} mins</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
