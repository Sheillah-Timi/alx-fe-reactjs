// src/components/SearchBar.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search by name, ingredients, or prep time..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: '8px',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '16px'
      }}
    />
  );
};

export default SearchBar;
