import axios from "axios";

const API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: API_KEY ? `token ${API_KEY}` : undefined,
  },
});

export const getUser = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
