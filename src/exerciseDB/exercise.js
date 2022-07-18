import axios from "axios";

export const BASE_URL = "https://exercisedb.p.rapidapi.com";

export const getExercise = () => {
  return axios.get(`${BASE_URL}/exercises`, {
    headers: {
      "X-RapidAPI-Key": "b4b8bc2199msha97402fed16428dp19825ajsn1296671cf107",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  });
};
