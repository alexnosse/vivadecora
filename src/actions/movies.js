import { RSAA } from "redux-api-middleware";

export const GET_MOVIES_REQUEST = "GET_MOVIES_REQUEST";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";
export const LIKE_MOVIE = "LIKE_MOVIE";
export const DISLIKE_MOVIE = "DISLIKE_MOVIE";

export const GET_GENRES_REQUEST = "GET_GENRES_REQUEST";
export const GET_GENRES_SUCCESS = "GET_GENRES_SUCCESS";
export const GET_GENRES_FAILURE = "GET_GENRES_FAILURE";

export const getMovies = url => dispatch => {
  return dispatch({
    [RSAA]: {
      endpoint: url,
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTg1MjJiYTUxMWJhNTM3MGE5NzM0MTA4ZjczZDdkOCIsInN1YiI6IjVkZGZhZTNlNGY1ODAxMDAxMmZjN2RlOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-9ajNqmnwgys8jYg0J8xiIQYngZltnNGyi8EpLvu6RQ",
      },
      types: ["GET_MOVIES_REQUEST", "GET_MOVIES_SUCCESS", "GET_MOVIES_FAILURE"],
    },
  });
};

export const likeMovie = id => dispatch => {
  return dispatch({
    type: LIKE_MOVIE,
    id,
  });
};

export const dislikeMovie = id => dispatch => {
  return dispatch({
    type: DISLIKE_MOVIE,
    id,
  });
};

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
