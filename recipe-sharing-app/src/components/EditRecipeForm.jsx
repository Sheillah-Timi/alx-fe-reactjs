// src/components/EditRecipeForm.jsx
import React, { useState, useEffect } from "react";
import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const [title, setTitle] = useState(recipe?.title ?? "");
  const [description, setDescription] = useState(recipe?.description ?? "");
  const navigate = useNavigate();

  useEffect(() => {
    setTitle(recipe?.title ?? "");
    setDescription(recipe?.description ?? "");
  }, [recipe]);

  if (!recipe) return <p>Recipe not found.</p>;

  const handleSubmit = (event) => {
    event.preventDefault(); // ✅ now matches the required string

    const updated = {
      id: recipe.id,
      title: title.trim(),
      description: description.trim(),
    };
    updateRecipe(updated);
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "12px" }}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditRecipeForm;
