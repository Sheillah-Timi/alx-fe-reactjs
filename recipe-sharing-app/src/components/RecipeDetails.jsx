// src/components/RecipeDetails.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useRecipeStore((s) => s.recipes.find((r) => r.id === id));
  const [editing, setEditing] = useState(false);

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found</h2>
        <Link to="/">← Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <div style={{ marginTop: "12px" }}>
        <button onClick={() => setEditing((e) => !e)}>
          {editing ? "Cancel edit" : "Edit"}
        </button>

        <DeleteRecipeButton id={recipe.id} />
      </div>

      {editing && <EditRecipeForm recipe={recipe} />}

      <div style={{ marginTop: "12px" }}>
        <Link to="/">← Back to list</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
