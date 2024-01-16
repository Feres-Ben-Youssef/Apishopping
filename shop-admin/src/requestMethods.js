import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const getPersistedToken = () => {
    try {
      const persistedRoot = localStorage.getItem("persist:root");
  
      console.log("Persisted Root:", persistedRoot);
  
      if (persistedRoot) {
        const parsedRoot = JSON.parse(persistedRoot);
  
        console.log("Parsed Root:", parsedRoot);
  
        // Parse the 'user' property
        const userString = parsedRoot.user;
        const parsedUser = JSON.parse(userString);
  
        console.log("Parsed User:", parsedUser);
  
        if (parsedUser.currentUser && parsedUser.currentUser.accessToken) {
          return parsedUser.currentUser.accessToken;
        }
      }
  
      throw new Error("Access token not found in local storage.");
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
    headers: { token: `Bearer ${TOKEN}` },
  });