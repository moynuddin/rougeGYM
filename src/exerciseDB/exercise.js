import axios from "axios";

export const BASE_URL = "https://exercisedb.p.rapidapi.com";

export const getExercise = () => {
  return axios.get(`${BASE_URL}/exercises`, {
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_EXERCISE_API_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_HOST,
    },
  });
};
