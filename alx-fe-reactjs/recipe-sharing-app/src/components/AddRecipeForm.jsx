// src/components/AddRecipeForm.jsx
import React, { useState } from "react";
import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((s) => s.addRecipe);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const t = title.trim();
    const d = description.trim();
    if (!t || !d) return;
    const newRecipe = { id: Date.now().toString(), title: t, description: d };
    addRecipe(newRecipe);
    setTitle("");
    setDescription("");
    // optionally navigate to the newly created recipe details
    navigate(`/recipe/${newRecipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Recipe</h2>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
