import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [
    { title: "Pasta", ingredients: ["noodles", "sauce"], time: "15 min" },
    { title: "Salad", ingredients: ["lettuce", "tomato"], time: "10 min" },
  ],
  searchTerm: "",
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;
