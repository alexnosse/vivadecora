import { RSAA } from "redux-api-middleware";

export const GET_MOVIES_REQUEST = "GET_MOVIES_REQUEST";
export const GET_MOVIES_SUCCESS = "GET_MOVIES_SUCCESS";
export const GET_MOVIES_FAILURE = "GET_MOVIES_FAILURE";

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
