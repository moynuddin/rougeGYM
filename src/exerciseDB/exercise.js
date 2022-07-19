import axios from "axios";

export const BASE_URL = "https://exercisedb.p.rapidapi.com";
export const youtube_URL = "https://youtube138.p.rapidapi.com/search";
export const getExercise = (url) => {
  return axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "b4b8bc2199msha97402fed16428dp19825ajsn1296671cf107",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  });
};

export const youtubeAPI = (url) => {
  // params: {q: '3/4 sit-up', hl: 'en', gl: 'US'},
  return axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "b4b8bc2199msha97402fed16428dp19825ajsn1296671cf107",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  });
};
