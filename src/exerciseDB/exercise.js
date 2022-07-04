import axios from "axios";

export const BASE_URL = "https://exercisedb.p.rapidapi.com";

export const getExercise = () => {
  return axios.get(`${BASE_URL}/exercises`, {
    headers: {
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    },
  });
};