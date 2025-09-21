import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";

export const fetchUserData = async (username, location, minRepos) => {
  try {
    // Build query string for advanced search
    let query = username ? `${username} in:login` : "";

    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;

    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data.items; // GitHub search returns { items: [...] }
  } catch (error) {
    throw error;
  }
};
