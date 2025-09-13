// src/components/recipeStore.js
import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  // Replace the whole list
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  // Add a recipe object: { id, title, description }
  addRecipe: (recipe) =>
    set((state) => ({ recipes: [...state.recipes, recipe] })),
  // Update a recipe by id: recipe should be { id, title, description }
  updateRecipe: (updated) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === updated.id ? updated : r)),
    })),
  // Delete by id
  deleteRecipe: (id) =>
    set((state) => ({ recipes: state.recipes.filter((r) => r.id !== id) })),
}));

export default useRecipeStore;
