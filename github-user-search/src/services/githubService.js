// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

export const fetchUserData = async (username) => {
  if (!username) throw new Error("No username provided");
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (err) {
    throw err;
  }
};

// Advanced search with multiple filters
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query.trim())}`);
    return response.data.items; // array of matching users
  } catch (err) {
    throw err;
  }
};
