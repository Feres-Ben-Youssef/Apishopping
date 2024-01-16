import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const getPersistedToken = () => {
  try {
    const persistedRoot = JSON.parse(localStorage.getItem("persist:root"));
    const currentUser = JSON.parse(persistedRoot.currentUser);
    return currentUser.accessToken;
  } catch (error) {
    console.error("Error retrieving access token from local storage:", error);
    return null;
  }
};

const TOKEN = getPersistedToken();

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});
