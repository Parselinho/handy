import axios from "axios";

const developmentURL = "http://localhost:3000";

export const customFetch = axios.create({
  baseURL: developmentURL,
});
