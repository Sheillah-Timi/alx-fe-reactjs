import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((item) => item.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-600">Loading recipe...</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Link
        to="/"
        className="inline-block mb-4 text-blue-600 hover:underline text-sm"
      >
        ← Back to Home
      </Link>

      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            {recipe.title}
          </h2>

          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            Ingredients:
          </h3>
          <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-1">
            {recipe.ingredients
              ? recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))
              : ["Ingredient list not available"]}
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-gray-700">
            Instructions:
          </h3>
          <ol className="list-decimal pl-5 text-gray-600 space-y-1">
            {recipe.instructions
              ? recipe.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))
              : ["Instructions not available"]}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
