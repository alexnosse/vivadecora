import { RSAA } from "redux-api-middleware";

export const GET_GENRES_REQUEST = "GET_GENRES_REQUEST";
export const GET_GENRES_SUCCESS = "GET_GENRES_SUCCESS";
export const GET_GENRES_FAILURE = "GET_GENRES_FAILURE";

export const getGenres = () => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint:
        "https://api.themoviedb.org/3/genre/movie/list?api_key=8e8522ba511ba5370a9734108f73d7d8&language=en-US",
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      types: ["GET_GENRES_REQUEST", "GET_GENRES_SUCCESS", "GET_GENRES_FAILURE"],
    },
  });
};
