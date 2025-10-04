import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    const ingredientList = ingredients
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required (comma-separated).";
    } else if (ingredientList.length < 2) {
      newErrors.ingredients =
        "Please include at least two ingredients (comma-separated).";
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    // build recipe object (mock submission)
    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      ingredients: ingredients
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean),
      instructions: steps
        .split(".")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    
    console.log("New recipe added (mock):", newRecipe);

    // reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
    setSuccess("Recipe added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center py-8 px-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
          Add a New Recipe
        </h2>

        {success && (
          <p className="text-center text-green-600 mb-4" role="status">
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Recipe Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full border rounded-md p-2 focus:ring-2 focus:outline-none ${
                errors.title ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
              }`}
              placeholder="e.g., Chocolate Cake"
              aria-invalid={!!errors.title}
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients (textarea) */}
          <div>
            <label
              htmlFor="ingredients"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Ingredients (comma-separated)
            </label>
            <textarea
              id="ingredients"
              rows="3"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className={`w-full border rounded-md p-2 focus:ring-2 focus:outline-none resize-none ${
                errors.ingredients ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
              }`}
              placeholder="e.g., Flour, Sugar, Eggs, Butter"
              aria-invalid={!!errors.ingredients}
            />
            {errors.ingredients && (
              <p className="text-red-600 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Steps */}
          <div>
            <label
              htmlFor="steps"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Preparation Steps
            </label>
            <textarea
              id="steps"
              rows="5"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className={`w-full border rounded-md p-2 focus:ring-2 focus:outline-none resize-y ${
                errors.steps ? "border-red-500 focus:ring-red-200" : "border-gray-300 focus:ring-blue-200"
              }`}
              placeholder="e.g., Mix the ingredients. Bake for 30 minutes."
              aria-invalid={!!errors.steps}
            />
            {errors.steps && (
              <p className="text-red-600 text-sm mt-1">{errors.steps}</p>
            )}
          </div>

          {/* Buttons (responsive layout) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Submit Recipe
            </button>
            <button
              type="button"
              onClick={() => {
                setTitle("");
                setIngredients("");
                setSteps("");
                setErrors({});
                setSuccess("");
              }}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
