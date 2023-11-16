// apiConfig.js

const API_BASE_URL = "https://localhost:7146/api";

const HEADERS = {
  "Content-Type": "application/json",
  "Authorization": localStorage.getItem("token"),
};

export const API_URLS = {
  LOGIN: `${API_BASE_URL}/Login/Login`,
  GET_USER: `${API_BASE_URL}/Login/GetUsers`,
};

export const API_HEADERS = HEADERS;