import axios from "axios";

export const BASE_URL = "https://exercisedb.p.rapidapi.com";

export const getExercise = () => {
  return axios.get(`${BASE_URL}/exercises`, {
    headers: {
      "X-RapidAPI-Key": "e70689fba4msh109c4d4b4dd41a1p1a5a7fjsn02fb857922e0",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  });
};

// export const getBodyParts = () => {
//   return axios.get(`${BASE_URL}/exercises/bodyPartList`, {
//     headers: {
//       "X-RapidAPI-Key": "b4b8bc2199msha97402fed16428dp19825ajsn1296671cf107",
//       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//     },
//   });
// };
