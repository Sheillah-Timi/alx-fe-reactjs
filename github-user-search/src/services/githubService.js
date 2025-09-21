// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com/users/";

export const fetchUserData = async (username) => {
  if (!username) throw new Error("No username provided");
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (err) {
    // rethrow so caller can handle it
    throw err;
  }
};
