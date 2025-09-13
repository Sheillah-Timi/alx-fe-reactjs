// src/components/DeleteRecipeButton.jsx
import React from "react";
import useRecipeStore from "./recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (confirm("Delete this recipe?")) {
      deleteRecipe(id);
      // after delete, send user back to home
      navigate("/");
    }
  };

  return (
    <button onClick={handleDelete} style={{ marginLeft: "8px" }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
