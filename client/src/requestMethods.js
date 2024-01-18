import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

const getPersistedToken = () => {
  try {
    const persistedRoot = localStorage.getItem("persist:root");
    console.log("persistedRoot:", persistedRoot);

    const currentUser = persistedRoot ? JSON.parse(persistedRoot).currentUser : null;
    console.log("currentUser:", currentUser);

    return currentUser ? currentUser.accessToken : null;
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
